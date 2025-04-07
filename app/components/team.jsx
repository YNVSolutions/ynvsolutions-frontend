import Image from 'next/image'
import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

const Card = () => {
    return (
        <>
            <div className='flex flex-col items-center justify-center gap-4'>
                <div className='bg-gray-900 shadow-md rounded-lg p-4'>
                    <Image src="/yash.png" alt="Yash Raghubanshi" width={200} height={200} className="rounded-full border-2 border-gray-300" />
                    <h1 className='text text-center'>Yash Raghuvanshi</h1>
                    <h3 className='text-center'>Full Stack Developer</h3>
                    <div>
                        <FaLinkedin />
                        <BiLogoGmail />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card