"use client"
import React from 'react'
import Navigation from './components/navigation'
import About from './components/about'
import ContactUs from "./components/contactUs";
import Clients from "./components/clients";
import ServiceSection from "./components/serviceSection";
import Projects from "./components/projects";
import Footer from "./components/footer";
import Card from './components/team';
import Header from './components/header';
const Page = () => {

  return (
    <div>
      <div className='w-full text-white'>
        <Navigation />
      </div>
      <div className='w-full text-white'>
        <Header/>
        <About />
      </div>
      <div className='w-full h-[150vh] bg-black'>
        <div className='w-full  bg-black pt-5'>
          <ServiceSection />
        </div>
        <div className='w-full  bg-black pb-10 pt-20'>
          <Clients />
        </div>
        <div>
          <Card />
        </div>
        <div className='w-full bg-black'>
          <Projects />
        </div>
        <div className='w-full bg-black pt-10 flex items-center justify-center '>
          <ContactUs />
        </div>
        <div className='w-full bg-black pt-1'>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Page