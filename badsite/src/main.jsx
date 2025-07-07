// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Footer from './components/Footer';
import Events from './components/Events';
import MarcoZero from './components/MarcoZero';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      {/* <Header /> */}
      <MarcoZero />
      {/* <Events/> */}
      <Footer />
    </>
  </React.StrictMode>
);