"use client"
import React from 'react'
import Navigation from './components/navigation'
import About from './components/about'
import Project from './components/projects' 
import ContactUs from "./components/contactUs";


const Page = () => {
   
  return (
    <div>
    <div className='w-full h-screen text-white'>
      <Navigation />
      <About />
    </div>
    <div className='w-full h-screen bg-zinc-900/70 pt-1 flex items-center justify-center'>
      <Project/>
    </div>
    <div className='w-full h-screen bg-zinc-900 pt-1 flex items-center justify-center '>
      <ContactUs />
    </div>
    </div>
  )
}

export default Page