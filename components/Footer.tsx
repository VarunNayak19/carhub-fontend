"use client";
import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { footerLinks } from '@/constants';
import { Transition } from "@headlessui/react";
import { Toaster, ToastIcon, toast, resolveValue } from "react-hot-toast";
import { useRouter } from 'next/navigation';
const Footer = () => {
    const router = useRouter();


    const copyToClipboard = () => {
        navigator.clipboard.writeText(window.location.toString())
    }
    const ClickingFooterFn = (item: any) => {
        if (item.title === "Invite a friend") {
            copyToClipboard();
            toast.success("The invite link is copied successfully!")
        }
        else if ((item.title === "Discord") || (item.title === "Instagram") || (item.title === "Facebook") || (item.title === "Twitter")) {
            toast('Coming Soon!', {
                icon: '⌛',
                id: "Coming soon"
            });
        }
        else {
            router.push(item.url)
        }
    }

    const TailwindToaster = () => {
        return (
            <Toaster position="top-center">
                {(t: any) => (
                    <Transition
                        appear
                        show={t.visible}
                        className="transform p-4 flex bg-white rounded shadow-lg"
                        enter="transition-all duration-150"
                        enterFrom="opacity-0 scale-50"
                        enterTo="opacity-100 scale-100"
                        leave="transition-all duration-150"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-75"
                    >
                        <ToastIcon toast={t} />
                        <p className="px-2">{resolveValue(t.message, t)}</p>
                        {t.type !== 'loading' && (
                            <button onClick={() => toast.dismiss(t.id)} className='font-bold ml-5'>X</button>
                        )}
                    </Transition>
                )}
            </Toaster>
        );
    };
    return (
        <footer className='flex flex-col text-black-100 
        mt-5 border-t border-gray-100
        '>
            <div className="flex
            max-md:flex-col flex-wrap justify-between gap-5
            sm:px-16 px-6 py-10
            ">
                <div className="flex 
                flex-col justify-start items-start gap-6 cursor-pointer
                " onClick={() => { router.push("/") }}>
                    <Image alt="hero" src="/logo.svg" width={118} height={18} className='object-contain' />
                    <p className="text-base text-gray-700">Carhub 2023 <br />All rights reserved &copy;</p>
                </div>
                <div className="footer__links">
                    {footerLinks.map((link) => (
                        <div key={link.title} className='footer__link'>
                            <h3 className='font-bold'>{link.title}</h3>
                            {link.links.map((item) => (
                                <div key={item.title} className='text-gray-500 group cursor-pointer' onClick={() => ClickingFooterFn(item)}>
                                    {item.title}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-between
                items-center sm:px-16 px-6 py-10
                flex-wrap mt-10 border-t border-gray-100">
                <p>@2023 Carhub. All rights reserved</p>
                <div className="footer__copyrights-link">
                    <Link href="/" className='text-gray-500'>Privacy Policy</Link>
                    <Link href="/" className='text-gray-500'>Terms and Conditions</Link>
                </div>
            </div>
            <TailwindToaster />
        </footer>
    )
}

export default Footer