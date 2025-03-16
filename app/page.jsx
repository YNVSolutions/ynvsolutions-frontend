"use client"
import React from 'react'
import Navigation from './components/navigation'
import HeroSection from './components/heroSection'
import About from "./components/about";
import ContactUs from "./components/contactUs";

const Page = () => {
   
  return (
    <div>
    <div className='w-full h-screen text-white'>
      <Navigation />
      <HeroSection />
    </div>
    <div className='w-full h-screen bg-zinc-900/70 pt-1 flex items-center justify-center'>
      <About />
    </div>
    <div className='w-full h-screen bg-zinc-900 pt-1 flex items-center justify-center '>
      <ContactUs />
    </div>
    </div>
  )
}

export default Page