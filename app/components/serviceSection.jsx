"use client"
import { motion } from 'motion/react'
import React from 'react'

const ServiceSection = () => {
  return (
    <>
      <div className='w-full h-[30vh] py-10 bg-zinc-800 text-white rounded-tl-3xl rounded-tr-3xl' id="services">
        <div className='border-b-2 border-t-2 border-zinc-500 flex whitespace-nowrap overflow-hidden'>
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 80 }}
            className='text-[20vh] leading-none font-bold'>
            YNV Tech Delivers Scalable, Efficient, And Intelligent Digital Solutions, Including AI Automation, Mobile Management, And App Development, To Drive Global Business Growth Through Innovation.
            YNV Tech Delivers Scalable, Efficient, And Intelligent Digital Solutions, Including AI Automation, Mobile Management, And App Development, To Drive Global Business Growth Through Innovation. YNV Tech Delivers Scalable, Efficient, And Intelligent Digital Solutions, Including AI Automation, Mobile Management, And App Development, To Drive Global Business Growth Through Innovation.
          </motion.h1>
        </div>
      </div>
      <div className='service'>
        <div className='text-center text-white font-semibold'>
          <h1 className='mt-8 font-bold text-6xl'>Services</h1>
        </div>
        <div className='flex justify-center items-center gap-9 m-auto text-zinc-300 p-5'>
          <div className='h-[47vh] w-[30vw] bg-zinc-700 rounded-tl-[5vh] rounded-br-[15vh] animate-float'>
            <h1 className='text-center p-2 text-4xl border-b-2 border-zinc-400 font-semibold'>Android & iOS App Dev</h1>
            <p className='text-center text-xl p-2'>We build fast, scalable, and intuitive mobile apps tailored for your business needs</p>
            <img src='https://staging.spwebconnect.com/img/services/mobile_application/mobile_app_design/SpWebconnect_mobile_app_development.gif' className='overflow-hidden h-[25vh] w-[25vw] m-auto rounded-2xl' />
          </div>
          <div className='h-[47vh] w-[30vw] bg-zinc-700 rounded-tl-[5vh] rounded-br-[15vh] animate-float'>
            <h1 className='text-center p-2 text-4xl border-b-2 border-zinc-400 font-semibold'>MDM Solution</h1>
            <p className='text-center text-xl pt-2 pl-2 pr-2'>Optimized Mobile Databases: Secure, efficient data for your apps</p>
            <img src='https://www.intellium.ai/expertise_hero.svg' className='h-[25vh] w-[25vw] m-auto rounded-2xl' />
          </div>
        </div>
        <div className='flex justify-center items-center gap-9 m-auto text-zinc-300 p-5'>
          <div className='h-[47vh] w-[30vw] bg-zinc-700 rounded-tl-[5vh] rounded-br-[15vh] animate-float'>
            <h1 className='text-center p-2 text-4xl border-b-2 border-zinc-400 font-semibold'>AI Solution</h1>
            <p className='text-center text-xl pt-2 pl-2 pr-2'>Leverage AI to automate processes, enhance efficiency, and make smarter decisions</p>
            <img src='https://whatmaction.com/images/services-images/ai-solutions-banner.svg' className='h-[25vh] w-[25vw] m-auto rounded-2xl' />
          </div>
          <div className='h-[47vh] w-[30vw] bg-zinc-700 rounded-tl-[5vh] rounded-br-[15vh] animate-float'>
            <h1 className='text-center p-2 text-4xl border-b-2 border-zinc-400 font-semibold'>Web Dev</h1>
            <p className='text-center text-xl pt-2 pl-2 pr-2'>Responsive websites that help your business grow and encourage engagement</p>
            <img src='https://codarity.com/wp-content/uploads/2020/05/Web-Development-Illustration.svg' className='h-[25vh] w-[25vw] m-auto rounded-2xl' />
          </div>
        </div>
      </div>
    </>
  )
}

export default ServiceSection