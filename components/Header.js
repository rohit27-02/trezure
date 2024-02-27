/* eslint-disable @next/next/no-img-element */
import Router, { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react'
import { Fade } from 'react-awesome-reveal';
import { RxCross2 } from "react-icons/rx";
import Social from './Social';
import Link from 'next/link';

const Header = () => {
  const [selected, setselected] = useState(false)
  const router = useRouter();
  useEffect(() => {
    setselected(false)
  }, [router.pathname]);

  return (
    <div className={`md:px-[5rem] px-[1rem] drop-shadow-md w-screen fixed top-0 z-50  regular  justify-between transition-all duration-300 ease-out bg-white text-gray-darker`}>

      {/* social link  */}
      <Social />

      {/* navbar */}
      <div className='flex  items-center justify-between'>
        <Link href={"/"}><img className={`md:w-[8rem] py-[1rem] w-[7rem] cursor-pointer transition-all duration-300 `} src='/logo.png' alt='logo' /></Link>
        <h2 onClick={() => setselected(true)} className={`tracking-[0.5rem] cursor-pointer transition-all duration-300 ease-out underline underline-offset-8 md:text-lg text-sm medium `}>MENU</h2>
      </div>

      {/* navabar window */}
      <div className={`w-screen flex absolute text-gray-darker z-50 bg-[#f6f6f6] top-0 left-0  transition-all duration-500 ease-out h-screen ${selected ? "translate-y-0 " : "-translate-y-full"}`}>
        <RxCross2 onClick={() => setselected(false)} className='text-3xl cursor-pointer right-[3rem] top-[2rem] absolute ' />
        <div className='w-[25rem] h-full max-sm:hidden flex flex-col justify-between'>
          <Link href={"/"}><img className='w-[12rem] cursor-pointer mx-auto py-[3rem]' src='/logo.png' alt='logo' /></Link>
          <div className='flex flex-col justify-center text-center gap-2 items-center bg-[#f3f4f6] px-[3rem] py-[5rem] '>
            <p>Building No. C-2, Gala No. 1 to 6, Near Kasheli Bridge, Chamunda Complex, Kasheli, Bhiwandi Taluka, Thane(W), Maharashtra 421302
            </p>
            <p>8097019222
            </p>
            <span className='hover:text-brown-light'>contact@trezurecasa.com</span>
            <p className='text-[10px] text-gray-dark mt-[1rem] tracking-widest'>COPYRIGHT 2024 © TREZURE. ALL RIGHTS RESERVED.</p>
          </div>
        </div>

        <div className='md:mx-[10rem] mx-[4rem] flex flex-col  justify-evenly'>
          <div className='text-2xl flex flex-col gap-[1.5rem] font-medium [&>*]:cursor-pointer'>
            <Fade duration={500} direction='up' cascade >
              <Link href={"/"} className='hover:text-brown-light transition-all duration-300 ease-out'>HOME</Link>
              <Link href={"/story"} className='hover:text-brown-light transition-all duration-300 ease-out'>STORY</Link>
              <Link href={"/collections"} className='hover:text-brown-light transition-all duration-300 ease-out'>COLLECTIONS</Link>
              <Link href={"/projects"} className='hover:text-brown-light transition-all duration-300 ease-out'>PROJECTS</Link>
              <Link href={"/blogs"} className='hover:text-brown-light transition-all duration-300 ease-out'>BLOGS</Link>
              <Link href={"/contact-us"} className='hover:text-brown-light transition-all duration-300 ease-out'>CONTACT US</Link>
              <Link href={"/media-&-events"} className='hover:text-brown-light transition-all duration-300 ease-out'>MEDIA & EVENTS</Link>
            </Fade>
          </div>
          <div className='flex text-xs  gap-[2.5rem]  md:mt-[4rem] text-gray-dark'>
            <button className='hover:text-gray-darker transition-all duration-300'>Terms & Conditions</button>
            <button className='hover:text-gray-darker transition-all duration-300'>Privacy Policy</button>
            <button className='hover:text-gray-darker transition-all duration-300'>Help Center</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Header