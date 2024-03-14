"use client";
import React, { useState } from 'react'
import { businessRelationsData } from '@/constants'
import Link from 'next/link';
import { Footer, Navbar } from '@/components';
const page = () => {
    let data = businessRelationsData;
    let options = businessRelationsData.options;
    const windowWidth = window.innerWidth;
    const [showData, setshowData] = useState(windowWidth > 768 ? true : false);
    const [showTab, setshowTab] = useState(true);
    const [selectedOption, setselectedOption] = useState(windowWidth > 768 ? options[0] : "");
    const clickTabFn = (option: string) => {
        setselectedOption(option);
        windowWidth < 768 && setshowTab(false);
        windowWidth < 768 && setshowData(true);

    }

    function goBackFn() {
        windowWidth < 768 && setshowTab(true);
        windowWidth < 768 && setshowData(false);
        windowWidth < 768 && setselectedOption("");
    }

    return (
        <>
            <Navbar />
            <div className='relative w-full h-auto p-4 pt-20 '>
                <header className='w-full mb-4'>
                    <h1 className='uppercase relative top-2 text-[24px] md:text-[72px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-blue  to-slate-500 mb-2'>{data.screenTitle}</h1>
                    <section className='w-full' id="introduction">
                        <p className='text-sm text-gray-500'>{data.content.introduction}</p>
                    </section>
                </header>
                <div className="w-full flex md:gap-4 gap-0">
                    {
                        showTab &&
                        <div className="left-section md:w-[300px] w-full">
                            {
                                options.map((options: string, index: number) => (
                                    <>
                                        <div onClick={() => { clickTabFn(options) }} className={`options my-2 md:my-0 md:rounded-none cursor-pointer p-4 text-md font-bold border-2 rounded-md border-primary-blue group hover:bg-primary-blue-100 ${index !== 0 ? "md:border-t-0" : ""} ${options === selectedOption ? "bg-gradient-to-r from-primary-blue  to-slate-500" : ""} `}>
                                            <span className={`group-hover:scale-[111%] ${options === selectedOption ? "invert scale-105" : ""} `}>{options}</span>
                                        </div>
                                    </>
                                ))
                            }
                        </div>
                    }
                    <div className="right-section flex-1">
                        {
                            selectedOption === options[0] && showData &&

                            <section className='w-full h-auto rounded-md shadow-lg p-4' id="whyPartnerWithCarHub">
                                <h2 className='text-xl font-bold mb-5'>Why Partner with Car Hub?</h2>
                                <ul>
                                    {
                                        data.content.whyPartnerWithCarHub.benefits.map((e) => (
                                            <li>{e}</li>
                                        ))
                                    }

                                </ul>
                                <p className={` ${windowWidth > 768 && "hidden"} text-sm mt-4 underline cursor-pointer`} onClick={() => { goBackFn() }}>Go back</p>
                            </section>
                        }
                        {
                            selectedOption === options[1] && showData &&
                            <section className='w-full h-auto rounded-md shadow-lg p-4' id="typesOfBusinessPartnerships">
                                <h2 className='text-xl font-bold mb-5'>Types of Business Partnerships</h2>
                                <ul>
                                    {
                                        data.content.typesOfBusinessPartnerships.map((e) => (

                                            <li><strong>{e.partnerType}:</strong>{e.description}</li>
                                        ))
                                    }
                                </ul>
                                <p className={` ${windowWidth > 768 && "hidden"} text-sm mt-4 underline cursor-pointer`} onClick={() => { goBackFn() }}>Go back</p>
                            </section>
                        }
                        {
                            selectedOption === options[2] && showData &&
                            <section className='w-full h-auto rounded-md shadow-lg p-4' id="howToPartnerWithUs">
                                <h2 className='text-xl font-bold mb-5'>How to Partner with Us</h2>
                                <p className='text-sm'>{data.content.howToPartnerWithUs}</p>
                                <p className={` ${windowWidth > 768 && "hidden"} text-sm mt-4 underline cursor-pointer`} onClick={() => { goBackFn() }}>Go back</p>
                            </section>
                        }
                        {
                            selectedOption === options[3] && showData &&
                            <section className='w-full h-auto rounded-md shadow-lg p-4' id="contactInformation">
                                <h2 className='text-xl font-bold mb-5'>Contact Information</h2>
                                <p className='text-sm'><strong>Email:</strong>{data.content.contactInformation.email}</p>
                                <p className='text-sm'><strong>Phone:</strong>{data.content.contactInformation.phone}</p>
                                <p className='text-sm'><strong>Address:</strong>{data.content.contactInformation.address}</p>
                                <p className={` ${windowWidth > 768 && "hidden"} text-sm mt-4 underline cursor-pointer`} onClick={() => { goBackFn() }}>Go back</p>
                            </section>
                        }
                        {
                            selectedOption === options[4] && showData &&
                            <section className='w-full h-auto rounded-md shadow-lg p-4' id="partnerSuccessStories">
                                <h2 className='text-xl font-bold mb-5'>Partner Success Stories</h2>
                                <p className='text-sm'>{data.content.partnerSuccessStories}</p>
                                <p className={` ${windowWidth > 768 && "hidden"} text-sm mt-4 underline cursor-pointer`} onClick={() => { goBackFn() }}>Go back</p>
                            </section>
                        }
                        {
                            selectedOption === options[5] && showData &&
                            <section className='w-full h-auto rounded-md shadow-lg p-4' id="faqs">
                                <h2 className='text-xl font-bold mb-5'>FAQs</h2>
                                <p className='text-sm'>{data.content.faqs}</p>
                                <p className={` ${windowWidth > 768 && "hidden"} text-sm mt-4 underline cursor-pointer`} onClick={() => { goBackFn() }}>Go back</p>
                            </section>
                        }
                        {
                            selectedOption === options[6] && showData &&
                            <section className='w-full h-auto rounded-md shadow-lg p-4' id="joinUsInPartnership">
                                <h2 className='text-xl font-bold mb-5'>Join Us in Partnership</h2>
                                <p className='text-sm'>{data.content.joinUsInPartnership}</p>
                                <Link href="/partnerships">Click here to know more...</Link>
                                <p className={` ${windowWidth > 768 && "hidden"} text-sm mt-4 underline cursor-pointer`} onClick={() => { goBackFn() }}>Go back</p>
                            </section>
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default page