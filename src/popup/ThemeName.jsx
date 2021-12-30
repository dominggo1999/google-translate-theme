import React from 'react';
import { CurrentThemeName } from './Popup.style';
import { formatName } from '../util';

const ThemeName = ({ theme, name, useCustom }) => {
  if(!theme) return <CurrentThemeName />;

  return (
    <CurrentThemeName
      bg={theme.bgColor}
      color={theme.mainColor}
    >
      {useCustom ? 'Custom' : formatName(name)}
    </CurrentThemeName>
  );
};

export default ThemeName;
