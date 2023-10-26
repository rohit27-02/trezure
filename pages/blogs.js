/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import { client } from '../sanity/lib/client'
import { groq } from 'next-sanity'
import { Fade } from 'react-awesome-reveal'

const postFields = groq`
  _id,
  title,
  _createdAt,
  "des" :body[1].children,
  _updatedAt,
  mainImage{asset->{url}},
  "slug": slug.current,
  "author": author->{name, image{asset->{url}}},
`
export const feedQuery = `*[_type == "post"] | order(_updatedAt desc) {
   ${postFields}
}`

const category = ["Furniture", "Trending", "Tips & Tricks", "Style", "Apartment"];

const Blog = () => {
    const [posts, setposts] = useState();
    const [post, setpost] = useState();

    useEffect(() => {
        client.fetch(feedQuery).then((data) => { setposts(data); setpost(data[0]) })
    }, []);
    return (
        <div>
            <section className="text-gray-darker regular body-font">

                {/* banner  */}
                <div className='bg-[url("/blog.jpg")] bg-no-repeat bg-cover flex justify-center items-center gap-[2rem] flex-col w-full h-[42rem]'>
                    <Fade direction='up' cascade triggerOnce delay={1000}>
                        <h1 className='text-2xl md:text-5xl bold'>Trezure Blogs</h1>
                        <p className='text-gray-light text-center w-[20rem] md:w-[40rem]'>Trezure is a pioneer of the finest and contemporary assortment of internationally sourced designer furniture and artifacts from the best in class global brands.</p>

                        {/* search bar  */}
                        <div class="relative">
                            <label for="Search" class="sr-only"> Search </label>

                            <input
                                type="text"
                                id="Search"
                                placeholder="Search for..."
                                class="w-[20rem] md:w-[30rem] drop-shadow border-gray-200 py-2.5 ps-4 pe-10 shadow-sm "
                            />

                            <span class="absolute inset-y-0 end-0 grid w-10 place-content-center">
                                <button type="button" class="text-gray-darker hover:text-brown-light transition-all duration-300 scale-110">
                                    <span class="sr-only">Search</span>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="h-4 w-4"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                        />
                                    </svg>
                                </button>
                            </span>
                        </div>

                        {/* category  */}
                        <div className='flex flex-wrap mx-auto max-sm:w-[20rem] gap-[1rem]'>
                            {category.map((item) => {
                                return <button className='text-gray-dark px-[1rem] py-[0.2rem] text-sm border-gray-dark hover:border-brown-light hover:text-brown-light transition-all duration-150 ease-out border rounded-full' key={item}>{item}</button>
                            })}
                        </div>
                    </Fade>
                </div>

                {/* blogs  */}
                <div className='w-[20rem] md:w-[65rem] -mt-[6rem] flex justify-between flex-wrap mx-auto'>
                    {posts && posts.map((post) => {
                        return <div key={post.id} className=" md:w-[48%] ">
                            <Fade direction='up' triggerOnce >
                                <div className="h-full">
                                    <div className='relative h-[16rem] md:h-[21rem] w-full overflow-hidden'>
                                        <img className=" absolute inset-0 object-cover hover:scale-105 transition-all duration-300 ease-linear w-full h-full" src={post.mainImage.asset.url} alt="blog" />
                                    </div>
                                    <div className="flex flex-col gap-[1rem] mt-[1rem]">
                                        <h2 className="tracking-[0.2rem] max-sm:text-sm uppercase text-gray-light ">{post._createdAt.slice(0, 10)} - BY {post.author.name}</h2>
                                        <h1 className="title-font md:text-2xl medium ">{post.title}</h1>
                                        <div className="flex items-center mb-[4rem] hover:text-brown-light group transition-all duration-300 ease-out tracking-widest flex-wrap ">
                                            <a onClick={() => localStorage.setItem("slug", post.slug)} href={`/post/${post.slug}/?slug=${post.slug}`} className=" inline-flex items-center md:mb-2 lg:mb-0">
                                                <span className='border-t w-8 group-hover:border-brown-light border-gray-darker mr-4'></span>
                                                READ MORE
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    })}
                </div>

            </section>
        </div>
    )
}

export default Blog