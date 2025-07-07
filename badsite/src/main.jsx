import React from 'react';
import ReactDOM from 'react-dom/client';

// Componentes
import Header from './components/Header';
import Footer from './components/Footer';
import TeamPage from './components/TeamPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<<<<<<< Updated upstream
    <>
      <Header />
      <Eventos />
      <Footer />
    </>
=======
  <>
    <Header />
    <main>
      <TeamPage />
    </main>
    <Footer/>
  </>
>>>>>>> Stashed changes
  </React.StrictMode>
);