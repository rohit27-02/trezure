import React from 'react'

const contact = () => {
    return (
        <div className='text-gray-darker'>
            <div class="bg-[url('/banner.jpg')] h-[25rem] flex justify-center items-center medium text-white w-screen">
                <h1 className='text-[4.5rem]'>Contact Us</h1>
            </div>
            <div className='w-[80vmax] flex gap-[4rem] max-w-[90rem] my-[7rem] mx-auto'>
                <div className='w-[45%] gap-[1rem] flex flex-col'>
                    <h1 className='text-4xl medium'>YOUR INFORMATION</h1>
                    <form className='[&>*]:outline-none [&>*]:mt-[1rem] [&>*]:border-b [&>*]:w-full font-normal [&>*]:py-[0.5rem]'>
                        <input placeholder='Full name' />
                        <input placeholder='Phone number' />
                        <input placeholder='Email Address' />
                        <textarea className='h-[7rem]' placeholder='Leave a message' />
                    </form>
                    <button className='text-lg px-[1rem] py-[0.5rem] border hover:bg-gray-darker hover:text-white transition-all duration-200 w-fit'>Send a message</button>
                </div>
                <div className='w-2/3'>
                    <iframe className="h-full" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=480&amp;height=450&amp;hl=en&amp;q=University of Oxford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
            </div>
        </div>
    )
}

export default contact