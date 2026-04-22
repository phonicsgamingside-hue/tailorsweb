const fs = require('fs');
const path = require('path');

if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

// Copy index.html
fs.copyFileSync('index.html', path.join('dist', 'index.html'));

// Copy public assets if any
if (fs.existsSync('public')) {
  const publicFiles = fs.readdirSync('public');
  publicFiles.forEach(file => {
    fs.copyFileSync(path.join('public', file), path.join('dist', file));
  });
}

console.log("Static HTML build complete!");
