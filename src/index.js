import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import HumbProvider from './provider/HumbProvider';
import LinkProvider from './provider/LinkProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LinkProvider>
      <HumbProvider>
        <Router>
          <App />
        </Router>
      </HumbProvider></LinkProvider>
  </React.StrictMode>
);


reportWebVitals();
