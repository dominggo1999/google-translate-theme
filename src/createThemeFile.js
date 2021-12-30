const fs = require('fs');
const { resolve } = require('path');

const r = (path) => resolve(__dirname, path);
const vendor = process.env.VENDOR;

const srcDir = r('./themes.js');

let targetDir;
if(vendor === 'chromium') {
  targetDir = r('../extension/chromium/themes.js');
}

if(vendor === 'mozilla') {
  targetDir = r('../extension/mozilla/themes.js');
}

fs.copyFile(srcDir, targetDir, (err) => {
  if (err) throw err;
  console.log('Theme file copied to dist');
});
