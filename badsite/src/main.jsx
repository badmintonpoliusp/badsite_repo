// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// 1. Import your global stylesheet
import './index.css';

// 2. Import your main layout component
import AppLayout from './AppLayout'; 

// 3. Import all of your page components
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import BlogIndexPage from './pages/BlogIndexPage';
import BlogPostPage from './pages/BlogPostPage';
import MarcoZero from './pages/MarcoZero';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import HallPage from './pages/HallOfFamePage';
// You can create placeholder files for these pages for now
// import GaleriaPage from './pages/GaleriaPage'; 
// import SobrePage from './pages/SobrePage';

// 4. Define your website's routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />, // This layout (Header/Footer) wraps all pages
    children: [
      {
        index: true, // The default page at '/'
        element: <HomePage />,
      },
      {
        path: 'eventos',
        element: <EventsPage />,
      },
      {
        path: 'blog',
        element: <BlogIndexPage />, // The list of blog posts
      },
      {
        path: 'blog/:postId', // The dynamic route for a single post
        element: <BlogPostPage />,
      },
      {
        path: 'hall-da-fama',
        element: <HallPage/>,
      },
      // --- Example placeholders for future pages ---
      {
        path: 'galeria',
        // Replace this with <GaleriaPage /> when you create it
        element: <GalleryPage/>, 
      },
      {
        path: 'sobre',
        // Replace this with <SobrePage /> when you create it
        element: <AboutPage/>,
      },
      {
        path: 'projeto-marco-zero',
        // Replace this with <SobrePage /> when you create it
        element: <MarcoZero />,
      },
    ],
  },
]);

// 5. Render your application with the router
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);