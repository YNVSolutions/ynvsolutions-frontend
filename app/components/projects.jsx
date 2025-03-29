import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const projects = () => {
  return (
    <>
      <div className='flex justify-center items-center text-8xl pt-20 pb-12 font-semibold'>
        <h1 className='text'><span className='text-9xl text-white'>P</span>rojects</h1>
      </div>
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
        .project-content {
          padding: 20px;
        }
        .project-title {
          font-size: 1.5rem;
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
          <Image
            src='/arxVisionLogo.jpg'
            alt='ARX Vision'
            width={500}
            height={900}
            style={{ objectFit: 'cover' }}
          />
          <div className='project-content'>
            <p className='project-title text'>ARX Vision</p>
            <p className='project-description'>
              We developed a suite of AI-driven accessibility tools for Android,
              iOS, and backend platforms to assist users with various disabilities.
              These tools offer features like real-time speech-to-text
              transcription, object recognition for visually impaired users, and
              automated navigation assistance. The solution was tailored to improve
              accessibility for diverse use cases in both everyday life and
              specialized industries like healthcare and education.
            </p>
            <br />
            <Link href='https://arx.vision/'>
              <button className='bg-green-700 text-xl text-white rounded-lg p-2 w-full'>Visit</button>
            </Link>
          </div>
        </div>
        <div className='project-card'>
          <Image
            src='/ourMedia.png'
            alt='Our Media'
            width={500}
            height={200}
            style={{ objectFit: 'cover' }}
          />
          <div className='project-content'>
            <p className='project-title text'>Our Media</p>
            <p className='project-description'>
              For Our Media, we implemented a robust Mobile Device Management
              (MDM) migration from Jamf to Kandji. This migration ensured smoother
              device management across multiple devices, improved security policies,
              and streamlined the deployment process for their enterprise operations.
              Additionally, we integrated advanced features for remote
              troubleshooting and monitoring, reducing the need for on-site IT
              support, and enhancing productivity across the organization.
            </p>
            <br />
            <Link href='https://ourmedia.co.uk/'>
              <button className='bg-green-700 text-xl text-white rounded-lg p-2 w-full'>Visit</button>
            </Link>
          </div>
        </div>
        <div className='project-card'>
          <Image
            src='/Dona-logo.svg'
            alt='Dona Donations'
            width={500}
            height={200}
            style={{ objectFit: 'cover' }}
          />
          <div className='project-content'>
            <p className='project-title text'>Dona Donations</p>
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
            <br />
            <Link href='https://donadonations.com/'>
              <button className='bg-green-700 text-xl text-white rounded-lg p-2 w-full '>Visit</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default projects;
