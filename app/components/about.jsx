import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      
      <div className="absolute inset-0 bg-black">
        <Image 
          src='/back.png' 
          layout="fill" 
          objectFit="cover" 
          alt='background' 
          priority
          className="opacity-30 lg:opacity-30"
        />
      </div>
      
      
      <div className="container mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8">
        <div className="text-white max-w-4xl relative z-10">
          <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4'>
            <span className='text-6xl sm:text-7xl md:text-8xl lg:text-9xl'>Y</span>NV <span className='text-6xl sm:text-7xl md:text-8xl lg:text-9xl'>T</span>ech
          </h1>
          
          <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold border-b-2 border-white pb-2 mb-6 inline-block text'>
            Driving Digital Transformation Through Innovation
          </h2>
          
          <div className='mb-8'>
            <p className='text-base sm:text-lg md:text-xl lg:text-2xl font-semibold'>
              We are a dynamic technology company that builds the future through advanced AI solutions, powerful Mobile Device Management, and exceptional mobile app development for Android and iOS. Our website is your gateway to exploring our services, diving into our portfolio, and connecting with our team. Let's innovate together.
            </p>
          </div>
          
          <div>
            <Link href="#services">
              <button className='text-sm sm:text-base md:text-lg lg:text-xl font-semibold border-2 border-white py-2 px-4 sm:px-5 md:px-6 lg:px-7 rounded-xl shadow-lg bg-gradient-to-r from-[#ec4899]/35 via-[#8b5cf6]/35 to-[#3b82f6]/35 hover:scale-105 hover:bg-gradient-to-r hover:from-[#ec4899]/60 hover:via-[#8b5cf6]/60 hover:to-[#3b82f6]/60 transition-all duration-300 ease-in-out'>
                Explore Our Services
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About