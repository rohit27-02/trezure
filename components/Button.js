import Link from 'next/link'
import React from 'react'

const Button = ({text,path}) => {
  return (
    <Link href={path} className='flex relative flex-col group justify-center hover:drop-shadow-md lighter cursor-pointer items-center w-[10rem] h-14'>
      <div className='border-t border-l border-r top-1 group-hover:top-0 absolute h-4 w-full group-hover:h-7 group-hover:border-brown-light transition-all duration-300 ease-linear'></div>
      <p className='group-hover:text-brown-light  transition-all  duration-300'>{text}</p>
      <div className='border-b border-l border-r bottom-1 group-hover:bottom-0 absolute h-4 w-full group-hover:h-7 group-hover:border-brown-light transition-all duration-300 ease-linear'></div>
    </Link>
  )
}

export default Button