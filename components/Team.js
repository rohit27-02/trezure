/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Button from './Button'
import { Fade } from 'react-awesome-reveal'

const Members = [
    { "name": "Carl", "img": "/members/1.jpeg", "title": "CEO" },
    { "name": "Carl", "img": "/members/1.jpeg", "title": "CEO" },
    { "name": "Carl", "img": "/members/1.jpeg", "title": "CEO" },
    { "name": "Carl", "img": "/members/1.jpeg", "title": "CEO" },
    { "name": "Carl", "img": "/members/1.jpeg", "title": "CEO" },
    { "name": "Carl", "img": "/members/1.jpeg", "title": "CEO" },
]

const Team = () => {
    return (
        <div className='mx-auto flex max-sm:flex-col gap-[2rem] items-center py-[5rem] text-gray-darker w-fit regular'>
            <div className='regular max-sm:w-[20rem] w-[30rem] '>
                <Fade cascade direction='up' triggerOnce>
                    <h2 className='text-[#c3b8a5] max-sm:text-xs tracking-[0.4rem]'>OUR TEAM</h2>
                    <h1 className='text-[40px] max-sm:text-xl tracking-wider medium'>OUR TALENT TEAM</h1>
                    <p className='text-gray-light max-sm:text-sm text-lg max-sm:my-[1rem] my-[2rem]'>Meet our Team of luxury connoisseurs, working conscientiously to deliver excellence by harnessing the finest designer products from the most luxurious range of international furniture collection to uplift, elevate, and transform your residential, outdoor, as well as corporate spaces.</p>
                    <Button text={"VIEW MORE"} path={"/story#team"} />
                </Fade>
            </div>
            <img className='w-[35rem]' src='/group-photo.jpg' alt='group photo'/>
            {/* memebers  */}
            {/* <div className='flex md:gap-[2rem] gap-2 max-sm:w-[22rem] w-[35rem] flex-wrap'>
                {Members.map((member) => {
                    return <div key={member.name} className='w-[10rem] h-[12rem] relative group overflow-hidden'>
                        <img className='object-cover h-full group-hover:sepia-[50%] transition-all duration-300' src={member.img} alt={member.name} />
                        <div className='w-full h-2/5 translate-y-full absolute bottom-0 z-10 group-hover:translate-y-1  flex flex-col bg-white transition-all duration-300 justify-center items-center'>
                            <h1>{member.name}</h1>
                            <p className='text-xs text-gray-light'>{member.title}</p>
                        </div>
                    </div>
                })}
            </div> */}
        </div>
    )
}

export default Team