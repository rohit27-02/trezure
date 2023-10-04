/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Banner from '../components/Banner'
import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';

const Contact = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [message, setmessage] = useState("");
    const [submitted, setsubmitted] = useState(false);
    const [toast, settoast] = useState(true);
    const handleSubmit = (e) => {
    }
    return (
        <div className='text-gray-darker'>
            {toast && <Fade><div className='fixed md:top-32 top-20 font-medium z-50 bg-white text-2xl p-6 rounded-xl max-sm:mx-auto md:right-20 '>feedback sent successfully ! 😀</div></Fade>}
            <Banner text={"Contact Us"} />
            <div className='max-sm:w-[20rem] w-[80vmax] flex max-sm:flex-col gap-[4rem] max-w-[90rem] py-8 md:my-[7rem] mx-auto'>
                <div className='md:w-[45%] gap-[1rem] flex flex-col'>
                    <h1 className='text-xl md:text-4xl medium'>YOUR INFORMATION</h1>
                    <form className='[&>*]:outline-none [&>*]:mt-[1rem] [&>*]:border-b [&>*]:w-full font-normal [&>*]:py-[0.5rem]'>
                        <input type='text' value={name} onChange={(e)=>setname(e.target.value)} placeholder='Full name' />
                        <input type='' value={phone} onChange={(e)=>setphone(e.target.value)} placeholder='Phone number' />
                        <input type='email' value={email} onChange={(e)=>setemail(e.target.value)} placeholder='Email Address' />
                        <textarea value={message} onChange={(e)=>setmessage(e.target.value)} className='h-[7rem]' placeholder='Leave a message' />
                    </form>
                    <button onClick={handleSubmit} className='text-lg px-[1rem] py-[0.5rem] border hover:bg-gray-darker hover:text-white transition-all duration-200 w-fit'>Send a message</button>
                </div>
                <div className='md:w-2/3'>
                    <iframe className="h-full" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=480&amp;height=450&amp;hl=en&amp;q=Building No. C-2, Gala No. 1 To 6, Bridge, Chamunda Complex, Taluka, Near Kasheli, Kalher, Bhiwandi, Thane, Maharashtra 421302&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contact