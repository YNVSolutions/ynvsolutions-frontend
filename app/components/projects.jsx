import React from 'react';

const Projects = () => {
  return (
    <div className='z-[-999] absolute w-full h-full bg-zinc-700 text-white p-10' id='projects'>
      <style jsx>{`
        .grid div {
          grid-row: var(--r);
          grid-column: var(--c);
        }
        .grid img {
          width: 250px;
          height: 180px;
          border-radius: 10px;
        }
        .project-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          background: rgba(0, 0, 0, 0.6);
          padding: 10px;
          border-radius: 8px;
        }
      `}</style>
      <div className='grid grid-cols-8 grid-rows-4 gap-4'>
        {/* ARX Vision */}
        <div className='col-span-2 row-span-1 project-card' style={{ '--r': 1, '--c': 1 }}>
          <img src='https://arx.vision/sample-image.jpg' alt='ARX Vision' />
          <p><strong>ARX Vision</strong></p>
          <p>Developed AI-driven accessibility tools for Android, iOS, and backend.</p>
        </div>

        {/* Our Media */}
        <div className='col-span-2 row-span-1 project-card' style={{ '--r': 2, '--c': 4 }}>
          <img src='https://ourmedia.co.uk/sample-image.jpg' alt='Our Media' />
          <p><strong>Our Media</strong></p>
          <p>Implemented MDM migration from Jamf to Kandji for enterprise security.</p>
        </div>

        {/* Dona Donations */}
        <div className='col-span-2 row-span-1 project-card' style={{ '--r': 3, '--c': 6 }}>
          <img src='https://donadonations.com/sample-image.jpg' alt='Dona Donations' />
          <p><strong>Dona Donations</strong></p>
          <p>Built an enterprise kiosk Android app for seamless donation management.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
