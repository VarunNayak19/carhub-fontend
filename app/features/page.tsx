"use client";
import { Footer, Navbar } from '@/components'
import React from 'react';
import { featureContent } from '@/constants';
import { Disclosure } from '@headlessui/react'

const page = () => {
    return (
        <>
            <Navbar />
            <div className="relative w-full h-auto  pt-20">
                <div className='uppercase relative top-2 pl-5 text-[36px] md:text-[72px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-blue  to-slate-500 mb-10'>{featureContent.screenTitle}</div>
                <div className="w-full flex flex-col gap-5 p-5 mb-10 bg-slate-100 rounded-sm">
                    {
                        featureContent.features.map((feature) => (

                            <>
                                {/* <div className=" shadow-lg bg-white rounded-md w-full h-auto p-8 md:p:4 group hover:bg-gradient-to-r hover:from-primary-blue  hover:to-slate-500 ease-in transition-all duration-300 hover:scale-[101%]">
                                    <div className='flex gap-2 items-center justify-start h-auto mb-5'>
                                        <span className=' font-bold text-lg group-hover:invert' >{feature.featureTitle}</span>
                                    </div>
                                    <div className=" p-4 bg-white hidden group-hover:flex rounded-md group-hover:transition-all group-hover:duration-200 group-hover:delay-300">
                                        <div className=''>{feature.featureDescription}</div>
                                    </div>
                                </div> */}
                                <Disclosure >
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg shadow-lg bg-white h-auto p-4 group hover:bg-gradient-to-r hover:from-primary-blue  hover:to-slate-500 ease-in transition-all duration-300 hover:scale-[101%]">
                                                <span className='font-bold md:text-xl text-lg group-hover:invert text-left'>{feature.featureTitle}</span>
                                                {/* <ChevronUpIcon
                                                    className={`${open ? 'rotate-180 transform' : ''
                                                        } h-5 w-5 text-purple-500`}
                                                /> */}
                                                <span className='text-2xl font-bold'>{open ? "-" : "+"}</span>
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                                {feature.featureDescription}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            </>

                        ))
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default page