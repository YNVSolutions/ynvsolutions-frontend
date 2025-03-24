"use client";
import React from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';

const ContactUs = () => {
    const notify = () => toast.success('Complete !', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
    });

    return (
        <>
            <div className=' m-4 md:m-6 mt-20 md:mt-16 w-full h-[90vh] md:min-h-[80vh] rounded-2xl bounding-box bg-gray-900 flex flex-col md:flex-row items-center justify-around shadow-2xl p-4' id="contactUs"> 
            <div className='bg-red-300 w-full h-full flex-[1.5] p-8'>
                <div className='bg-red-500 w-full h-4/6 p-4'>
                   <p className='text-black text-8xl'>Contact Us</p>
                </div>
                <div className='flex justify-around h-2/6'>
                    <div className='bg-green-600 w-full h-full flex-1 p-8 m-2'>

                    </div>
                    <div className='bg-green-600 w-full h-full flex-1 p-8 m-2'>

                    </div>
                    <div className='bg-green-600 w-full h-full flex-1 p-8 m-2'>

                    </div>
                </div>
            </div>

            <div className='bg-green-300 w-full h-full flex-1 p-8 flex items-center justify-center'>
                <div className='bg-green-100 w-4/5 h-6/7 p-8 rounded-2xl shadow-2xl'>

                </div>
            </div>
            </div>
        </>
    )
}

export default ContactUs;