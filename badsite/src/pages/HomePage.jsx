import React from 'react';
import ImageSlider from '../components/ImageSlider'; // Your reusable slider
import PageTitle from '../components/Page_title';

const HomePage = () => {
  return (
    <>
      <PageTitle title="Bem-vindo!" />
      <ImageSlider source="home" />
    </>
  );
};

export default HomePage;