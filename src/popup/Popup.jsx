import React, { useState, useEffect } from 'react';
import {
  PopupWrapper, Tab, Tabs, TabList, TabPanel, ThemeList, ThemeButton, SearchField,
} from './Popup.style';
import { themes } from '../themes';

const isExtension = chrome.storage;

const formatName = (name) => {
  const str = name.split('_').join(' ');

  return str.charAt(0).toUpperCase() + str.slice(1);
};

const Popup = () => {
  const [theme, setTheme] = useState();
  const [list, setList] = useState(themes);
  const [activeTab, setActiveTab] = useState(0);

  // Initial Load, get activeTheme
  const getActiveTheme = () => {
    return new Promise((resolve, reject) => {
      chrome.storage.local.get(['activeTheme'], (result) => {
        resolve(result);
      });
    });
  };

  const changeTheme = async (themeName) => {
    // Send Message To ContentScript to manipulate page
    await chrome.tabs?.query({}, (tabs) => {
      tabs.forEach((tab) => {
        chrome.tabs.sendMessage(tab.id, {
          theme: themeName,
          message: 'changeTheme',
        });
      });
    });

    // Send message to bg.js to save data
    await chrome.runtime?.sendMessage({
      message: 'saveTheme',
      theme: themeName,
    });

    // Change Theme Local State
    const themeIndex = themes.map((i) => i.name).indexOf(themeName);

    const { name, ...colors } = themes[themeIndex];

    setTheme(colors);
  };

  useEffect(() => {
    const getTheme = async () => {
      if(!isExtension) {
        // Just For testing
        const devTheme = {
          name: '8008',
          bgColor: '#333a45',
          mainColor: '#f44c7f',
          subColor: '#939eae',
          textColor: '#e9ecf0',
        };

        setTheme(devTheme);
      }else{
        const { activeTheme } = await getActiveTheme();
        // Change Theme Local State
        const themeIndex = themes.map((i) => i.name).indexOf(activeTheme);

        const { name, ...colors } = themes[themeIndex];
        setTheme(colors);
      }
    };

    getTheme();
  }, []);

  const filterTheme = (e) => {
    const s = e.target.value;

    const filtered = themes.filter((i) => {
      return i.name.indexOf(s) === 0;
    });

    setList(filtered);
  };

  if(!theme) return null;

  return (
    <PopupWrapper>
      <Tabs
        onSelect={(index) => setActiveTab(index)}
        defaultIndex={activeTab}
      >
        {/* Tab Navigation */}
        <TabList
          bg={theme.bgColor}
          color={theme.textColor}
          main={theme.mainColor}
        >
          <Tab>Settings</Tab>
          <Tab>Custom Settings</Tab>
        </TabList>

        {
          activeTab === 0 && (
            <SearchField>
              <input
                onChange={filterTheme}
                type="text"
                placeholder="Search Theme"
              />
            </SearchField>
          )
        }

        {/* Tab Item */}
        <TabPanel>
          <ThemeList>
            {list?.length > 0 && list.map((i) => {
              return (
                <ThemeButton
                  style={{
                    backgroundColor: i.bgColor,
                    color: i.mainColor,
                  }}
                  key={`${i.name}theme`}
                  onClick={() => changeTheme(i.name)}
                >
                  {formatName(i.name)}
                </ThemeButton>
              );
            })}
            {list && !list.length && (
              <p>No Result</p>
            )}
          </ThemeList>
        </TabPanel>
        <TabPanel>
          custom settings
        </TabPanel>
      </Tabs>
    </PopupWrapper>
  );
};

export default Popup;
