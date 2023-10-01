/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Fade } from 'react-awesome-reveal';
import { GrNext, GrPrevious } from 'react-icons/gr';

const Items = [
  { img: "/projects/1.jpg", name: "sam", location: "delhi", content: "Life is never easy. There is work to be done and obligations to be met – obligations to truth, to justice, and to liberty." },
  { img: "/projects/2.jpg", name: "sam", location: "delhi", content: "Life is never easy. There is work to be done and obligations to be met – obligations to truth, to justice, and to liberty." },
  { img: "/projects/3.jpg", name: "sam", location: "delhi", content: "Life is never easy. There is work to be done and obligations to be met – obligations to truth, to justice, and to liberty." },
  { img: "/projects/1.jpg", name: "sam", location: "delhi", content: "Life is never easy. There is work to be done and obligations to be met – obligations to truth, to justice, and to liberty." },
]

// Clone the first item and place it at the end of the array
const clonedFirstItem = { ...Items[0] };
Items.push(clonedFirstItem);

const Testimonial = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [percentage, setpercentage] = useState(33.3);

  useEffect(() => {
    // Check the screen width and update isMobile accordingly
    const handleResize = () => {
      setIsMobile(window.innerWidth < 400);
      if(isMobile){
        setpercentage(100)
      }
    };

    // Initial check
    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='regular cursor-grab max-sm:w-[20rem] w-[85vmax] max-w-[90rem] my-[4rem] mx-auto tracking-wide text-gray-light'>
      <div className='mx-auto w-fit text-center mb-[3rem]'>
        <Fade cascade direction='up' triggerOnce>
          <h2 className='text-lg max-sm:text-sm text-brown-light'>Testimonial</h2>
          <h1 className='text-3xl max-sm:text-xl text-gray-darker'>Customer Feedback</h1>
        </Fade>
      </div>

      <Carousel
        emulateTouch={true}
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        centerMode={!isMobile} // Set centerMode based on isMobile
        centerSlidePercentage={percentage}
        autoFocus={!isMobile}
        selectedItem={1}
        className='relative '
        showArrows={!isMobile}
        renderArrowPrev={(onClickHandler, hasPrev) =>
          hasPrev && (
            <div onClick={onClickHandler} className='flex items-center hover:bottom-0 hover:invert transition-all duration-300 absolute top-[6rem] z-20 bg-white  cursor-pointer  border-gray-darker border max-sm:h-10 max-sm:w-10  h-[3rem] w-[3rem] justify-center rounded-full md:text-xl'>
              <GrPrevious />
            </div>
          )
        }
        renderArrowNext={(onClickHandler, hasNext) =>
          hasNext && (
            <div onClick={onClickHandler} className='flex items-center hover:bottom-0 hover:invert transition-all duration-300 absolute top-[6rem] right-0 bg-white cursor-pointer  border-gray-darker border max-sm:h-10 max-sm:w-10  h-[3rem] w-[3rem] justify-center rounded-full md:text-xl'>
              <GrNext />
            </div>
          )
        }
      >
        {Items.map((item, i) => {
          return (
            <div key={i} className=' w-[20rem] text-start drop-shadow-sm bg-[#fcfbfa] h-[17rem] p-[2.5rem]'>
              <div className='flex mb-[2rem] justify-start gap-[2rem] items-center'>
                <div className='w-[4rem] bg-gray-dark h-[4rem] overflow-hidden rounded-full'>
                  <img className='h-full object-cover' src={item.img} alt={item.name} />
                </div>
                <h1 className='text-xl medium  text-gray-darker'>
                  {item.name}
                  <br></br>
                  <span className='text-gray-light regular text-base'>{item.location}</span>
                </h1>
              </div>
              <p>{item.content}</p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Testimonial;
