'use client'
import { CustomButton, Footer, Navbar } from '@/components';
import TailwindToaster from '@/components/TailwindToaster';
import { generateCarImageUrl } from '@/utils';
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const BookNow = () => {
    const [car, setCar] = useState({
        city_mpg: 0,
        class: '',
        combination_mpg: 0,
        cylinders: 0,
        displacement: 0,
        drive: '',
        fuel_type: '',
        highway_mpg: 0,
        make: '',
        model: '',
        transmission: '',
        year: 2022
    });
    const [carRent,setCarRent] = useState("");
    const [showScreen, setshowScreen] = useState(false)
    const getCarDetails = () => {
        const car = JSON.parse(localStorage.getItem('car') || "");
        const carRent = JSON.parse(localStorage.getItem('car-price') || "");
        console.log(car);
        setCar(car);
        setCarRent(carRent);
    }
    useEffect(() => {
        getCarDetails();
        setshowScreen(true);
    }, [])

    const [formData, setFormData] = useState({
        date: '',
        name: '',
        email: '',
        mobile: '',
    });
    
    // const confirmFn = () => {
    //     console.log("from",formData);
    // }
      
    const handleChange = (e:any) => {
        console.log(e);
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
    };

    const isFormFilled = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const returnValue = Object.values(formData).every(value => value.trim() !== '' &&
        formData.mobile.trim().length === 10 &&
        emailRegex.test(formData.email.trim()));
        console.log(returnValue);
        return returnValue;
    };

    const handleKeyPress = (event:any) => {
        // Check if the pressed key is a number or a control key
        const isNumericOrControl = /^[0-9\b]+$/.test(event.key);
    
        if (!isNumericOrControl) {
          event.preventDefault();
        }
      };
      //handle submit 

      const confirmFn = async () => {
        // Here you can perform actions with the form data, for example:
        console.log('Form submitted with data:', formData);
        const baseUrl = "https://carhub-backend-gqjz.onrender.com";
        try {
            const response = await axios.post(`${baseUrl}/send-email`, {...formData,car:car,carRent:carRent});
            console.log('Form submitted:', response.data);
            // setLoading(false);
          // Reset the form after submission
        setFormData({
            date: '',
            name: '',
            email: '',
            mobile: '',
          });
          toast('Booking Confirmed!', {
            icon: '✅',
            id: "Booking Confirmed"
        });
        localStorage.removeItem('car');
        localStorage.removeItem('car-price');
        //   showToast(response.data.message);
            // Reset form fields or perform other actions upon successful form submission
          } catch (error) {
            console.error('Error submitting form:', error);
            toast('Something went wrong', {
                icon: '❗',
                id: "Something went wrong"
            });
            // Handle error, show error messages, etc.
          }
      };


  return (
    <>
    <Navbar />
        {showScreen && 
            <div className='relative w-full h-auto p-4 pt-20 '>
                <div className="container w-full h-auto flex flex-col md:flex-row justify-between gap-4">
                    <form className="left-side w-full md:w-[50%] rounded-lg min-h-4 p-8 bg-primary-blue-100">
                        <div className=' capitalize text-lg font-semibold flex justify-between items-end'>
                            <p>Book {car && car.make} {car && car.model}</p>
                            <p className='flex mt-6 text-[32px] leading-[38px] font-extrabold'>
                                <span className='self-start text-[14px] leading-[17px] font-semibold'>₹</span>
                                    {carRent}
                                <span className='self-end text-[14px] leading-[17px] font-medium'>/day</span>
                            </p>
                        </div>
                        <div className='w-full mt-5'>
                            <label className='text-sm text-gray-400'>Email</label>
                            <input onChange={handleChange} name='email' value={formData.email} required type="text" placeholder='abc@xyz.com' className='w-full mt-2 h-8 px-3 py-5 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:border-blue-500'  />
                        </div>
                        <div className='w-full mt-5'>
                            <label className='text-sm text-gray-400'>Mobile Number</label>
                            <input onKeyDown={handleKeyPress} maxLength={10} onChange={handleChange} name='mobile' value={formData.mobile} required type="text" placeholder='91XXXXXXXXXX' className='w-full mt-2 h-8 px-3 py-5 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:border-blue-500'  />
                        </div>
                        <div className='w-full mt-5'>
                            <label className='text-sm text-gray-400'>Name</label>
                            <input onChange={handleChange} name='name' value={formData.name} required type="text" placeholder='John Doe' className='w-full mt-2 h-8 px-3 py-5 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:border-blue-500'  />
                        </div>
                        <div className='w-full mt-5'>
                            <label className='text-sm text-gray-400'>Date</label>
                            <input onChange={handleChange} name="date" value={formData.date} required placeholder='Date' type="date" id="date" className='w-full  mt-2 h-8 px-3 py-5 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:border-blue-500' />
                        </div>
                        <div className='w-full mt-6'>
                            <CustomButton
                            isDisabled={!isFormFilled()}
                            title='Confirm Booking'
                            containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
                            textStyles='text-white text-[14px] leading-[17px] font-bold'
                            handleClick={() => confirmFn()}
                            />
                        </div>
                    </form>
                    <div className="right-side w-full md:w-[50%] rounded-lg min-h-4 p-8 bg-primary-blue-100">
                    <div className='flex-1 flex flex-col gap-3'>
                        <div className='relative w-full h-80 bg-pattern bg-cover bg-center rounded-lg'>
                            <Image src={generateCarImageUrl(car,"1")} alt='car model' fill priority className='object-contain' />
                        </div>

                        <div className='flex gap-3'>
                            <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                                <Image src={generateCarImageUrl(car, "29")} alt='car model' fill priority className='object-contain' />
                            </div>
                            <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                                <Image src={generateCarImageUrl(car, "33")} alt='car model' priority fill className='object-contain' />
                            </div>
                            <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                                <Image src={generateCarImageUrl(car, "13")} alt='car model' fill priority className='object-contain' />
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </div>
        }
        <Footer />
        <TailwindToaster />
    </>
  )
}

export default BookNow;