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
            <div className='w-full min-h-screen flex flex-col lg:flex-row items-center justify-center'> 
                <div className='w-full lg:w-[50%] text-white text-4xl sm:text-5xl md:text-6xl font-semibold flex items-center justify-center hidden lg:flex animate-float'>
                    <img src='favicon.ico' className='h-48 w-48 sm:h-72 sm:w-72 md:h-96 md:w-96 rounded-lg ' alt="Logo" /> 
                </div>

                <div className='w-full lg:w-[50%] bg-zinc-900 p-4 sm:p-8 md:p-12 lg:p-36 flex flex-col items-center justify-center'>  
                    <h1 className='text-white text-3xl mb-8'>Contact Us</h1>
                    <div className='w-full max-w-md flex flex-col gap-4'> 
                        <input type='text' placeholder='Name' className='p-3 text-white bg-zinc-900 border-b-2 border-white w-full' /> 
                        <input type='email' placeholder='Email' className='p-3 text-white bg-zinc-900 border-b-2 border-white w-full' /> 
                        <input type='text' placeholder='Message' className='p-3 text-white bg-zinc-900 border-b-2 border-white w-full' /> 
                        <Link href='#'>
                            <button className='text-white bg-green-500 p-3 w-full my-5 hover:bg-green-600 transition duration-600' onClick={notify}>Message Us</button> 
                        </Link>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default ContactUs;