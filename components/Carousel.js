/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Fade } from 'react-awesome-reveal';
import Button from './Button';

const Items = [
    { "img": "/elements/bg1.jpg", "index": "01.", "title": "HOME", slogan: "you want, we build", path: "/collections#home" },
    { "img": "/elements/bg2.jpg", "index": "02.", "title": "OUTDOOR", slogan: "crafted beauty", path: "/collections#outdoor" },
    { "img": "/elements/bg3.jpg", "index": "03.", "title": "OFFICE", slogan: "choose comfort", path: "/collections#office" },
]
const Slideshow = () => {
    const [currentIndex, setcurrentIndex] = useState(0);

    return (
        <div className=''>
            <div className="relative w-full flex justify-center pb-[56.25%]">
                <Fade triggerOnce direction='up' delay={2000} duration={2000} className='tracking-[1rem] z-10 drop-shadow-lg mt-[14rem] text-center text-7xl text-white absolute' >
                    <h1 >LUXURY<br />FURNITURE</h1>
                </Fade>
                <iframe
                    className="absolute  inset-0 w-full h-full"
                    src="https://player.vimeo.com/video/570049428?muted=1&amp;autoplay=1&amp;loop=1&amp;transparent=0&amp;background=1&amp;app_id=122963"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    title="pexels-rodnae-productions-8580866"
                    data-ready="true"
                ></iframe>
            </div>


            <div className=" relative w-full">
                <Carousel
                    emulateTouch={true}
                    infiniteLoop={true}
                    showIndicators={false}
                    showStatus={false}
                    showThumbs={false}
                    autoFocus={true}
                    selectedItem={currentIndex}
                    interval={5000}
                    onChange={(i) => setcurrentIndex(i)}
                    autoPlay={true}
                    showArrows={false}

                >
                    {Items.map((item, i) => {
                        return <div key={i} className={`relative cursor-grab transition-all duration-300 ease-linear ${i == currentIndex ? "scale-100" : "scale-95"}`}>
                            <img className='-z-20' src={item.img} alt='' />
                            <div className='absolute top-[30%]  drop-shadow-sm left-[4rem] text-left tracking-widest bold text-white'>
                                <h2 className='text-lg'>FURNITURE STORE</h2>
                                <h1 className='text-[5rem] w-[32rem] mb-[3rem] leading-[5.5rem] uppercase'>{item.slogan}</h1>
                                <Button text={"EXPLORE NOW"} path={item.path} />
                            </div>

                            {currentIndex == 0 ?
                                (<div>
                                    <img className='h-[22rem]  absolute -right-[7rem] top-[10rem] z-20' src='/elements/bed.png' alt='element' />
                                    <img className='h-[13rem] absolute top-[16rem] -right-[19rem] z-10' src='/elements/drawer.png' alt='element' />
                                    <div className='w-[25rem] h-[25rem] rounded-full bg-stone-300 absolute top-[10rem] right-[10rem] opacity-80 z-0'></div>
                                </div>)
                                : currentIndex == 1 ?
                                    (<div>
                                        <img className='h-[16rem]  absolute -right-[7rem] top-[16rem] z-20' src='/elements/6-drawer.png' alt='element' />
                                        <div className='w-[25rem] h-[25rem] rounded-full bg-stone-100 absolute top-[10rem] right-[10rem] opacity-80 z-0'></div>
                                    </div>)
                                    : (<div>
                                        <img className='h-[12rem]  absolute -right-[11rem] top-[18rem] z-20' src='/elements/sofa.png' alt='element' />
                                        <img className='h-[19rem] absolute top-[10rem] -right-[25rem] z-10' src='/elements/lamp.png' alt='element' />
                                        <div className='w-[25rem] h-[25rem] rounded-full bg-gray-200 absolute top-[10rem] right-[10rem] opacity-80 z-0'></div>
                                    </div>)}


                        </div>
                    })}

                </Carousel>
                <div className=" absolute bottom-0 right-0 flex ">
                    {Items.map((_, index) => (
                        <div
                            key={index}
                            className={`indicator ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => setcurrentIndex(index)}
                        >
                            <Fade direction='up' cascade triggerOnce >
                                <h1 className='text-xl'>{Items[index].index}<br></br><span className='regular text-xl'>{Items[index].title}</span></h1>

                            </Fade>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Slideshow;
