"use client"
import React from 'react'
import Navigation from './components/navigation'
import HeroSection from './components/heroSection'

const Page = () => {
   
  return (
    <div className='w-full h-full text-white'>
      <Navigation />
      <HeroSection />
    </div>
  )
}

export default Page