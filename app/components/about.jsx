import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    <>
      <div
        className="relative w-full overflow-hidden"
        id="about"
        style={{
          backgroundImage: 'url(/back.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="py-12 sm:py-16 md:py-24 lg:py-32 bg-black/60">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
              <p className="uppercase text-gray-400 font-semibold tracking-wider mb-2 text-sm sm:text-base md:text-lg lg:text-xl">
                ABOUT US
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Driving Digital <span className="text">Transformation</span> via{' '}
                <span className="text">Innovation.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6">
                We are a dynamic technology company that builds the future through advanced AI solutions, powerful Mobile Device Management, and exceptional mobile app development for Android and iOS. Our website is your gateway to exploring our services, diving into our portfolio, and connecting with our team. Let's innovate together.
              </p>
              <Link href="#services">
                <button className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold border-2 border-white py-2 px-4 sm:px-5 md:px-6 lg:px-7 rounded-xl shadow-lg bg-gradient-to-r from-pink-500/50 via-purple-500/50 to-blue-500/50 hover:scale-105 hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 transition-all duration-300 ease-in-out">
                  Explore Our Services
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;