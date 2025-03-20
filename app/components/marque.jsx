import React from 'react'
import { motion } from 'motion/react'
const Marque = () => {
  return (
    <div>
        <div className='w-full h-[30vh] py-10 bg-black text-white rounded-tl-3xl rounded-tr-3xl' id="services">
        <div className='border-b-2 border-t-2 border-white flex whitespace-nowrap overflow-hidden'>
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 80 }}
            className='text-[20vh] leading-none font-bold p-2'>
            <span className='text'>YNV Tech Delivers Scalable, Efficient, And Intelligent Digital Solutions,</span> Including AI Automation,<span className='text'> Mobile Management, And App Development, To Drive Global Business Growth </span> Through Innovation. 
          </motion.h1>
        </div>
      </div>
    </div>
  )
}

export default Marque