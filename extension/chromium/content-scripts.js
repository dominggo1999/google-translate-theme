/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
/* eslint-disable array-callback-return */

(() => {
  const extensionStorage = chrome ? chrome.storage.local : browser.storage.local;

  const runtime = chrome ? chrome.runtime : browser.runtime;

  const getValueInStore = (key) => {
    return new Promise((resolve, reject) => {
      extensionStorage.get([key], (result) => {
        resolve(result);
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

  const createStylesheet = (colors) => {
    const formattedHex = (colors.mainColor).split('#')[1];

    const cssVariables = `
    :root{
      --bg-color: ${colors.bgColor};
      --main-color: ${colors.mainColor};
      --sub-color: ${colors.subColor};
      --text-color:${colors.textColor};
      --color-filter: ${generateFilter(formattedHex)};
  }`;

    const style = document.createElement('style');
    const head = document.querySelector('head');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(cssVariables));
    head.appendChild(style);
  };

  // Listen for call from popup or option
  runtime.onMessage.addListener((request) => {
    const { theme: themeName, message, useCustomTheme } = request;

    if(message === 'changeTheme') {
      const themeIndex = themes.map((i) => i.name).indexOf(themeName);

      const { name, ...colors } = themes[themeIndex];

      changeCSSVariables(colors);
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

  extensionStorage.get(['isCustomTheme', 'customTheme', 'activeTheme'], (results) => {
    const {
      isCustomTheme,
      customTheme,
      activeTheme,
    } = results;

    if(!isCustomTheme) {
      const themeIndex = themes.map((i) => i.name).indexOf(activeTheme);

      const { name, ...colors } = themes[themeIndex];

      createStylesheet(colors);
    }else {
    // Change display theme to custom color if user want to use custom theme
      const { name, ...colors } = customTheme;

      createStylesheet(colors);
    }
  });
})();
