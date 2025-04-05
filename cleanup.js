// Cleanup script for Hypertek website
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Starting cleanup process...');

// Remove temporary build files
const tempFilesToRemove = [
  '.next',
  'out',
  'tsconfig.tsbuildinfo',
  '.DS_Store',
  'out_1.0.zip'
];

tempFilesToRemove.forEach(file => {
  const filePath = path.join(__dirname, file);
  try {
    if (fs.existsSync(filePath)) {
      if (fs.lstatSync(filePath).isDirectory()) {
        fs.rmdirSync(filePath, { recursive: true });
      } else {
        fs.unlinkSync(filePath);
      }
      console.log(`Removed: ${file}`);
    }
  } catch (err) {
    console.error(`Error removing ${file}: ${err.message}`);
  }
});

console.log('Cleanup complete!');
