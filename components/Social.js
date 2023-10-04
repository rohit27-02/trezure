import React from 'react'
import { BiLogoFacebook, BiLogoInstagram, BiLogoPinterestAlt, BiLogoLinkedin } from 'react-icons/bi'

const Social = () => {
    return (
        <div className='fixed h-screen max-sm:right-2 right-6 flex items-center'>
            <div className='flex flex-col [&>*]:bg-gray-darker [&>*]:text-[#fcfbfa] text-2xl [&>*]:border gap-[0.5rem] [&>*]:rounded-full [&>*]:p-1 [&>*]:border-gray-dark'>
                <a target='_blank' href='https://www.facebook.com/profile.php?id=61551207055491&mibextid=avESrC' className='cursor-pointer hover:bg-white hover:text-gray-darker transition-all duration-300'><BiLogoFacebook /></a>
                <a target='_blank' href='https://instagram.com/trezurecasa_?igshid=OGQ5ZDc2ODk2ZA==' className='cursor-pointer hover:bg-white hover:text-gray-darker transition-all duration-300'><BiLogoInstagram /></a>
                <a target='_blank' href='https://pin.it/1ZlahtC' className='cursor-pointer hover:bg-white hover:text-gray-darker transition-all duration-300'><BiLogoPinterestAlt /></a>
                <a target='_blank' href='https://www.linkedin.com/company/trezure-casa/' className='cursor-pointer hover:bg-white hover:text-gray-darker transition-all duration-300'><BiLogoLinkedin /></a>
            </div>
        </div>
    )
}

export default Social