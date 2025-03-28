"use client"
import React, { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className='navBar shadow-lg bg-gradient-to-r from-[#ec4899]/35 via-[#8b5cf6]/35 to-[#3b82f6]/35 w-full flex justify-between items-center fixed z-[999] bg-white/70 backdrop-blur-md p-[10px] rounded-md'>
        <div className='logo'>
          <img src='favicon.ico' className='w-14 h-14 rounded-full border-2 border-gray-600' />
        </div>

        
        <div className='hidden md:flex gap-10  items-center'>
          {[
            { name: "Home", link: "#home" },
            { name: "About Us", link: "#about" },
            { name: "Services", link: "#services" },
            { name: "Projects", link: "#projects" }
          ].map((item, index) => (
            <a key={index} href={item.link} className="text-xl font-medium capitalize hover:bg-gray-200/50 hover:text-gray-900 rounded-xl p-2 px-3 text-black drop-shadow-md transition-all duration-200 ease-in-out">
              {item.name}
            </a>
          ))}
          <a
  href="#contactUs"
  className="px-3 py-1.5 text-xl font-medium capitalize text-white bg-gray-800/90 backdrop-blur-sm border-2 border-gray-800 rounded-full hover:bg-gray-700/90 hover:backdrop-blur-md transition-all duration-200 ease-in-out"
>
  Contact Us
</a>

   </div>

        
        <button className="md:hidden text-3xl" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

      
      <div className={`fixed top-0 right-0 w-58 h-full shadow-lg bg-black/60 backdrop-blur-md p-[20px] rounded-md transform ${isOpen ? "translate-x-" : "translate-x-full"} transition-transform duration-300 ease-in-out z-[1000] p-5 flex flex-col gap-5`}>
        <button className="text-white text-3xl self-end" onClick={() => setIsOpen(false)}>✕</button>
        {[
          { name: "Home", link: "#home" },
          { name: "About Us", link: "#about" },
          { name: "Services", link: "#services" },
          { name: "Projects", link: "#projects" }
        ].map((item, index) => (
          <a key={index} href={item.link} className="text-xl font-medium capitalize text-gray-200 hover:text-white hover:bg-gray-300/20 p-2 rounded-md">
            {item.name}
          </a>
        ))}
        <a href="#contactUs" className="p-2 text-xl font-medium capitalize  bg-white text-gray-800 hover:text-black border-2 rounded-xl shadow-2xl border-gray-600">
          Contact Us
        </a>
      </div>

      {/* Overlay to close drawer when clicking outside */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-[999]" onClick={() => setIsOpen(false)}></div>
      )}
    </>
  );
}

export default Navigation;