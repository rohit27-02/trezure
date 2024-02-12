/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Fade } from 'react-awesome-reveal';


const Slideshow = () => {

    return (
        <div className='mt-[2rem]'>
            <div className="relative w-full flex justify-center pb-[56.25%]">

                <video
                    preload="true"
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
