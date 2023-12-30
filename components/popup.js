import React, { useState, useEffect } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { AiOutlineMail } from 'react-icons/ai';

const Popup = () => {
    const [popup, setpopup] = useState(false);
    const [show, setshow] = useState(false);
    const [email, setemail] = useState('');
    setTimeout(() => {
        if (typeof window !== 'undefined' && sessionStorage.getItem("popup")) {

        } else {
            setpopup(true)
        }
    }, 3000);

    const handleSubmit =()=>{
        
    }


    return (
        <div>
            {/* popup */}
            <div className={`w-screen h-screen -mt-8 fixed tracking-wider z-50 backdrop-blur-sm text-gray-darker bg-transparent justify-center items-center ${popup ? "flex" : "hidden"}`}>
                <div className='bg-white relative p-[5rem] flex flex-col drop-shadow-xl gap-[2rem] max-sm:w-[24rem] w-[35rem] text-center  justify-center items-center'>
                    <RxCross2 onClick={() => { sessionStorage.setItem("popup", show); setpopup(false) }} className='absolute text-brown-light transition-all duration-300 hover:text-gray-darker text-3xl cursor-pointer right-[1rem] top-[1rem]' />
                    <h1 className='text-2xl bold text-brown-light tracking-widest underline-offset-8 underline'>Newsletter</h1>
                    <p className='lighter text-dark'>Enter your email address to subscribe our notification of our new post & features by email</p>
                    <div className='border-b flex text-lg'>
                        <input type='email' onChange={(e)=>setemail(e.target.value)} value={email} placeholder='Enter Your Email...' className='outline-none w-[20rem] focus:text-gray-dark bg-transparent py-[0.5rem] border-none' />
                        <button onClick={handleSubmit}><AiOutlineMail className='text-brown-light text-2xl hover:text-gray-darker transition-all duration-300' /></button>
                    </div>

                    <div className="flex  items-center">
                        <input onClick={() => setshow(true)} id="link-checkbox" type="checkbox" value={show} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="link-checkbox" className="ml-2 text-sm lighter font-medium text-gray-dark">Don&apos;t show this popup again .</label>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Popup