import React from 'react'
import { BiLogoFacebook, BiLogoInstagram, BiLogoPinterestAlt, BiLogoTwitter } from 'react-icons/bi'

const Social = () => {
    return (
        <div className='fixed h-screen max-sm:right-2 right-6 flex items-center'>
            <div className='flex flex-col [&>*]:bg-gray-darker [&>*]:text-[#fcfbfa] text-2xl [&>*]:border gap-[0.5rem] [&>*]:rounded-full [&>*]:p-1 [&>*]:border-gray-dark'>
                <div className='cursor-pointer hover:bg-white hover:text-gray-darker transition-all duration-300'><BiLogoFacebook /></div>
                <div className='cursor-pointer hover:bg-white hover:text-gray-darker transition-all duration-300'><BiLogoInstagram /></div>
                <div className='cursor-pointer hover:bg-white hover:text-gray-darker transition-all duration-300'><BiLogoPinterestAlt /></div>
                <div className='cursor-pointer hover:bg-white hover:text-gray-darker transition-all duration-300'><BiLogoTwitter /></div>
            </div>
        </div>
    )
}

export default Social