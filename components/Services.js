/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Fade } from 'react-awesome-reveal'
import Button from './Button'

const Category = () => {
  return (
    <div className='py-[4rem] text-gray-darker'>
      <div className=' w-[70rem] mx-auto pb-[1rem]'>
        <h2 className='text-[#c3b8a5] tracking-[0.4rem]'>OUR</h2>
        <h1 className='text-[40px] tracking-wider medium'>COLLECTIONS</h1>
      </div>
      <div className='flex tracking-wider w-[70rem] justify-between mx-auto medium text-xl'>
        <Fade triggerOnce cascade direction='up'>

          <div>
            <div className="relative w-[19rem] mb-4 overflow-hidden h-[18rem] pb-[100%] ">
              <img src="projects/1.jpg" alt="Your Image" className="absolute inset-0 hover:scale-105 ease-linear transition-all duration-300 w-full h-full object-cover" />
            </div>
            <h1>HOME</h1>
            <div className='mt-[1rem] '>
              <Button text={"know more"} path={"/collections#home"} />
            </div>
          </div>

          <div>
            <div className="relative w-[19rem] mb-4 overflow-hidden h-[18rem] pb-[100%] ">
              <img src="projects/2.jpg" alt="Your Image" className="absolute inset-0 hover:scale-105 ease-linear transition-all duration-300 w-full h-full object-cover" />
            </div>
            <h1>OUTDOOR</h1>
            <div className='mt-[1rem] '>
              <Button text={"know more"} path={"/collections#outdoor"} />
            </div>
          </div>

          <div>
            <div className="relative w-[19rem] mb-4 overflow-hidden h-[18rem] pb-[100%] ">
              <img src="projects/3.jpg" alt="Your Image" className="absolute inset-0 hover:scale-105 ease-linear transition-all duration-300 w-full h-full object-cover" />
            </div>
            <h1>OFFICE</h1>
            <div className='mt-[1rem] '>
              <Button text={"know more"} path={"/collections#office"} />
            </div>
          </div>
        </Fade>

      </div>

    </div>
  )
}

export default Category