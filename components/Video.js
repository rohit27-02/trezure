import React from 'react'

const playvideo = () => {
    return (
        <div className='flex justify-center regular tracking-[0.5rem] text-xl max-sm:text-sm text-white items-center'>
            <video className='md:h-[33rem] relative brightness-90 w-screen object-cover' autoPlay={true} muted={true} loop  >
                <source className='' src="video.mp4" type="video/mp4" />
            </video>
            <div className='absolute  '>
                <h1 className='cursor-pointer hover:text-brown-light transition-all duration-300'>PLAY VIDEO</h1>
            </div>
                <p className='absolute mt-[20rem] max-sm:hidden tracking-normal min-w-fit'>Viverra nibh cras pulvinar mattis nunc sed blandit.</p>
        </div>
    )
}

export default playvideo