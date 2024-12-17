import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import './styles.css';
import "./heroSlide.scss";

// import required modules
import { Navigation } from "swiper/modules";
import { Autoplay } from 'swiper/modules';
const slidesData = ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4'];
const HeroSlide = () => {
  return (
    <div className="hero-slide">
      sAALAn
      <Swiper
        navigation={true}
        loop={true} // Enable infinite loop
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="mySwiper"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlide;
