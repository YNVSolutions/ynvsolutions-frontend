import React from 'react';
import Image from 'next/image'
const projects = () => {
  return (
    <div className='projects-container' id='projects'>
      <style jsx>{`
        .projects-container {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          padding: 20px;
          background-color: #121212;
        }
        .project-card {
          background-color: #1e1e1e;
          border-radius: 12px;
          width: 32%;
          margin: 10px 0;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease-in-out;
        }
        .project-card:hover {
          transform: translateY(-10px);
        }
        .project-image {
          width: 100%;
          height: auto;
          max-height: 200px;
          object-fit: contain;
        }
        .project-content {
          padding: 20px;
        }
        .project-title {
          font-size: 1.5rem;
          color: #f5a623;
          margin-bottom: 10px;
        }
        .project-description {
          font-size: 1rem;
          color: #e0e0e0;
          line-height: 1.6;
        }
        @media (max-width: 768px) {
          .project-card {
            width: 48%;
          }
        }
        @media (max-width: 480px) {
          .project-card {
            width: 100%;
          }
        }
      `}</style>
      <div className='project-card'>
        <img
          src='/ARX_vision.png'
          alt='ARX Vision'
          className='project-image'
        />
        <div className='project-content'>
          <p className='project-title'>ARX Vision</p>
          <p className='project-description'>
            We developed a suite of AI-driven accessibility tools for Android,
            iOS, and backend platforms to assist users with various disabilities.
            These tools offer features like real-time speech-to-text
            transcription, object recognition for visually impaired users, and
            automated navigation assistance. The solution was tailored to improve
            accessibility for diverse use cases in both everyday life and
            specialized industries like healthcare and education.
          </p>
        </div>
      </div>
      <div className='project-card'>
        <img
          src='/Our_media.png'
          alt='Our Media'
          className='project-image'
        />
        <div className='project-content'>
          <p className='project-title'>Our Media</p>
          <p className='project-description'>
            For Our Media, we implemented a robust Mobile Device Management
            (MDM) migration from Jamf to Kandji. This migration ensured smoother
            device management across multiple devices, improved security policies,
            and streamlined the deployment process for their enterprise operations.
            Additionally, we integrated advanced features for remote
            troubleshooting and monitoring, reducing the need for on-site IT
            support, and enhancing productivity across the organization.
          </p>
        </div>
      </div>
      <div className='project-card'>
        <img
          src='/dona.png'
          alt='Dona Donations'
          className='project-image'
        />
        <div className='project-content'>
          <p className='project-title'>Dona Donations</p>
          <p className='project-description'>
            We developed a custom enterprise kiosk Android application for Dona
            Donations that simplifies donation collection and management at
            various physical locations. The app enables seamless transactions,
            provides real-time reporting, and integrates with backend donation
            tracking systems. Our work also involved ensuring the app's security
            and stability for high-traffic environments, helping Dona Donations
            manage their fundraising campaigns more effectively and ensuring smooth
            operation across their kiosks nationwide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default projects;
