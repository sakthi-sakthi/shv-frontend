import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Slider.css';

const Slider = () => {
  const sliderImages = [
    { id: 1, image: 'images/all-img/s2.jpg' },
    { id: 2, image: 'images/all-img/s3.jpg' },
  ];

  return (
    <div className="carousel-container">
      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        infiniteLoop={true}
        autoPlay={false}
        interval={5000}
        stopOnHover={true}
        transitionTime={2000}
        swipeable={true}
        showArrows={true}
        className="carousel"
      >
        {sliderImages?.map((item) => (
          <div key={item?.id} className="slide">
            <img src={item?.image} alt={`slide-${item?.id}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;