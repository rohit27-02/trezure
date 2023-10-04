import React from 'react'

const playvideo = () => {
    return (
        <div className='flex justify-center regular tracking-[0.5rem] text-xl max-sm:text-sm text-white items-center'>
            <video className='md:h-[33rem] relative brightness-90 w-screen object-cover' autoPlay={true} muted={true} loop  >
                <source className='' src="video.mp4" type="video/mp4" />
            </video>
            <div className='absolute  '>
                <h1 className='cursor-pointer hover:text-brown-light transition-all duration-300'>CORPORATE VIDEO</h1>
            </div>
            <p className='absolute mt-[20rem] text-center text-sm md:w-[50rem] drop-shadow max-sm:hidden tracking-normal '>With an experience of over four decades up our sleeves, our rise into a luxurious furniture segment has been splendid, filled with the richness of talent and magnificence. Shouldering a responsibility to enhance our heritage further, we are committed to serving our clients with only the best in class experience.</p>
        </div>
    )
}

export default playvideo