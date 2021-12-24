import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from '../styles/GlobalStyles';
import Options from './Options';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Options />
  </React.StrictMode>,
  document.getElementById('root'),
);
