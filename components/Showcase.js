/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Showcase = () => {
    const carouselItems = [
        "/products/6-Drawer-Dresser.jpg",
        "products/Black-2-Drawer-Nightstand.jpg",
        "products/Desk-with-Outlet.jpg",
        "products/Edge-Coupe-Glass.jpg",
        "products/Grey-Outdoor-Lounge-Chair.jpg",
    ];

    const settings = {
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        slidesToShow: 4, // Number of items to show at a time
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
        initialSlide: 4, // Start with the fifth item to display the first 4 items
    };

    return (
        <div className='overflow-hidden w-[70rem] mx-auto pb-[4rem] cursor-grab'>
            <Slider {...settings}>
                {carouselItems.map((item, index) => (
                    <div key={index} className='p-6'>
                        <img src={item} alt={`Carousel Item ${index}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Showcase;
