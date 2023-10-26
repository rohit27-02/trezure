/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Showcase = () => {
  const carouselItems = [
    "/products/1.jpg",
    "products/2.jpg",
    "products/3.jpg",
    "products/4.jpg",
    "products/5.jpg",
    "products/6.jpg",
    "products/7.jpg",
    "products/8.jpg",
    "products/9.jpg",
    "products/10.jpg",
  ];

  const [slidesToShow, setSlidesToShow] = useState(4); // Default number of items to show

  useEffect(() => {
    // Check the screen width and update slidesToShow accordingly
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // For screens narrower than 768px (e.g., mobile devices)
        setSlidesToShow(2); // Show one item at a time
      } else {
        // For larger screens
        setSlidesToShow(4); // Show four items at a time
      }
    };

    // Initial check
    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: slidesToShow, // Number of items to show based on screen width
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    initialSlide: 4, // Start with the fifth item to display the first 4 items
  };

  return (
    <div className='overflow-hidden max-sm:w-[20rem] w-[70rem] mx-auto pb-[4rem] cursor-grab'>
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <div key={index} className='p-6'>
            <img src={item} alt={`Carousel Item ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Showcase;
