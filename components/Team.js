/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Button from './Button'

const Members = [
    {"name":"Carl","img":"/members/1.avif","title":"CEO"},
    {"name":"Carl","img":"/members/1.avif","title":"CEO"},
    {"name":"Carl","img":"/members/1.avif","title":"CEO"},
    {"name":"Carl","img":"/members/1.avif","title":"CEO"},
    {"name":"Carl","img":"/members/1.avif","title":"CEO"},
    {"name":"Carl","img":"/members/1.avif","title":"CEO"},
]

const Team = () => {
    return (
        <div className='mx-auto flex gap-[2rem] items-center h-[40rem] text-gray-darker w-fit regular'>
            <div className='regular w-[30rem] '>
                <h2 className='text-[#c3b8a5] tracking-[0.4rem]'>OUR TEAM</h2>
                <h1 className='text-[40px] tracking-wider medium'>OUR TALENT TEAM</h1>
                <p className='text-gray-light text-lg my-[2rem]'>Feugiat sed lectus vestibulum mattis ullamcorper. Duis at consectetur lorem donec massa</p>
                <Button text={"VIEW MORE"} callback={() => { }} />
            </div>
            <div className='flex gap-[2rem] w-[35rem] flex-wrap'>
                {Members.map((member)=>{
                    return <div key={member.name} className='w-[10rem] h-[12rem] relative group overflow-hidden'>
                        <img className='object-cover h-full group-hover:sepia-[50%] transition-all duration-300' src={member.img} alt={member.name}/>
                        <div className='w-full h-2/5 translate-y-full absolute bottom-0 z-10 group-hover:translate-y-1  flex flex-col bg-white transition-all duration-300 justify-center items-center'>
                            <h1>{member.name}</h1>
                            <p className='text-xs text-gray-light'>{member.title}</p>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Team