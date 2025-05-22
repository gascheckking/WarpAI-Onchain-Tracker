import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './styles/globals.css';
import './styles/animations.css';

// Hitta root-elementet i din HTML (public/index.html)
const rootElement = document.getElementById('root');

// Skapa en React-root och rendera appen
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
