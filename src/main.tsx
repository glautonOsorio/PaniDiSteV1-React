import React from 'react';
import ReactDOM from 'react-dom/client';

import { BannerProvider } from './contexts/BannerContext.jsx';
import { GlobalStyle } from './global.style.js';
import { App } from './App';

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <GlobalStyle>
      <BannerProvider>
        <App />
      </BannerProvider>
    </GlobalStyle>
  </React.StrictMode>,
);
