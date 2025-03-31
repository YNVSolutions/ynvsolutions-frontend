"use client";
import React, { useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {db} from "./firebaseConfig"
import {collection, addDoc} from "firebase/firestore"

async function addData(name,email,message){
  try{
    const docRef = await addDoc(collection(db,"messages"),{
      name: name,
      email: email,
      message: message,
    });
    console.log("doc added with ID",docRef.id)
    return true;
  }catch(error){
    console.error("error!",error)
    return false
  }
}

const ContactUs = () => {

  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [message, setMessage] = useState(" ");

  const notify = () =>
    toast.success("Complete !", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

  const handleSubmit = async(e) => {
    e.preventDefault();
    const added= await addData(name,email,message);
    if (added){
      setName(" ");
      setEmail(" ");
      setMessage(" ");
    }
    notify();
  };

  return (
    <>
      <div
        className="m-4 md:m-6 mt-20 md:mt-16 w-full min-h-[90vh] md:min-h-[80vh] rounded-2xl bg-gray-900 
        flex flex-col md:flex-row items-center justify-center shadow-2xl p-4"
        id="contactUs"
      >
        
        <div className="bg-transparent w-full h-full flex-[1.5] p-6 md:p-10">
          <div className="w-full h-auto p-2 md:p-4">
            <p className="text-white text-5xl md:text-8xl mb-2 md:mb-4 text-center md:text-left">Contact Us</p>
            <p className="text-gray-300 text-lg md:text-xl text-center md:text-left md:mb-10">
              Email us at:{" "}
              <a className="text-gray-50" href="mailto:ynvtech@gmail.com">
                ynvtech@gmail.com
              </a>{" "} <br />
              OR, fill the form and we will reach out to you.
            </p>
          </div>

          
          <div className="hidden flex-col sm:flex-row justify-center md:justify-around items-center gap-4 mt-6">
            <div className="bg-gray-950 w-full sm:w-1/3 p-6 rounded-2xl text-center">
              <p className="text-gray-100 text-lg">Need an app for your website?</p>
              <p className="text-gray-400 mt-4">We got you covered!</p>
            </div>
            <div className="bg-gray-950 w-full sm:w-1/3 p-6 rounded-2xl text-center">
              <p className="text-gray-100 text-lg">Are you lagging in the AI race?</p>
              <p className="text-gray-400 mt-4">Let's boost you!</p>
            </div>
            <div className="bg-gray-950 w-full sm:w-1/3 p-6 rounded-2xl text-center">
              <p className="text-gray-100 text-lg">Custom Android kiosks that survive 24/7 use?</p>
              <p className="text-gray-400 mt-4">Just name it, we'll figure!</p>
            </div>
          </div>
        </div>

        
        <div className="bg-transparent w-full flex-1 p-4 md:p-8 flex items-center justify-center">
          <div className="bg-gray-700 w-full sm:w-4/5 p-6 md:p-8 rounded-2xl shadow-2xl shadow-blue-900/50">
            <p className="text-white text-3xl md:text-5xl text-center md:text-left">Get in touch</p>
            <p className="text-gray-100 text-sm md:text-md text-center md:text-left mb-4 ms-2">
              Let’s discuss how we can help
            </p>
            <form onSubmit={handleSubmit}>
              
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  className="w-full p-3 bg-gray-900 focus:bg-gray-950 text-white border border-gray-600 rounded-lg 
                  focus:outline-none focus:ring-2 focus:ring-blue-400 border-none"
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  placeholder="Name"
                  required
                />
              </div>

              
              <div className="w-full mt-2">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  required
                  placeholder="Email address"
                  className="w-full p-3 bg-gray-900 focus:bg-gray-950 text-white border border-gray-600 rounded-lg 
                  focus:outline-none focus:ring-2 focus:ring-blue-400 border-none"
                />
              </div>

              
              <div className="w-full mt-4">
                <textarea
                  placeholder="How can we help you?"
                  id="message"
                  value={message}
                  onChange={(e)=>setMessage(e.target.value)}
                  rows={4}
                  className="w-full p-3 bg-gray-900 border border-gray-600 text-white rounded-lg 
                  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-gray-950 resize-none border-none"
                ></textarea>
              </div>

              
              <div className="w-full mt-3">
                <button
                  type="submit"
                  className="w-full p-[2px] rounded-lg border-none group relative bg-gradient-to-r from-pink-500 via-blue-500
                   to-pink-500 bg-[length:200%_auto] hover:bg-[position:100%_center] transition-all duration-500 ease-out 
                   overflow-hidden"
                >
                  <div className="w-full h-full p-3 bg-gray-900 rounded-lg text-white text-center font-medium 
                      group-hover:bg-gray-950 transition-colors duration-300">
                    Send Message
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ContactUs;
