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
                        <img className='max-sm:w-1/2 w-1/4' src="/products/lamp.jpg" alt='product' />
                        <div className='flex bg-[#fcfbfa]  max-sm:w-1/2 w-1/4 flex-col gap-[1rem] justify-center px-[2rem]'>
                            <h1 className='bold md:text-xl'>TABLE LAMPS</h1>
                            <div className='w-[4rem] border-t-2 border-gray-darker'></div>
                            <p className='text-gray-light max-sm:text-xs text-sm tracking-wide'>Etiam dignissim diam quis enim. Proin sagittis nisl rhoncus mattis rhoncus urna neque. Tempus iaculis urna id volutpat.</p>
                        </div>
                        <img className='w-1/4 max-sm:hidden' src="/products/cupboard.jpg" alt='product' />
                        <div className='flex bg-[#fcfbfa]  w-1/4 max-sm:hidden flex-col gap-[1rem] justify-center px-[2rem]'>
                            <h1 className='bold text-xl'>SIDEBOARDS</h1>
                            <div className='w-[4rem] border-t-2 border-gray-darker'></div>
                            <p className='text-gray-light text-sm  tracking-wide'>Etiam dignissim diam quis enim. Proin sagittis nisl rhoncus mattis rhoncus urna neque. Tempus iaculis urna id volutpat.</p>
                        </div>
                    </div>
                </Fade>
                {/* section 2  */}
                <Fade direction='up' duration={3000} triggerOnce>
                    <div className='flex'>
                        <div className='flex max-sm:hidden bg-[#fcfbfa]  w-1/4 flex-col gap-[1rem] justify-center px-[2rem]'>
                            <h1 className='bold text-xl'>SLEEPER SOFA</h1>
                            <div className='w-[4rem] border-t-2 border-gray-darker'></div>
                            <p className='text-gray-light text-sm tracking-wide'>Etiam dignissim diam quis enim. Proin sagittis nisl rhoncus mattis rhoncus urna neque. Tempus iaculis urna id volutpat.</p>
                        </div>
                        <img className='w-1/4 max-sm:hidden' src="/products/sofa.jpg" alt='product' />
                        <div className='flex bg-[#fcfbfa]  w-1/4 max-sm:w-1/2 flex-col gap-[1rem] justify-center px-[2rem]'>
                            <h1 className='bold md:text-xl'>NIGHTSTANDS</h1>
                            <div className='w-[4rem] border-t-2 border-gray-darker'></div>
                            <p className='text-gray-light max-sm:text-xs text-sm tracking-wide'>Etiam dignissim diam quis enim. Proin sagittis nisl rhoncus mattis rhoncus urna neque. Tempus iaculis urna id volutpat.</p>
                        </div>
                        <img className='w-1/4 max-sm:w-1/2' src="/products/table.jpg" alt='product' />
                    </div>

                </Fade>
            </div>
        </div >
    )
}

export default Products