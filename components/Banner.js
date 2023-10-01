/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Banner = ({text}) => {
  return (
    <div>{/* banner */}
    <div className='w-full md:h-[30rem] relative overflow-hidden flex justify-center items-center'>
      <img src='/contactform.jpg' className='object-contain w-full brightness-50' alt='banner image' />
      <h1 className='text-2xl md:text-[4.5rem] capitalize text-gray-200 drop-shadow absolute medium tracking-widest'>{text}</h1>
    </div></div>
  )
}

export default Banner