import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-zinc-600">
        <div className="footer bg-black text-white rounded-tl-4xl">
        <div className="theContainer mx-auto grid grid-cols-1 md:grid-cols-4  gap-8 ">
          <div className="text-center text-xl text-gray-400 flex flex-col gap-4 ">
            <div className="flex justify-center">
              <img
                src="./favicon.ico"
                alt="ynv logo"
                className="h-30 rounded-md transition-transform duration-300 hover:scale-105"
              />
            </div>

            <p>Yantra Nirmaan Vidhi Pvt. Ltd.</p>
          </div>
          

          <div className="links">
            <p className="heading text-2xl text">Links</p>
            <ul className="text-gray-400">
              <li>
                <a href="#aboutUs" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contactUs" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="links">
            <p className="heading text-2xl text">Follow Us</p>
            <ul className="text-gray-400">
              <li>
                <a href="#aboutUs" className="hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#aboutUs" className="hover:text-white transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  X (Twitter)
                </a>
              </li>
            </ul>
          </div>

          <div className="links">
            <p className="heading text-2xl text">Reach Us</p>
            <ul className="text-gray-400">
              <li>
                <a
                  href="#aboutUs"
                  className="hover:text-white transition-colors"
                >
                  NIRMAAN VIDHI (OPC) PRIVATE LIMITED is C/O S. Abdul Ghaffer &
                  S Abdul Nadim, Athgaon S.J.Road, Zabbar Bazar, Guwahati, Assam,
                  India - 781001.
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="ruler">
          <hr className="border-t-2 border-gray-700" />
        </div>

        <div className="flex justify-center">
          <p className="text-gray-400 hover:text-white transition-colors">
            To-do: Some legal text supposed to go here
          </p>
        </div>
        </div>
        
      </footer>

      <style jsx>
        {`
          .footer {
            padding-top: 60px;
            padding-bottom: 10px;
          }

          li {
            margin: 4px 0 4px 0;
          }

          .theContainer {
            padding: 0px 20px 0px 20px;
          }

          .heading {
            margin-bottom: 18px;
          }

          .ruler {
            margin-top: 50px;
            margin-bottom: 10px;
            padding: 0 20px 0 20px;
          }
        `}
      </style>
    </>
  );
};

export default Footer;