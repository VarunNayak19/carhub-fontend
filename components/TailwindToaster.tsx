import { Transition } from '@headlessui/react';
import React from 'react'
import toast, { ToastIcon, Toaster, resolveValue } from 'react-hot-toast';

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

export default TailwindToaster