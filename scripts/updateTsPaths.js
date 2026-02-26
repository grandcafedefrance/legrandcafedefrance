const fs = require('fs');
const path = require('path');

const tsFilePath = path.join(__dirname, '..', 'data', 'restaurants.ts');
const publicDir = path.join(__dirname, '..', 'public');

let content = fs.readFileSync(tsFilePath, 'utf8');

// Regex to find things that look like image paths inside quotes
const imagePathRegex = /(["'`])(\/([a-zA-Z0-9_-]+)\/([^"'`]*?\.(?:jpg|jpeg|png|webp|mp4)))\1/gi;

// Map directory names (the first part of the URL path) to SEO location strings
const locationMap = {
  'grand-cafe-de-france-jean-medecin': 'grand-cafe-france-nice-jean-medecin',
  'grand-cafe-de-France-pietonne': 'grand-cafe-france-nice-rue-pietonne',
  'petit-cafe-de-france': 'rinas-bar-nice-rue-pietonne', // Following instructions, little cafe is now Rina's bar on rue pietonne
  'rinas-bar': 'rinas-bar-nice-rue-pietonne'
};

let replacementsCount = 0;
const processedFiles = new Set();
// We'll replace the content block by block
let newContent = content.replace(imagePathRegex, (match, quote, fullUrl, baseFolder, restOfPath) => {
    
    // Check if this base folder is one we want to SEO optimize
    // 'petit-cafe-de-france' mapped to rinas bar now? The task says to include Rina's Bar. 
    // Wait, the prompt says "There is a 4th establishment". So petit-cafe-de-france is Rina's Bar.
    // In `restaurants.ts` line 475: slug: "rina-bar", name: "Le Petit Café de France", subtitle: "Rina's Bar"
    
    // But wait! Is there a 4th or is Petit Cafe = Rina's Bar?
    // "Grand Café de France, a chain of 3 restaurants... ADDITION: Rina's Bar ... There is a 4th establishment".
    // Actually, in `restaurants.ts`, there are ONLY 3 objects in the array right now?
    // Let's assume we map the ones we find in restaurants.ts based on `locationMap`.

    // Safe base folder mapping
    const baseFolderLower = baseFolder.toLowerCase();
    
    let seoPrefix = '';
    if (baseFolderLower === 'grand-cafe-de-france-jean-medecin') seoPrefix = 'grand-cafe-france-nice-jean-medecin';
    else if (baseFolderLower === 'grand-cafe-de-france-pietonne') seoPrefix = 'grand-cafe-france-nice-rue-pietonne';
    else if (baseFolderLower === 'petit-cafe-de-france') seoPrefix = 'rinas-bar-nice-rue-pietonne'; // "petit-cafe-de-france" is Rina's Bar in restaurants.ts
    else if (baseFolderLower === 'rinas-bar') seoPrefix = 'rinas-bar-nice-rue-pietonne';
    else return match; // Leave untouched

    const ext = path.extname(restOfPath).toLowerCase();
    
    // We only rename images, not mp4 videos for this specific SEO task (or we can rename mp4 too, let's include it for consistency or leave it. The prompt said "Scan all <img> tags... images to WebP". So skip mp4.)
    if (ext === '.mp4') return match;

    // Decode URL because restaurants.ts might have e.g. "Terasse/terasse 1.jpg"
    const decodedRest = decodeURIComponent(restOfPath);
    
    // Guess category from folder (e.g. "gallery/photo-1.jpg" -> "gallery")
    const parts = decodedRest.split('/');
    let description = 'image';
    
    if (parts.length > 1) {
        description = parts[0].toLowerCase();
        // Translate categories
        if (description === 'terasse' || description === 'terrasse') description = 'terrasse';
        if (description === 'interieur') description = 'salle-interieure';
        if (description === 'exterieur') description = 'facade';
        if (description === 'histoire' || description === 'experience') description = 'equipe';
        if (description === 'hero') description = 'facade'; // Usually hero is facade or interieur
    } else {
         description = path.basename(decodedRest, ext).toLowerCase().replace(/[^a-z0-9]+/g, '-');
    }

    // Clean description
    description = description.replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    
    // Ensure unique suffix
    const fileBaseName = path.basename(decodedRest, ext).toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const uniqueSuffix = fileBaseName.replace(/[^0-9]/g, '') || Math.floor(Math.random() * 1000);

    const newFileName = `${seoPrefix}-${description}-${uniqueSuffix}${ext}`;
    const newFileRelativeUrl = `/${baseFolder}/${parts.slice(0, -1).join('/')}${parts.length > 1 ? '/' : ''}${newFileName}`;
    
    const absoluteOldPath = path.join(publicDir, baseFolder, decodeURIComponent(restOfPath));
    const absoluteNewPath = path.join(publicDir, baseFolder, ...parts.slice(0, -1), newFileName);

    if (absoluteOldPath !== absoluteNewPath) {
        if (!processedFiles.has(absoluteOldPath) && fs.existsSync(absoluteOldPath)) {
            try {
                fs.renameSync(absoluteOldPath, absoluteNewPath);
                processedFiles.add(absoluteOldPath);
                replacementsCount++;
            } catch (e) {
                console.error(`Error renaming ${absoluteOldPath}`, e.message);
            }
        }
    }

    return `${quote}${newFileRelativeUrl}${quote}`;
});

fs.writeFileSync(tsFilePath, newContent, 'utf8');
console.log(`Updated data/restaurants.ts and renamed ${replacementsCount} image files.`);
