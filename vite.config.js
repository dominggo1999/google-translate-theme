// vite.config.json
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import macrosPlugin from 'vite-plugin-babel-macros';

const { resolve } = require('path');

const r = (path) => resolve(__dirname, path);
export const isDev = process.env.NODE_ENV !== 'production';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/dist/',
  root: r('src'),
  build: {
    outDir: r('extension/dist'),
    emptyOutDir: false,
    sourcemap: isDev ? 'inline' : false,
    // https://developer.chrome.com/docs/webstore/program_policies/#:~:text=Code%20Readability%20Requirements
    terserOptions: {
      mangle: false,
    },
    rollupOptions: {
      input: {
        options: r('src/options/index.html'),
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
});
