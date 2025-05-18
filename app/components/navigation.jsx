"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", link: "#home" },
  { name: "Features", link: "#features" },
  { name: "Pricing", link: "#pricing" },
  { name: "About", link: "#about" },
  { name: "Contact", link: "#contact" },
];

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
      <header
        className={`bg-gray-950 text-white shadow-lg sticky z-50 transition-all duration-${transitionDuration} ease-in-out ${
          isVisible ? "top-0" : "-top-full"
        }`}
        style={{ transitionProperty: "top" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex justify-between items-center h-20">
            {/* Logo / Company Name */}
            <div className="flex items-center gap-3">
              <img
                src="/favicon.ico"
                className="w-10 h-10 rounded-full border-2 border-gray-700"
                alt="YNV logo"
              />
              <span className="text-2xl font-bold tracking-tight text-white">
                YNV Solutions
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 items-center text-sm font-medium">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  className="hover:text-gray-300 transition"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#get-started"
                className="ml-4 bg-indigo-600 hover:bg-indigo-500 transition px-4 py-2 rounded-lg text-white font-semibold text-sm"
              >
                Get Started
              </a>
            </nav>

            {/* Mobile Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-900 transition-all duration-300 px-6 pb-6 space-y-4">
            {NAV_LINKS.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="block border-b border-gray-700 pb-2"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#get-started"
              className="inline-block w-full text-center bg-indigo-600 hover:bg-indigo-500 transition px-4 py-2 rounded-md text-white font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </a>
          </div>
        )}
      </header>
      {/* Overlay to close drawer when clicking outside */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/50 z-[40]"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navigation;