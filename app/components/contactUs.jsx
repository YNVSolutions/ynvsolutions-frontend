"use client";
import React from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const ContactUs = () => {
  const notify = () =>
    toast.success("Complete !", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

  return (
    <>
      <div
        className=" m-4 md:m-6 mt-20 md:mt-16 w-full h-[90vh] md:min-h-[80vh] rounded-2xl bounding-box bg-gray-900 flex flex-col md:flex-row items-center justify-around shadow-2xl p-4"
        id="contactUs"
      >
        <div className="bg-transparent w-full h-full flex-[1.5] p-10">
          <div className="w-full h-4/6 p-4">
            <p className="text-white text-8xl">Contact Us</p>
          </div>
          <div className="flex justify-around h-2/6">
            <div className="bg-gray-400 w-full h-full flex-1 p-8 m-2 rounded-2xl"></div>
            <div className="bg-gray-400 w-full h-full flex-1 p-8 m-2 rounded-2xl"></div>
            <div className="bg-gray-400 w-full h-full flex-1 p-8 m-2 rounded-2xl"></div>
          </div>
        </div>

        <div className="bg-transparent w-full h-full flex-1 p-8 flex items-center justify-center">
          <div className="bg-gray-600 w-4/5 h-6/7 p-8 rounded-2xl shadow-2xl">
          <p className="text-white text-5xl">Get in touch</p>
          <p className="text-gray-100 text-md mb-10">Let’s discuss how we can help</p>
            <form action="">
              <div className="flex w-full">
                <input
                  placeholder="First Name"
                  className="w-full p-3 m-1 bg-gray-800 border-none text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  type="text"
                  name=""
                  id=""
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full m-1 p-3 border-none bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="w-full flex justify-center">
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Email address"
                  className="w-full m-1 p-3 border-none bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="w-full mt-2 flex justify-center">
                <textarea
                  placeholder="How can we help you?"
                  rows={5} 
                  className="w-full m-1 p-3 bg-gray-800 border-none text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                ></textarea>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
