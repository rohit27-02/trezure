/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import Banner from '../../components/Banner';
import fs from 'fs';
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

const Home = ({ allimages }) => {
    const [path, setPath] = useState("");
    const [images, setImages] = useState(allimages);
    const [active, setActive] = useState('all');
    const [imageLoadStatus, setImageLoadStatus] = useState({});
    const [loadingImages, setLoadingImages] = useState(true);

    useEffect(() => {
        setPath(Router.query.slug);
    }, []);

    useEffect(() => {
        const loadStatus = {};
        images.forEach((image, index) => {
            const img = new Image();
            img.src = image.split('\\').join('/').slice(6);
            img.onload = () => {
                loadStatus[index] = true;
                setImageLoadStatus({ ...loadStatus });
            };
        });
    }, [images]);

    const fetchImages = (folder) => {
        if (folder === 'all') {
            setImages(allimages);
        } else {
            setImages(allimages.filter((image) => image.includes(folder)));
        }
        setLoadingImages(true);
    };

    useEffect(() => {
        if (Object.keys(imageLoadStatus).length === images.length) {
            setLoadingImages(false);
        }
    }, [imageLoadStatus, images]);

    return (
        <>
            {path !== undefined && (
                <div>
                    <Banner text={`Collections - ${path}`} />
                    <div className='flex flex-col text-center gap-[1.5rem] py-8 md:py-[5rem] text-gray-darker regular w-[22rem] md:w-[70rem] mx-auto'>
                        <h2 className='medium text-xl'>{Variants[path] ? Variants[path]['caption'] : ''}</h2>
                        <div className='flex max-sm:overflow-x-scroll mx-auto gap-[1rem] uppercase'>
                            {Variants[path]
                                ? Variants[path]['category'].map((name) => (
                                    <div onClick={() => { setActive(name); fetchImages(name) }} key={name} className={`${active === name ? "border bg-brown-light" : ""} p-[1rem] cursor-pointer transition-all duration-300`}>
                                        {name}
                                    </div>
                                ))
                                : null}
                        </div>
                        <div className='flex flex-wrap'>
                            {images?.map((image, index) => (
                                <div key={index} className='relative m-[0.6rem] w-[22rem] h-[24rem]'>
                                    {loadingImages || !imageLoadStatus[index] ? (
                                        <div className='skeleton-image'></div>
                                    ) : (
                                        <img
                                            loading='lazy'
                                            src={image.split('\\').join('/').slice(6)}
                                            alt={image.split('\\').join('/').slice(6)}
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

// ... Rest of the code


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
