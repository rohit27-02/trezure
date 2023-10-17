/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import Banner from '../../components/Banner';
import fs from 'fs';
import path from 'path';
import Image from 'next/image';

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

const Home = ({ allimages }) => {
    // ... (other code)

    const [path, setPath] = useState("");
    const [images, setImages] = useState(allimages);
    const [active, setActive] = useState('all');
    const [loadingImages, setLoadingImages] = useState(true);

    useEffect(() => {
        setPath(Router.query.slug);
    }, []);

    const fetchImages = (folder) => {
        if (folder === 'all') {
            setImages(allimages);
        } else {
            setImages(allimages.filter((image) => image.includes(folder)));
        }
        setLoadingImages(true);
    };

    useEffect(() => {
        setLoadingImages(true); // Set loading state to true when changing images
    }, [images]);

    useEffect(() => {
        setLoadingImages(false); // Set loading state to false when all images have loaded
    }, [images, loadingImages]);

    return (
        <>
            {path !== undefined && (
                <div>
                    <Banner text={`Collections - ${path}`} />
                    <div className='flex flex-col text-center gap-[1.5rem] py-8 md:py-[5rem] text-gray-darker regular w-[22rem] md:w-[70rem] mx-auto'>
                        <h2 className='medium text-xl'>{Variants[path] ? Variants[path]['caption'] : ''}</h2>
                        <div className='max-sm:overflow-x-scroll mx-auto'>
                            <div className='max-sm:w-[80rem] flex mx-auto gap-[1rem] uppercase'>
                                {Variants[path]
                                    ? Variants[path]['category'].map((name) => (
                                        <div onClick={() => { setActive(name); fetchImages(name) }} key={name} className={`${active === name ? "border bg-brown-light" : ""} p-[1rem] cursor-pointer transition-all duration-300`}>
                                            {name}
                                        </div>
                                    ))
                                    : null}
                            </div>
                        </div>
                        <div className='flex flex-wrap'>
                            {images?.map((image, index) => (
                                <div key={index} className='relative  m-[0.6rem] rounded-md overflow-hidden w-[22rem] h-[24rem]'>
                                    {loadingImages ? (
                                        <div className='skeleton-image'></div>
                                    ) : (
                                        <Image
                                            width={352}
                                            height={384}
                                            className='absolute inset-0 object-cover h-full w-full'
                                            src={image.split('\\').join('/').slice(6)}
                                            alt={image.split('\\').join('/').slice(6)}
                                            loading="lazy"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Home;



// Function to recursively read files from subfolders
function readFilesFromSubfolders(folderPath, fileNames = []) {
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
    const possibleSlugs = ['home', 'outdoor']; // Replace with your actual slugs

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
    const fileNames = readFilesFromSubfolders(`public/collections/${folderPath}`); // Removed extra backslash

    return {
        props: {
            allimages: fileNames,
        },
    };
}
