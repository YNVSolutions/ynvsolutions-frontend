"use client"
import { motion } from 'motion/react'
import React from 'react'

const ServiceSection = () => {
  return (
    <div className='w-full h-[50vh] md:h-[30vh] lg:h-[20vw] py-10 bg-zinc-800 text-white rounded-tl-3xl rounded-tr-3xl'>
      <div className='border-b-2 border-t-2 border-zinc-500 flex whitespace-nowrap overflow-hidden'>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 20 }}
          className='text-[10vh] md:text-[15vh] lg:text-[25vh] leading-none font-bold'>
          YNV Tech Delivers Scalable, Efficient, And Intelligent Digital Solutions, Including AI Automation, Mobile Management, And App Development, To Drive Global Business Growth Through Innovation.
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 20 }}
          className='text-[10vh] md:text-[15vh] lg:text-[25vh] leading-none font-bold'>
          YNV Tech Delivers Scalable, Efficient, And Intelligent Digital Solutions, Including AI Automation, Mobile Management, And App Development, To Drive Global Business Growth Through Innovation.
        </motion.h1>
      </div>
      <din className='text-center text-7xl font-semibold'>
        <h1 className='mt-32 font-bold'>Services</h1>
      </din>
      <div className='flex justify-center items-center gap-8 m-24'>
        <div className='h-[47vh] w-[22vw] bg-zinc-700 rounded-tl-[10vh] rounded-br-[20vh] animate-float'>
          <h1 className='text-center p-4 text-2xl border-b-2 border-zinc-400 font-semibold '>Android & iOS App Dev</h1>
          <p className='text-center text-xl p-2'>We build fast, scalable, and intuitive mobile apps tailored for your business needs</p>
          <img src='https://staging.spwebconnect.com/img/services/mobile_application/mobile_app_design/SpWebconnect_mobile_app_development.gif' className='overflow-hidden ' />
        </div>
        <div className='h-[47vh] w-[22vw] bg-zinc-700 rounded-tl-[10vh] rounded-br-[20vh] animate-float'>
          <h1 className='text-center p-4 text-2xl border-b-2 border-zinc-400 font-semibold '>MDM Solution</h1>
          <p className='text-center text-xl pt-2 pl-2 pr-2'>Optimized Mobile Databases: Secure, efficient data for your apps</p>
          <img src='https://www.intellium.ai/expertise_hero.svg' className='h-[20vh] w-[15vw] m-auto rounded-2xl' />
        </div>
        <div className='h-[47vh] w-[22vw] bg-zinc-700 rounded-tl-[10vh] rounded-br-[20vh] animate-float'>
          <h1 className='text-center p-4 text-2xl border-b-2 border-zinc-400 font-semibold '>AI Solution</h1>
          <p className='text-center text-xl pt-2 pl-2 pr-2'>Leverage AI to automate processes, enhance efficiency, and make smarter decisions</p>
          <img src='https://whatmaction.com/images/services-images/ai-solutions-banner.svg' className='h-[20vh] w-[20vw] m-auto rounded-2xl' />
        </div>
        <div className='h-[47vh] w-[22vw] bg-zinc-700 rounded-tl-[10vh] rounded-br-[20vh] animate-float'>
          <h1 className='text-center p-4 text-2xl border-b-2 border-zinc-400 font-semibold '>Web Dev</h1>
          <p className='text-center text-xl pt-2 pl-2 pr-2'>Responsive websites that help your business grow and encourage engagement</p>
          <img src='https://codarity.com/wp-content/uploads/2020/05/Web-Development-Illustration.svg' className='h-[20vh] w-[20vw] m-auto rounded-2xl' />
        </div>
      </div>
    </div>
  )
}

export default ServiceSection