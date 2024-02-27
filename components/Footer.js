/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Router from 'next/router';
import React,{useState} from 'react';
import { AiOutlineMail } from "react-icons/ai";
import {  BiLogoPinterestAlt, BiLogoInstagram, BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";

const Footer = () => {
  const [email, setemail] = useState('');
  const handleSubmit =()=>{

  }
  return (
    <div className='max-sm:h-[54rem] h-[31rem] lighter bg-gray-darker'>
      <div className='flex flex-col text-white py-[4.5rem] gap-[1rem] justify-center items-center'>
        <img className='w-[10rem] invert' src="/logo.png" alt="logo" />
        <h2 className='text-2xl text-center tracking-widest'>Subscribe to get<br></br> our NewsLetter</h2>
        <div className='border-b text-lg'>
          <input onChange={(e)=>setemail(e.target.value)} type='email' placeholder='Enter Your Email...' className='outline-none w-[20rem] md:w-[30rem] focus:text-white bg-transparent py-[0.5rem] border-none' />
          <button onClick={handleSubmit}><AiOutlineMail className='text-gray-light text-2xl hover:text-white transition-all duration-300' /></button>
        </div>
      </div>
      <div className='border-t border-gray-dark text-gray-light lighter py-[1rem]'>
        <div className='flex max-sm:flex-col max-sm:w-[20rem] w-[85vmax] max-w-[90rem] justify-between mx-auto'>
          <div className='flex max-sm:mx-auto max-sm:mb-4 text-2xl [&>*]:border gap-[0.5rem] [&>*]:rounded-full [&>*]:p-1 [&>*]:border-gray-dark'>
            <a target='_blank' href='https://www.facebook.com/profile.php?id=61551207055491&mibextid=avESrC' className='cursor-pointer hover:bg-white hover:text-gray-darker transition-all duration-300'><BiLogoFacebook /></a>
            <a target='_blank' href='https://instagram.com/trezurecasa_?igshid=OGQ5ZDc2ODk2ZA==' className='cursor-pointer hover:bg-white hover:text-gray-darker transition-all duration-300'><BiLogoInstagram /></a>
            <a target='_blank' href='https://pin.it/1ZlahtC' className='cursor-pointer hover:bg-white hover:text-gray-darker transition-all duration-300'><BiLogoPinterestAlt /></a>
            <a target='_blank' href='https://www.linkedin.com/company/trezure-casa/' className='cursor-pointer hover:bg-white hover:text-gray-darker transition-all duration-300'><BiLogoLinkedin /></a>
          </div>
          <div className='flex max-sm:flex-col text-lg gap-[2rem]'>
            <Link href={"/story"} className='hover:text-white transition-all duration-300'>About</Link>
            <Link href={"/"} className='hover:text-white transition-all duration-300'>Licenses</Link>
            <Link href={"/"} className='hover:text-white transition-all duration-300'>Policies</Link>
            <Link href={"/contact-us"} className='hover:text-white transition-all duration-300'>Contact</Link>
          </div>
        </div>
        <h2 className='tracking-[0.2rem] mt-[2rem] max-sm:text-center w-fit mx-auto text-xs'>COPYRIGHT 2024 © TREZURE. ALL RIGHTS RESERVED.</h2>
      </div>

    </div>
  )
}

export default Footer