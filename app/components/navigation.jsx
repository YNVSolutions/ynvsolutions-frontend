"use client"
import React from 'react'

const Navigation = () => {
  return (
    <>
      <div className='navBar w-full flex justify-between items-center fixed z-[999] bg-white/60 backdrop-blur-md p-[10px] rounded-md'>
        <div className='logo'>
          <img src='favicon.ico' className='w-14 h-14 rounded-full border-2 border-gray-600' />
        </div>
        <div className='flex gap-10 '>
        {
        [
            { name: "Home", link: "#home" },
            { name: "About Us", link: "#about" },
            { name: "Services", link: "#services" },
            { name: "Projects", link: "#projects" }
          ].map((item, index) => (
            <a href={item.link} key={index} className="text-xl font-medium capitalize text-gray-800 hover:text-black drop-shadow-md">
              {item.name}
            </a>
            
          ))
          }
          <button className=''>
          <a href="#contactUs" className='contact-btn text-xl font-medium capitalize bg-white text-gray-800 hover:text-black border-2 rounded-xl shadow-2xl border-gray-600'>Contact Us</a>
          </button>
          
        </div>
        <style jsx>
          {`
          .contact-btn{
          padding: 6px;
          }
          
          `}
        </style>
      </div>
    </>
  )
}

export default Navigation