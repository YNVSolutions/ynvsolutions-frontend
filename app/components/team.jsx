import Image from 'next/image'
import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

const Team = () => {
    const data = [
        {
            title: "Dharmendra",
            description: "FullStack Developer",
            image: '/dharmendra.png',
        },
        {
            title: "Yash",
            description: "Frontend Developer",
            image: '/yash.png',
        },
        {
            title: "Jitesh",
            description: "Frontend Developer",
            image: '/jitesh.png',
        },
        {
            title: "Priya",
            description: "Frontend Developer",
            image: '/priya.png',
        },
        {
            title: "Manav",
            description: "Backend Developer",
            image: '/manav.png',
        },
    ];

    return (
        <>
            <div className='mb-28 mt-28'>
                <div className='container mx-auto px-6 text-center mb-20'>
                    <h1 className="text-5xl md:text-7xl font-extrabold text drop-shadow-lg">Our Team</h1>
                </div>
                <div className='flex items-center justify-around gap-6 px-6'>
                    {data.slice(0, 5).map((element) => (
                        <div 
                            key={element.title} 
                            className="bg-gray-800 rounded-lg shadow-lg p-6 min-w-[200px] min-h-[280px] flex flex-col items-center justify-around"
                        >
                            <Image 
                                src={element.image} 
                                alt={`Image of ${element.title}`} 
                                width={100} 
                                height={100} 
                                className="rounded-full mb-4 border-2 border-gray-200 p-1" 
                            />
                            <h1 className="text-xl font-semibold text-white">{element.title}</h1>
                            <p className="text-gray-400 mt-2">{element.description}</p>
                            <div className="flex gap-4 mt-6">
                                <a href="#" aria-label={`LinkedIn profile of ${element.title}`} className="hover:text-blue-700">
                                    <FaLinkedin size={24} />
                                </a>
                                <a href="#" aria-label={`Email ${element.title}`} className="hover:text-red-700">
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