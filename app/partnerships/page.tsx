import { Footer, Navbar } from '@/components'
import React from 'react'
import { partnershipData, carBrandData } from '@/constants'
import Image from 'next/image'
const page = () => {
    console.log("car", carBrandData)
    return (
        <>
            <Navbar />
            <div className="relative w-full h-auto  pt-20">
                <div className='uppercase relative top-2 pl-5 text-[36px] md:text-[72px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-blue  to-slate-500 mb-10'>Partnership</div>
                <div className="w-full flex flex-col gap-10 p-5 mb-10">
                    {
                        partnershipData.map((partner) => (

                            <>
                                <div className=" shadow-lg bg-white rounded-md w-full h-auto p-8 md:p:4 group hover:bg-gradient-to-r hover:from-primary-blue  hover:to-slate-500 ease-in transition-all duration-300 hover:scale-[101%]">
                                    <div className='flex gap-2 items-center justify-start h-auto mb-5'>
                                        <span className=' font-bold text-lg group-hover:invert' >{partner.content.headline}</span>
                                    </div>
                                    <div className='group-hover:invert'>{partner.content.introductionText}</div>
                                </div>
                            </>

                        ))
                    }
                </div>
                <div className="w-full p-5">
                    <span className='font-semibold'>We are partnered with...</span>
                    <div className="w-full flex gap-3 p-4 overflow-x-auto scrollbar-custom-css-hor">
                        {
                            carBrandData.map((car: any) => (
                                <>
                                    <div className="w-auto h-auto min-w-[250px] p-4 flex flex-col gap-3 items-center justify-end shadow-lg bg-slate-200 rounded-md">
                                        <Image src={car.logo} alt="logo" width={64} height={64} />
                                        <span className='uppercase font-semibold'>{car.name}</span>
                                    </div>
                                </>
                            ))
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default page