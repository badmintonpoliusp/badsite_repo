import React from 'react';
import { Link } from 'react-router-dom';
// 1. Importando o ícone de Email junto com o do Instagram
import { FaInstagram, FaEnvelope } from 'react-icons/fa'; 
import './Footer.css'; 

function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-container">
                <div className="footer-content">
                    {/* Coluna 1: Informações do Time */}
                    <div className="footer-column">
                        <h4 className="footer-title">Treinos e Horário</h4>
                        <ul className="footer-list">
                            <li>Sexta: 17h às 21h</li>
                            <li>Módulo 6 - CEPEUSP</li>
                        </ul>
                    </div>

                    {/* Coluna 2: Links Importantes */}
                    <div className="footer-column">
                        <h4 className="footer-title">Links Importantes</h4>
                        <ul className="footer-list">
                            <li><a href="https://www.atleticapoliusp.com.br/" target="_blank" rel="noopener noreferrer">Atlética da Poli</a></li>
                            <li><a href="https://cepe.usp.br/" target="_blank" rel="noopener noreferrer">CEPEUSP</a></li>
                            <li><a href="https://www.febasp.org.br/" target="_blank" rel="noopener noreferrer">FEBASP</a></li>
                            <li><a href="https://www.atleticapoliusp.com.br/lei-de-incentivo" target="_blank" rel="noopener noreferrer">Lei de Incentivo</a></li>
                        </ul>
                    </div>

                    {/* Coluna 3: Contato e Redes Sociais */}
                    <div className="footer-column">
                        <h4 className="footer-title">Contato e Redes</h4>
                        <ul className="footer-list contact-list"> {/* Adicionei uma classe para tratar o alinhamento */}
                            {/* 2. Email com ícone */}
                            <li>
                                <a href="mailto:bad.poliusp@gmail.com" className="icon-link">
                                    <FaEnvelope />
                                    <span>bad.poliusp@gmail.com</span>
                                </a>
                            </li>
                            {/* 3. Instagram com ícone, nome e link corrigido */}
                            <li>
                                <a href="https://www.instagram.com/badminton_poliusp/" target="_blank" rel="noopener noreferrer" className="icon-link">
                                    <FaInstagram />
                                    <span>@badminton_poliusp</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-copyright">
                    <p>
                        Copyright ©2025 Equipe de Badminton da Poli-Usp. Todos os direitos reservados. 
                        Desenvolvido pelo <Link to="/projeto-marco-zero">Projeto Marco Zero</Link>.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;