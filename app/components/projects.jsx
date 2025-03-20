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
          <p>We developed a suite of AI-driven accessibility tools for Android, iOS, and backend platforms to assist users with various disabilities. These tools offer features like real-time speech-to-text transcription, object recognition for visually impaired users, and automated navigation assistance. The solution was tailored to improve accessibility for diverse use cases in both everyday life and specialized industries like healthcare and education.</p>
        </div>

        {/* Our Media */}
        <div className='project-card'>
          <img src='https://ourmedia.co.uk/sample-image.jpg' alt='Our Media' />
          <p><strong>Our Media</strong></p>
          <p>For Our Media, we implemented a robust Mobile Device Management (MDM) migration from Jamf to Kandji. This migration ensured smoother device management across multiple devices, improved security policies, and streamlined the deployment process for their enterprise operations. Additionally, we integrated advanced features for remote troubleshooting and monitoring, reducing the need for on-site IT support, and enhancing productivity across the organization.</p>
        </div>

        {/* Dona Donations */}
        <div className='project-card'>
          <img src='https://donadonations.com/sample-image.jpg' alt='Dona Donations' />
          <p><strong>Dona Donations</strong></p>
          <p>We developed a custom enterprise kiosk Android application for Dona Donations that simplifies donation collection and management at various physical locations. The app enables seamless transactions, provides real-time reporting, and integrates with backend donation tracking systems. Our work also involved ensuring the app's security and stability for high-traffic environments, helping Dona Donations manage their fundraising campaigns more effectively and ensuring smooth operation across their kiosks nationwide.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
