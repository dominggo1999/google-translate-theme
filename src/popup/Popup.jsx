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
  const [activeTab, setActiveTab] = useState(1);
  const props = useTheme();
  const {
    theme,
    name,
    changeTheme,
    useCustom,
    customColors,
  } = props;

  const { list, filterTheme } = useFilterTheme();

  if(!theme) return <PopupWrapper />;

  console.log(useCustom);

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
          <Tab>Presets</Tab>
          <Tab>Custom</Tab>
        </TabList>
        <ThemeName
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
