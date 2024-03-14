import { Footer, Navbar } from '@/components';
import React from 'react'
import { howItWorksData } from '@/constants';
import Image from 'next/image';

const page = () => {
    return (
        <>
            <Navbar />
            <div className="relative w-full h-auto  pt-20">
                <div className='md:absolute md:rotate-90 md:top-[300px] md:right-[-220px] uppercase relative rotate-0 top-2 pl-5 text-[36px] md:text-[72px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-blue  to-slate-500'>{howItWorksData.sectionTitle}</div>
                <div className="w-[90%] flex flex-col gap-10 p-5">
                    {
                        howItWorksData.steps.map((step) => (
                            <>
                                <div className=" shadow-lg bg-white rounded-md w-full h-auto p-8 md:p:4 group hover:bg-gradient-to-r hover:from-primary-blue  hover:to-slate-500 ease-in transition-all duration-300 hover:scale-[101%]">
                                    <div className='flex gap-2 items-center justify-start h-auto mb-5'>
                                        <Image src={step.icon} width={20} height={20} alt="icon" className='group-hover:invert' />
                                        <span className=' font-bold text-lg group-hover:invert' >{step.title}</span>
                                    </div>
                                    <div className='group-hover:invert'>{step.description}</div>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default page;