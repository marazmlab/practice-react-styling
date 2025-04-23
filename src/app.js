// ./src/app.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import App from './components/App';

const theme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    danger: '#dc3545',
  }
}


const root = createRoot(document.querySelector('#root'));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

