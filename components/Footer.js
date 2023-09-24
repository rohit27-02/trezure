/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { BiLogoTwitter, BiLogoPinterestAlt, BiLogoInstagram, BiLogoFacebook } from "react-icons/bi";

const Footer = () => {
  return (
    <div className='h-[28.5rem] lighter bg-gray-darker'>
      <div className='flex flex-col text-white py-[4.5rem] gap-[1rem] justify-center items-center'>
        <img className='w-[10rem]' src="/logo.png" alt="logo" />
        <h1 className='text-2xl text-center tracking-widest'>Subscribe to get<br></br> our NewsLetter</h1>
        <div className='border-b text-lg'>
          <input type='email' placeholder='Enter Your Email...' className='outline-none w-[30rem] focus:text-white bg-transparent py-[0.5rem] border-none' />
          <button><AiOutlineMail className='text-gray-light text-2xl hover:text-white transition-all duration-300' /></button>
        </div>
      </div>
      <div className='border-t border-gray-dark text-gray-light lighter py-[1rem]'>
        <div className='flex w-[85vmax] max-w-[90rem] justify-between mx-auto'>
          <div className='flex text-2xl [&>*]:border gap-[0.5rem] [&>*]:rounded-full [&>*]:p-1 [&>*]:border-gray-dark'>
            <div className='cursor-pointer hover:bg-white hover:text-gray-darker transition-all duration-300'><BiLogoFacebook /></div>
            <div className='cursor-pointer hover:bg-white hover:text-gray-darker transition-all duration-300'><BiLogoInstagram /></div>
            <div className='cursor-pointer hover:bg-white hover:text-gray-darker transition-all duration-300'><BiLogoPinterestAlt /></div>
            <div className='cursor-pointer hover:bg-white hover:text-gray-darker transition-all duration-300'><BiLogoTwitter /></div>
          </div>
          <div className='flex text-lg gap-[2rem]'>
            <button className='hover:text-white transition-all duration-300'>About</button>
            <button className='hover:text-white transition-all duration-300'>Licenses</button>
            <button className='hover:text-white transition-all duration-300'>FAQs</button>
            <button className='hover:text-white transition-all duration-300'>Policies</button>
            <button className='hover:text-white transition-all duration-300'>Contact</button>
          </div>
        </div>
        <h2 className='tracking-[0.2rem] mt-[2rem] w-fit mx-auto text-xs'>COPYRIGHT 2022 © TREZURE. ALL RIGHTS RESERVED.</h2>
      </div>

    </div>
  )
}

export default Footer