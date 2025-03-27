"use client"
import React from 'react'

const ServiceSection = () => {
  return (
    <>
      <div className='service'>
        <div className='text-center text-white font-semibold pb-10'>
          <h1 className='mt-8 font-bold text-4xl md:text-6xl lg:text-8xl'>Services<span className='text text-2xl md:text-4xl lg:text-6xl'> We Provide You</span></h1>
        </div>


        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 m-auto text-zinc-300 p-5'>
          <div className='h-[40vh] md:h-[50vh] lg:h-[57vh] w-full bg-zinc-900 rounded-lg animate-float border-t-4 border-pink-500 cursor-pointer'>
            <h1 className='text-center p-4 text text-2xl md:text-3xl lg:text-4xl font-semibold'>Android & IOS App Development</h1>
            <p className='text-center text-sm md:text-lg lg:text-xl p-2'>We craft innovative mobile applications for Android and iOS, focusing on efficiency and security. Our process includes design, development, deployment, testing, and maintenance. Explore our portfolio and benefit from our use of cutting-edge technologies.
            </p>
            <div className='flex justify-center items-center text-md'>
              <ul className='p-3'>
                <li className='text-lg font-semibold pb-5'>What We Offer : </li>
                <li>Cross-Platform Excellence</li>
                <li>End-to-End Development</li>
                <li>Utilizing Modern Tech</li>
                <li>Reliable Platform Support</li>
              </ul>
              <img src='https://staging.spwebconnect.com/img/services/mobile_application/mobile_app_design/SpWebconnect_mobile_app_development.gif' className='overflow-hidden h-[15vh] md:h-[20vh] lg:h-[25vh] w-[80%] md:w-[60%] lg:w-[25vw] m-auto rounded-2xl' />
            </div>
          </div>



          <div className='h-[40vh] md:h-[50vh] lg:h-[57vh] w-full bg-zinc-900 rounded-lg animate-float border-t-4 border-blue-500 cursor-pointer'>
            <h1 className='text-center p-4 text text-2xl md:text-3xl lg:text-4xl font-semibold'>MDM Solution</h1>
            <p className='text-center text-sm md:text-lg lg:text-xl pt-2 pl-2 pr-2'>Our MDM solution ensures complete privacy and security for your company devices. We offer device tracing, mobile management with data security, identity and access management, and BYOD authentication. Benefit from time savings, improved efficiency, and enhanced security.</p>
            <div className='flex justify-center items-center'>
              <ul className='text-md p-3'>
                <li className='text-lg font-semibold pb-5'>What We Offer :</li>
                <li>Device Tracking & Monitoring</li>
                <li>Secure Data Management</li>
                <li>User & Device Identity Verification</li>
                <li>BYOD Authentication</li>
              </ul>
              <img src='https://www.intellium.ai/expertise_hero.svg' className='h-[15vh] md:h-[20vh] lg:h-[25vh] w-[80%] md:w-[60%] lg:w-[25vw] m-auto rounded-2xl' />
            </div>
          </div>


          <div className='h-[40vh] md:h-[50vh] lg:h-[57vh] w-full bg-zinc-900 rounded-lg animate-float border-t-4 border-blue-500 cursor-pointer'>
            <h1 className='text-center p-4 text text-2xl md:text-3xl lg:text-4xl font-semibold'>AI Solution</h1>
            <p className='text-center text-sm md:text-lg lg:text-xl pt-2 pl-2 pr-2'>Our AI solution enhances website/app performance through automated decision-making and machine learning. We analyze data to provide effective insights, mimicking human intelligence for chatbots, recommendations, and fraud detection.</p>
            <div>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <img src='https://whatmaction.com/images/services-images/ai-solutions-banner.svg' className='h-[15vh] md:h-[20vh] lg:h-[25vh] w-[80%] md:w-[60%] lg:w-[25vw] m-auto rounded-2xl' />
            </div>
          </div>


          <div className='h-[40vh] md:h-[50vh] lg:h-[57vh] w-full bg-zinc-900 rounded-lg animate-float border-t-4 border-pink-500 cursor-pointer'>
            <h1 className='text-center p-4 text text-2xl md:text-3xl lg:text-4xl font-semibold'>Web Dev</h1>
            <p className='text-center text-sm md:text-lg lg:text-xl pt-2 pl-2 pr-2'>Responsive websites that help your business grow and encourage engagement</p>
            <img src='https://codarity.com/wp-content/uploads/2020/05/Web-Development-Illustration.svg' className='h-[15vh] md:h-[20vh] lg:h-[25vh] w-[80%] md:w-[60%] lg:w-[25vw] m-auto rounded-2xl' />
          </div>
        </div>
      </div>
    </>
  )
}

export default ServiceSection