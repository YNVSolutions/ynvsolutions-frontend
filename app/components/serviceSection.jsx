"use client"
import { motion } from 'motion/react'
import React from 'react'

const ServiceSection = () => {
  return (
    <div className='w-full h-[50vh] md:h-[30vh] lg:h-[20vw] py-10 bg-zinc-800 text-white rounded-tl-3xl rounded-tr-3xl'>
      <div className='border-b-2 border-t-2 border-zinc-500 flex whitespace-nowrap overflow-hidden'>
        <motion.h1
        initial={{x:0}} 
        animate={{x:"-100%"}}
        transition={{ease:"linear",repeat:Infinity,duration:30}}
        className='text-[10vh] md:text-[15vh] lg:text-[25vh] leading-none font-bold'>
          YNV Tech Delivers Scalable, Efficient, And Intelligent Digital Solutions, Including AI Automation, Mobile Management, And App Development, To Drive Global Business Growth Through Innovation. YNV Tech Delivers Scalable, Efficient, And Intelligent Digital Solutions, Including AI Automation, Mobile Management, And App Development, To Drive Global Business Growth Through Innovation.
        </motion.h1>
      </div>
    </div>
  )
}

export default ServiceSection