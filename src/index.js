import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './styles/main.scss';
import 'modern-normalize';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Domaine-de-Tavernel">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
