const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');

// Map directory names to SEO location strings
const locationMap = {
  'grand-cafe-de-france-jean-medecin': 'grand-cafe-france-nice-jean-medecin',
  'grand-cafe-de-France-pietonne': 'grand-cafe-france-nice-rue-pietonne',
  'petit-cafe-de-france': 'grand-cafe-france-nice-centre-nice', // Or "rue-pietonne" depending on exact location map, assuming centre-nice for Petit Cafe to match the 3
  'rinas-bar': 'rinas-bar-nice-rue-pietonne'
};

const processedFiles = [];

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

// 1. Rename files
Object.keys(locationMap).forEach(baseFolder => {
  const fullPath = path.join(publicDir, baseFolder);
  if (fs.existsSync(fullPath)) {
    walkDir(fullPath, (filePath) => {
      const ext = path.extname(filePath).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
        // Extract the subfolder (e.g., "terrasse", "interieur") to use as description
        const relativePath = path.relative(fullPath, filePath);
        const parts = relativePath.split(path.sep);
        
        let description = 'image';
        if (parts.length > 1) {
            // Use the parent folder name as the description, sanitize it
            description = parts[parts.length - 2].toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '');
        } else {
             // If it's in the root of the restaurant folder, use filename
             description = path.basename(filePath, ext).toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '');
        }

        // Handle variations of terrasse/interieur etc.
        if (description === 'terrasse' || description === 'terasse') description = 'terrasse';
        if (description === 'interieur') description = 'salle-interieure';
        
        // Ensure unique names if multiple images in same category
        const uniqueSuffix = path.basename(filePath, ext).replace(/[^0-9]/g, '') || Math.floor(Math.random() * 1000);

        const newFileName = `${locationMap[baseFolder]}-${description}-${uniqueSuffix}${ext}`;
        const newFilePath = path.join(path.dirname(filePath), newFileName);
        
        if (filePath !== newFilePath) {
            try {
                fs.renameSync(filePath, newFilePath);
                processedFiles.push({
                    oldPath: path.posix.join('/', baseFolder, relativePath.split(path.sep).join('/')),
                    newPath: path.posix.join('/', baseFolder, ...parts.slice(0, -1), newFileName)
                });
                console.log(`Renamed: ${newFileName}`);
            } catch (e) {
                console.error(`Failed to rename ${filePath}`, e);
            }
        } else {
             processedFiles.push({
                    oldPath: path.posix.join('/', baseFolder, relativePath.split(path.sep).join('/')),
                    newPath: path.posix.join('/', baseFolder, relativePath.split(path.sep).join('/'))
                });
        }
      }
    });
  }
});

// 2. Output mapping for global search & replace
fs.writeFileSync(
    path.join(__dirname, 'image-mapping.json'), 
    JSON.stringify(processedFiles, null, 2)
);

console.log(`\nProcessed ${processedFiles.length} images. Check scripts/image-mapping.json for the translation map.`);
