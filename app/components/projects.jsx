import React from 'react';

const projectData = [
  {
    title: "Project Alpha",
    description: "A web platform for data visualization.",
    image: "https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg",
    link: "#"
  },
  {
    title: "Project Beta",
    description: "An AI-powered chatbot for customer service.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXRSN7q0U6K6ciRrhPb0k4mmKMDFiQNyjXUw&s",
    link: "#"
  },
  {
    title: "Project Gamma",
    description: "A mobile app for remote team collaboration.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqh-XpWAkI5y-Tp8KoDkTDlmNZ0pwQK_epGw&s",
    link: "#"
  }
];

const Projects = () => {
  return (
    <div className='z-[-999] absolute w-full h-full bg-zinc-700 p-10' id='projects'>
      <div className="grid grid-cols-3 gap-6">
        {projectData.map((project, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg text-center">
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="text-gray-600 text-sm">{project.description}</p>
            <a href={project.link} className="text-blue-500 mt-2 inline-block">Learn More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
