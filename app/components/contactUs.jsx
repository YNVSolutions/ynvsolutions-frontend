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
            <div className='bg-red-300 w-full h-full'>
                jhkjhb
            </div>

            <div className='bg-green-300 w-full h-full'>
                jlojhh
            </div>
            </div>
        </>
    )
}

export default ContactUs;