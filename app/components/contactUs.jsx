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
        className=" m-4 md:m-6 mt-20 md:mt-16 w-full h-[90vh] md:min-h-[80vh] rounded-2xl bounding-box bg-gray-900 
        flex flex-col md:flex-row items-center justify-around shadow-2xl p-4"
        id="contactUs"
      >
        <div className="bg-transparent w-full h-full flex-[1.5] p-10">
          <div className="w-full h-3/6 p-4">
            <p className="text-white text-8xl mb-4">Contact Us</p>
            <p className="text-gray-300 text-xl">Email us at: &nbsp;<a className="text-gray-50" href="mailto:ynvtech@gmail.com">ynvtech@gmail.com</a> &nbsp;&nbsp;OR,</p>
            <p className="text-gray-300 text-xl">fill the form and we will reach out to you.</p>
          </div>
          <div className="flex justify-around h-2/6">
            <div className="bg-gray-950 w-full h-full flex-1 p-6 pt-8 m-2 rounded-2xl">
              <p className="text-gray-100 text-lg">Need an app for your website?</p>
              <p className="text-gray-400 text-center mt-8">We got you covered!</p>

            </div>
            <div className="bg-gray-950 w-full h-full flex-1 p-6 pt-8 m-2 rounded-2xl">
              <p className="text-gray-100 text-lg">Are you lagging in the AI race?</p>
              <p className="text-gray-400 text-center mt-8">Let's boost you!</p>
            </div>
            <div className="bg-gray-950 w-full h-full flex-1 p-6 pt-8 m-2 rounded-2xl">
              <p className="text-gray-100 text-lg">Custom Android kiosks that survive 24/7 use?</p>
              <p className="text-gray-400 text-center mt-8">Just name it, we'll figure!</p>
            </div>
          </div>
        </div>

        <div className="bg-transparent w-full h-full flex-1 p-8 flex items-center justify-center">
          <div className="bg-gray-700 w-4/5 h-6/7 p-8 rounded-2xl shadow-2xl shadow-blue-900/50">
            <p className="text-white text-5xl">Get in touch</p>
            <p className="text-gray-100 text-md mb-6 ms-1">
              Let’s discuss how we can help
            </p>
            <form action="">
              <div className="flex w-full">
                <input
                  placeholder="First Name"
                  className="w-full p-3 m-1 bg-gray-900 focus:bg-gray-950 border-none text-white border border-gray-600 rounded-lg 
                  focus:outline-none focus:ring-2 focus:ring-blue-400"
                  type="text"
                  name=""
                  id=""
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full m-1 p-3 border-none bg-gray-900 focus:bg-gray-950 text-white border border-gray-600 rounded-lg 
                  focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="w-full flex justify-center">
                <input
                  type="email"
                  name=""
                  id=""
                  required
                  placeholder="Email address"
                  className="w-full m-1 p-3 border-none bg-gray-900 focus:bg-gray-950 text-white border border-gray-600 rounded-lg 
                  focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="w-full mt-2 flex justify-center">
                <textarea
                  placeholder="How can we help you?"
                  rows={5}
                  className="w-full m-1 p-3 bg-gray-900 border-none text-white border border-gray-600 rounded-lg 
                  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-gray-950 resize-none"
                ></textarea>
              </div>
              <div className="w-full flex justify-center mt-2">
                <button
                  onClick={notify}
                  className="w-full m-1 p-[2px] rounded-lg group relative bg-gradient-to-r from-pink-500 via-blue-500
                   to-pink-500  bg-[length:200%_auto] hover:bg-[position:100%_center] transition-all duration-500 ease-out 
                   overflow-hidden">
                  <div
                    className="w-full h-full p-3 bg-gray-900 rounded-[calc(0.5rem-2px)]
                 text-white text-center font-medium hover:text-gray-50
                 group-hover:bg-gray-950 transition-colors duration-300 "
                  >
                    Send Message
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
