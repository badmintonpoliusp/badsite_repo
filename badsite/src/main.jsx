import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/Header';
import ImageSlider from './components/ImageSlider'; // <-- IMPORT

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <main>
      <ImageSlider /> {/* <-- ADD THE SLIDER */}
    </main>
  </React.StrictMode>
);