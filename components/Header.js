/* eslint-disable @next/next/no-img-element */
import Router from 'next/router';
import React, { useState, useEffect } from 'react'
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selected, setselected] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Check if the page is scrolled
      if (window.pageYOffset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const route = (path) => {
    setselected(false)
    Router.push(path)
  }
  return (
    <div className={`px-[5rem] py-[1em] drop-shadow-md w-screen fixed top-0 z-50 text-gray-darker regular  justify-between transition-all duration-300 ease-out ${isScrolled ? "bg-white text-gray-darker" : "text-white"}`}>
     
      {/* navbar */}
      <div className='flex  items-center justify-between'>
        <img className='w-[10rem]' src='/logo.png' alt='logo' />
        <h1 onClick={() => setselected(true)} className={`tracking-[0.5rem] cursor-pointer transition-all duration-300 ease-out underline underline-offset-8 text-lg medium ${isScrolled ? "hover:text-gray-dark" : "hover:text-gray-darker"}`}>MENU</h1>
      </div>
      
      {/* navabar window */}
      <div className={`w-screen flex absolute text-gray-darker z-50 bg-[#f6f6f6] top-0 left-0  transition-all duration-500 ease-out h-screen ${selected ? "translate-y-0 " : "-translate-y-full"}`}>
        <RxCross2 onClick={() => setselected(false)} className='text-3xl cursor-pointer right-[3rem] top-[2rem] absolute ' />
        <div className='w-[25rem] h-full flex flex-col justify-between'>
          <img className='w-[15rem] mx-auto py-[5rem]' src='/logo.png' alt='logo' />
          <div className='flex flex-col justify-center items-center bg-white px-[3rem] py-[5rem] '>
            <p>3131 94th St, East Elmhurst, New York</p>
            <p>(808) 555-0111</p>
            <p>deanna.curtis@example.com</p>
            <div className='flex'>
            </div>
            <p className='text-[10px] text-gray-dark tracking-widest'>COPYRIGHT 2023 © TREZURE. ALL RIGHTS RESERVED.</p>
          </div>
        </div>

        <div className='mx-[10rem] flex flex-col justify-center gap-[3rem]'>
          <div className='text-4xl flex flex-col gap-[2rem] font-medium [&>*]:cursor-pointer'>
            <div onClick={() => route("/")} className='hover:text-brown-light transition-all duration-300 ease-out'>HOME</div>
            <div onClick={() => route("/story")} className='hover:text-brown-light transition-all duration-300 ease-out'>STORY</div>
            <div onClick={() => route("/collections")} className='hover:text-brown-light transition-all duration-300 ease-out'>COLLECTIONS</div>
            <div onClick={() => route("/projects")} className='hover:text-brown-light transition-all duration-300 ease-out'>PROJECTS</div>
            <div onClick={() => route("/blogs")} className='hover:text-brown-light transition-all duration-300 ease-out'>BLOGS</div>
            <div onClick={() => route("/contact-us")} className='hover:text-brown-light transition-all duration-300 ease-out'>CONTACT</div>
            <div className='flex text-xs gap-[2.5rem] mt-[4rem] text-gray-dark'>
              <button className='hover:text-gray-darker transition-all duration-300'>Terms & Conditions</button>
              <button className='hover:text-gray-darker transition-all duration-300'>Privacy Policy</button>
              <button className='hover:text-gray-darker transition-all duration-300'>Help Center</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Header