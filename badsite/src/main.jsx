import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Keep this import

// Componentes
import Header from './components/Header';
import ImageSlider from './components/ImageSlider';
import Footer from './components/Footer';
// You'll also need to import your other page components like Home, Eventos, Blog, etc.
// For example:
// import Home from './pages/Home';
// import Eventos from './pages/Eventos';
// import Blog from './pages/Blog';
// import Galeria from './pages/Galeria';
// import Equipe from './pages/Equipe';
// import Sobre from './pages/Sobre';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* <--- HERE IS THE BrowserRouter */}
      <Header /> {/* Header is now inside BrowserRouter */}
      <main>
        {/* Define your routes here */}
        <Routes>
          <Route path="/" element={<p>This is the Home Page (You'll replace this with your actual Home component)</p>} />
          {/* Example routes for your other pages. Make sure to create these components */}
          {/* <Route path="/eventos" element={<Eventos />} /> */}
          {/* <Route path="/blog" element={<Blog />} /> */}
          {/* <Route path="/galeria" element={<ImageSlider />} /> // Using your ImageSlider as an example page */}
          {/* <Route path="/equipe" element={<Equipe />} /> */}
          {/* <Route path="/sobre" element={<Sobre />} /> */}
        </Routes>
      </main>
      <Footer /> {/* Footer can also be here if it's always present */}
    </BrowserRouter>
  </React.StrictMode>
);