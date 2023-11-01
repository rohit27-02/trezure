/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Fade } from 'react-awesome-reveal'

const videos  = [
  "/media/IMG_8987.mp4",
  "/media/WhatsApp Video 2023-11-01 at 13.30.10_1ddb09b1.mp4",

]
const images = [
  "/media/group.jpg"
]

const Media = () => {
  return (
    <div>
      <section className="text-gray-darker regular body-font">

        {/* banner  */}
        <div className='bg-[url("/blog.jpg")] bg-no-repeat bg-cover flex justify-center items-center gap-[2rem] flex-col w-full h-[42rem]'>
          <Fade direction='up' cascade triggerOnce delay={1000}>
            <h1 className='text-2xl md:text-5xl bold'>Media & Events</h1>
            <p className='text-gray-light text-center w-[20rem] md:w-[40rem]'>Trezure is a pioneer of the finest and contemporary assortment of internationally sourced designer furniture and artifacts from the best in class global brands.</p>
          </Fade>
        </div>

        {/* blogs  */}
        <div className='w-[20rem] md:w-[65rem] mb-10 -mt-[6rem] flex justify-between  flex-wrap mx-auto'>
          {videos && videos.map((post) => {
            return <div key={post} className=" md:w-[48%] ">
              <Fade direction='up' triggerOnce >
                <div className="h-full">
                  <div className='relative h-[16rem] md:h-[21rem] w-full overflow-hidden'>
                    <video className=" absolute inset-0 object-cover transition-all duration-300 ease-linear w-full h-full" src={post} muted autoPlay loop alt="blog" />
                  </div>
                  {/* <div className="flex flex-col gap-[1rem] mt-[1rem]">
                    <h2 className="tracking-[0.2rem] max-sm:text-sm uppercase text-gray-light ">{post._createdAt.slice(0, 10)} - BY {post.author.name}</h2>
                    <h1 className="title-font md:text-2xl medium ">{post}</h1>
                    <div className="flex items-center mb-[4rem] hover:text-brown-light group transition-all duration-300 ease-out tracking-widest flex-wrap ">
                      <a onClick={() => localStorage.setItem("slug", post.slug)} href={`/post/${post.slug}/?slug=${post.slug}`} className=" inline-flex items-center md:mb-2 lg:mb-0">
                        <span className='border-t w-8 group-hover:border-brown-light border-gray-darker mr-4'></span>
                        READ MORE
                      </a>

                    </div>
                  </div> */}
                </div>
              </Fade>
            </div>
          })}
          {images && images.map((post) => {
            return <div key={post} className="mt-10 md:w-[48%] ">
              <Fade direction='up' triggerOnce >
                <div className="h-full">
                  <div className='relative h-[16rem] md:h-[21rem] w-full overflow-hidden'>
                    <img className=" absolute inset-0 object-cover transition-all duration-300 ease-linear w-full h-full" src={post} alt="blog" />
                  </div>
                  {/* <div className="flex flex-col gap-[1rem] mt-[1rem]">
                    <h2 className="tracking-[0.2rem] max-sm:text-sm uppercase text-gray-light ">{post._createdAt.slice(0, 10)} - BY {post.author.name}</h2>
                    <h1 className="title-font md:text-2xl medium ">{post}</h1>
                    <div className="flex items-center mb-[4rem] hover:text-brown-light group transition-all duration-300 ease-out tracking-widest flex-wrap ">
                      <a onClick={() => localStorage.setItem("slug", post.slug)} href={`/post/${post.slug}/?slug=${post.slug}`} className=" inline-flex items-center md:mb-2 lg:mb-0">
                        <span className='border-t w-8 group-hover:border-brown-light border-gray-darker mr-4'></span>
                        READ MORE
                      </a>

                    </div>
                  </div> */}
                </div>
              </Fade>
            </div>
          })}
        </div>

      </section>
    </div>
  )
}

export default Media