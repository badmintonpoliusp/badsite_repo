import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Componentes
import Header from './components/Header';
import Footer from './components/Footer';

// Componentes que funcionam como páginas (agora todos em /components)
import TeamPage from './components/TeamPage';
import BlogIndexPage from './components/BlogIndexPage';
import BlogPostPage from './components/BlogPostPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <main>
        <Routes>  
          <Route path="/equipe" element={<TeamPage />} />
          <Route path="/blog" element={<BlogIndexPage />} />
          <Route path="/blog/:postSlug" element={<BlogPostPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);