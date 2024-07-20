import React, {} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './main.css';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
//<React.StrictMode >
//</React.StrictMode>
//basename={process.env.PUBLIC_URL} for deploying to github
root.render(
  
    
    <BrowserRouter >
    <App />
    </BrowserRouter>

  
);

