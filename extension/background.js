/* eslint-disable import/extensions */
import { themes } from './themes.js';

// Initial Load, get activeTheme
const getActiveTheme = () => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get(['activeTheme'], (result) => {
      resolve(result);
    });
  });
};

const checkActiveTheme = async () => {
  const { activeTheme } = await getActiveTheme();
  // If first launch choose theme
  if(!activeTheme) {
    const defaultTheme = 'cyberspace';
    await chrome.storage.local.set(
      {
        activeTheme: defaultTheme,
      }, () => {
        console.log('Value is set');
      },
    );
  }
};

checkActiveTheme();

// Listen for call from popup or option
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const { message, theme } = request;

  if(message === 'getAllTheme') {
    sendResponse({
      themes,
    });
  }

  if(message === 'saveTheme') {
    chrome.storage.local.set({ activeTheme: theme }, () => {
      console.log('theme is updated');
    });
  }
});
