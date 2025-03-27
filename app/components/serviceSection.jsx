"use client"
import React from 'react'

const ServiceSection = () => {
  return (
    <>
      <div className='service'>
        <div className='text-center text-white font-semibold pb-10'>
          <h1 className='mt-8 font-bold text-4xl md:text-6xl lg:text-8xl'>Services<span className='text text-2xl md:text-4xl lg:text-6xl'> We Provide You</span></h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 m-auto text-zinc-300 p-5'>
          <div className='h-[40vh] md:h-[50vh] lg:h-[57vh] w-full bg-zinc-900 rounded-bl-[10vh] md:rounded-bl-[15vh] rounded-br-[10vh] md:rounded-br-[15vh] animate-float border-t-4 border-pink-500 cursor-pointer'>
            <h1 className='text-center p-4 text text-2xl md:text-3xl lg:text-4xl font-semibold'>Android & IOS App Development</h1>
            <p className='text-center text-sm md:text-lg lg:text-xl p-2'>We build fast, scalable, and intuitive mobile apps tailored for your business needs</p>
            <img src='https://staging.spwebconnect.com/img/services/mobile_application/mobile_app_design/SpWebconnect_mobile_app_development.gif' className='overflow-hidden h-[15vh] md:h-[20vh] lg:h-[25vh] w-[80%] md:w-[60%] lg:w-[25vw] m-auto rounded-2xl' />
          </div>
          <div className='h-[40vh] md:h-[50vh] lg:h-[57vh] w-full bg-zinc-900 rounded-bl-[10vh] md:rounded-bl-[15vh] rounded-br-[10vh] md:rounded-br-[15vh] animate-float border-t-4 border-blue-500 cursor-pointer'>
            <h1 className='text-center p-4 text text-2xl md:text-3xl lg:text-4xl font-semibold'>MDM Solution</h1>
            <p className='text-center text-sm md:text-lg lg:text-xl pt-2 pl-2 pr-2'>Optimized Mobile Databases: Secure, efficient data for your apps</p>
            <img src='https://www.intellium.ai/expertise_hero.svg' className='h-[15vh] md:h-[20vh] lg:h-[25vh] w-[80%] md:w-[60%] lg:w-[25vw] m-auto rounded-2xl' />
          </div>
          <div className='h-[40vh] md:h-[50vh] lg:h-[57vh] w-full bg-zinc-900 rounded-bl-[10vh] md:rounded-bl-[15vh] rounded-br-[10vh] md:rounded-br-[15vh] animate-float border-t-4 border-blue-500 cursor-pointer'>
            <h1 className='text-center p-4 text text-2xl md:text-3xl lg:text-4xl font-semibold'>AI Solution</h1>
            <p className='text-center text-sm md:text-lg lg:text-xl pt-2 pl-2 pr-2'>Leverage AI to automate processes, enhance efficiency, and make smarter decisions</p>
            <img src='https://whatmaction.com/images/services-images/ai-solutions-banner.svg' className='h-[15vh] md:h-[20vh] lg:h-[25vh] w-[80%] md:w-[60%] lg:w-[25vw] m-auto rounded-2xl' />
          </div>
          <div className='h-[40vh] md:h-[50vh] lg:h-[57vh] w-full bg-zinc-900 rounded-bl-[10vh] md:rounded-bl-[15vh] rounded-br-[10vh] md:rounded-br-[15vh] animate-float border-t-4 border-pink-500 cursor-pointer'>
            <h1 className='text-center p-4 text text-2xl md:text-3xl lg:text-4xl font-semibold'>Web Dev</h1>
            <p className='text-center text-sm md:text-lg lg:text-xl pt-2 pl-2 pr-2'>Responsive websites that help your business grow and encourage engagement</p>
            <img src='https://codarity.com/wp-content/uploads/2020/05/Web-Development-Illustration.svg' className='h-[15vh] md:h-[20vh] lg:h-[25vh] w-[80%] md:w-[60%] lg:w-[25vw] m-auto rounded-2xl' />
          </div>
        </div>
      </div>
    </>
  )
}

export default ServiceSection