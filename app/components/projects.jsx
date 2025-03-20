import React from 'react';

const Projects = () => {
  return (
    <div className='absolute w-full h-full bg-black text-white p-10' id='projects'>
      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          grid-template-rows: repeat(4, 1fr);
          gap: 16px;
        }
        .grid div {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          background: rgba(0, 0, 0, 0.8); /* Semi-transparent black background */
          padding: 15px;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5); /* Added shadow for contrast */
        }
        .grid img {
          width: 250px;
          height: 180px;
          border-radius: 10px;
          margin-bottom: 10px;
        }
        .project-card strong {
          font-size: 1.2rem;
          color: #f5a623; /* Slightly brighter color for headings */
        }
        .project-card p {
          margin: 10px 0;
        }
      `}</style>
      <div className='grid'>
        {/* ARX Vision */}
        <div className='project-card'>
          <img src='https://arx.vision/sample-image.jpg' alt='ARX Vision' />
          <p><strong>ARX Vision</strong></p>
          <p>Developed AI-driven accessibility tools for Android, iOS, and backend.</p>
        </div>

        {/* Our Media */}
        <div className='project-card'>
          <img src='https://ourmedia.co.uk/sample-image.jpg' alt='Our Media' />
          <p><strong>Our Media</strong></p>
          <p>Implemented MDM migration from Jamf to Kandji for enterprise security.</p>
        </div>

        {/* Dona Donations */}
        <div className='project-card'>
          <img src='https://donadonations.com/sample-image.jpg' alt='Dona Donations' />
          <p><strong>Dona Donations</strong></p>
          <p>Built an enterprise kiosk Android app for seamless donation management.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
