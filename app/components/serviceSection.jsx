"use client"
import React from 'react'

const ServiceSection = () => {
  return (
    <>
      <div className='service'>
        <div className='text-center text-white font-semibold pb-10'>
          <h1 className='mt-8 font-bold text-4xl md:text-6xl lg:text-8xl'>Services<span className='text text-2xl md:text-4xl lg:text-6xl'> We Provide You</span></h1>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 m-auto text-zinc-300 p-5'>
          <div className='h-[50vh] sm:h-[45vh] md:h-[50vh] lg:h-[55vh] w-full bg-zinc-900 rounded-lg animate-float border-t-4 border-pink-500 cursor-pointer'>
            <h1 className='text-center p-4 text text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold'>Android & IOS App Development</h1>
            <p className='text-center text-xs sm:text-sm md:text-lg lg:text-xl p-2'>We craft innovative mobile applications for Android and iOS, focusing on efficiency and security. Our process includes design, development, deployment, testing, and maintenance. Explore our portfolio and benefit from our use of cutting-edge technologies.</p>
            <div className='flex flex-col sm:flex-row justify-center items-center text-sm sm:text-md'>
              <ul className='p-3'>
                <li className='text-lg font-semibold pb-5'>What We Offer : </li>
                <li>1. Cross-Platform Excellence</li>
                <li>2. End-to-End Development</li>
                <li>3. Utilizing Modern Tech</li>
                <li>4. Reliable Platform Support</li>
              </ul>
              <img src='https://staging.spwebconnect.com/img/services/mobile_application/mobile_app_design/SpWebconnect_mobile_app_development.gif' className='overflow-hidden h-[12vh] sm:h-[15vh] md:h-[20vh] lg:h-[25vh] w-[90%] sm:w-[70%] md:w-[60%] lg:w-[25vw] m-auto rounded-2xl' />
            </div>
          </div>

          <div className='h-[50vh] sm:h-[45vh] md:h-[50vh] lg:h-[55vh] w-full bg-zinc-900 rounded-lg animate-float border-t-4 border-blue-500 cursor-pointer'>
            <h1 className='text-center p-4 text text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold'>MDM Solution</h1>
            <p className='text-center text-xs sm:text-sm md:text-lg lg:text-xl pt-2 pl-2 pr-2'>Our MDM solution ensures complete privacy and security for your company devices. We offer device tracing, mobile management with data security, identity and access management, and BYOD authentication. Benefit from time savings, improved efficiency, and enhanced security.</p>
            <div className='flex flex-col sm:flex-row justify-center items-center'>
              <ul className='text-sm sm:text-md p-3'>
                <li className='text-lg font-semibold pb-5'>What We Offer :</li>
                <li>1. Device Tracking & Monitoring</li>
                <li>2. Secure Data Management</li>
                <li>3. User & Device Identity Verification</li>
                <li>4. BYOD Authentication</li>
              </ul>
              <img src='https://www.intellium.ai/expertise_hero.svg' className='h-[12vh] sm:h-[15vh] md:h-[20vh] lg:h-[25vh] w-[90%] sm:w-[70%] md:w-[60%] lg:w-[25vw] m-auto rounded-2xl' />
            </div>
          </div>

          <div className='h-[50vh] sm:h-[45vh] md:h-[50vh] lg:h-[55vh] w-full bg-zinc-900 rounded-lg animate-float border-t-4 border-blue-500 cursor-pointer'>
            <h1 className='text-center p-4 text text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold'>AI Solution</h1>
            <p className='text-center text-xs sm:text-sm md:text-lg lg:text-xl pt-2 pl-2 pr-2'>Our AI solution enhances website/app performance through automated decision-making and machine learning. We analyze data to provide effective insights, mimicking human intelligence for chatbots, recommendations, and fraud detection.</p>
            <div className='flex flex-col sm:flex-row justify-center items-center'>
              <ul className='p-3'>
                <li className='text-lg font-semibold pb-5'>What We Offer :</li>
                <li>1. Automated Decisioning</li>
                <li>2. Machine Learning Core</li>
                <li>3. Data-Driven Learning</li>
                <li>4. Real-time Data Analysis</li>
              </ul>
              <img src='https://whatmaction.com/images/services-images/ai-solutions-banner.svg' className='h-[15vh] md:h-[20vh] lg:h-[25vh] w-[80%] md:w-[60%] lg:w-[25vw] m-auto rounded-2xl' />
            </div>
          </div>

          <div className='h-[40vh] md:h-[50vh] lg:h-[57vh] w-full bg-zinc-900 rounded-lg animate-float border-t-4 border-pink-500 cursor-pointer'>
            <h1 className='text-center p-4 text text-2xl md:text-3xl lg:text-4xl font-semibold'>Web Development</h1>
            <p className='text-center text-sm md:text-lg lg:text-xl pt-2 pl-2 pr-2'>We build modern and responsive websites tailored to your needs. Our web development encompasses design, functionality, and optimization for a seamless user experience. We focus on performance and utilize the latest web technologies.</p>
            <div className='flex justify-center items-center'>
              <ul className='p-3'>
                <li className='text-lg font-semibold pb-5'>What We Offer :</li>
                <li>1. User-Friendly Interfaces</li>
                <li>2. Robust Website Features</li>
                <li>3. Fast & Reliable Sites</li>
                <li>4. Performance Optimization</li>
              </ul>
              <img src='https://codarity.com/wp-content/uploads/2020/05/Web-Development-Illustration.svg' className='h-[15vh] md:h-[20vh] lg:h-[25vh] w-[80%] md:w-[60%] lg:w-[25vw] m-auto rounded-2xl' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServiceSection