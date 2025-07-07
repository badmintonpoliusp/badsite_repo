import React from 'react';
import './Footer.css'

function Footer() {
  return (<>
    <div className="container">
        <div className="block">
            <p className = "title_bar_footer">Navegação</p>
            <ul>
                <li>Home</li>
                <li>Eventos</li>
                <li>Blog</li>
                <li>Galeria</li>
                <li>Hall da Fama</li>
                <li>Sobre</li>
            </ul>
        </div>

        <div className="block">
            <p className = "title_bar_footer">Parceria</p>
            <ul>
                <li>Patrocínios</li>
                <li>Contribuições</li>
                <li>Lei de Incentivo</li> 
            </ul>
        </div>

        <div className="block">
            <p className = "title_bar_footer">Links úteis</p>
            <ul>
                <li>A.A.A.P.</li>
                <li>CEPEUSP</li>
                <li>FEBASP</li>
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
                    <li>Módlio 6 - CEPEUSP</li> 
                </ul>
            </div>

            <div id="contact_block">
                <p className = "title_bar_footer">Contato</p>
                <ul>
                    <li>bad.poliusp@gmail.com</li>
                </ul>
            </div>
        </div>
    </div>

    <div id="marco_zero"><p id="copyright">Copyright ©2025 Equipe de Badminton da Poli-Usp. Todos os direitos reservados. Desenvolvido pelo Projeto Marco Zero.</p></div>
  </>);
}

export default Footer