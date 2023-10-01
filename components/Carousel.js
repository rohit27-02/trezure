/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Fade } from 'react-awesome-reveal';


const Slideshow = () => {

    return (
        <div className=''>
            <div className="relative w-full flex justify-center pb-[56.25%]">
                <Fade triggerOnce direction='up' delay={2000} duration={2000} className='tracking-[1rem] z-10 drop-shadow-lg md:mt-[14rem] mt-[5rem] text-center md:text-7xl text-white absolute' >
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


           
        </div>

    );
};

export default Slideshow;
