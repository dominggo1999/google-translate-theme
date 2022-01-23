const fs = require('fs');
const { resolve } = require('path');

const r = (path) => resolve(__dirname, path);
const vendor = process.env.VENDOR;

const themeObject = r('./themes.js');
const themeStyleSheet = r('./theme.css');

let targetDirObject;
let targetDirStyleSheet;
if(vendor === 'chromium') {
  targetDirObject = r('../extension/chromium/themes.js');
  targetDirStyleSheet = r('../extension/chromium/theme.css');
}

if(vendor === 'mozilla') {
  targetDirObject = r('../extension/mozilla/themes.js');
  targetDirStyleSheet = r('../extension/mozilla/theme.css');
}

fs.copyFile(themeObject, targetDirObject, (err) => {
  if (err) throw err;
  console.log('Theme Object file copied');
});

fs.copyFile(themeStyleSheet, targetDirStyleSheet, (err) => {
  if (err) throw err;
  console.log('Theme StyleSheet file copied');
});
