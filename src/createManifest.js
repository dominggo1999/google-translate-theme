const fs = require('fs');
const { resolve } = require('path');

const manifest = {
  manifest_version: 3,
  name: 'Google Translate Theme',
  version: '1.0',
  description: 'Change And Customize Google Translate Color Theme',
  icons: {
    16: './assets/icon-512.png',
    48: './assets/icon-512.png',
    128: './assets/icon-512.png',
  },
  content_scripts: [
    {
      matches: ['https://translate.google.com/*'],
      js: ['content-scripts.js'],
      css: ['theme.css'],
      all_frames: true,
      run_at: 'document_start',
    },
  ],
  background: {
    service_worker: 'background.js',
    type: 'module',
  },
  options_page: './dist/options/index.html',
  action: {
    default_icon: './assets/icon-512.png',
    default_popup: './dist/popup/index.html',
  },
  host_permissions: [
    '*://*/*',
  ],
  permissions: [
    'tabs',
    'storage',
    'activeTab',
    'unlimitedStorage',
  ],
  web_accessible_resources: [{
    resources: ['themes.json'],
    matches: ['<all_urls>'],
  }],
};

const writeManifest = async () => {
  const json = JSON.stringify(manifest);

  fs.writeFileSync(resolve(__dirname, '../extension/manifest.json'), json);
};

writeManifest();
