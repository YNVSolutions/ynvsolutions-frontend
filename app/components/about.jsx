import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <>
      <div
        className="bg-cover bg-center h-screen w-full pt-5"
        style={{ backgroundImage: "url('/back.png')" }}
      >
        <div className='text-white absolute top-[15vh] left-[5vw] '>
          <h1 className='text-7xl font-bold '>YNV Tech</h1>
          <h1 className='text-xl text-white border-b-2 border-white font-semibold p-2 text' style={{ display: 'inline-block' }}>Driving Digital Transformation Through Innovation</h1>
          <div className='w-[35vw] pt-4'>
            <p className='text-xl font-lg'>We are a dynamic technology company that builds the future through advanced AI solutions, powerful Mobile Device Management, and exceptional mobile app development for Android and iOS. Our website is your gateway to exploring our services, diving into our portfolio, and connecting with our team. Let's innovate together.</p>
          </div>
          <div className='pt-4'>
            <Link href="#services">
              <button className='text-xl font-semibold border-2 border-white p-2 px-7 rounded-xl shadow-lg bg-gradient-to-r from-[#ec4899]/35 via-[#8b5cf6]/35 to-[#3b82f6]/35 hover:scale-105 hover:bg-gradient-to-r hover:from-[#ec4899]/60 hover:via-[#8b5cf6]/60 hover:to-[#3b82f6]/60 transition-all duration-300 ease-in-out'>
                Explore Our Services
              </button>
            </Link>
          </div>
          <div className='mt-4 w-[45vw]'>
            <h1 className='text-xl text-white border-b-2 border-white p-2 font-semibold text' style={{ display: 'inline-block' }}>Grow with YNV Tech</h1>
            <p className='text-md font-lg p-2'>In a rapidly evolving digital world, proactive adaptation is essential. YNV Tech empowers your business to not only keep pace but also lead the way. Our deep understanding of the dynamic business landscape allows us to deliver cutting-edge AI, MDM, and mobile solutions, enabling you to anticipate market shifts, capitalize on emerging opportunities, and achieve a competitive advantage.</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default About