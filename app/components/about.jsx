import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      
      <div className="absolute inset-0 bg-black/50">
        <Image 
          src='/back.png' 
          layout="fill" 
          objectFit="cover" 
          alt='background' 
          priority
          className="opacity-50 lg:opacity-70"
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
          
          
        </div>
      </div>
    </div>
  )
}

export default About