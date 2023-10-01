/* eslint-disable @next/next/no-img-element */
import { GoArrowDownRight } from "react-icons/go"
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Router from "next/router";

const Collections = () => {
    const [scrollY, setScrollY] = useState(0);

    const controly = useAnimation();
    const controlx = useAnimation();
    const controlxminus = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        controly.start({
            y: 1 - scrollY / 6, // Adjust the range and animation properties as needed
        });
        controlx.start({
            x: 1 - scrollY / 6, // Adjust the range and animation properties as needed
        });
        controlxminus.start({
            x: scrollY / 6, // Adjust the range and animation properties as needed
        });

    }, [scrollY, controly, controlx, controlxminus]);


    return (
        <div className='overflow-hidden '>
            <div className='bg-[url("/banner.jpg")] w-full h-[110vmin] relative max-h-[60rem] md:ml-[10rem]'>
                <h1 className='absolute bottom-[6rem] md:tracking-[1rem] md:text-5xl w-fit p-[2rem] md:p-[4rem] text-xl bg-white text-gray-darker medium text-right md:leading-[4rem]'>DECORE<br></br> YOUR <br></br>DREAMS<br /><GoArrowDownRight className='float-right md:text-7xl' /></h1>
            </div>
            <div className='text-gray-light '>
                <div id="home" className=''>
                    <div className='flex max-sm:flex-col-reverse items-center max-sm:py-10 h-[110vh] max-sm:gap-[8rem] md:h-screen max-sm:w-[24rem] w-[80vmax] max-w-[90rem] mx-auto'>
                        <div className='w-[20rem] md:w-2/5'>
                            <h1 className='medium mb-[0.5rem] text-[40px] text-gray-darker'>HOME</h1>
                            <p>Gorgeous range of global furniture infused with character and charm galore— seamlessly fitting into your first and second homes and equally enticing for a contemporary setting.
                                The most extensive assortment of home furniture collection laced with contemporary designs, trending in the international circles and built to last.
                                Stunning, superb, and stylish porch furniture collection to bring your outdoors to life.</p>
                            <button onClick={()=>Router.push("/collections/home")} className='text-sm transition-all duration-200 text-[#c3b8a5] underline underline-offset-8 tracking-[0.4rem] hover:text-gray-darker mt-[2.5rem]'>DISCOVER MORE</button>
                        </div>
                        <div className="relative">
                            <img src="/animation/sofa.png" className="max-sm:w-[14rem] max-sm:ml-[1rem] w-[24rem] ml-[10rem]" alt="sofa" />
                            <motion.img
                                src="/animation/table.png"
                                alt="Animated Image"
                                className="transition-all duration-300 ease-linear max-sm:w-[8rem] w-[14rem] max-sm:left-[4rem] left-[14rem] md:top-[15rem] absolute "
                                initial={{ opacity: 100, y: 0 }}
                                animate={controly}
                            />
                            <motion.img
                                src="/animation/lamp.png"
                                alt="Animated Image"
                                className="transition-all duration-300 ease-linear max-sm:w-[6rem] w-[8rem] right-[1rem] -top-[10rem] -z-10 absolute"
                                initial={{ opacity: 100, x: 0 }}
                                animate={controlxminus}
                            />
                            <motion.img
                                src="/animation/plant.png"
                                alt="Animated Image"
                                className="transition-all duration-300 ease-linear w-[6rem] md:w-[8rem] md:left-[10rem] -top-[6rem] absolute"
                                initial={{ opacity: 100, x: 0 }}
                                animate={controlx}
                            />
                        </div>
                    </div>
                </div>
                <div id="outdoor" className='bg-stone-100'>
                    <div className='flex max-sm:flex-col-reverse max-sm:w-[24rem] max-sm:py-10 flex-row-reverse text-right items-center h-[80vh] max-sm:gap-[8rem] md:h-screen w-[80vmax] max-w-[90rem] mx-auto'>
                        <div className='w-[20rem] md:w-1/2'>
                            <h1 className='medium mb-[0.5rem] text-[40px] text-gray-darker'>OUTDOOR</h1>
                            <p>An impressive variety of patio furniture and accent pieces to impart a similar sense of sophistication and poise to your outdoor space that is found inside your home.
                                Lose track of time in the company of your loved ones, lazing comfortably in our hand-picked global outdoor furniture range.
                                Stunning and Ergonomic assortments sourced from the globally renowned designer furniture brands.</p>
                            <button onClick={()=>Router.push("/collections/outdoor")} className='text-sm transition-all duration-200 text-[#c3b8a5] underline underline-offset-8 tracking-[0.4rem] hover:text-gray-darker mt-[2.5rem]'>DISCOVER MORE</button>
                        </div>
                        <div></div>
                    </div>
                </div>
                <div id="office" className=''>
                    <div className='flex max-sm:flex-col-reverse items-center max-sm:py-10 h-[80vh] max-sm:gap-[8rem] md:h-screen max-sm:w-[24rem] w-[80vmax] max-w-[90rem] mx-auto'>
                        <div className='w-[20rem] md:w-1/2'>
                            <h1 className='medium mb-[0.5rem] text-[40px] text-gray-darker'>OFFICE</h1>
                            <p>A contemporary collection of internationally trending office furniture that is both comfortable and stylish.
                                Ergonomic and luxurious office furniture designs that boost productivity and have the personality of their own</p>
                            <button onClick={()=>Router.push("/collections/office")} className='text-sm transition-all duration-200 text-[#c3b8a5] underline underline-offset-8 tracking-[0.4rem] hover:text-gray-darker mt-[2.5rem]'>DISCOVER MORE</button>
                        </div>
                        <div className="relative">
                            <img src="/animation/office-table.png" className="w-[16rem] md:w-[24rem] md:ml-[10rem]" alt="table" />
                            <motion.img
                                src="/animation/chair.png"
                                alt="Animated Image"
                                className="transition-all duration-300 ease-linear w-[6rem] md:w-[12rem] left-[4rem] md:left-[14rem] top-[17rem] md:top-[15rem] absolute "
                                initial={{ opacity: 100, y: 0 }}
                                animate={controly}
                            />
                            <motion.img
                                src="/animation/office-plant.png"
                                alt="Animated Image"
                                className="transition-all duration-300 ease-linear w-[6rem] md:w-[12rem] -left-[20rem] md:-left-[20rem] -top-[1rem] md:-top-[7rem] absolute"
                                initial={{ opacity: 100, x: 0 }}
                                animate={controlxminus}
                            />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collections