import React, { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { Fade } from 'react-awesome-reveal';
const Slideshow = ({ slides, autoPlayInterval }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [index, setindex] = useState(0);
    const Items = [
        { "img": "/projects/1.jpg", "index": "01.", "title": "HOME" },
        { "img": "/projects/2.jpg", "index": "02.", "title": "OUTDOOR" },
        { "img": "/projects/3.jpg", "index": "03.", "title": "KITCHEN" },
    ]

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    // Auto-play functionality
    useEffect(() => {
        const interval = setInterval(nextSlide, autoPlayInterval);
        return () => clearInterval(interval);
    }, [currentIndex, autoPlayInterval]);

    return (
        <div className=''>
            <div className="relative w-full flex justify-center pb-[56.25%]">
                <Fade triggerOnce direction='up' duration={2000} className='tracking-[1rem] z-10 drop-shadow-lg mt-[14rem] text-center text-7xl text-white absolute' >
                    <h1 >LUXURY<br /> LIVING</h1>
                </Fade>
                <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://player.vimeo.com/video/570049428?muted=1&amp;autoplay=1&amp;loop=1&amp;transparent=0&amp;background=1&amp;app_id=122963"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    title="pexels-rodnae-productions-8580866"
                    data-ready="true"
                ></iframe>
            </div>


            {/* <div className="slideshow relative w-screen overflow-hidden">
                <Carousel
                    emulateTouch={true}
                    infiniteLoop={true}
                    showIndicators={false}
                    showStatus={false}
                    showThumbs={false}
                    autoFocus={true}
                    selectedItem={1}
                    onChange={(i) => setindex(i)}
                    autoPlay={true}

                >
                    {Items.map((item, i) => {
                        return <div key={i} >
                            <img src={item.img} alt='' />

                        </div>
                    })}

                </Carousel>
                <div className=" absolute bottom-[6rem] right-0 flex shadow-xl">
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            className={`indicator ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                        >
                            <h1 className='medium text-xl'>{Items[index].index}<br></br><span className='regular text-xl'>{Items[index].title}</span></h1>

                        </div>
                    ))}
                </div>
            </div> */}
        </div>

    );
};

export default Slideshow;
