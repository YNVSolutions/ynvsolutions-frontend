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
      
      
      
    </div>
  )
}

export default About