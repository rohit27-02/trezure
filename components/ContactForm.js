/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Fade } from 'react-awesome-reveal'

const ContactForm = () => {
    return (
        <div className='relative overflow-hidden h-[40rem]'>
            <img src='/contactform.jpg' alt='backgroun img' className='w-screen '/>
            <Fade triggerOnce duration={2000} direction='up'  className='w-[26rem] float-right p-[2rem] gap-[1rem] absolute top-[3rem] right-[3rem] flex text-gray-100 bg-gray-darker/75 backdrop-blur drop-shadow-md flex-col'>
            <div>
                <h1 className='text-4xl medium'>Your Information</h1>
                <form className='[&>*]:outline-none [&>*]:mt-[1rem] [&>*]:bg-transparent [&>*]:placeholder-gray-100 [&>*]:border-b [&>*]:w-[95%]  font-normal [&>*]:py-[0.5rem]'>
                    <input placeholder='Full name' />
                    <input placeholder='Phone number' />
                    <input placeholder='Email Address' />
                    <textarea className='h-[7rem]' placeholder='Leave a message' />
                </form>
                <button className='text-lg px-[1rem] my-[1rem] py-[0.5rem] border hover:bg-brown-light hover:drop-shadow-xl hover:border-gray-darker transition-all duration-200 w-fit'>DOWNLOAD BROCHURE</button>
            </div>
            </Fade>
        </div>
    )
}

export default ContactForm