const fs = require('fs');
const { resolve } = require('path');

const chromeManifest = require('./manifest/chrome-manifest.json');
const mozillaManifest = require('./manifest/mozilla-manifest.json');

const writeManifest = async () => {
  const json = JSON.stringify(chromeManifest);

  fs.writeFile(resolve(__dirname, '../extension/manifest.json'), json, () => {
    console.log('Manifest Created');
  });
};

writeManifest();
