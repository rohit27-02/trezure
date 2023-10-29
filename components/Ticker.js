/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Marquee from "react-fast-marquee";

const companyIcons = [
    "/clients/Artie.png",
    "/clients/Campo.png",
    "/clients/Carbine.png",
    "/clients/Debrahs.png",
    "/clients/Higold.png",
    "/clients/Modaform.png",
    "/clients/MUT.png",

]

const LogoTicker = () => {
    return (
        <section className='mx-auto w-[65rem] max-sm:w-[22rem]'>

            <div className='flex flex-col text-center justify-center'>

                <Marquee className='mt-10 w-[100rem]'>
                    {
                        companyIcons.map((company) => {
                            return <li className="list-none mx-2 md:mx-6 overflow-hidden" key={company}>
                                <img className='hover:scale-110 transition-all duration-300 w-24 md:w-44' src={company} alt={company} />
                            </li>
                        })
                    }
                </Marquee>
            </div>
        </section>
    );
};

export default LogoTicker;
