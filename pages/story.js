/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Fade } from 'react-awesome-reveal';
import { HiOutlineArrowDownRight } from 'react-icons/hi2'
import Head from 'next/head';

const quotes = [
  "We envision to be the best & most trusted furniture brand in India, catering to the designer and luxury furniture segment by delivering the premium quality offerings at a modest price.",
  "We endeavour to gain a visibility and reach in the Indian luxury furniture segment by setting up franchisee stores, applying shop in shop models, and establishing the best distribution network across the country.",
  "To provide the best designer and luxury furniture considering value for money, which is defined to deliver the best quality to retailers & end consumers across India, ensuring effective services.",

]

const values = [
  "Accomplishments in your life may move back and forth, but righteousness is what stays with you until the end of time. Integrity is always doing the right thing, even when no one is watching. Likewise, our sincerity towards our services and professionalism is neither over-promising nor under-delivered. We grasp every client's requirements and strive hard to deliver relevant solutions in a simplistic, ethical, and invested manner.",
  "Our experienced team of in-house experts is empowered and committed to moving diligently towards the end objective of delivering excellence through product and best in class services through support— in sync with the requirements of our clients.",
  "Our Team is absolutely transparent in dealing and stand by their words— you can safely put your trust in us.",
  "Our primary focus is meeting our client requirements through our products and services, thus forging a lifelong bond. We endeavour to deliver the highest possible level of luxurious goods in continuity without fail while meeting and exceeding our client expectations.",
  "We endeavour to work closely with every client to gauge the essence of their specific requirements. We would then bring forward clear and realistic suggestions to obtain the desired outcome through an in-depth screening and selection process, rather than relying solely on our profits.",
  "We focus on mutually beneficial opportunities that foster long-term, sustainable relationships for growth.",
  "We pride ourselves on having the most talented team of professionals from the industry who align with our core values to foster their growth.",
  "Unbridled competence is quintessential to excel in every sphere of life— Being proficient means leveraging assistance, uprightness, accountability, and brilliance at work. Our end-to-end solution support strategy is an epitome of professionalism— it specially curated while keeping all high points in mind with a core objective of meeting the client requirements, thus portraying an image of proficiency.",
  "We approach every situation, opportunity, and challenge with creativity and problem-solving aptitude, thus striving to deliver a perfect solution. We endeavour to create value through innovation, which enables us to achieve spectacular results, one after another.",

]

const Story = () => {
  const [scrollY, setScrollY] = useState(0);
  const controly = useAnimation();
  const controlx = useAnimation();
  const controlyminus = useAnimation();
  const [active, setactive] = useState(1);
  const [activesub, setactivesub] = useState(1);

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
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Trezure Casa: Mumbai&apos;s Premier Luxury Furniture Brand</title>
        <meta name="description" content="Discover Trezure Casa, Mumbai's premier luxury furniture brand. Our 65,000 sq. ft. store in Kasheli offers top designer brands for contemporary elegance." />
      </Head>

      {/* banner */}
      <div className='w-full md:h-[30rem] overflow-hidden '>
        <img src='/contactform.jpg' className='object-contain w-full brightness-50' alt='banner image' />
      </div>

      {/* about us */}
      <div className='flex py-8 md:py-[6rem]'>
        <img className='max-sm:hidden w-[30%]' src='/about.jpg' alt='banner logo' />
        <div className='w-[20rem] md:w-[40rem] max-sm:text-sm text-justify mx-4 md:mx-[6rem] flex flex-col gap-[2rem]'>
          <Fade cascade direction='up' triggerOnce>
            <h1 className='md:text-4xl text-xl bold text-gray-darker'>Unveiling Trezure Casa: Your Luxury Furniture Brand</h1>
            <p className='medium  text-gray-darker'>Welcome to Trezure Casa, your ultimate destination for luxury furniture and decor. We&apos;re a multi-brand luxury store,  located in Kasheli Bhiwandi, offering modern and contemporary furnishings that redefine elegance.
            </p>
            <p>
              With a sprawling 65,000 square feet store, we bring the world&apos;s finest designer furniture brands i.e Campo De Fiori ,  Magister UT , Carbine, Higold, Artie, Debrah, and Modaform, right to your doorstep.
            </p>
            <p>
              At Trezure Casa, we are all about sophistication and style. Our curated collection boasts distinctive designs, a rich palette of colours, and tastefully selected merchandise that reflects the very essence of luxury.
            </p>
            <p>
              From dining to living, lounge to bedroom, and even outdoor & office spaces, our store takes you on a unique journey through the world of Paintings, Decorative lights & Carpets. Experience the epitome of contemporary luxury at Trezure Casa – where modern living meets timeless elegance.
            </p>
          </Fade>
        </div>
      </div>

      {/* how we do  */}
      <div className='bg-[#faf8f3] max-sm:h-[54rem] h-[42rem] p-6 md:p-[4rem]'>
        <div className='w-[20rem] md:w-[70rem] mx-auto flex max-sm:flex-col justify-between md:items-center'>
          <div className='relative'>
            <motion.img
              src="/products/2.jpg"
              alt="Animated Image"
              className="transition-all duration-300 ease-linear z-10 max-sm:w-[8rem] w-[16rem] top-[12rem] md:top-[12rem] left-[12rem] md:left-[16rem] absolute "
              initial={{ opacity: 100, y: 0 }}
              animate={controly}
            />
            <motion.img
              src="/about/about-bg-3.jpg"
              alt="Animated Image"
              className="transition-all duration-300 ease-linear max-sm:w-[16rem] w-[28rem] -mt-0 md:-mt-[18rem]"
              initial={{ opacity: 100, y: 0 }}
              animate={controlyminus}
            />

          </div>
          <div className='w-[20rem] max-sm:mt-[8rem] md:w-[25rem] flex flex-col '>
            <Fade cascade triggerOnce direction='up'>
              <h1 className='text-4xl medium text-gray-darker'>How we do</h1>
              <p className='text-gray-light max-sm:text-sm mt-[1rem]'>Through the seamless coordination between our warehousing facility, Flagship, and Franchise Stores, we bring the world-class designer products to you— each one globally sourced after undergoing stringent quality checks.</p>
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

      {/* section  */}
      <div className='flex py-8 items-center md:py-[6rem]'>
        <div className='w-[20rem] md:w-[40rem] max-sm:text-sm text-justify mx-4 md:mx-[6rem] flex flex-col gap-[2rem]'>
          <Fade cascade direction='up' triggerOnce>
            <h1 className='md:text-4xl text-xl bold text-gray-darker'>QUALITY & DESIGN AT TREZURE CASA</h1>
            <p className='medium  text-gray-darker'>At Trezure Casa, our commitment to excellence in quality and design is the cornerstone of our multinational brand. We take great pride in curating the finest furniture from renowned global brands:
            </p>
            <p><strong>
              Ergonomics:</strong> The furniture by our brands isn&apos;t just about aesthetics; it&apos;s designed with your well-being in mind. Every piece is thoughtfully crafted to enhance your comfort, elevating your lifestyle and making  it more enjoyable.
            </p>
            <p><strong>
              Design Expertise:</strong> Fluent in the language of design, our international designers draws inspiration from global trends & curate exquisite pieces that not only catch the eye but also warm the heart, delivering true luxury and exclusivity.
            </p>
            <p><strong>
              Attention to Detail:</strong> In the world of luxury furniture, it&apos;s the minutiae that truly matter. We meticulously select pieces with an emphasis on perfection. From hand-finished accents to precise stitching, our dedication to quality shines through.
            </p>
            <p><strong>
              Comfort-Centric Approach:</strong> Your comfort is our top priority. The furniture by our brands is more than just looks; it&apos;s about crafting spaces where you can relax, unwind, and savor life. We seamlessly blend luxury and comfort, providing you with a sanctuary of ease.
              Furthermore, we meticulously source the finest products from renowned global brands to ensure that our clients experience nothing short of excellence. We work closely with skilled artisans and manufacturers to bring you the best in furniture, preserving the artistry and craftsmanship that defines our brand. We harmonise traditional craftsmanship with cutting-edge machinery to achieve precision and consistency, creating pieces that are marvels of both art and engineering.
            </p>
            <p>
              In summary, Trezure Casa is your gateway to an unparalleled world of quality and design, where we serve as a distributor for international influences, combining a commitment to craftsmanship and comfort to redefine your living spaces.</p>
          </Fade>
        </div>
        <img className='max-sm:hidden w-[30%] h-fit' src='/about2.jpg' alt='banner logo' />
      </div>

      {/* who we are  */}

      <div className='flex w-screen items-center justify-end'>
        <div className='w-[20rem] mx-4 md:mx-[6rem] space-y-[2rem]'>
          <h1 className='text-3xl max-sm:text-xl text-gray-darker'>Who We Are</h1>
          <div className='space-y-[1rem]'>
            <div onClick={() => setactive(1)} className={`flex w-full transition-all duration-150 hover:text-gray-darker cursor-pointer justify-between border-b items-center pb-2 ${active == 1 ? "md:text-3xl  text-gray-darker " : "max-sm:text-sm text-xl "}`}><h1>Vision</h1><HiOutlineArrowDownRight className={active == 1 ? "w-6" : "w-4"} /></div>
            <div onClick={() => setactive(2)} className={`flex w-full transition-all duration-150 hover:text-gray-darker cursor-pointer justify-between border-b items-center pb-2 ${active == 2 ? "md:text-3xl text-gray-darker " : "max-sm:text-sm text-xl "}`}><h1>Mission</h1><HiOutlineArrowDownRight className={active == 2 ? "w-6" : "w-4"} /></div>
            <div onClick={() => setactive(3)} className={`flex w-full transition-all duration-150 hover:text-gray-darker cursor-pointer justify-between border-b items-center pb-2 ${active == 3 ? "md:text-3xl text-gray-darker " : "max-sm:text-sm text-xl "}`}><h1>Purpose</h1><HiOutlineArrowDownRight className={active == 3 ? "w-6" : "w-4"} /></div>
            <div onClick={() => setactive(4)} className={`flex w-full relative transition-all duration-150 hover:text-gray-darker cursor-pointer justify-between border-b items-center pb-2 ${active == 4 ? "md:text-3xl text-gray-darker " : "text-xl max-sm:text-sm"}`}><h1>Values</h1><HiOutlineArrowDownRight className={active == 4 ? "w-6" : "w-4"} />
              {active == 4 && <div className='absolute top-14 md:top-16 md:flex-wrap text-gray-dark items-center flex gap-4 [&>*]:min-w-fit max-sm:overflow-x-scroll w-[10rem] md:w-[20rem] text-sm'>
                <div onClick={() => setactivesub(1)} className={`hover:text-gray-darker ${activesub == 1 ? "text-gray-darker text-lg" : ""}`}>Integrity</div>
                <div onClick={() => setactivesub(2)} className={`hover:text-gray-darker ${activesub == 2 ? "text-gray-darker text-lg" : ""}`}>Passion</div>
                <div onClick={() => setactivesub(3)} className={`hover:text-gray-darker ${activesub == 3 ? "text-gray-darker text-lg" : ""}`}>Honesty</div>
                <div onClick={() => setactivesub(4)} className={`hover:text-gray-darker ${activesub == 4 ? "text-gray-darker text-lg" : ""}`}>Customer Care</div>
                <div onClick={() => setactivesub(5)} className={`hover:text-gray-darker ${activesub == 5 ? "text-gray-darker text-lg" : ""}`}>Ethics</div>
                <div onClick={() => setactivesub(6)} className={`hover:text-gray-darker ${activesub == 6 ? "text-gray-darker text-lg" : ""}`}>Partner Care</div>
                <div onClick={() => setactivesub(7)} className={`hover:text-gray-darker ${activesub == 7 ? "text-gray-darker text-lg" : ""}`}>Employee Care</div>
                <div onClick={() => setactivesub(8)} className={`hover:text-gray-darker ${activesub == 8 ? "text-gray-darker text-lg" : ""}`}>Professionalism</div>
                <div onClick={() => setactivesub(9)} className={`hover:text-gray-darker ${activesub == 9 ? "text-gray-darker text-lg" : ""}`}>Innovation</div>
              </div>}
            </div>
          </div>
        </div>
        <div className='bg-gray-darker md:p-[4rem] overflow-auto text-gray-100 w-[24rem] md:w-[50rem] p-6 h-[20rem] md:h-[28rem]'>
          <p className='tracking-wider lighter text-sm md:text-lg'>{active == 4 ? values[activesub - 1] : quotes[active - 1]}</p>
        </div>
      </div>

      {/* our team  */}
      <div id='team' className='mx-auto max-sm:w-[24rem] w-[70rem] py-[1rem] md:py-[3rem]'>

        <Fade direction='up' cascade triggerOnce>
          <h2 className='cool text-[54px] max-sm:text-[40px] text-brown-light w-fit mx-auto '>members</h2>
          <h1 className='text-4xl max-sm:text-xl mx-auto w-fit md:-mt-[1.5rem] md:mb-[3rem] text-gray-darker lighter'>Meet Our Teams</h1>
        </Fade>
        <img src='group-photo.jpg' alt='group photo' className='w-[60rem] mx-auto' />
        {/* <Carousel
          emulateTouch={true}
          infiniteLoop={true}
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
          centerMode={!isMobile} // Set centerMode based on isMobile
          centerSlidePercentage={percentage}
          autoFocus={!isMobile}
          selectedItem={1}
          showArrows={!isMobile}
          className='relative md:px-[8rem] py-4 md:py-[3rem]'
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

        </Carousel> */}
      </div>

      {/* newsletter  */}
      <div className='bg-[url("/about/newsletter-bg.jpg")] tracking-wide bg-top bg-no-repeat bg-cover w-full h-[22rem] flex items-center justify-center'>
        <div className='w-[24rem] md:w-[70rem] flex justify-center items-center flex-col'>
          <h1 className='text-4xl max-sm:text-xl pb-[0.2rem] max-sm:pb-[1.5rem] text-white'>NEWLETTER</h1>
          <p className='text-gray-300 max-sm:text-sm'>Keep up to date with our latest news and special offers.</p>
          <div className='h-[3rem] max-sm:h-[2.5rem] w-[20rem] md:w-[40rem] my-[2rem]'>
            <input className='outline-none text-lg rounded-none max-sm:text-sm h-full w-[80%] max-sm:w-[70%] p-[1rem]' type='text' placeholder='Email address' />
            <button className='text-xl max-sm:text-sm  hover:bg-gray-darker transition-all duration-300 ease-out bg-brown-light h-full max-sm:w-[30%] w-[20%] text-white'>Subscribe</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Story