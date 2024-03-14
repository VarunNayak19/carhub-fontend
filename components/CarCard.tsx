"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { calculateCarRent, generateCarImageUrl } from "../utils";
import { CarProps } from "../types";
import { CustomButton, CarDetails } from "./index";

interface CarCardProps {
    car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
    const { city_mpg, year, make, model, transmission, drive } = car;

    const [isOpen, setIsOpen] = useState(false);
    const [isSkel, setIsSkel] = useState(true);

    const carRent = calculateCarRent(city_mpg, year, drive, make);

    useEffect(() => {
        setTimeout(() => { setIsSkel(false) }, 5000)
    }, [])

    const openModalFn = (car:any) => {
        localStorage.setItem('car',JSON.stringify(car));
        localStorage.setItem('car-price',JSON.stringify(carRent));
        setIsOpen(true);
    }

    return (
        <div className="car-card group">
            <div className="car-card__content">
                <h2 className="car-card__content-title">
                    {make} {model}
                </h2>
            </div>

            <p className='flex mt-6 text-[32px] leading-[38px] font-extrabold'>
                <span className='self-start text-[14px] leading-[17px] font-semibold'>₹</span>
                {carRent}
                <span className='self-end text-[14px] leading-[17px] font-medium'>/day</span>
            </p>

            <div className='relative w-full h-40 my-3 object-contain'>
                {
                    !isSkel ?

                        <Image src={generateCarImageUrl(car,"1")} alt='car model' fill priority className='object-contain' />
                        :
                        <div className="flex items-center justify-center w-full h-full bg-gray-300 rounded sm:w-full dark:bg-gray-700">
                            <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                            </svg>
                        </div>
                }
            </div>

            <div className='relative flex w-full mt-2'>
                <div className='flex group-hover:invisible w-full justify-between text-grey'>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Image src='/steering-wheel.svg' width={20} height={20} alt='steering wheel' />
                        <p className='text-[14px] leading-[17px]'>
                            {transmission === "a" ? "Automatic" : "Manual"}
                        </p>
                    </div>
                    <div className="car-card__icon">
                        <Image src="/tire.svg" width={20} height={20} alt="seat" />
                        <p className="car-card__icon-text">{drive.toUpperCase()}</p>
                    </div>
                    <div className="car-card__icon">
                        <Image src="/gas.svg" width={20} height={20} alt="seat" />
                        <p className="car-card__icon-text">{city_mpg} MPG</p>
                    </div>
                </div>

                <div className="car-card__btn-container">
                    <CustomButton
                        title='View More'
                        containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
                        textStyles='text-white text-[14px] leading-[17px] font-bold'
                        rightIcon='/right-arrow.svg'
                        handleClick={() => openModalFn(car)}
                    />
                </div>
            </div>

            <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
        </div>
    );
};

export default CarCard;
