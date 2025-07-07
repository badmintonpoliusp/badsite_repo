// Usaremos uma imagem de exemplo que pode estar na sua pasta de equipe
import autorImg from '../assets/images/team/Bruno.png'; // Supondo que o nome do arquivo seja este

export const blogData = [
  {
    id: 1,
    slug: 'legado-da-familia-bad-poli-usp',
    title: 'Além das Quadras: O Legado da Familia Bad Poli-USP',
    date: '2025-07-07',
    author: 'Equipe Editorial',
    authorImage: null,
    introQuote: 'Aqui, o badminton vai além do esporte. É união, aprendizado e a construção de uma história que nunca termina.',
    content: `
      <p>Este é o espaço para o conteúdo completo do post "Legado da Família".</p>
      <p>Você pode detalhar aqui a história, os valores e as conquistas que formam o legado da equipe, usando múltiplos parágrafos.</p>
    `
  },
  {
    id: 2,
    slug: 'historia-do-badminton-minha-perspectiva',
    title: 'A História do Badminton pela minha Perspectiva',
    date: '2024-10-09',
    author: 'Bruno Kay Kassab',
    authorImage: autorImg,
    introQuote: 'Uma jornada de desafios e conquistas que moldaram nossa modalidade na USP.',
    content: `
      <p>A nossa como o Badminton foi fundada e é na dos minhas partes favoritas da história da modalidade. Logo que entramos na USP já queríamos fundar a modalidade, mas a ideia morreu rápido, faltou motivação...</p>
      <p>Depois da pandemia, voltei a jogar junto com o William e um dia aleatório, do nada, virei pra ele e disse “Bora fundar o badminton?”. A gente conhece o cara que pode nos passar o contato do diretor das modalidades esportivas da Poli. Vou mandar uma mensagem pra ele agora”, e assim se abriu a modalidade na USP.</p>
      <p>O segundo ano foi melhor significativamente, mas ainda não decolou. Começamos a ter treinos com umas 12 pessoas! O que para a gente na época já era surreal. A gente conseguiu pela primeira vez participar dos Jogos da Química! As meninas ganharam a esquerda-fio e o ano em que mais conseguimos treinar a galera e também que mais começamos a ter mais pessoas vindo toda semana.</p>
    `
  }
];