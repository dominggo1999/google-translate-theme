import React, { useState, useRef } from 'react';
import { HexColorPicker, HexColorInput } from 'react-colorful';
import { IoIosColorPalette } from 'react-icons/io';
import {
  Label,
  ColorPickerWrapper,
  ColorInput,
  ToggleButton,
  InputField,
} from './Popup.style';
import useClickOutside from '../hooks/useClickOutside';

const ColorPicker = ({ item, color, changeColor }) => {
  const [display, setDisplay] = useState(item.display);
  const pickerRef = useRef();

  const handleClick = () => {
    setDisplay(!display);
  };

  const handleChange = (val) => {
    changeColor(item.name, val);
  };

  useClickOutside(pickerRef, () => setDisplay(false));

  return (
    <ColorPickerWrapper>
      <Label>{item.label}</Label>
      <ColorInput ref={pickerRef}>
        <InputField>
          <span>#</span>
          <HexColorInput
            onChange={(val) => handleChange(val)}
            color={color}
          />
        </InputField>
        {display && (
        <HexColorPicker
          onChange={(val) => handleChange(val)}
          color={color}
        />
        )}
        <ToggleButton onClick={handleClick}>
          <IoIosColorPalette />
        </ToggleButton>
      </ColorInput>
    </ColorPickerWrapper>
  );
};

export default ColorPicker;
