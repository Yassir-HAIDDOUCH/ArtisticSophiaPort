import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';

// import required modules
import { EffectCube,Autoplay } from 'swiper/modules';

export default function carousel({images}) {
  
  return (
    <>
      <Swiper
        effect={'cube'}
        grabCursor={true}
        loop={true}
        cubeEffect={{
          shadow: true,
          slideShadows: false,
          shadowOffset: 20,
          shadowScale: 0.8,
        }}
        autoplay={{ delay: 10000 }}
        modules={[EffectCube,Autoplay]}
        
      >
       {images.map((image, index) => (
        <SwiperSlide key={index} className="flex justify-center items-center">
          <img src={image} alt={`Slide ${index + 1}`} className="h-96 object-cover" />
        </SwiperSlide>
      ))}
      </Swiper>
    </>
  );
}
