"use client"
import React from 'react'
import Navigation from './components/navigation'
import About from './components/about'
import ContactUs from "./components/contactUs";
import Clients from "./components/clients";
import ServiceSection from "./components/serviceSection";
import Projects from "./components/projects";
import Marque from "./components/marque";
import Footer from "./components/footer";



const Page = () => {

  return (
    <div>
      <div className='w-full h-screen text-white'>
        <Navigation />
        <About />
      </div>
      <div className='w-full h-[150vh] bg-black'>
        <div className='w-full  bg-black'>
          <Marque />
        </div>
        <div className='w-full  bg-black pt-7 pb-10'>
          <Clients/>
        </div>
        <div className='w-full  bg-black pt-10'>
          <ServiceSection />
        </div>
        <div className='w-full h-screen bg-black pt-1 flex items-center justify-center'>
          <Projects />
        </div>
        <div className='w-full h-screen bg-black pt-1 flex items-center justify-center '>
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