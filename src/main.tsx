import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Inject required Google Fonts for Stitch design tokens
function injectFontLink(href: string) {
  if (typeof document === 'undefined') return;
  const id = href.replace(/[^a-zA-Z0-9]/g, '_');
  if (document.getElementById(id)) return;
  const link = document.createElement('link');
  link.id = id;
  link.rel = 'stylesheet';
  link.href = href;
  document.head.appendChild(link);
}

injectFontLink('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap');
injectFontLink('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
