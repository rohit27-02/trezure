/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Fade } from 'react-awesome-reveal';

const Items = [
    { img: "/projects/1.jpg", name: "sam", location: "delhi", content: "Life is never easy. There is work to be done and obligations to be met – obligations to truth, to justice, and to liberty." },
    { img: "/projects/2.jpg", name: "sam", location: "delhi", content: "Life is never easy. There is work to be done and obligations to be met – obligations to truth, to justice, and to liberty." },
    { img: "/projects/3.jpg", name: "sam", location: "delhi", content: "Life is never easy. There is work to be done and obligations to be met – obligations to truth, to justice, and to liberty." },
    { img: "/projects/1.jpg", name: "sam", location: "delhi", content: "Life is never easy. There is work to be done and obligations to be met – obligations to truth, to justice, and to liberty." },
]

const Testimonial = () => {
    const [index, setindex] = useState(1);

    return (
        <div className='regular cursor-grab w-[85vmax] max-w-[90rem] my-[4rem] mx-auto tracking-wide text-gray-light'>
            <div className='mx-auto w-fit text-center mb-[3rem]'>
                <Fade cascade direction='up' triggerOnce>
                    <h2 className='text-lg text-brown-light'>Testimonial</h2>
                    <h1 className='text-3xl text-gray-darker'>Customer Feedback</h1>
                </Fade>
            </div>

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
                onChange={(i) => setindex(i)}

            >
                {Items.map((item, i) => {
                    return <div key={i} className='w-[20rem] text-start drop-shadow-sm bg-[#fcfbfa] h-[17rem] p-[2.5rem]'>
                        <div className='flex mb-[2rem] justify-start gap-[2rem] items-center'>
                            <div className='w-[4rem] bg-gray-dark h-[4rem] overflow-hidden rounded-full'>
                                <img className='h-full object-cover' src={item.img} />
                            </div>
                            <h1 className='text-xl medium  text-gray-darker'>{item.name}<br></br><span className='text-gray-light regular text-base'>{item.location}</span></h1>
                        </div>
                        <p>{item.content}</p>
                    </div>
                })}

            </Carousel>
        </div>
    )
}

export default Testimonial