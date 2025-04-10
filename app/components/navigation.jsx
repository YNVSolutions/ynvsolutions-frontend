"use client";
import React, { useState, useEffect } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const transitionDuration = 300;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      const threshold = 200;

      if (currentScrollPosition > scrollPosition && currentScrollPosition > threshold) {
        if (isVisible && !isTransitioning) {
          setIsTransitioning(true);
          setTimeout(() => {
            setIsVisible(false);
            setIsTransitioning(false);
          }, transitionDuration);
        }
      } else if (currentScrollPosition < scrollPosition) {
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
        className={`navBar p-3 w-full flex justify-between items-center fixed z-[999] rounded-md transition-all duration-${transitionDuration} ease-in-out ${
          isVisible ? "top-0" : "-top-full"
        } bg-gray-900/80 backdrop-blur-md`}
      >
        {/* Logo Section */}
        <div className="logo flex items-center gap-2">
          <img
            src="/favicon.ico"
            className="w-12 h-12 rounded-full border-2 border-gray-600"
            alt="YNV logo"
          />
          <p className="text-lg md:text-2xl font-bold text-gray-200 bg-white/10 backdrop-blur-md px-3 py-1 md:px-4 md:py-2 rounded-2xl">
            YNV Solutions
          </p>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 lg:gap-8 items-center bg-white/10 backdrop-blur-md rounded-2xl justify-around p-1 px-3 shadow-2xl">
          {[
            { name: "Home", link: "#home" },
            { name: "About Us", link: "#about" },
            { name: "Services", link: "#services" },
            { name: "Team", link: "#team" },
            { name: "Projects", link: "#projects" },
            { name: "Contact", link: "#contact" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="text-sm md:text-lg font-medium capitalize hover:bg-white/10 text-gray-300 hover:text-white rounded-2xl lg:p-2 md:p-1 px-2 md:px-3 drop-shadow-md transition-all duration-200 ease-in-out"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
          style={{ background: "none", border: "none" }}
        >
          ☰
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 w-64 h-full shadow-lg bg-gray-800/90 backdrop-blur-md p-5 rounded-md transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-[1000] flex flex-col gap-5`}
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
          { name: "Team", link: "#team" },
          { name: "Projects", link: "#projects" },
          { name: "Contact", link: "#contact" },
        ].map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="text-lg font-medium capitalize text-gray-200 p-2 ps-4 rounded-md hover:bg-gray-700 transition-all duration-200 ease-in-out"
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </a>
        ))}
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