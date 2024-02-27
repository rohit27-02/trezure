/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Fade } from 'react-awesome-reveal';

const Items = [
  { img: "/testimonial/1.jpg", name: "Mrs. Mili Shah", location: "principal designer, interiors by mili", content: "Lately, Trezure has become one of my favourite places to hunt for international furniture pieces. The collection is vast and the quality exceeds all expectations. Even better, is the service they offer. Looking forward to a lot more furniture sourcing from here." },
  { img: "/testimonial/2.jpg", name: "Ar. Milind Pai", location: "Principal, Milind Pai Architects", content: "Trezure has time and again proven to be a very valuable partner to us in terms supplying quality furniture to us from the international markets. We are truly satisfied with their wide variety of refined products and services. Besides their unique products and proficient interpersonal relationship with their clients, their prompt assistance on site installations and after sales services have also been persistently impressive. We would highly recommend Trezure to all the designers and people looking for furniture options. We  have a very positive experience working with them!" },
  { img: "/testimonial/3.jpg", name: "Hiren Chheda", location: "Managing director, Ekatva group", content: "Trezure, we think has the largest collection of ready furniture and artefacts collection in India. Be it for mid range residential or office spaces or high end premises, they have enough options to make your final selection difficult...  Besides super efficient service and quality, they are up for new ideas and suggestions always... We have had great experiences with their team during all our purchases from them and strongly recommend them to everyone." },
  { img: "/testimonial/4.jpg", name: "Ar. Jimmit Mehta", location: "Principal Architect, Archos", content: "Trezure has an eclectic mix of furniture and accessories that could fuse into any design concept right from Victorian to Contemporary. It's ever changing collection is  always a pleasant surprise during each of my visits. The service to their clients and commitment to superior quality is admirable!" },
  { img: "/testimonial/5.jpg", name: "Mr. Nuru Karim", location: "Founder and Principal Architect of NU.DE Designs", content: "We have a good experience with Trezure. Their quality and service scape have been highly satisfying." },
  { img: "/testimonial/6.jpg", name: "Mrs. Rishita Seth", location: "Principal Designer, Artisanal story", content: "We went to Trezure store to source sofas for our new home. We had been to a few stores before and had walked out dissapointed but the minute we entered his showroom, there were some amazing choices, beautiful fabrics and a plethora of variety to choose from. We decided on our design and pattern, they were very flexible about fabric choices etc, allowed complete customisation of colours. it was perfect. We have been using the sofas since 2 years and they have been great, no complaints! Great experience, would highly recommend them!" },
]

const Testimonial = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [percentage, setpercentage] = useState(33.3);

  useEffect(() => {
    // Check the screen width and update isMobile accordingly
    const handleResize = () => {
      setIsMobile(window.innerWidth < 400);
      if (isMobile) {
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
          <h3 className='text-3xl max-sm:text-xl text-gray-darker'>Customer Feedback</h3>
        </Fade>
      </div>

      <Carousel
        emulateTouch={true}
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        className='relative '
        showArrows={false}
        autoPlay={true}
        stopOnHover={true}
      // renderArrowPrev={(onClickHandler, hasPrev) =>
      //   hasPrev && (
      //     <div onClick={onClickHandler} className='flex items-center hover:bottom-0 hover:invert transition-all duration-300 absolute top-[6rem] z-20 bg-white  cursor-pointer  border-gray-darker border max-sm:h-10 max-sm:w-10  h-[3rem] w-[3rem] justify-center rounded-full md:text-xl'>
      //       <GrPrevious />
      //     </div>
      //   )
      // }
      // renderArrowNext={(onClickHandler, hasNext) =>
      //   hasNext && (
      //     <div onClick={onClickHandler} className='flex items-center hover:bottom-0 hover:invert transition-all duration-300 absolute top-[6rem] right-0 bg-white cursor-pointer  border-gray-darker border max-sm:h-10 max-sm:w-10  h-[3rem] w-[3rem] justify-center rounded-full md:text-xl'>
      //       <GrNext />
      //     </div>
      //   )
      // }
      >
        {Items.map((item, i) => {
          return (
            <div key={i} className=' w-[45rem] max-sm:w-full text-start drop-shadow-sm bg-[#fcfbfa] h-auto max-sm:h-[25rem] overflow-y-auto  p-[2.5rem]'>
              <div className='flex mb-[2rem] justify-start gap-[2rem] items-center'>
                <div className='w-[4rem] bg-gray-dark h-[4rem] max-sm:w-[8rem] max-sm:h-[4.5rem] overflow-hidden rounded-full'>
                  <img className='h-[4rem] w-[4rem]  object-cover' src={item.img} alt={item.name} />
                </div>
                <h4 className='text-xl medium  text-gray-darker'>
                  {item.name}
                  <br></br>
                  <span className='text-gray-light regular text-base'>{item.location}</span>
                </h4>
              </div>
              <p className=''>{item.content}</p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Testimonial;
