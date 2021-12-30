/* eslint-disable global-require */
// vite.config.json
import { defineConfig, loadEnv } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import macrosPlugin from 'vite-plugin-babel-macros';

const { resolve } = require('path');

export const isDev = process.env.NODE_ENV !== 'production';

const r = (path) => resolve(__dirname, path);
const generateOutputDir = (vendor) => {
  if(vendor === 'chromium') {
    return 'extension/chromium/dist';
  }

  if(vendor === 'mozilla') {
    return 'extension/mozilla/dist';
  }
};

// https://vitejs.dev/config/
export default defineConfig(() => {
  const vendor = process.env.VENDOR;

  const outputDir = generateOutputDir(vendor);

  return {
    base: '/dist/',
    root: r('src'),
    build: {
      outDir: r(outputDir),
      emptyOutDir: false,
      sourcemap: isDev ? 'inline' : false,
      // https://developer.chrome.com/docs/webstore/program_policies/#:~:text=Code%20Readability%20Requirements
      terserOptions: {
        mangle: false,
      },
      rollupOptions: {
        input: {
          popup: r('src/popup/index.html'),
        },
        output: {
          entryFileNames: 'assets/[name].js',
          chunkFileNames: 'assets/[name].js',
          assetFileNames: 'assets/[name].[ext]',
        },
      },
    },
    plugins: [reactRefresh(), macrosPlugin()],
    define: {
      'process.platform': JSON.stringify('win32'),
      'process.env': {
      },
    },
  };
});
