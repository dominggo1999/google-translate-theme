const fs = require('fs');
const { resolve } = require('path');

const { supportedDomain } = require('./supportedDomain.json');

const vendor = process.env.VENDOR;
const chromeManifest = require('./manifest/chrome-manifest.json');
const mozillaManifest = require('./manifest/mozilla-manifest.json');

const r = (path) => resolve(__dirname, path);

let manifest;
let targetDir;
if(vendor === 'chromium') {
  manifest = chromeManifest;
  targetDir = r('../extension/chromium/manifest.json');
}

if(vendor === 'mozilla') {
  manifest = mozillaManifest;
  targetDir = r('../extension/mozilla/manifest.json');
}

const writeManifest = async () => {
  manifest.content_scripts[0].matches = supportedDomain;
  const json = JSON.stringify(manifest);

  fs.writeFile(targetDir, json, () => {
    console.log('Manifest Created');
  });
};

writeManifest();
