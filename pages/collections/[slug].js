/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import Router from 'next/router'
import Banner from '../../components/Banner';
import Image from 'next/image';
import fs from 'fs'
import path from 'path';

const Variants = {
    home: {
        caption: "Infusing the decor that exudes magnificence",
        category: ["all", "beds", "sofa's", "center & side table", "dining sets", "lesiure chairs", "kitchen & wardrobes"]
    },
    outdoor: {
        caption: "An assortment of Weather-proof outdoor furniture, Designed to perfection and made to last, through it all.",
        category: ["all", "day beds", "sofa sets", "dining sets", "lounge chairs", "swings", "others"]
    },
    office: {
        caption: "Tastefully designed to optimize your workspace.",
        category: ["all", "staff table", "cabin table", "conference table", "executive chair", "task chair", "conference chair", "visitor chair"]
    }
}


const Home = ({allimages}) => {
    const [path, setpath] = useState("");
     const [images, setimages] = useState(allimages);
    const [active, setactive] = useState('all');

    useEffect(() => {
        setpath(Router.query.slug);

    }, []);

    // useEffect(() => {

    //     fetch("../api/getfiles", {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ path: active == "all" ? `\public/collections/${path}` : `\public/collections/${path}/${active}` }),
    //     }).then((response) => {
    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }
    //         return response.json();
    //     })
    //         .then((data) => {
    //             setimages(data)
    //             console.log(data)
    //         })
    //         .catch((error) => console.error(error));
    // }, [path]);

    // const fetchImages = (folder) => {
    //     fetch("../api/getfiles", {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ path: folder == "all" ? `\public/collections/${path}` : `\public/collections/${path}/${folder}` }),
    //     }).then((response) => {
    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }
    //         return response.json();
    //     })
    //         .then((data) => {
    //             setimages(data)
    //             console.log(data)
    //         })
    //         .catch((error) => console.error(error));
    // }
    const fetchImages = (folder)=>{
        folder == 'all'?setimages(allimages):setimages( allimages.filter((image)=>{ return image.includes(folder)}))
    }
    return (
        <>
            {
                path != undefined && <div>
                    <Banner text={`Collections - ${path}`} />
                    <div className='flex flex-col text-center gap-[1.5rem] py-8 md:py-[5rem] text-gray-darker regular w-[22rem] md:w-[70rem] mx-auto'>
                        <h2 className='medium text-xl'>{Variants[path] ? Variants[path]['caption'] : ''}</h2>
                        <div className='flex max-sm:overflow-x-scroll mx-auto gap-[1rem] uppercase'>
                            {
                                Variants[path] ? Variants[path]['category'].map((name) => (
                                    <div onClick={() => { setactive(name); fetchImages(name) }} key={name} className={`${active == name ? "border bg-brown-light" : ""} p-[1rem] cursor-pointer transition-all duration-300`}>{name}</div>
                                )) : null
                            }
                        </div>
                        <div className='flex flex-wrap '>
                            {
                                images?.map((image) => {
                                    return <div key={image.split("\\").join("/").slice(6,)} className='relative m-[0.6rem] w-[22rem] h-[24rem]'>
                                        <Image fill loading='lazy'  src={image.split("\\").join("/").slice(6,)} alt={image.split("\\").join("/").slice(6,)} />
                                    </div>
                                })
                            }

                        </div>
                    </div>

                </div>
            }
        </>
    )
}

export default Home

// Function to recursively read files from subfolders
function readFilesFromSubfolders(folderPath, fileNames = []) {
    console.log(folderPath)
    const files = fs.readdirSync(path.resolve(folderPath));
    for (const file of files) {
        const filePath = path.join(folderPath, file);
        if (fs.statSync(filePath).isDirectory()) {
            readFilesFromSubfolders(filePath, fileNames);
        } else {
            fileNames.push(filePath);
        }
    }
    return fileNames;
}


export async function getStaticPaths() {
    // Fetch a list of possible values for [slug]
    // This could be based on the actual folder structure or another source
    const possibleSlugs = ['home', 'outdoor', 'office']; // Replace with your actual slugs

    // Create an array of paths to pre-render
    const paths = possibleSlugs.map((slug) => ({
        params: { slug },
    }));

    return {
        paths,
        fallback: false, // or 'blocking' if you want to handle missing slugs differently
    };
}

export async function getStaticProps(context) {
    // Replace 'your-folder-path' with the actual folder path you want to read
    const folderPath = context.params.slug;
    const fileNames = readFilesFromSubfolders(`\public/collections/${folderPath}`);

    return {
        props: {
            allimages:fileNames,
        },
    };
}






