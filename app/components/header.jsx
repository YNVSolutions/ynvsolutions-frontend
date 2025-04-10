import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <>
            <div className="bg-transparent pt-20 md:pt-32 lg:pt-48 pb-12 md:pb-24 lg:pb-35 text-white relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between">
                    <div className="lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
                        <p className="bg-purple-600 bg-opacity-50 rounded-full py-2 px-4 text-sm mb-4 inline-block">
                            Welcome To YNV Solutions!
                        </p>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
                            <span className="text">Empowering </span> <br />
                            Digital <span className="text">Transformation </span><br />
                            Through Intelligent<br /> <span className="text">Solutions.</span>
                        </h1>
                        <div className="flex justify-center lg:justify-start space-x-4">
                            <Link href="#services">
                                <button className="bg-white text-purple-800 font-semibold py-3 px-6 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2">
                                    Get Started
                                </button>
                            </Link>
                            <Link href="#projects">
                                <button className="bg-white text-purple-800 font-semibold py-3 px-6 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2">
                                    Watch Demo
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Video Section */}
                    <div className="lg:w-1/2 relative hidden md:block">
                        <div className="bg-black bg-opacity-30 rounded-xl shadow-lg border border-purple-700">
                            <video className="rounded-xl" autoPlay loop muted playsInline width="100%" height="auto">
                                <source src="/main.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;