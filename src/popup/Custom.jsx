import React from 'react';
import {
  CustomtSettingsWrapper,
  UseCustomMessage,
  Label,
  SwitchButton,
  SwitchButtonTrack,
  LoadFromButton,
  Colors,

} from './Popup.style';

import ColorPicker from './ColorPicker';

const defaultProperties = [
  {
    name: 'bgColor',
    label: 'Background ',
    display: false,
  },
  {
    name: 'textColor',
    label: 'Text',
    display: false,
  },
  {
    name: 'mainColor',
    label: 'Main',
    display: false,
  },
  {
    name: 'subColor',
    label: 'Sub',
    display: false,
  },
];

const Custom = ({
  theme,
  name,
  customColors,
  properties,
  changeColor,
  toggleCustom,
  loadPreset,
  useCustom,
}) => {
  if(!customColors) return null;

  return (
    <CustomtSettingsWrapper>
      <UseCustomMessage>
        <Label>Use Custom Theme</Label>
        <SwitchButtonTrack
          title="Use Custom Theme"
          onClick={toggleCustom}
        >
          <SwitchButton useCustom={useCustom} />
        </SwitchButtonTrack>
      </UseCustomMessage>

      {
          useCustom && (
            <>
              <LoadFromButton
                onClick={loadPreset}
                style={{
                  backgroundColor: theme.bgColor,
                  color: theme.mainColor,
                }}
              >Load from {name}
              </LoadFromButton>
              <Colors>
                {properties.map((i) => {
                  return (
                    <ColorPicker
                      changeColor={changeColor}
                      key={i.name}
                      item={i}
                      color={customColors[i.name]}
                    />
                  );
                })}
              </Colors>
            </>
          )
        }

    </CustomtSettingsWrapper>
  );
};

export default Custom;
