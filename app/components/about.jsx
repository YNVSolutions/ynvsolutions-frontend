import React from 'react'

const About = () => {
  return (
    <>
      <div
        className="bg-cover bg-center h-screen w-full pt-5"
        style={{ backgroundImage: "url('/back.png')" }}
      >
        <div className='text-white absolute top-[30vh] left-[10vw] '>
          <h1 className='text-7xl font-bold '>YNV Tech</h1>
          <div className='w-[30vw] pt-4'>
            <p className='text-xl font-lg'>YNV Tech, a division of Yantra Nirman
              Vidhi (OPC) Private Limited, is an innovative
              technology company based in India. Established in
              2021, we specialize in cutting-edge AI solutions,
              Mobile Device Management (MDM), and mobile &
              web application development.</p>
          </div>
          <div className='pt-4'>
            <button className='text-xl font-semibold border-2 border-white p-2 px-7 rounded-xl shadow-lg bg-gradient-to-r from-[#ec4899]/35 via-[#8b5cf6]/35 to-[#3b82f6]/35 hover:scale-105 hover:bg-gradient-to-r hover:from-[#ec4899]/60 hover:via-[#8b5cf6]/60 hover:to-[#3b82f6]/60 transition-all duration-300 ease-in-out'>
              Know More
            </button>

          </div>
        </div>

      </div>
    </>
  )
}

export default About