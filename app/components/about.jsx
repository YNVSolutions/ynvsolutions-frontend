import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <>
      <div className="h-screen w-full pt-5 flex justify-center items-center">
        <div>
          <Image 
            src='/back.png' 
            height={900} 
            width={1200} 
            alt='back' 
            className='object-cover rounded-lg shadow-lg'
          />
        </div>
        <div className='text-white absolute top-[25vh] left-[15vw] md:top-[20vh] md:left-[10vw] sm:top-[15vh] sm:left-[3vw]'>
          <h1 className='text-8xl font-bold md:text-7xl sm:text-4xl'><span className='text-9xl font-bold md:text-8xl sm:text-5xl'>Y</span>NV <span className='text-9xl font-bold md:text-8xl sm:text-5xl'>T</span>ech</h1>
          <h1 
            className='text-4xl text-white border-b-2 border-white font-semibold p-1 text md:text-2xl sm:text-xl' 
            style={{ display: 'inline-block' }}
          >
            Driving Digital Transformation Through Innovation
          </h1>
          <div className='w-[30vw] pt-5 md:w-[40vw] sm:w-[70vw]'>
            <p className='text-2xl font-lg md:text-xl sm:text-lg'>
              We are a dynamic technology company that builds the future through advanced AI solutions, powerful Mobile Device Management, and exceptional mobile app development for Android and iOS. Our website is your gateway to exploring our services, diving into our portfolio, and connecting with our team. Let's innovate together.
            </p>
          </div>
          <div className='pt-5'>
            <Link href="#services">
              <button className='text-xl font-semibold border-2 border-white p-2 px-7 rounded-xl shadow-lg bg-gradient-to-r from-[#ec4899]/35 via-[#8b5cf6]/35 to-[#3b82f6]/35 hover:scale-105 hover:bg-gradient-to-r hover:from-[#ec4899]/60 hover:via-[#8b5cf6]/60 hover:to-[#3b82f6]/60 transition-all duration-300 ease-in-out md:text-lg md:px-5 sm:text-base sm:px-4'>
                Explore Our Services
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default About