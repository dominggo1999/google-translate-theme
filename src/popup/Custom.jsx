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
import { formatName } from '../util';

import ColorPicker from './ColorPicker';

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
              >Load from {name && formatName(name)}
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
