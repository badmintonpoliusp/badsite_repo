import React from 'react';
import Page_title from './Page_title'; 
import LogoMZ from '../assets/images/LogoMZ.png';
import './MarcoZero.css'


function MarcoZero() {
    return (
        <div>
            <Page_title title="Projeto Marco Zero" />
            <div className='MZ_container'>

                <div className='Logo'>
                    <img src = {LogoMZ} alt="Logo do Projeto Marco Zero" />
                </div>

                <div className='description'>
                    <p> &emsp;O Projeto Marco Zero foi idealizado para dar origem ao site do grupo de badminton da Escola Politécnica. Esse site conteria informações importantes, como treinos semanais, campeonatos, amistosos, e sobre a história de como a modalidade do badminton foi implementada na atlética da Poli-USP. Além disso, apresentaria blogs e redes sociais do badminton. 
                        A ideia originalmente foi criada pelo membro Hua Hua Cao, que pensou em criar um site para o grupo de badminton da Poli. Motivado pela ideia, ele convidou amigos do grupo para que pudessem ajudar na execução do projeto, a fim de divulgar a modalidade e melhorar na comunicação, possuindo outro meio de informação para eventos importantes. 
                        Outros membros também foram essenciais para que esse projeto fosse executado, e dentre eles: Wu Kam, Pedro Koch, Eduardo Kenzo, Moizés Ávila e Gustavo Akira.</p>
                </div>

            </div>  
        </div>
    );
}

export default MarcoZero;