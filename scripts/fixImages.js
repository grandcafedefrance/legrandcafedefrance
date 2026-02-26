const fs = require('fs');
const path = require('path');

const tsFilePath = path.join(__dirname, '..', 'data', 'restaurants.ts');
let content = fs.readFileSync(tsFilePath, 'utf8');

for (let i = 1; i <= 10; i++) {
    content = content.replace(
        `/petit-cafe-de-france/gallery/rinas-bar-nice-rue-pietonne-gallery-${i}.jpg`,
        `/petit-cafe-de-france/gallery/grand-cafe-france-nice-centre-nice-gallery-${i}.jpg`
    );
}

content = content.replace(
    "/grand-cafe-de-france-jean-medecin/hero/grand-cafe-france-nice-jean-medecin-facade-922.jpeg",
    "/grand-cafe-de-france-jean-medecin/hero/grand-cafe-france-nice-jean-medecin-hero-934.jpeg"
);

fs.writeFileSync(tsFilePath, content, 'utf8');
console.log('Fixed broken image references.');
