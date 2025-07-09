import React, { useState } from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
import { FaInstagram, FaEnvelope } from 'react-icons/fa'; 

function Footer () {
  return (<>
    <div className="container">
        {/* <div className="block">
            <p className = "title_bar_footer">Navegação</p>
            <ul>
                <li><Link to = "/" >Home</Link></li>
                <li><Link to = "/eventos" >Eventos</Link></li>
                <li><Link to = "/blog" >Blog</Link></li>
                <li><Link to = "/galeria" >Galeria</Link></li>
                <li><Link to = "/hall-da-fama" >Hall da Fama</Link></li>
                <li><Link to = "/sobre" >Sobre</Link></li>
            </ul>
        </div> */}

        <div className="block">
            <p className = "title_bar_footer">Parceria</p>
            <ul>
                <li>Patrocínios</li>
                <li>Contribuições</li>
                <li><a target="_blank" 
                rel="Site da Atlética Poli Usp - Incentivo" 
                href="https://www.atleticapoliusp.com.br/lei-de-incentivo">
                Lei de Incentivo</a></li>
            </ul>
        </div>

        <div className="block">
            <p className = "title_bar_footer">Links úteis</p>
            <ul>
                <li><a target="_blank" 
                rel="Site da Atlética Poli Usp" 
                href="https://www.atleticapoliusp.com.br/">
                A.A.A.P.</a></li>

                <li><a target="_blank" 
                rel="Site do CEPEUSP" 
                href="https://cepe.usp.br/">
                CEPEUSP</a></li>

                <li><a target="_blank" 
                rel="Site da FEBASP" 
                href="https://www.febasp.org.br/">
                FEBASP</a></li>

            </ul>
        </div>

        {/* <div className="block">
            <p className = "title_bar_footer">Mídias Sociais</p>
            <ul>
                <li>Instagram</li>
                <li>Facebook</li>
            </ul>
        </div> */}

        <div className="block">
            <div>
                <p className = "title_bar_footer">Treino e Horário</p>

                <ul>
                <li>Sexta: 17h às 21h</li>
                    <li>Módulo 6 - CEPEUSP</li> 
                </ul>

            </div>
        </div>

        <div className="block">
            <div id="contact_block">
                <p className = "title_bar_footer">Contato e Redes</p>
                <ul>
                    <li><a href="mailto:bad.poliusp@gmail.com" rel="Email" className="icon-link"><FaEnvelope />bad.poliusp@gmail.com</a></li>
                    <li><a href="https://www.instagram.com/badminton_poliusp/" target="_blank" rel="Instagram" className="icon-link"><FaInstagram />@badminton_poliusp</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div id="marco_zero"><p id="copyright">Copyright ©2025 Equipe de Badminton da Poli-Usp. Todos os direitos reservados. Desenvolvido pelo <Link to = "/projeto-marco-zero" >Projeto Marco Zero</Link>.</p></div>
  </>);
}

export default Footer

