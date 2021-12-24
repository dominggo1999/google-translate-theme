const fs = require('fs');
const { resolve } = require('path');

fs.copyFile(resolve(__dirname, './themes.js'), resolve(__dirname, '../extension/themes.js'), (err) => {
  if (err) throw err;
  console.log('copied');
});
