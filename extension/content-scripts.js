/* eslint-disable array-callback-return */

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

// Initial Load, get activeTheme
const getActiveTheme = () => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get(['activeTheme'], (result) => {
      resolve(result);
    });
  });
};

const changeCSSVariables = (colors) => {
  const r = document.querySelector(':root');

  Object.keys(colors).map((name) => {
    r.style.setProperty(property[name], colors[name]);
  });
};

const applyDefaultTheme = async () => {
  const { activeTheme } = await getActiveTheme();
  console.log(activeTheme);

  getAllThemes()
    .then((res) => {
      const { themes } = res;
      const themeIndex = themes.map((i) => i.name).indexOf(activeTheme);

      const { name, ...colors } = themes[themeIndex];

      changeCSSVariables(colors);
    });
};

applyDefaultTheme();

// Listen for call from popup or option
chrome.runtime.onMessage.addListener((request) => {
  const { theme: themeName, message } = request;

  if(message === 'changeTheme') {
    getAllThemes()
      .then((res) => {
        const { themes } = res;
        const themeIndex = themes.map((i) => i.name).indexOf(themeName);

        const { name, ...colors } = themes[themeIndex];

        changeCSSVariables(colors);
      });
  }
});
