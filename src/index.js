import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'tachyons' ;
import Navbar from './Navbar';
import Footer from './Footer';

let app_details = {
  "desc":"Weather forcasting application built using "
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <App info={app_details}/>
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
