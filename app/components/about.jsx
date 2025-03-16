import React from 'react'

const About = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1 flex items-center justify-center'>
      <div className='w-full px-4 py-8'> 
        <div className='flex flex-col md:flex-row justify-around items-center'>
          <h1 className='text-3xl backdrop-blur-xs font-md leading-relaxed text-center md:text-left mb-8 md:mb-0'>
            YNV Tech, a division of Yantra Nirman<br />
            Vidhi (OPC) Private Limited, is an innovative<br />
            technology company based in India. Established in<br />
            2021, we specialize in cutting-edge AI solutions,<br />
            Mobile Device Management (MDM), and mobile &<br />
            web application development.
          </h1>
          <div>
            <img src='favicon.ico' alt='logo' className='w-40 h-40 md:w-80 md:h-80 mx-auto' />
          </div>
        </div>
        <br/>
        <br/>
        <div className='box w-full border-t-1 border-zinc-600 flex justify-between items-center mt-8 cursor-pointer'>
          {["App Development", "MDM Solution", "A.I Solution"].map((i) => (
            <p key={i} className='text-md tracking-tight leading-none  hover:text-gray-500'>{i}</p>
          ))}
        </div>
      </div>
      <style jsx>{`
        .box {
          padding: 32px;
          padding-left: 64px;
        }
      `}</style>
    </div>
  )
}

export default About