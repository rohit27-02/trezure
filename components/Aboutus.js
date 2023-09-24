/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Button from './Button'

const Aboutus = () => {
    return (
        <div className='bg-gradient-to-r from-stone-200 via-stone-100 text-gray-darker  to-white'>
            <div className=' flex gap-[2rem] justify-center items-center h-[50rem] mx-auto '>
                <div className='relative w-[40rem]'>
                    <p className='absolute top-[12rem] -left-[3rem]  -rotate-90 text-[6rem] bold bg-gradient-to-b from-white to-transparent text-transparent bg-clip-text'>ABOUT US</p>
                    <img className='absolute  w-[14rem] left-[2rem] top-[7rem] ' src='/banner2.jpg' alt='banner'/>
                    <img className=' w-[24rem] float-right z-20' src='/banner.jpg' alt='banner'/>
                </div>
                <div>
                    <div className='regular w-[25rem] float-right'>
                        <h2 className='text-[#c3b8a5] tracking-[0.4rem]'>ABOUT US</h2>
                        <h1 className='text-[40px] tracking-wider medium'>BEST FURNITURE AT THE BEST PRICE</h1>
                        <p className='text-gray-light text-lg my-[2rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet lectus proin</p>
                        <Button text={"MORE ABOUT US"} callback={()=>{}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutus