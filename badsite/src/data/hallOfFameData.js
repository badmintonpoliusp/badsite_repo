// Import the images for each person
import brunoKawanoImg from '../assets/images/halldafama/bruno.png'; 
import branquinhoImg from '../assets/images/halldafama/branquinho.jpg'; 
import huaImg from '../assets/images/team/Hua.png';

export const hallOfFameData = [
  {
    id: 1,
    name: 'Bruno Kawano',
    tenure: '(2017 - 2020)',
    imageUrl: brunoKawanoImg,
    title: 'Título', // The title on the left, e.g., "Fundador", "Capitão", etc.
    conquistas: [ // An array for achievements
      '1º Lugar na Regional Febasp (abril de 2024)',
    ],
    contribuicoes: 'Co-(re)fundador da equipe de baminton da poli usp CAIXA DE TEXTO CAIXA DE TEXTO CAIXA DE TEXTO TEXTOCAIXA DE TEXTOCAIXA DE TEXTOCAIXA DE TEXTOCAIXA DE TEXTOCAIXA DE TEXTOCAIXA DE TEXTO(leia mais)',
  },
  {
    id: 2,
    name: 'Luiz Felipe Branquinho',
    tenure: '(2021 - Presente)',
    imageUrl: branquinhoImg, // Replace with the correct image import
    title: 'Ex-DM',
    conquistas: [
      'Conquista A',
      'Conquista B',
    ],
    contribuicoes: '', // Leaving this blank will hide the section
  },
  {
    id: 3,
    name: 'Hua Hua Cao',
    tenure: '(2018 - 2021)',
    imageUrl: huaImg, // Replace with the correct image import
    title: 'DM Viado',
    conquistas: [], // An empty array will hide the "Conquista" section
    contribuicoes: 'Ajudou a estruturar os treinos iniciais da equipe e foi fundamental na integração de novos membros.',
  },
  // Add more people here
];