import React from 'react';
import { CurrentThemeName } from './Popup.style';
import { formatName } from '../util';

const ThemeName = ({
  theme, name, useCustom, popupColor,
}) => {
  if(!theme) return <CurrentThemeName />;

  return (
    <CurrentThemeName
      bg={() => popupColor('bgColor')}
      color={() => popupColor('mainColor')}
    >
      {useCustom ? 'Custom' : formatName(name)}
    </CurrentThemeName>
  );
};

export default ThemeName;
