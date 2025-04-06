"use client"
import React from 'react'
import Navigation from './components/navigation'
import About from './components/about'
import ContactUs from "./components/contactUs";
import Clients from "./components/clients";
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
      <div className='w-full h-[150vh] bg-black'>
        <div className='w-full  bg-black pt-10'>
          <ServiceSection />
        </div>
        <div className='w-full  bg-black pb-10 pt-20'>
          <Clients />
        </div>
        <div className='w-full bg-black'>
          <Projects />
        </div>
        <div className='w-full bg-black pt-40 flex items-center justify-center '>
          <ContactUs />
        </div>
        <div className='w-full bg-black pt-1  '>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page