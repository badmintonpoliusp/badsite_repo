import React from 'react';
import Slider from 'react-slick';
import './ImageSlider.css';


// Import slick-carousel CSS files
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// --- This is the magic part ---
// Vite's import.meta.glob automatically imports all files matching the pattern.
// We use { eager: true } to load them all at once.
const imageModules = import.meta.glob('/src/assets/images/slider/*.{png,jpg,jpeg,svg,gif,webp}', { eager: true });

// Convert the object of modules into a simple array of image URLs.
const images = Object.values(imageModules).map(module => module.default);


const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true
  };

  return (
    <div className="slider">
      <div className="slider-container">
        <Slider {...settings}>
          {images.map((imageSrc, index) => (
            <div key={index}>
              <img src={imageSrc} alt={`Slide ${index + 1}`} className="slider-image" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageSlider;
