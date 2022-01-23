import React, { useState } from 'react';
import {
  PopupWrapper, Tab, Tabs, TabList, TabPanel, ThemeList, ThemeButton, SearchField,
} from './Popup.style';
import useTheme from '../hooks/useTheme';
import { formatName } from '../util';
import useFilterTheme from '../hooks/useFilterTheme';
import Custom from './Custom';
import ThemeName from './ThemeName';

const Popup = () => {
  const [activeTab, setActiveTab] = useState(0);
  const props = useTheme();
  const {
    theme,
    name,
    useCustom,
    customColors,
    changeTheme,
  } = props;
  const { list, filterTheme, resetThemes } = useFilterTheme();

  const popupColor = (prop) => {
    return useCustom ? customColors[prop] : theme[prop];
  };

  const handleTabChange = (index) => {
    setActiveTab(index);
    resetThemes();
  };

  if(!theme) return <PopupWrapper />;

  return (
    <PopupWrapper>
      <Tabs
        onSelect={handleTabChange}
        defaultIndex={activeTab}
      >
        {/* Tab Navigation */}
        <TabList
          bg={() => popupColor('bgColor')}
          color={() => popupColor('textColor')}
          main={() => popupColor('mainColor')}
        >
          <Tab>Presets</Tab>
          <Tab>Custom</Tab>
        </TabList>
        <ThemeName
          popupColor={popupColor}
          useCustom={useCustom}
          name={name}
          theme={theme}
        />
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
          <Custom {...props} />
        </TabPanel>
      </Tabs>
    </PopupWrapper>
  );
};

export default Popup;
