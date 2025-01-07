import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Adjust path if necessary
import './index.css'; // Optional, if you have CSS

// Ensure the root element exists in index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


