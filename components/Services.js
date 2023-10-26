/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Fade } from 'react-awesome-reveal'
import Button from './Button'

const Category = () => {
  return (
    <div className='py-[4rem] max-sm:py-[2rem] max-sm:text-xs text-gray-darker'>
      <div className='max-sm:w-[20rem] text-center w-[70rem] mx-auto pb-[2.5rem]'>
        <h2 className='text-[#c3b8a5]  tracking-[0.4rem]'>OUR</h2>
        <h1 className='md:text-[32px] text-xl tracking-wider medium'>COLLECTIONS</h1>
      </div>
      <div className='flex max-sm:flex-col max-sm:gap-[2rem] tracking-wider max-sm:w-[20rem] justify-center w-[70rem] gap-[8rem] mx-auto medium text-xl'>
        <Fade triggerOnce cascade direction='up'>

          <div>
            <div className="relative w-[19rem] mb-4 overflow-hidden h-[18rem] pb-[100%] ">
              <img src="projects/1.jpg" alt="Your Image" className="absolute inset-0 hover:scale-105 ease-linear transition-all duration-300 w-full h-full object-cover" />
            </div>
            <h1 className='max-sm:text-sm'>HOME</h1>
            <div className='mt-[1rem] '>
              <Button text={"know more"} path={"/collections#home"} />
            </div>
          </div>

          <div>
            <div className="relative w-[19rem] mb-4 overflow-hidden h-[18rem] pb-[100%] ">
              <img src="projects/2.jpg" alt="Your Image" className="absolute inset-0 hover:scale-105 ease-linear transition-all duration-300 w-full h-full object-cover" />
            </div>
            <h1 className='max-sm:text-sm'>OUTDOOR</h1>
            <div className='mt-[1rem] '>
              <Button text={"know more"} path={"/collections#outdoor"} />
            </div>
          </div>

          {/* office  */}

          {/* <div>
            <div className="relative w-[19rem] mb-4 overflow-hidden h-[18rem] pb-[100%] ">
              <img src="projects/3.jpg" alt="Your Image" className="absolute inset-0 hover:scale-105 ease-linear transition-all duration-300 w-full h-full object-cover" />
            </div>
            <h1 className='max-sm:text-sm'>OFFICE</h1>
            <div className='mt-[1rem] '>
              <Button text={"know more"} path={"/collections#office"} />
            </div>
          </div> */}
        </Fade>

      </div>

    </div>
  )
}

export default Category