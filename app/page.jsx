"use client"
import React from 'react'
import Navigation from './components/navigation'
import About from './components/about'
import ContactUs from "./components/contactUs";

import ServiceSection from "./components/serviceSection";
import Projects from "./components/projects";

import Footer from "./components/footer";



const Page = () => {

  return (
    <div>
      <div className='w-full h-screen text-white'>
        <Navigation />
        <About />
      </div>

      <div className='w-full h-[150vh] bg-zinc-900'>

      <div className='w-full h-screen bg-zinc-900'>

        <ServiceSection />
      </div>
      <div className='w-full h-screen bg-zinc-900/70 pt-1 flex items-center justify-center'>
        <Projects />
      </div>
      <div className='w-full h-screen bg-zinc-900 pt-1 flex items-center justify-center '>
        <ContactUs />
      </div>

      <div className='w-full bg-zinc-900/70 pt-1  '>
        <div>
          <Footer />

        </div>
      </div>
    </div>
  )
}

export default Page