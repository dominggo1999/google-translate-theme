import React, { useState } from 'react';
import { themes } from '../themes';

const useFilterTheme = () => {
  const [list, setList] = useState(themes);

  const filterTheme = (e) => {
    const s = e.target.value;

    const filtered = themes.filter((i) => {
      return i.name.indexOf(s) === 0;
    });

    setList(filtered);
  };

  return { list, filterTheme };
};

export default useFilterTheme;
