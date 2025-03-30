import Image from 'next/image';
import React from 'react'

const ServiceSection = () => {
  const data = [
    {
      title: "Android & IOS App Development",
      description: "We craft innovative mobile applications for Android and iOS, focusing on efficiency and security. Our process includes design, development, deployment, testing, and maintenance. Explore our portfolio and benefit from our use of cutting-edge technologies.",
      image:'/app.gif',
      offers: [
        "Cross-Platform Excellence",
        "End-to-End Development",
        "Utilizing Modern Tech",
      ],
    },
    {
      title: "MDM Solution",
      description: "Our MDM solution ensures complete privacy and security for your company devices. We offer device tracing, mobile management with data security, identity and access management, and BYOD authentication. Benefit from time savings, improved efficiency, and enhanced security.",
      image:'/mdm.gif',
      offers: [
        "Device Tracking & Monitoring",
        "Secure Data Management",
        "BYOD Authentication",
      ],
    },
    {
      title: "AI Solution",
      description: "Our AI solution enhances website/app performance through automated decision-making and machine learning. We analyze data to provide effective insights, mimicking human intelligence for chatbots, recommendations, and fraud detection.",
      image:'/ai.gif',
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
      <div className='flex justify-around items-center'>
      {data.map((element, idx) => (
        <div key={idx}>
          <Image src={element.image} height={10} width={800} alt=''/>
          <h1 className='text-2xl text-white font-semibold'>{element.title}</h1>
        </div>
      ))}
      </div>
    </>
  )
}

export default ServiceSection