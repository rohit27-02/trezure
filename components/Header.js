/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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
  return (
    <div className={`px-[5rem] py-[1.5rem] drop-shadow-md w-screen fixed top-0 z-50  justify-between transition-all duration-150 ease-linear ${isScrolled ? "bg-white text-gray-darker":"text-white"}`}>
      <div className='flex  items-center justify-between'>
        <img className='w-[8rem]' src='/logo.png' alt='logo' />
        <h1 className='tracking-[0.5rem] underline underline-offset-8 text-lg medium '>MENU</h1>
      </div>

    </div>
  )
}

export default Header