/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Fade } from 'react-awesome-reveal';



const Products = () => {

    return (
        <div className='text-gray-darker regular overflow-hidden'>

            <div className=' w-screen '>
                {/* section 1  */}
                <Fade direction='up' triggerOnce duration={3000}>
                    <div className='flex'>
                        <img className='max-sm:w-1/2 w-1/4' src="/products/2.jpg" alt='product' />
                        <div className='flex bg-[#fcfbfa] items-center max-sm:w-1/2 w-1/4 flex-col gap-[1rem] justify-center px-[2rem]'>
                            <h1 className='bold md:text-xl'>ARTIFACTS</h1>
                            <div className='w-[4rem] border-t-2 border-gray-darker'></div>
                           
                        </div>
                        <img className='w-1/4 max-sm:hidden' src="/artifact/vases.jpg" alt='product' />
                        <div className='flex bg-[#fcfbfa] items-center w-1/4 max-sm:hidden flex-col gap-[1rem] justify-center px-[2rem]'>
                            <h1 className='bold text-xl'>VASES</h1>
                            <div className='w-[4rem] border-t-2 border-gray-darker'></div>
                           
                        </div>
                    </div>
                </Fade>
                {/* section 2  */}
                <Fade direction='up' duration={3000} triggerOnce>
                    <div className='flex'>
                        <div className='flex max-sm:hidden bg-[#fcfbfa]  w-1/4 items-center flex-col gap-[1rem] justify-center px-[2rem]'>
                            <h1 className='bold text-xl'>WALL ART</h1>
                            <div className='w-[4rem] border-t-2 border-gray-darker'></div>
                           
                        </div>
                        <img className='w-1/4 max-sm:hidden' src="/artifact/wall-art.jpg" alt='product' />
                        <div className='flex bg-[#fcfbfa]  w-1/4 max-sm:w-1/2 flex-col items-center gap-[1rem] justify-center px-[2rem]'>
                            <h1 className='bold md:text-xl'>WALL CLOCK</h1>
                            <div className='w-[4rem] border-t-2 border-gray-darker'></div>
                           
                        </div>
                        <img className='w-1/4 max-sm:w-1/2' src="/artifact/wall-clock.jpg" alt='product' />
                    </div>

                </Fade>
            </div>
        </div >
    )
}

export default Products