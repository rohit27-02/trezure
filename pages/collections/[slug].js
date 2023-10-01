/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import Router from 'next/router'
import Banner from '../../components/Banner';

const Variants = {
    home: {
        caption: "Infusing the decor that exudes magnificence",
        category: ["all", "sofa's", "coffee & end table", "dining table", "dining chair"]
    },
    outdoor: {
        caption: "An assortment of Weather-proof outdoor furniture, Designed to perfection and made to last, through it all.",
        category: ["all", "sofa sets", "others", "dining sets", "bar table & chairs", "lounge chairs", "swings", "day beds"]
    },
    office: {
        caption: "Tastefully designed to optimize your workspace.",
        category: ["all", "staff table", "cabin table", "conference table", "executive chair", "task chair", "conference chair", "visitor chair"]
    }
}


const Home = () => {
    const [path, setpath] = useState("");
    const [images, setimages] = useState([]);
    const [active, setactive] = useState('all');


    useEffect(() => {
        if (Router.ready) {
            setpath(Router.query.slug);

        }
    }, [path]);
    return (
        <div>
            <Banner text={`Collections - ${path}`} />
            <div className='flex flex-col text-center gap-[1.5rem] py-8 md:py-[5rem] text-gray-darker regular w-[24rem] md:w-[70rem] mx-auto'>
                <h2 className='medium text-xl'>{Variants[path] ? Variants[path]['caption'] : ''}</h2>
                <div className='flex mx-auto gap-[1rem] uppercase'>
                    {
                        Variants[path] ? Variants[path]['category'].map((name) => (
                            <div onClick={()=>setactive(name)} key={name} className={`${active==name?"border bg-brown-light":""} p-[1rem] cursor-pointer transition-all duration-300`}>{name}</div>
                        )) : null
                    }
                </div>
                <div className='flex'>
                    {
                        images.map((image)=>{
                            return <img key={image} src={image} alt={image}/>
                        })
                    }

                </div>
            </div>

        </div>
    )
}

export default Home