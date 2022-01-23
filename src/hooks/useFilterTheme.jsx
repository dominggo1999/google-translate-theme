import React, { useState, useEffect } from 'react';
import { themes } from '../themes';

const useFilterTheme = () => {
  const [list, setList] = useState(themes);

  const filterTheme = (e) => {
    const search = e.target.value.toLowerCase();

    const filtered = themes.filter((i) => {
      const preset = i.name.split('_').join(' ').toLowerCase();

      return preset.indexOf(search) === 0;
    });

    setList(filtered);
  };

  const resetThemes = () => {
    setList(themes);
  };

  return { list, filterTheme, resetThemes };
};

export default useFilterTheme;
