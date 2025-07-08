// src/AppLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function AppLayout() {
  return (
    <>
      <Header />
      <main className="main-content">

        {/* Outlet renders the current route's component (e.g., HomePage, Eventos) */}

        <Outlet /> 
        
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;