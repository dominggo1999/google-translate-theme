/* eslint-disable import/extensions */
import { themes } from './themes.js';

const DEFAULT_THEME = 'cyberspace';
const DEFAULT_CUSTOM_THEME = {
  name: 'custom',
  bgColor: '#333a45',
  mainColor: '#f44c7f',
  subColor: '#939eae',
  textColor: '#e9ecf0',
};

const getValueInStore = (key) => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get([key], (result) => {
      resolve(result);
    });
  });
};

const initTheme = async () => {
  const { activeTheme } = await getValueInStore('activeTheme');
  const { isCustomTheme } = await getValueInStore('isCustomTheme');
  const { customTheme } = await getValueInStore('customTheme');

  // If first launch set theme to default theme
  if(!activeTheme) {
    const defaultTheme = DEFAULT_THEME;
    await chrome.storage.local.set(
      {
        activeTheme: defaultTheme,
      }, () => {
        console.log('cyberspace is choosed as default theme');
      },
    );
  }

  // If first launch set isCustomTheme to false
  if(!isCustomTheme) {
    await chrome.storage.local.set(
      {
        isCustomTheme: false,
      }, () => {
        console.log('Custom value is set to false');
      },
    );
  }

  if(!customTheme) {
    await chrome.storage.local.set(
      {
        customTheme: DEFAULT_CUSTOM_THEME,
      }, () => {
        console.log('Custom value colors is set to default');
      },
    );
  }
};

initTheme();

// Listen for call from popup or option
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const {
    message, theme, useCustomTheme, newCustomValues,
  } = request;

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

  if(message === 'useCustomTheme') {
    chrome.storage.local.set({ isCustomTheme: true }, () => {
      console.log('custom theme is used');
    });
  }

  if(message === 'toggleCustomTheme') {
    chrome.storage.local.set({ isCustomTheme: useCustomTheme }, () => {
      console.log('toggle custom theme');
    });
  }

  if(message === 'saveCustomColors') {
    const saveCustomColors = async () => {
      const { customTheme } = await getValueInStore('customTheme');
      const { isCustomTheme } = await getValueInStore('isCustomTheme');

      if(!isCustomTheme) return;

      const { propertyName, value } = request;
      const newThemeColors = {
        ...customTheme,
        [propertyName]: value,
      };

      chrome.storage.local.set({
        customTheme: newThemeColors,
      });
    };

    saveCustomColors();
  }

  if(message === 'loadPreset') {
    const changeCustomTheme = async () => {
      const { isCustomTheme } = await getValueInStore('isCustomTheme');

      if(!isCustomTheme) return;

      const themeIndex = themes.map((i) => i.name).indexOf(theme);

      const newCustomValues = themes[themeIndex];

      chrome.storage.local.set({
        customTheme: newCustomValues,
      });
    };

    changeCustomTheme();
  }
});
