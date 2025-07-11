//importar a imagem 
import defaultImg from '../assets/images/profile/default.png';
import BrunoImg from '../assets/images/profile/Bruno.png';
import BranquinhoImg from '../assets/images/profile/Branquinho.png';
import WilliamImg from '../assets/images/profile/William.png';
import pieriniImg from '../assets/images/profile/edu-pierini.jpg';


export const hallOfFameData = [
  {
    id: 1,
    name: 'Bruno Kawano',
    year: '(2017 - 2020)',
    imageUrl: BrunoImg,
    title: 'Pai do Badpoli', 
    // conquistas: [ 
    //   '1º Lugar na simples C da Regional Febasp (abril de 2024)',
    // ],
    introduction: 'Conhecido como Brunin, ou o gêmeo do Nassu, foi um dos fundadores do Badpoli. Sua dedicação ao badminton foi fundamental para que a modalidade se tornasse o que é hoje.',
  },
  {
    id: 2,  
    name: 'William Fukishima',
    year: '(2017 - 2020)',
    imageUrl: WilliamImg, 
    title: 'Pai do Badpoli',
    // conquistas: [], 
    introduction: 'Fã de badminton desde pequeno, ficou decepcionado ao perceber que o esporte não existia na Poli. Foi então que, junto com o Brunin, decidiu fundar o Badpoli. Foi um dos principais responsáveis pela estruturação do time. Mesmo já formado, ainda aparece de vez em quando nos treinos para compartilhar sua experiência com a galera.',
  },
  {
    id: 3,
    name: 'Luiz Felipe Branquinho',
    year: '(2023 - 2024)',
    imageUrl: BranquinhoImg, 
    title: 'Rato do ano',
    // conquistas: [
    // ],
    introduction: 'Foi o bixo de destaque do ano de 2024, participando ativamente dos treinos. Depois da virada do ano já não vimos a sua sombra, reza a lenda que partiu para o Moçambique curtir a sua vida de herdeiro...',
  },
  {
    id: 4,  
    name: 'Mr. Leidelas',
    year: '(2023 - 2024)',
    imageUrl: defaultImg, 
    title: 'O Lendário',
    // conquistas: [], 
    introduction: 'Conhecido apenas como Mr. Leidelas, ele quebrou o estereótipo do nerd "certinho". Sua verdadeira identidade é um mistério para muitos, mas seu legado ecoa até hoje em cada treino e na alma do time.',
  },
  {
    id: 5,  
    name: 'Eduardo Pierini',
    year: '(2023 - 2024)',
    imageUrl: pieriniImg, 
    title: 'IA de Pinheiros',
    introduction: 'Para alguns, é conhecido como o "pró", para outros, tratava-se de uma mera invenção. Ninguém sabe ao certo se essa figura existia ou não até a recepção dos bixos em 2025.  Os quatrocentos smashes que ele deus nos bixos fez acreditar que realmente há um abismo entre nós, os meros mortais, com os semideuses do badminton. Sua presença é sentida em cada treino, mesmo que ele não esteja lá fisicamente.',
  },
  // Adicionar mais pessoas aqui
  // Seguindo este formato:
  /* 
  {
    id: (de preferência, seguir a ordem),
    year: ,
    imageUrl: ,
    tile: ,
    introduction , 
  }
  */
];