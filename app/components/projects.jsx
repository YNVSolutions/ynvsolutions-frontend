'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Projects = () => {
  const projectData = [
    {
      title: 'ARX Vision',
      description: 'A suite of AI-driven accessibility tools for Android, iOS, and backend platforms, featuring real-time speech-to-text, object recognition, and navigation assistance for users with disabilities.',
      image: '/Arx_vision_ss.png',
      url: 'https://arx.vision/',
      imageHeight: 300,
    },
    {
      title: 'Our Media',
      description: 'Implemented an MDM migration from Jamf to Kandji, enhancing device management, security, and remote troubleshooting for enterprise operations.',
      image: '/Our_media_ss.png',
      url: 'https://ourmedia.co.uk/',
      imageHeight: 200,
    },
    {
      title: 'Dona Donations',
      description: 'Custom Android kiosk app for donation collection, featuring seamless transactions, real-time reporting, and secure integration with backend systems.',
      image: '/Dona_ss.png',
      url: 'https://donadonations.com/',
      imageHeight: 200,
    },
  ];

  return (
    <section className="min-h-screen">
      {/* Header */}
      <div className="container mx-auto px-6 text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight drop-shadow-lg">
          <span className="bg-clip-text text-transparent text">
            Projects
          </span>
        </h1>
        <p className="mt-5 text-gray-300 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
        Unleash Your Curiosity—Discover Our Work.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl shadow-gray-950/50 border-gray-700/50 transform hover:-translate-y-3 transition-all duration-500 flex flex-col"
          >
            <div className="relative h-56 md:h-64 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-7 flex flex-col flex-grow">
              <h2 className="text-2xl font-bold text-white mb-3 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text group-hover:drop-shadow-md transition-all duration-300">
                {project.title}
              </h2>
              <p className="text-gray-200 text-sm leading-relaxed mb-6 font-light flex-grow">
                {project.description}
              </p>
              <Link href={project.url} target="_blank" rel="noopener noreferrer">
                <button className="w-full bg-gradient-to-r  text-white bg-blue-900/80 py-3 px-6 rounded-lg  transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1">
                  Explore Project
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;