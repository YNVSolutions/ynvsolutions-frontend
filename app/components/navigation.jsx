"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
	{ name: "Home", link: "#home" },
	{ name: "About", link: "#about" },
	{ name: "Services", link: "#services" },
	{ name: "Team", link: "#team" },
	{ name: "Projects", link: "#projects" }
];

const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<header className="bg-gray-950 text-white shadow-lg fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out">
				<div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
					<div className="flex justify-between items-center h-20">
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
								href="#contact"
								className="ml-4 bg-indigo-600 hover:bg-indigo-500 transition px-4 py-2 rounded-lg text-white font-semibold text-sm"
							>
								Contact Us
							</a>
						</nav>
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
							href="#contact"
							className="inline-block w-full text-center bg-indigo-600 hover:bg-indigo-500 transition px-4 py-2 rounded-md text-white font-semibold"
							onClick={() => setIsOpen(false)}
						>
							Contact Us
						</a>
					</div>
				)}
			</header>
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