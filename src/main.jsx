import { StrictMode } from 'react';

import ToastProvider from '@context/ToastContext';
import { GlobalStyle } from '@styles/GlobalStyle.jsx';
import { theme } from '@styles/theme.js';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <ToastProvider>
          <App />
        </ToastProvider>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
