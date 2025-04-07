import Image from 'next/image'
import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

const Team = () => {
    const data = [
        {
            title: "Yash Raghubanshi",
            description: "Full Stack Developer",
            image: '/yash.png',
            offers: "hello",
        },
        {
            title: "Yash Raghubanshi",
            description: "Full Stack Developer",
            image: '/yash.png',
            offers: "hello",
        },
        {
            title: "Yash Raghubanshi",
            description: "Full Stack Developer",
            image: '/yash.png',
            offers: "hello",
        },
        {
            title: "Yash Raghubanshi",
            description: "Full Stack Developer",
            image: '/yash.png',
            offers: "hello",
        },
        {
            title: "Yash Raghubanshi",
            description: "Full Stack Developer",
            image: '/yash.png',
            offers: "hello",
        },
    ];

    return (
        <>
            <div className='h-screen'>
                <div className='container mx-auto px-6 text-center mb-20'>
                    <h1 className="text-5xl md:text-7xl font-extrabold text drop-shadow-lg">Our Team</h1>
                </div>
                <div className='flex items-center justify-center gap-4'>
                    {data.map((element) => (
                        <div key={element.title} className="bg-gray-800 rounded-lg shadow-lg p-6 max-w-sm flex flex-col items-center">
                            <Image src={element.image} alt={element.title} width={100} height={100} className="rounded-full mb-4 border-2 border-gray-200 p-1" />
                            <h2 className="text-xl font-bold text-white">{element.title}</h2>
                            <p className="text-gray-400">{element.description}</p>
                            <p className="text-gray-200 mt-2">{element.offers}</p>
                            <div className="flex gap-4 mt-4">
                                <a href="#" className=" hover:text-blue-700">
                                    <FaLinkedin size={24} />
                                </a>
                                <a href="#" className=" hover:text-red-700">
                                    <BiLogoGmail size={24} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Team