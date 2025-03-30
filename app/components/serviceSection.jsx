import Image from 'next/image';
import React from 'react'

const ServiceSection = () => {
  const data = [
    {
      title: "App Development",
      description: "We craft innovative mobile applications for Android and iOS, focusing on efficiency and security. Our process includes design, development, deployment, testing, and maintenance. Explore our portfolio and benefit from our use of cutting-edge technologies.",
      image: '/app.gif',
      offers: [
        "Cross-Platform Excellence",
        "End-to-End Development",
        "Utilizing Modern Tech",
      ],
    },
    {
      title: "MDM Solution",
      description: "Our MDM solution ensures complete privacy and security for your company devices. We offer device tracing, mobile management with data security, identity and access management, and BYOD authentication. Benefit from time savings, improved efficiency, and enhanced security.",
      image: '/mdm.gif',
      offers: [
        "Device Tracking & Monitoring",
        "Secure Data Management",
        "BYOD Authentication",
      ],
    },
    {
      title: "AI Solution",
      description: "Our AI solution enhances website/app performance through automated decision-making and machine learning. We analyze data to provide effective insights, mimicking human intelligence for chatbots, recommendations, and fraud detection.",
      image: '/ai.gif',
      offers: [
        "Automated Decisioning",
        "Machine Learning Core",
        "Data-Driven Learning",
      ],
    },
    {
      title: "Web Development",
      description: "We build modern and responsive websites tailored to your needs. Our web development encompasses design, functionality, and optimization for a seamless user experience. We focus on performance and utilize the latest web technologies.",
      image: '/web.gif',
      offers: [
        "User-Friendly Interfaces",
        "Robust Website Features",
        "Fast & Reliable Sites",
      ],
    },
  ];
  return (
    <>
    <div className="container mx-auto px-6 text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight drop-shadow-lg">
          <span className="bg-clip-text text-transparent text">
            <span className='text-6xl md:text-8xl'>S</span>ervices
          </span>
        </h1>
        <p className="mt-5 text-gray-300 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
        Crafting Solutions, Delivering Excellence
        </p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-1 md:grid-cols-2 md:grid-rows-4 sm:grid-cols-1 sm:grid-rows-4 gap-4'>
        {data.map((element, idx) => (
          <div 
            key={idx} 
            className='bg-gradient-to-t from-gray-900/80 p-2 rounded-3xl  transform transition-transform duration-300 hover:scale-105'
          >
            <img src={element.image} className='h-[25vh] w-[80vw] lg:h-[25vh] lg:w-[20vw] md:h-[25vh] md:w-[80vw] sm:h-[25vh] sm:w-[80vw] object-contain' alt='' />
            <h2 className="text-2xl font-bold text-white mb-3 bg-gradient-to-r bg-clip-text group-hover:drop-shadow-md transition-all duration-300 px-2">{element.title}</h2>
            <p className="text-gray-200 text-sm leading-relaxed mb-6 font-light flex-grow px-2">
              {element.description}
            </p>
            <ul>
              <h1 className='px-3 text py-1'>Features :-</h1>
              {element.offers.map((offer, offerIdx) => (
                <li key={offerIdx} className="text-gray-300 text-sm mb-1 px-2">- {offer}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}

export default ServiceSection