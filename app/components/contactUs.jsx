import React, { useState } from "react";

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="min-h-screen bg-cover bg-center flex items-center justify-center px-6 py-24" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80)' }}>
      <div className="w-full max-w-7xl bg-black/70 backdrop-blur-lg p-16 rounded-2xl shadow-2xl text-white flex flex-col md:flex-row gap-12 items-start justify-between">

        {/* Left Content */}
        <div className="md:w-1/2 space-y-8">
          <h3 className="text-3xl font-semibold">
            Get in Touch
          </h3>
          <h2 className="text-5xl !text-white">
           Contact Us
          </h2>
          <p className="text-lg">
            Email us at: <a href="mailto:ynvtech@gmail.com" className="text-blue-400">ynvtech@gmail.com</a><br />
            OR, fill the form and we will reach out to you.
          </p>
        </div>

        {/* Right Content - Contact Form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="md:w-1/2 flex flex-col gap-5">
            <div className="relative">
              <input type="text" placeholder="Name" required className="w-full p-3 pl-12 rounded-md bg-[#1a2238] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base" />
              <span className="absolute left-4 top-3 text-purple-300 text-lg">👤</span>
            </div>

            <div className="relative">
              <input type="email" placeholder="Email address" required className="w-full p-3 pl-12 rounded-md bg-[#1a2238] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base" />
              <span className="absolute left-4 top-3 text-blue-300 text-lg">📧</span>
            </div>

            <div className="relative">
              <textarea rows="2" placeholder="How can we help you?" required className="w-full p-3 pl-12 rounded-md bg-[#1a2238] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"></textarea>
              <span className="absolute left-4 top-3 text-gray-300 text-lg">💬</span>
            </div>

            <button type="submit" className="mt-2 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:opacity-90 transition-all text-base">
              Send Message
            </button>
          </form>
        ) : (
          <div className="md:w-1/2 text-center text-2xl font-semibold text-green-300">
            Thanks for visiting!
          </div>
        )}

      </div>
    </section>
  );
}
