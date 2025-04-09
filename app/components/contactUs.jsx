"use client";
import React, { useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

async function addData(name, email, message) {
  try {
    const docRef = await addDoc(collection(db, "messages"), {
      name: name,
      email: email,
      message: message,
    });
    console.log("doc added with ID", docRef.id);
    return true;
  } catch (error) {
    console.error("error!", error);
    return false;
  }
}

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const added = await addData(name, email, message);
    if (added) {
      setName("");
      setEmail("");
      setMessage("");
    }
    notify();
  };

  return (
    <>
      <section
        className="min-h-screen bg-cover bg-center flex items-center justify-center px-6 py-24"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80)",
        }}
      >
        <div className="w-full max-w-7xl bg-black/70 backdrop-blur-lg p-16 rounded-2xl shadow-2xl text-white flex flex-col md:flex-row gap-12 items-start justify-between">
          <div className="md:w-1/2 space-y-8">
            <h3 className="text-3xl font-semibold">Get in Touch</h3>
            <h2 className="text-5xl !text-white">Contact Us</h2>
            <p className="text-lg">
              Email us at:{" "}
              <a href="mailto:ynvtech@gmail.com" className="text-blue-400">
                ynvtech@gmail.com
              </a>
              <br />
              OR, fill the form and we will reach out to you.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="md:w-1/2 flex flex-col gap-5">
            <div className="relative">
              <input
                type="text"
                placeholder="Name"
                required
                className="w-full p-3 pl-12 rounded-md bg-[#1a2238] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <span className="absolute left-4 top-3 text-purple-300 text-lg">
                👤
              </span>
            </div>
            <div className="relative">
              <input
                type="email"
                placeholder="Email address"
                required
                className="w-full p-3 pl-12 rounded-md bg-[#1a2238] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="absolute left-4 top-3 text-blue-300 text-lg">
                📧
              </span>
            </div>

            <div className="relative">
              <textarea
                rows="2"
                placeholder="How can we help you?"
                required
                className="w-full p-3 pl-12 rounded-md bg-[#1a2238] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <span className="absolute left-4 top-3 text-gray-300 text-lg">
                💬
              </span>
            </div>
            <button
              type="submit"
              className="mt-2 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:opacity-90 transition-all text-base"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default ContactUs;
