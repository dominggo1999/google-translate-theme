/* eslint-disable array-callback-return */

const getValueInStore = (key) => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get([key], (result) => {
      resolve(result);
    });
  });
};

const getAllThemes = () => {
  return new Promise((resolve, reject) => {
    chrome.runtime.sendMessage({
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

const changeCSSVariables = (colors) => {
  const r = document.querySelector(':root');

  Object.keys(colors).map((name) => {
    r.style.setProperty(property[name], colors[name]);
  });
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
chrome.runtime.onMessage.addListener((request) => {
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
