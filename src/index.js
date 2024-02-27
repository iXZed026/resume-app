import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import HumbProvider from './provider/HumbProvider';
import LinkProvider from './provider/LinkProvider';
import ProjectProvider from './provider/ProjectProvider';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProjectProvider>
      <LinkProvider>
        <HumbProvider>
          <Router>
            <App />
          </Router>
        </HumbProvider></LinkProvider>
    </ProjectProvider>
  </React.StrictMode>
);


reportWebVitals();
