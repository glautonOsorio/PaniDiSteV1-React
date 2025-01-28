import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './index.css';
import { BannerProvider } from './contexts/BannerContext.jsx';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BannerProvider>
        <App />
      </BannerProvider>
    </React.StrictMode>,
  );
} else {
  console.error('Failed to find the root element');
}
