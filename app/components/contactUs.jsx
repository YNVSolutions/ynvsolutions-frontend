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
            <div className='w-full min-h-screen flex items-center justify-center mb-32' id="contactUs"> 
                <div className='w-[60%] border-t-pink-500 border-b-blue-500 border-l-blue-500 border-r-pink-500 border-2  p-4 sm:p-8 md:p-12 lg:p-36 flex flex-col items-center justify-center'>  
                    <h1 className='text-white text-5xl mb-8 text'>Contact Us</h1>
                    <div className='w-full max-w-md flex flex-col gap-4'> 
                        <input type='text' placeholder='Name' className='p-3 text-white bg-zinc-900 border-b-2 border-pink-500 w-full text-xl' /> 
                        <input type='email' placeholder='Email' className='p-3 text-white bg-zinc-900 border-b-2 border-blue-500 w-full text-xl' /> 
                        <textarea placeholder='Message'  className='p-3 text-white bg-zinc-900 border-b-2 border-pink-500 w-full text-xl'></textarea> 
                        <Link href='#'>
                            <button className='text-white bg-green-600 p-3 w-full my-5 hover:bg-green-700 transition duration-600' onClick={notify}>Message Us</button> 
                        </Link>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default ContactUs;