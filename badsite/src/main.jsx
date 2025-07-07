import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/Header';
<<<<<<< HEAD
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
=======
import ImageSlider from './components/ImageSlider'; // <-- IMPORT

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <main>
      <ImageSlider /> {/* <-- ADD THE SLIDER */}
    </main>
>>>>>>> 02462a51ad3c512ce0ccccc6475e5b21b14dabbf
  </React.StrictMode>
);