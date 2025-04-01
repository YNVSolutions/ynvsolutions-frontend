import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
       <footer className="bg-black border-t-pink-500 border-4 p-6">
        <div className="footer bg-black text-white rounded-tl-4xl">
          <div className="theContainer mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
            
            {/* Logo and Company Name */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <img
                src="./favicon.ico"
                alt="YNV Logo"
                className="h-20 rounded-md transition-transform duration-300 hover:scale-105 animate-float"
              />
              <p className="text-xl text-gray-400">Yantra Nirmaan Vidhi Pvt. Ltd.</p>
            </div>

            {/* Quick Links */}
            <div>
              <p className="text-2xl font-semibold text-pink-500 mb-4">Links</p>
              <ul className="text-gray-400 space-y-2">
                <li><a href="#aboutUs" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
                <li><a href="#contactUs" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* Social Media Icons */}
            <div>
              <p className="text-2xl font-semibold text-pink-500 mb-4">Follow Us</p>
              <div className="flex justify-center md:justify-start space-x-6">
                <a href="#instagram" className="text-gray-400 hover:text-white text-2xl transition-colors">
                  <FaInstagram />
                </a>
                <a href="#facebook" className="text-gray-400 hover:text-white text-2xl transition-colors">
                  <FaFacebookF />
                </a>
                <a href="#linkedin" className="text-gray-400 hover:text-white text-2xl transition-colors">
                  <FaLinkedinIn />
                </a>
                <a href="#twitter" className="text-gray-400 hover:text-white text-2xl transition-colors">
                  <FaTwitter />
                </a>
              </div>
            </div>

            {/* Address */}
            <div>
              <p className="text-2xl font-semibold text-pink-500 mb-4">Reach Us</p>
              <p className="text-gray-400 text-sm">
                NIRMAAN VIDHI (OPC) PRIVATE LIMITED <br />
                C/O S. Abdul Ghaffer & S Abdul Nadim, <br />
                Athgaon S.J.Road, Zabbar Bazar, <br />
                Guwahati, Assam, India - 781001.
              </p>
            </div>
          </div>

          {/* Ruler */}
          <div className="ruler mt-8">
            <hr className="border-t-2 border-gray-700" />
          </div>

          {/* Copyright */}
          <div className="flex justify-center mt-4">
            <p className="text-gray-400 hover:text-white transition-colors">
              © 2025 Yantra Nirman Vidhi (OPC) Private Limited
            </p>
          </div>
        </div>
      </footer>
    </>
  );

};

export default Footer;