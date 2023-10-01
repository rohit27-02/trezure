/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Fade } from 'react-awesome-reveal';
import { BsArrowRight } from "react-icons/bs";
import Banner from '../components/Banner';

const Features = [
  { title: "PLANNING & SOURCING", des: "We engage closely with our clientele to propose bespoke solutions that are ideally matched with what they require. Our comprehensive procurement strategies are specially designed to cover and incorporate every touchpoint.", icon: "/icons/task.png" },
  { title: "PROJECT COORDINATION", des: "From your itinerary, store visits, and managing stays, to discussing follow-ups with the vendors before purchase, we coordinate and oversee all to ensure a seamless ride.", icon: "/icons/collaboration.png" },
  { title: "QUALITY CONTROL", des: "A sophisticated quality control mechanism guarantees a comprehensive product inspection during its entire lifecycle at multiple suppliers, so that you are guaranteed of getting the best, always and without fail.", icon: "/icons/high-quality.png" },
  { title: "LOADING, SHIPPING & CUSTOM CLEARANCE", des: "To ensure seamless, hassle-free, and cost-effective product shipment, we begin by consolidating supplies, determining the right containers to reduce freight prices, and identify the best shipping supplier before implementing logistics.", icon: "/icons/fast-delivery.png" },
  { title: "DELIVERY & INSTALLATION", des: "We provide doorstep product delivery in an efficient, cost-effective and safe manner by engaging a team of expert professionals and technicians to ensure swift and efficient deployment.", icon: "/icons/wrench.png" },
  { title: "CUSTOMER CARE", des: "Our engagement with you doesn't end with the product installation. In the rare event of damage or some other challenge, be assured that we will be there to help you resolve the issue or personally coordinate with suppliers on your behalf if required.", icon: "/icons/customer-care.png" },
]

const projects = () => {
  return (
    <div className='regular  text-gray-darker'>

      <Banner text={"Project"} />

      {/* intro  */}
      <div className='flex w-[20rem] md:w-[70rem] my-8 md:my-[5rem] justify-between mx-auto md:h-[40rem] '>
        <div className='bg-[url("/projects/2.jpg")] max-sm:hidden w-[24rem] md:w-[55%] md:h-full'></div>
        <div className='md:w-[40%] w-[24rem] h-full flex flex-col gap-2 md:gap-[2rem]'>
          <img className='w-full max-sm:hidden h-[55%]' src='/projects/1.jpg' alt='banner image' />
          <Fade direction='up' duration={1000} triggerOnce >
            <h1 className='md:text-5xl text-xl bold'>Our Project</h1>
          </Fade>
          <p className='text-gray-light text-justify'>Our highly efficient and proficient team makes sure that you are worthy of depicting a class and beauty that reigns supreme and takes priority over anything ordinary. Our project execution process is profoundly intertwined with our culture of stopping at nothing short of the best.From the time of preparation and sourcing, quality management to shipment and everything in between, we guarantee that every aspect of the project implementation process is managed with the utmost accuracy, while at the same time keeping a close watch on even the tiniest element involved.</p>
        </div>
      </div>

      {/* features  */}
      <div className='flex max-sm:flex-col w-[24rem] md:w-[70rem] mb-[2rem] justify-between max-sm:items-center flex-wrap mx-auto'>

        {
          Features.map((feature) => {
            return <Fade key={feature.title} cascade direction='up' className='border flex flex-col gap-4 p-4 md:gap-[1.5rem] mb-[2rem] w-[20rem] md:w-[31%] md:p-[2rem]' triggerOnce>
              <div >
                <div className='flex items-center gap-[1rem]'>

                  <img className='w-[3rem] ' src={feature.icon} alt={feature.title} />
                  <h1 className='text-xl medium'>{feature.title}</h1>

                </div>
                <p className='text-gray-light lighter'>{feature.des}</p>
              </div>
            </Fade>
          })
        }


      </div>

    </div>
  )
}

export default projects