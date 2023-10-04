/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Button from './Button'
import { Fade } from 'react-awesome-reveal'

const Aboutus = () => {
    return (
        <div className='bg-gradient-to-r from-stone-200 via-stone-100 text-gray-darker  to-white'>
            <div className=' flex max-sm:flex-col gap-[2rem] justify-center items-center h-[40rem] md:h-[50rem] mx-auto '>
                <div className='relative max-sm:w-[20rem] max-sm:mr-[5rem] w-[40rem]'>
                    <Fade triggerOnce duration={2000} direction='up'>
                        <p className='absolute top-[12rem] -left-[3rem] max-sm:-left-[1rem] max-sm:top-[7rem]  -rotate-90 max-sm:text-5xl text-[6rem] bold bg-gradient-to-b from-white to-transparent text-transparent bg-clip-text'>ABOUT US</p>
                    </Fade>
                    <Fade triggerOnce direction='left' duration={2000}>
                        <img className='absolute max-sm:w-[7rem] w-[14rem] max-sm:left-[3rem] max-sm:top-[4rem] left-[2rem] top-[7rem] ' src='/banner2.jpg' alt='banner' />
                    </Fade>
                    <Fade triggerOnce direction='right' duration={2000}>
                        <img className='max-sm:w-[12rem] w-[24rem] float-right z-20' src='/banner.jpg' alt='banner' />
                    </Fade>
                </div>
                <div>
                    <div className='regular max-sm:w-[20rem] w-[25rem] float-right'>
                        <Fade triggerOnce direction='up' cascade duration={1500}>
                            <h2 className='text-[#c3b8a5] max-sm:text-xs tracking-[0.4rem]'>ABOUT US</h2>
                            <h1 className='text-[40px] max-sm:text-xl tracking-wider medium'>We are India&apos;s finest global furniture outlet spread across 65,000sq.ft.</h1>
                            <p className='text-gray-light max-sm:text-sm text-lg max-sm:my-[1rem] my-[2rem]'>We invite you to come and be part of a global lifestyle phenomenon by embellishing your space in a way that reflects your distinct taste and is aesthetically stunning— Because &quot;LUXURY IS UNIVERSAL.&quot;</p>
                            <Button text={"MORE ABOUT US"} path={"/story"} />
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutus