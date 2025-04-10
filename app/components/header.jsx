import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <motion.div
            className="bg-black pt-14 md:pt-22 lg:pt-32 pb-16 md:pb-28 lg:pb-26 text-white relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <div className="container mx-auto px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row items-center justify-between">
                <div className="lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left z-10">
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-8"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    >
                        YNV :<br/>
                        <span className="text">Intelligent </span><br/>Digital
                        <span className="text"> Power.</span>
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-xl text-gray-300 mb-8"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                    >
                        Unlocking the future with cutting-edge technology and innovative solutions.
                    </motion.p>
                    <motion.div
                        className="flex justify-center lg:justify-start space-x-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                    >
                        <Link href="#contact" className="bg-transparent hover:bg-pink-500 text-white font-semibold py-3 px-6 rounded-full border border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2">
                            Contact Us
                        </Link>
                    </motion.div>
                </div>
                <div className="lg:w-1/2 relative">
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 rounded-xl"></div>
                    <motion.div
                        className="rounded-xl shadow-xl border-b-2 border-b-pink-700 border-t-2 border-t-blue-700 overflow-hidden relative" 
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    >
                        <video className="rounded-xl object-cover w-full h-full aspect-video" autoPlay loop muted playsInline>
                            <source src="/main.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default Header;