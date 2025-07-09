import Page_title from './Page_title';
import './SectionQuemSomos.css'


function SectionQuemSomos(){
    return(
    <div>
        <Page_title title={'Quem Somos'} />
        <div className='text'>
            <p>
            O Time de Badminton da Escola Politécnica da USP reúne estudantes, 
            funcionários e professores de diferentes cursos e institutos da Universidade,
            unidos pela paixão pelo esporte e pelo desejo de crescer juntos, dentro e fora 
            das quadras.</p>
            <p>O badminton é um esporte em crescimento na USP, conquistando cada 
            vez mais participantes interessados em sua dinâmica, técnica e diversão.</p>
            <p>Nossos treinos são abertos a toda a comunidade USP, desde iniciantes curiosos até atletas 
            experientes, e buscam equilibrar o desenvolvimento técnico, a integração entre alunos 
            e colaboradores e um ambiente leve, acolhedor e colaborativo.</p>
            <p>Se você faz parte da USP e quer praticar um esporte dinâmico, conhecer gente nova e fazer parte de uma equipe engajada, 
            venha jogar com a gente! 
            </p>
        </div>
    </div>
    );
}

export default SectionQuemSomos;