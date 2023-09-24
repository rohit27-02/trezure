/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Button from './Button'

const Features = [
    { "img": "/icons8-light-100.png", "heading": "PLANNING", "subheading": "Planning & Conceptualizing", "content": "Nulla facilisi. Sed ut fringilla libero, id faucibus ante. Sed congue consectetur orci sit amet maxi. Ut interdum nunc felis. vivamus a" },
    { "img": "/icons8-chandelier-100.png", "heading": "INTERIOR DESIGN", "subheading": "Design & Development", "content": "Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod tempor incididunt ut labore et dolore morbi tincidunt." },
    { "img": "/icons8-plant-100.png", "heading": "DECORATION", "subheading": "Furniture Selections", "content": "Etiam imperdiet congue libero non fringilla. Nam non venenatis diam, id vulputate felis. Curabitur scelerisque diam vitae sodales." },
]

const Services = () => {
    return (
        <div className='h-[80vmin] flex flex-col justify-center items-center max-w-[90rem] w-[80vmax] mx-auto'>
            <div className='flex gap-12 mb-[6rem]'>
                {Features.map((feature) => {
                    return <div key={feature.heading} className='w-1/3'>
                        <div className='flex gap-6 mb-4 '>
                            <img className='w-16 ' src={feature.img} alt={feature.heading} />
                            <div className='border-b w-full border-gray-800'>
                                <h1 className='bold text-xl text-gray-darker'>{feature.heading}</h1>
                                <h2 className='regular text-gray-light'>{feature.subheading}</h2>
                            </div>
                        </div>
                        <p className='text-gray-dark'>{feature.content}</p>
                    </div>
                })}
            </div>
            <Button text={"OUR SERVICES"} callback={() => { }} />
        </div>
    )
}

export default Services