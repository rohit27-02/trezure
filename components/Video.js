import React, { useState } from 'react'

const Playvideo = () => {
   
    return (
        <div className='flex justify-center regular tracking-[0.5rem] text-xl max-sm:text-sm text-white items-center'>
            <video className='md:h-[33rem] relative brightness-90 w-screen object-cover' autoPlay={true} muted={true} loop  >
                <source  src='video2.mp4' type="video/mp4" />
            </video>
           
            <p className='absolute mt-[20rem] text-center text-3xl max-sm:text-xl md:w-[50rem] drop-shadow max-sm:hidden tracking-normal '>Elevating Spaces with Affordable Luxury</p>
        </div>
    )
}

export default Playvideo