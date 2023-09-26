/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Showcase = () => {
    return (
        <div className='overflow-hidden w-[80vmax] mx-auto pb-[4rem] cursor-grab'>
            <Carousel
                autoPlay={true}
                emulateTouch={true}
                infiniteLoop={true}
                showArrows={false}
                showIndicators={false}
                showStatus={false}
                showThumbs={false}
                centerMode={true}
                centerSlidePercentage={25}
                autoFocus={true}
                interval={2000}
                
            >
                <div className='m-4'>
                    <img src="/products/6-Drawer-Dresser.jpg" />
                </div>
                <div className='m-4'>
                    <img src="products/Black-2-Drawer-Nightstand.jpg" />
                </div>
                <div className='m-4'>
                    <img src="products/Desk-with-Outlet.jpg" />
                </div>
                <div className='m-4'>
                    <img src="products/Edge-Coupe-Glass.jpg" />
                </div>
                <div className='m-4'>
                    <img src="products/Grey-Outdoor-Lounge-Chair.jpg" />
                </div>
            </Carousel>
        </div>
    )
}

export default Showcase