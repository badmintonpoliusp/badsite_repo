import React from 'react';
import Slider from 'react-slick';
import './ImageSlider.css';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// 1. Pre-load all possible image folders using Vite's static glob import.
const homeImagesGlob = import.meta.glob('/src/assets/images/home/*.{png,jpg,jpeg,svg,gif,webp}', { eager: true });
const galleryImagesGlob = import.meta.glob('/src/assets/images/gallery/*.{png,jpg,jpeg,svg,gif,webp}', { eager: true });
// Add more folders here as needed, e.g., for events
// const eventImagesGlob = import.meta.glob('/src/assets/images/events/*.{...}');


// The component now accepts a 'source' prop to decide which images to show.
const ImageSlider = ({ source = 'home' }) => {
  
  // 2. Choose which set of images to use based on the 'source' prop.
  let imageModules;
  switch (source) {
    case 'gallery':
      imageModules = galleryImagesGlob;
      break;
    // case 'events':
    //   imageModules = eventImagesGlob;
    //   break;
    case 'home':
    default:
      imageModules = homeImagesGlob;
      break;
  }

  // Convert the chosen modules into a simple array of image URLs.
  const images = Object.values(imageModules).map(module => module.default);

  const settings = {
    dots: true,
    infinite: images.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true
  };

  if (images.length === 0) {
    return <div className="slider-placeholder">No images found for this section.</div>;
  }

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((imageSrc, index) => (
          <div key={index}>
            <img src={imageSrc} alt={`Slide ${index + 1}`} className="slider-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;