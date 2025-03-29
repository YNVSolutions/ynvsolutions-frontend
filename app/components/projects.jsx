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
    <section className="min-h-screen bg-gray-900 py-20">
      {/* Header */}
      <div className="container mx-auto px-4 text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
          <span className="text">Projects</span>
        </h1>
        <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
          Explore our innovative solutions built with cutting-edge technology.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="group bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
          >
            <div className="relative h-48 md:h-64">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-white mb-3">
                {project.title}
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {project.description}
              </p>
              <Link href={project.url} target="_blank" rel="noopener noreferrer">
                <button className="w-full bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors duration-200 font-medium">
                  Visit Project
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