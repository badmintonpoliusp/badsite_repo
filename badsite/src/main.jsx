// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Footer from './components/Footer';
import Eventos from './components/Eventos';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      {/* <Header /> */}
      <Eventos />
      <Footer />
    </>
  </React.StrictMode>
);