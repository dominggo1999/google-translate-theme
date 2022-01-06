/* eslint-disable no-undef */
/* eslint-disable array-callback-return */

const extensionStorage = chrome ? chrome.storage.local : browser.storage.local;

const runtime = chrome ? chrome.runtime : browser.runtime;

const getValueInStore = (key) => {
  return new Promise((resolve, reject) => {
    extensionStorage.get([key], (result) => {
      resolve(result);
    });
  });
};

const getAllThemes = () => {
  return new Promise((resolve, reject) => {
    runtime.sendMessage({
      message: 'getAllTheme',
    }, (res) => {
      resolve(res);
    });
  });
};

const property = {
  bgColor: '--bg-color',
  mainColor: '--main-color',
  subColor: '--sub-color',
  textColor: '--text-color',
};

const root = document.querySelector(':root');

// Sprite color is the icon to display input type (right beside total char count)
const changeSpriteColor = (color) => {
  const formattedHex = color.split('#')[1];
  const filter = generateFilter(formattedHex);
  root.style.setProperty('--color-filter', filter);
};

const changeCSSVariables = (colors) => {
  Object.keys(colors).map((name) => {
    root.style.setProperty(property[name], colors[name]);
  });
  changeSpriteColor(colors.mainColor);
};

const applyTheme = async () => {
  const { activeTheme } = await getValueInStore('activeTheme');
  const { isCustomTheme } = await getValueInStore('isCustomTheme');
  const { customTheme } = await getValueInStore('customTheme');

  if(!isCustomTheme) {
    getAllThemes()
      .then((res) => {
        const { themes } = res;
        const themeIndex = themes.map((i) => i.name).indexOf(activeTheme);

        const { name, ...colors } = themes[themeIndex];

        changeCSSVariables(colors);
      });
  }else {
    // Change display theme to custom color if user want to use custom theme
    const { name, ...colors } = customTheme;

    changeCSSVariables(colors);
  }
};

applyTheme();

// Listen for call from popup or option
runtime.onMessage.addListener((request) => {
  const { theme: themeName, message, useCustomTheme } = request;

  if(message === 'changeTheme') {
    getAllThemes()
      .then((res) => {
        const { themes } = res;
        const themeIndex = themes.map((i) => i.name).indexOf(themeName);

        const { name, ...colors } = themes[themeIndex];

        changeCSSVariables(colors);
      });
  }

  if(message === 'toggleCustomTheme') {
    getValueInStore('customTheme')
      .then((res) => {
        // Change display theme to custom color if user want to use custom theme
        if(useCustomTheme) {
          const { customTheme } = res;
          const { name, ...colors } = customTheme;

          changeCSSVariables(colors);
        }
      });
  }

  if(message === 'changeCustomColor') {
    getValueInStore('customTheme')
      .then((res) => {
        // Change display theme to custom color if user want to use custom theme
        const { customTheme } = res;
        const { name, ...colors } = customTheme;
        const { propertyName, value } = request;

        changeCSSVariables({
          ...colors,
          [propertyName]: value,
        });
      });
  }
});
