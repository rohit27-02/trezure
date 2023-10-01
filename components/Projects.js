/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React,{useState} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Items = [
    { "img": "/projects/1.jpg",title:"Luxury Living Room" },
    { "img": "/projects/2.jpg",title:"Luxury Living Room" },
    { "img": "/projects/3.jpg",title:"Luxury Living Room" },
]

const Projects = () => {
    const [index, setindex] = useState(1);
    return (
        <div className='md:h-[50rem] text-white w-full bg-gray-darker'>
            <div className='md:pt-[5vmax] p-[1rem] md:px-[10vmax]'>
                <h2 className='text-[#c3b8a5] max-sm:text-xs tracking-[0.4rem]'>OUR PROJECTS</h2>
                <h1 className='text-[40px] max-sm:text-xl tracking-wider medium'>JUST FOR YOUR HOME</h1>
            </div>
            <div className=''>
                <Carousel
                    emulateTouch={true}
                    infiniteLoop={true}
                    showIndicators={false}
                    showStatus={false}
                    showThumbs={false}
                    centerMode={true}
                    centerSlidePercentage={33.3}
                    autoFocus={true}
                    selectedItem={1}
                    onChange={(i)=>setindex(i)}
                    
                >
                    {Items.map((item,i) => {
                        return <div  key={i} className={`md:m-[4rem] m-[2rem] w-[20rem] md:w-[55rem] group relative transition-all duration-700 overflow-hidden ease-linear ${i==index?" h-auto cursor-pointer shadow-[0_0px_90px_70px_rgba(51,51,51,0.8)] z-20":"scale-75 brightness-75 opacity-80"}`}>
                            <img className={`ease-out transition-all duration-500 ${i==index?"group-hover:scale-110":""}`} src={item.img} />
                            <div className='absolute bottom-0 px-[3rem] max-sm:p-[1rem] py-[2rem] bg-white bg-opacity-60 text-gray-darker medium md:text-3xl'>{item.title}</div>
                        </div>
                    })}

                </Carousel>
            </div>

        </div>
    )
}

export default Projects