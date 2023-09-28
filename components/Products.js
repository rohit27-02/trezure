/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { Fade } from 'react-awesome-reveal';

// const PRODUCTS = [
//     { "img": "/products/6-Drawer-Dresser.jpg", "name": "6-Drawer Dresser", "price": "3000", "type": "Living Room" },
//     { "img": "/products/Black-2-Drawer-Nightstand.jpg", "name": "6-Drawer Dresser", "price": "3000", "type": "Living Room" },
//     { "img": "/products/Desk-with-Outlet.jpg", "name": "6-Drawer Dresser", "price": "3000", "type": "Living Room" },
//     { "img": "/products/Edge-Coupe-Glass.jpg", "name": "6-Drawer Dresser", "price": "3000", "type": "Living Room" },
//     { "img": "/products/Grey-Outdoor-Lounge-Chair.jpg", "name": "6-Drawer Dresser", "price": "3000", "type": "Living Room" },
//     { "img": "/products/Grotta-Outdoor-Wicker-Sofa.jpg", "name": "6-Drawer Dresser", "price": "3000", "type": "Living Room" },
//     { "img": "/products/Natural-Baby-Crib.jpg", "name": "6-Drawer Dresser", "price": "3000", "type": "Living Room" },
//     { "img": "/products/Roll-Arm-Queen-Sleeper-Sofa.jpg", "name": "6-Drawer Dresser", "price": "3000", "type": "Living Room" },
// ]

const Products = () => {
    const [category, setcategory] = useState("Living Room");
    return (
        <div className='text-gray-darker regular overflow-hidden'>

            {/* old products */}
            {/* <div className=''>
                <h2 className='text-[#c3b8a5] leading-loose tracking-[0.4rem]'>OUR PRODUCTS</h2>
                <div className='flex text-lg justify-between text-gray-light'>
                    <h1 className='text-[40px] text-gray-darker tracking-wider medium'>LATEST PRODUCTS</h1>
                    <div className='flex [&>*]:mx-[1.8rem]'>
                        <button onClick={()=>setcategory("Living Room")} className={`hover:text-gray-darker ${category=="Living Room"?'text-[#c3b8a5a]':''}`}>Living Room</button>
                        <button onClick={()=>setcategory("Bed Room")} className={`hover:text-gray-darker ${category=="Bed Room"?'text-[#c3b8a5a]':''}`}>Bed Room</button>
                        <button onClick={()=>setcategory("Kitchen Room")} className={`hover:text-gray-darker ${category=="Kitchen Room"?'text-[#c3b8a5a]':''}`}>Kitchen Room</button>
                        <button onClick={()=>setcategory("Office Room")} className={`hover:text-gray-darker ${category=="Office Room"?'text-[#c3b8a5a]':''}`}>Office Room</button>
                    </div>
                </div>
            </div> */}

            {/* <div className='py-[6vmax] justify-center flex flex-wrap gap-[2rem]'>
                {PRODUCTS.filter((product) => product.type == category).map((product) => {
                    return <div key={product.name} className='max-w-[20rem] w-[18vmax] '>
                        <div>
                            <img src={product.img} alt={product.name}/>
                        </div>
                        <p className='pt-[1.5rem]'>{product.name}</p>
                        <p className='text-lg text-[#888888]'>₹ {product.price}</p>
                    </div>
                })}
            </div> */}

            <div className=' w-screen '>
                <Fade direction='up' triggerOnce duration={3000}>
                    {/* section 1  */}
                    <div className='flex'>
                        <img className='w-1/4' src="/products/lamp.jpg" alt='product' />
                        <div className='flex bg-[#fcfbfa]  w-1/4 flex-col gap-[1rem] justify-center px-[2rem]'>
                            <h1 className='bold text-xl'>TABLE LAMPS</h1>
                            <div className='w-[4rem] border-t-2 border-gray-darker'></div>
                            <p className='text-gray-light text-sm tracking-wide'>Etiam dignissim diam quis enim. Proin sagittis nisl rhoncus mattis rhoncus urna neque. Tempus iaculis urna id volutpat.</p>
                        </div>
                        <img className='w-1/4' src="/products/cupboard.jpg" alt='product' />
                        <div className='flex bg-[#fcfbfa]  w-1/4 flex-col gap-[1rem] justify-center px-[2rem]'>
                            <h1 className='bold text-xl'>SIDEBOARDS</h1>
                            <div className='w-[4rem] border-t-2 border-gray-darker'></div>
                            <p className='text-gray-light text-sm tracking-wide'>Etiam dignissim diam quis enim. Proin sagittis nisl rhoncus mattis rhoncus urna neque. Tempus iaculis urna id volutpat.</p>
                        </div>
                    </div>
                </Fade>
                <Fade direction='up' duration={3000} triggerOnce>
                    {/* section 2  */}
                    <div className='flex'>
                        <div className='flex bg-[#fcfbfa]  w-1/4 flex-col gap-[1rem] justify-center px-[2rem]'>
                            <h1 className='bold text-xl'>SLEEPER SOFA</h1>
                            <div className='w-[4rem] border-t-2 border-gray-darker'></div>
                            <p className='text-gray-light text-sm tracking-wide'>Etiam dignissim diam quis enim. Proin sagittis nisl rhoncus mattis rhoncus urna neque. Tempus iaculis urna id volutpat.</p>
                        </div>
                        <img className='w-1/4' src="/products/sofa.jpg" alt='product' />
                        <div className='flex bg-[#fcfbfa]  w-1/4 flex-col gap-[1rem] justify-center px-[2rem]'>
                            <h1 className='bold text-xl'>NIGHTSTANDS</h1>
                            <div className='w-[4rem] border-t-2 border-gray-darker'></div>
                            <p className='text-gray-light text-sm tracking-wide'>Etiam dignissim diam quis enim. Proin sagittis nisl rhoncus mattis rhoncus urna neque. Tempus iaculis urna id volutpat.</p>
                        </div>
                        <img className='w-1/4' src="/products/table.jpg" alt='product' />
                    </div>

                </Fade>
            </div>

            {/* <div className='w-fit mx-auto'>
                <Button text={"MORE PRODUCTS"} callback={() => { }} />
            </div> */}
        </div >
    )
}

export default Products