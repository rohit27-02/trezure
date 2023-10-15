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
                <video
                    className="absolute  inset-0 w-full h-full"
                    src="/banner.mp4"
                    muted
                    autoPlay
                    loop
                ></video>
            </div>


           
        </div>

    );
};

export default Slideshow;
