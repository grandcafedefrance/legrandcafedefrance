const fs = require('fs');
const path = require('path');

const tsFilePath = path.join(__dirname, '..', 'data', 'restaurants.ts');
const publicDir = path.join(__dirname, '..', 'public');

const content = fs.readFileSync(tsFilePath, 'utf8');
const imageRegex = /["'](\/[a-zA-Z0-9_/-]+?\.(?:jpg|jpeg|png|webp|mp4))["']/gi;

let missing = 0;
let match;
while ((match = imageRegex.exec(content)) !== null) {
  const fileUrl = match[1];
  const absolutePath = path.join(publicDir, decodeURIComponent(fileUrl));
  if (!fs.existsSync(absolutePath)) {
    console.log(`Missing file referenced: ${fileUrl}`);
    missing++;
  }
}
console.log(`\nFound ${missing} missing files.`);
