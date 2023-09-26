/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { GrPrevious, GrNext } from 'react-icons/gr';
import { Fade } from 'react-awesome-reveal';

const members = [
  { img: "/members/1.avif", name: "Peter", des: "DESIGNER" },
  { img: "/members/1.avif", name: "Peter", des: "CEO" },
  { img: "/members/1.avif", name: "Peter", des: "MANAGER" },
  { img: "/members/1.avif", name: "Peter", des: "DESIGNER" },
]

const Story = () => {
  const [scrollY, setScrollY] = useState(0);
  const controly = useAnimation();
  const controlx = useAnimation();
  const controlyminus = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    controly.start({
      y: 1 - scrollY / 6, // Adjust the range and animation properties as needed
    });
    controlx.start({
      x: 1 - scrollY / 6, // Adjust the range and animation properties as needed
    });
    controlyminus.start({
      y: scrollY / 14, // Adjust the range and animation properties as needed
    });

  }, [scrollY, controly, controlx, controlyminus]);

  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once when it comes into view
  });


  return (
    <div className='regular text-gray-dark'>

      {/* banner */}
      <div className='w-full h-[30rem] overflow-hidden '>
        <img src='/contactform.jpg' className='object-contain w-full brightness-50' alt='banner image' />
      </div>

      {/* about us */}
      <div className='flex py-[6rem]'>
        <img className='w-1/3' src='/about.jpg' alt='banner logo' />
        <div className='w-[40rem] text-justify mx-[6rem] flex flex-col gap-[1rem]'>
          <Fade cascade direction='up' triggerOnce>
            <h1 className='text-4xl bold text-gray-darker'>ABOUT US</h1>
            <p className='medium text-gray-darker'>We are India&apos;s finest global furniture outlet spread across 65,000sq.ft., catering to residential, commercial & outdoor luxury furniture segments.</p>
            <p>
              Trezure exemplifies elegance through its tastefully curated merchandise, eclectic designs, and graceful colour tint; we showcase and provide a globally-sourced selection of home, outdoor & office furniture, besides a selective collection of delicate fabrics, artifacts.</p>
            <p>
              We have strategically set up a division dedicated to supporting client-specific requirements for the hospitality industry, villas, and high-end residential projects. We also source furniture fixtures and equipment customized for upscale projects from some of the best brands across the globe, where our technical Team cherry-picks each product after understanding its ergonomics and putting utmost attention to the intricacies of design. We offer you an end-to-end solution— managing goods procurements, shipping, and delivery, followed by on-site installation and after-sales support.</p>
            <p>
              We house an unparalleled collection of internationally sourced contemporary and yet graceful designer furniture that is sure to complement any space they are positioned in.</p>
            <p className='medium text-gray-darker'>We invite you to come and be part of a global lifestyle phenomenon by embellishing your space in a way that reflects your distinct taste and is aesthetically stunning— Because &quot;LUXURY IS UNIVERSAL.&quot;</p>

          </Fade>
        </div>
      </div>

      {/* how we do  */}
      <div className='bg-[#faf8f3] h-[42rem] p-[4rem]'>
        <div className='w-[70rem] mx-auto flex justify-between items-center'>
          <div className='relative'>
            <motion.img
              src="/about/about-bg-4.jpg"
              alt="Animated Image"
              className="transition-all duration-300 ease-linear z-10 w-[16rem]  top-[24rem] left-[16rem] absolute "
              initial={{ opacity: 100, y: 0 }}
              animate={controly}
            />
            <motion.img
              src="/about/about-bg-3.jpg"
              alt="Animated Image"
              className="transition-all duration-300 ease-linear w-[28rem] -mt-[10rem]"
              initial={{ opacity: 100, y: 0 }}
              animate={controlyminus}
            />

          </div>
          <div className=' w-[25rem] flex flex-col '>
            <Fade cascade triggerOnce direction='up'>
              <h1 className='text-4xl medium text-gray-darker'>How we do</h1>
              <p className='text-gray-light mt-[1rem]'>Through the seamless coordination between our warehousing facility, Flagship, and Franchise Stores, we bring the world-class designer products to you— each one globally sourced after undergoing stringent quality checks.</p>
            </Fade>

            <div ref={ref} className='flex flex-col gap-[1rem] mt-[2rem]'>

              <Fade direction='up' cascade triggerOnce>
                <div>
                  <h2 className='tracking-wider'>Planning and sourcing</h2>
                  <div className=" overflow-hidden bg-white h-[0.4rem] ">
                    <motion.div
                      className="h-full drop-shadow w-[20rem] bg-gradient-to-r from-gray-400 via-amber-500/80 to-amber-600/80"
                      initial={{ width: '0%' }}
                      transition={{ duration: 3, ease: 'easeInOut' }}
                      animate={inView ? { width: `84%` } : { width: '0%' }}
                    ></motion.div>
                  </div>
                </div>
                <div>
                  <h2 className='tracking-wider'>Project coordination</h2>
                  <div className=" overflow-hidden bg-white h-[0.4rem] ">
                    <motion.div
                      className="h-full drop-shadow-sm w-[20rem] bg-gradient-to-r from-gray-400 via-amber-500 to-amber-600/80"
                      initial={{ width: '0%' }}
                      transition={{ duration: 3, ease: 'easeInOut' }}
                      animate={inView ? { width: `92%` } : { width: '0%' }}
                    ></motion.div>
                  </div>
                </div>
                <div>
                  <h2 className='tracking-wider'>Quality control</h2>
                  <div className=" overflow-hidden bg-white h-[0.4rem] ">
                    <motion.div
                      className="h-full drop-shadow-sm w-[20rem] bg-gradient-to-r from-gray-400 via-amber-500 to-amber-600/80"
                      initial={{ width: '0%' }}
                      transition={{ duration: 3, ease: 'easeInOut' }}
                      animate={inView ? { width: `88%` } : { width: '0%' }}
                    ></motion.div>
                  </div>
                </div>
                <div>
                  <h2 className='tracking-wider'>Loading, shipping & custom clearance</h2>
                  <div className=" overflow-hidden bg-white h-[0.4rem] ">
                    <motion.div
                      className="h-full drop-shadow-sm w-[20rem] bg-gradient-to-r from-gray-400 via-amber-500 to-amber-600/80"
                      initial={{ width: '0%' }}
                      transition={{ duration: 3, ease: 'easeInOut' }}
                      animate={inView ? { width: `95%` } : { width: '0%' }}
                    ></motion.div>
                  </div>
                </div>
                <div>
                  <h2 className='tracking-wider'>Delivery & installations</h2>
                  <div className=" overflow-hidden bg-white h-[0.4rem] ">
                    <motion.div
                      className="h-full drop-shadow-sm w-[20rem] bg-gradient-to-r from-gray-400 via-amber-500 to-amber-600/80"
                      initial={{ width: '0%' }}
                      transition={{ duration: 3, ease: 'easeInOut' }}
                      animate={inView ? { width: `86%` } : { width: '0%' }}
                    ></motion.div>
                  </div>
                </div>
                <div>
                  <h2 className='tracking-wider'>Customer care</h2>
                  <div className=" overflow-hidden bg-white h-[0.4rem] ">
                    <motion.div
                      className="h-full drop-shadow-sm w-[20rem] bg-gradient-to-r from-gray-400 via-amber-500 to-amber-600/80"
                      initial={{ width: '0%' }}
                      transition={{ duration: 3, ease: 'easeInOut' }}
                      animate={inView ? { width: `90%` } : { width: '0%' }}
                    ></motion.div>
                  </div>
                </div>
              </Fade>

            </div>
          </div>
        </div>

      </div>

      {/* our team  */}
      <div className='mx-auto w-[70rem] py-[3rem]'>

        <Fade direction='up' cascade triggerOnce>
          <h2 className='cool text-[54px] text-brown-light w-fit mx-auto '>members</h2>
          <h1 className='text-4xl mx-auto w-fit -mt-[1.5rem] mb-[3rem] text-gray-darker lighter'>Meet Our Teams</h1>
        </Fade>
        <Carousel
          emulateTouch={true}
          infiniteLoop={true}
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
          autoFocus={true}
          centerMode={true}
          centerSlidePercentage={33.3}
          selectedItem={1}
          className='relative px-[8rem] py-[3rem]'
          renderArrowPrev={(onClickHandler, hasPrev) =>
            hasPrev && <div onClick={onClickHandler} className='flex items-center hover:bottom-0 hover:invert transition-all duration-300 absolute top-[6rem] left- z-20 bg-white  cursor-pointer  border-gray-darker border h-[3rem] w-[3rem] justify-center rounded-full text-xl'>
              <GrPrevious /></div>
          }
          renderArrowNext={(onClickHandler, hasNext) =>
            hasNext && <div onClick={onClickHandler} className='flex items-center hover:bottom-0 hover:invert transition-all duration-300 absolute top-[6rem] right-0 bg-white cursor-pointer  border-gray-darker border h-[3rem] w-[3rem] justify-center rounded-full text-xl'>
              <GrNext /></div>
          }

        >
          {members.map((member, i) => {
            return <div key={i} className='flex flex-col cursor-grab justify-center items-center gap-[1rem]'>
              <div style={{ backgroundImage: `url(${member.img})` }} className='rounded-full bg-cover bg-center overflow-hidden w-[14rem] h-[14rem]'></div>
              <p >{member.des}</p>
              <h2 className='text-xl text-gray-darker medium'>{member.name}</h2>
            </div>
          })}

        </Carousel>
      </div>

      {/* newsletter  */}
      <div className='bg-[url("/about/newsletter-bg.jpg")] tracking-wide bg-top  bg-cover w-full h-[22rem] flex items-center justify-center'>
        <div className='w-[70rem] flex justify-center items-center flex-col'>
          <h1 className='text-4xl pb-[0.2rem] text-white'>NEWLETTER</h1>
          <p className='text-gray-300'>Keep up to date with our latest news and special offers.</p>
          <div className='h-[3rem] w-[40rem] my-[2rem]'>
            <input className='outline-none text-lg h-full w-[80%] p-[1rem]' type='text' placeholder='Email address' />
            <button className='text-xl hover:bg-gray-darker transition-all duration-300 ease-out bg-brown-light h-full w-[20%] text-white'>Subscribe</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Story