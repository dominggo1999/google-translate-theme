import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from '../styles/GlobalStyles';
import Popup from './Popup';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Popup />
  </React.StrictMode>,
  document.getElementById('root'),
);
