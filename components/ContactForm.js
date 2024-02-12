/* eslint-disable @next/next/no-img-element */
import React,{useState} from 'react'
import { Fade } from 'react-awesome-reveal'

const ContactForm = () => {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');
    const [message, setmessage] = useState('');

    const handleSubmit = ()=>{

    }
    return (
        <div className='relative overflow-hidden h-[35rem] md:h-[40rem]'>
            <img src='/contactform.jpg' alt='backgroun img' className='w-screen '/>
            <Fade triggerOnce duration={2000} direction='up'  className='md:w-[26rem] w-[20rem] float-right p-[2rem] gap-[1rem] absolute top-[3rem] right-[3rem] flex text-gray-100 bg-gray-darker/75 backdrop-blur drop-shadow-md flex-col'>
            <div>
                <h2 className='md:text-4xl text-xl medium'>Your Information</h2>
                <form className='[&>*]:outline-none [&>*]:mt-[1rem] max-sm:text-sm [&>*]:bg-transparent [&>*]:placeholder-gray-100 [&>*]:border-b [&>*]:w-[95%]  font-normal [&>*]:py-[0.5rem]'>
                    <input onChange={(e)=>setname(e.target.value)} value={name} type='text' placeholder='Full name' />
                    <input onChange={(e)=>setphone(e.target.value)} value={phone} type='tel' placeholder='Phone number' />
                    <input onChange={(e)=>setemail(e.target.value)} value={email} type='email' placeholder='Email Address' />
                    <textarea className='h-[7rem]' onChange={(e)=>setmessage(e.target.value)} value={message} placeholder='Leave a message' />
                </form>
                <button onClick={handleSubmit} className='md:text-lg px-[1rem] my-[1rem] py-[0.5rem] border hover:bg-brown-light hover:drop-shadow-xl hover:border-gray-darker transition-all duration-200 w-fit'>DOWNLOAD BROCHURE</button>
            </div>
            </Fade>
        </div>
    )
}

export default ContactForm