import React, { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const Slideshow = ({ slides, autoPlayInterval }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [index, setindex] = useState(0);
    const Items = [
        { "img": "/projects/1.jpg", "index": "01.", "title": "Living Room" },
        { "img": "/projects/2.jpg", "index": "02.", "title": "Bed Room" },
        { "img": "/projects/3.jpg", "index": "03.", "title": "Kitchen" },
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
        <div className="slideshow w-screen">
            {/* <Carousel
                emulateTouch={true}
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                showThumbs={false}
                autoFocus={true}
                selectedItem={1}
                onChange={(i) => setindex(i)}

            >
                {Items.map((item, i) => {
                    return <div key={i} >
                        <img src={item.img} alt='' />

                    </div>
                })}

            </Carousel>
            <div className="slide-indicators shadow-xl">

                <button className="px-[2vw] border-r border-gray-300 flex justify-center items-center hover:bg-opacity-75 bg-black bg-opacity-30 text-white" onClick={prevSlide}>
                    <AiOutlineLeft className='text-[3vmax]' />
                </button>
                <button className="px-[2vw]  flex justify-center items-center hover:bg-opacity-75 bg-black bg-opacity-30 text-white" onClick={nextSlide}>
                    <AiOutlineRight className='text-[3vmax]' />
                </button>

                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`indicator ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    >
                        <h1 className='medium text-xl'>{Items[index].index}<br></br><span className='regular text-xl'>{Items[index].title}</span></h1>

                    </div>
                ))}
            </div> */}

            
            
            <iframe src="https://player.vimeo.com/video/570049428?muted=1&amp;autoplay=1&amp;loop=1&amp;transparent=0&amp;background=1&amp;app_id=122963" width="426" height="240" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="pexels-rodnae-productions-8580866" data-ready="true" className="elementor-background-video-embed " style={{width: "1278px", height: "720px"}}></iframe>
        </div>
    );
};

export default Slideshow;
