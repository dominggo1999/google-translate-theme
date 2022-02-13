const fs = require('fs');
const { resolve } = require('path');
const minify = require('@node-minify/core');
const cleanCSS = require('@node-minify/clean-css');

const r = (path) => resolve(__dirname, path);
const vendor = process.env.VENDOR;

const themeObject = r('./themes.js');
const themeStyleSheet = r('./theme.css');
const menuStylesheet = r('./menu-iframe.css');

let targetDirObject;
let targetDirStyleSheet;
let targetMenuStylesheet;
if(vendor === 'chromium') {
  targetDirObject = r('../extension/chromium/themes.js');
  targetDirStyleSheet = r('../extension/chromium/theme.css');
  targetMenuStylesheet = r('../extension/chromium/menu-iframe.css');
}

if(vendor === 'mozilla') {
  targetDirObject = r('../extension/mozilla/themes.js');
  targetDirStyleSheet = r('../extension/mozilla/theme.css');
  targetMenuStylesheet = r('../extension/mozilla/menu-iframe.css');
}

fs.copyFile(themeObject, targetDirObject, (err) => {
  if (err) throw err;
  console.log('Theme Object file copied');
});

minify({
  compressor: cleanCSS,
  input: themeStyleSheet,
  output: targetDirStyleSheet,
  callback: (err, min) => {
    if (err) {
      console.log(err);
    }else{
      console.log('Theme StyleSheet succesfully created');
    }
  },
});

minify({
  compressor: cleanCSS,
  input: menuStylesheet,
  output: targetMenuStylesheet,
  callback: (err, min) => {
    if (err) {
      console.log(err);
    }else{
      console.log('Iframe StyleSheet succesfully created');
    }
  },
});
