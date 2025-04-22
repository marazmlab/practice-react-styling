// ./src/app.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import App from './components/App';

const theme = {
  colors: {
    primary: '#cce5ff',
    secondary: '#343a40',
  }
}


const root = createRoot(document.querySelector('#root'));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

