// src/AppLayout.jsx
import { Outlet } from 'react-router-dom';
import Header from './components/Header'; // Verifique o caminho correto
import Footer from './components/Footer'; // Verifique o caminho correto
import ScrollToTop from './components/ScrollToTop'; // <-- Importe aqui

const AppLayout = () => {
  return (
    <>
      <ScrollToTop /> {/* <-- Adicione aqui */}
      <Header />
      <main className="main-content">
        <Outlet /> {/* O Outlet renderiza a página da rota atual */}
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;