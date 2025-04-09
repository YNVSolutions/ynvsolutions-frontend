"use client";
import React, { useState, useEffect } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const transitionDuration = 500;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;

      if (currentScrollPosition > scrollPosition) {
        if (isVisible && !isTransitioning) {
          setIsTransitioning(true);
          setTimeout(() => {
            setIsVisible(false);
            setIsTransitioning(false);
          }, transitionDuration);
        }
      } else {
        if (!isVisible && !isTransitioning) {
          setIsTransitioning(true);
          setIsVisible(true);
          setTimeout(() => {
            setIsTransitioning(false);
          }, transitionDuration);
        }
      }

      setScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition, isVisible, isTransitioning, transitionDuration]);

  return (
    <>
      <div
        className={`navBar shadow-lg bg-gradient-to-r from-[#ec4899]/35 via-[#8b5cf6]/35 to-[#3b82f6]/35 w-full flex justify-between items-center fixed z-[999] bg-white/70 backdrop-blur-md p-[10px] rounded-md transition-all duration-${transitionDuration} ease-in-out ${
          isVisible ? "top-0" : "-top-full"
        }`}
      >
        <div className="logo">
          <img
            src="/favicon.ico"
            className="w-14 h-14 rounded-full border-2 border-gray-600"
            alt="YNV logo"
          />
        </div>

        <div className="hidden md:flex gap-10  items-center">
          {[
            { name: "Home", link: "#home" },
            { name: "About Us", link: "#about" },
            { name: "Services", link: "#services" },
            { name: "Projects", link: "#projects" },
            { name: "Our Team", link: "#team" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="text-xl font-medium capitalize hover:bg-gray-200/50 hover:text-gray-900 rounded-xl p-2 px-3 text-black drop-shadow-md transition-all duration-200 ease-in-out"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-3 py-1.5 text-xl font-medium capitalize text-white bg-gradient-to-r from-gray-800 to-gray-900 border-2 border-gray-900 rounded-full relative overflow-hidden group transition-all duration-300 ease-out animate-fade-in"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-800 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
            <span className="relative z-10">Contact Us</span>
          </a>
        </div>

        <button
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
          style={{ background: "none", border: "none" }}
        >
          ☰
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 w-58 h-full shadow-lg bg-gray-800/60 backdrop-blur-md p-[20px] rounded-md transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-[1000] p-5 flex flex-col gap-5`}
      >
        <button
          className="text-white text-3xl self-end"
          onClick={() => setIsOpen(false)}
          style={{ background: "none", border: "none" }}
        >
          ✕
        </button>
        {[
          { name: "Home", link: "#home" },
          { name: "About Us", link: "#about" },
          { name: "Services", link: "#services" },
          { name: "Projects", link: "#projects" },
          { name: "Our Team", link: "#team" },
        ].map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="text-xl font-medium capitalize text-gray-200 p-2 ps-4 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </a>
        ))}
        <a
          href="#contact"
          className="p-2 ps-3 text-xl font-medium capitalize text-white bg-gradient-to-r from-gray-800 to-gray-700 border-2 border-black rounded-3xl shadow-2xl"
          onClick={() => setIsOpen(false)}
        >
          Contact Us
        </a>
      </div>

      {/* Overlay to close drawer when clicking outside */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/50 z-[999]"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navigation;