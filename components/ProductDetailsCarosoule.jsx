import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import { BiArrowBack } from 'react-icons/bi';

const ProductDetailsCarosoule = () => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        <img src="/p2.png" alt="carouselImage" />
        <img src="/p3.png" alt="carouselImage" />
        <img src="/p4.png" alt="carouselImage" />
        <img src="/p5.png" alt="carouselImage" />
        <img src="/p6.png" alt="carouselImage" />
        <img src="/p1.png" alt="carouselImage" />
        <img src="/p7.png" alt="carouselImage" />
      </Carousel>
    </div>
  );
};

export default ProductDetailsCarosoule;
