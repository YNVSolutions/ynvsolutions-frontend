"use client"
import React from 'react'

const Navigation = () => {
  return (
    <>
      <div className='navBar w-full flex justify-between items-center fixed z-[999] backdrop-blur-xs'>
        <div className='logo'>
          <img src='favicon.ico' className='w-14 h-14 rounded-full ' />
        </div>
        <div className='flex gap-10'>
          {["Home", "About Us", "Services", "Case Studies", "Contact Us"].map((item, index) => (
            <a href='#' key={index} className="text-lg font-light capitalize hover:text-gray-500">{item}</a>
          ))}
        </div>
      </div>

      <style jsx>{`
        .navBar {
          padding: 32px;
        }
      `}</style>
    </>
  )
}

export default Navigation