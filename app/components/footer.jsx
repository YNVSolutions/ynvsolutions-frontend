import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-black border-t-pink-500 border-4">
        <div className="footer bg-black text-white rounded-tl-4xl">
          <div className="theContainer mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
            <div className="text-center text-xl text-gray-400 flex flex-col gap-4">
              <div className="flex justify-center">
                <img
                  src="./favicon.ico"
                  alt="ynv logo"
                  className="h-20 w-20 rounded-md transition-transform duration-300 hover:scale-105 animate-float"
                />
              </div>
              <p>Yantra Nirmaan Vidhi Pvt. Ltd.</p>
            </div>

            <div className="links">
              <p className="heading text-2xl">Links</p>
              <ul className="text-gray-400 space-y-2">
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
              <p className="heading text-2xl">Follow Us</p>
              <ul className="text-gray-400 space-y-2">
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

          .heading {
            margin-bottom: 18px;
          }

          .ruler {
            margin-top: 50px;
            margin-bottom: 10px;
          }
        `}
      </style>
    </>
  );
};

export default Footer;