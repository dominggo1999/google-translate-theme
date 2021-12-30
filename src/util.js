export const formatName = (name) => {
  const str = name.split('_').join(' ');

  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const isExtension = chrome.storage;

export const getValueInStore = (key) => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get([key], (result) => {
      resolve(result);
    });
  });
};

export const messageToBackground = async (message) => {
  await chrome.runtime?.sendMessage(message);
};

export const messageToContentScript = async (message) => {
  await chrome.tabs?.query({}, (tabs) => {
    tabs.forEach((tab) => {
      chrome.tabs.sendMessage(tab.id, message);
    });
  });
};
