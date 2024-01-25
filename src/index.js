import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root')).render(<HashRouter><App /></HashRouter>);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
