import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Footer.css';

import offer1 from "./pic/of (1).webp";
import offer2 from "./pic/of (2).webp";
 

function Offer() {
  const sliderRef = useRef(null); // Ref for the Slider

  useEffect(() => {
    // Restart autoplay programmatically on mount
    if (sliderRef.current) {
      setTimeout(() => {
        sliderRef.current.slickPlay(); // Start the autoplay manually
      }, 100); // Delay to ensure initialization
    }
  }, []);

  const settings = {
    dots: true, // Add navigation dots
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides visible at a time
    slidesToScroll: 1, // Number of slides to scroll per action
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Speed for autoplay (in ms)
    ref: sliderRef, // Pass the ref to the slider
  };

  const offerImages = [offer1, offer2 ];

  return (
    <div className="offer-slider">
      <Slider {...settings}>
        {offerImages.map((image, index) => (
          <div key={index} className="slider-image">
            <img src={image} alt={`Offer ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Offer;
