const fs = require('fs');
const { resolve } = require('path');

const srcDir = resolve(__dirname, './themes.js');
const targetDir = resolve(__dirname, '../extension/themes.js');

fs.copyFile(srcDir, targetDir, (err) => {
  if (err) throw err;
  console.log('Theme file copied to dist');
});
