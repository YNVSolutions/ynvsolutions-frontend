import React from 'react';

const projects = [
  {
    name: "ARX Vision",
    description: "Android, iOS, and backend development for AI-powered accessibility solutions.",
    image: "https://arx.vision/assets/logo.png", // Replace with an actual image link
    link: "https://arx.vision/"
  },
  {
    name: "Our Media",
    description: "Implemented Kandji MDM solution, migrating from Jamf for seamless device management.",
    image: "https://ourmedia.co.uk/assets/logo.png", // Replace with an actual image link
    link: "https://ourmedia.co.uk/"
  },
  {
    name: "Dona Donations",
    description: "Developed an enterprise kiosk Android app for streamlined donation management.",
    image: "https://donadonations.com/assets/logo.png", // Replace with an actual image link
    link: "https://donadonations.com/"
  }
];

const Projects = () => {
  return (
    <div className='w-full h-full bg-black py-10 px-5 text-white' id="projects">
      <h2 className='text-4xl font-bold text-center mb-8'>Our Projects</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target='_blank'
            rel='noopener noreferrer'
            className='block p-4 bg-zinc-800 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105'
          >
            <img src={project.image} alt={project.name} className='w-full h-40 object-cover rounded-md mb-4' />
            <h3 className='text-xl font-semibold mb-2'>{project.name}</h3>
            <p className='text-gray-300'>{project.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
