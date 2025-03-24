import React from "react";

const About = () => {
  return (<>
  
    <div
      className=" w-full min-h-screen bg-transparent pt-1 flex items-center justify-center"
      id="about"
    >
      <div className=" m-4 md:m-6 mt-20 md:mt-16 w-full min-h-[90vh] md:min-h-[80vh] rounded-2xl bounding-box bg-gray-400 flex flex-col md:flex-row items-center justify-around shadow-2xl">
        <div className="flex flex-col justify-around min-h-auto md:min-h-[70vh] space-y-6 md:space-y-6">
          <div className="animate-float">
            <img
              src="favicon.ico"
              alt="logo"
              className="w-32 h-32 md:w-64 md:h-64 mx-auto shadow"
            />
          </div>
          
            <h2 className="text-xl font-medium italic text-black text-center">
              "Be a part of our growing tech community. <br />
              Let’s create something incredible together.”
            </h2>
            <button className="">
              <a
                href="#contactUs"
                className="px-6 py-3 text-xl font-medium capitalize bg-white text-gray-800 hover:text-black border-2 rounded-xl shadow-2xl border-gray-600"
              >
                Connect with us
              </a>
            </button>
          
        </div>

        <div>
          <h1 className="text-xl md:text-2xl font-md leading-relaxed text-center md:text-left mb-8 md:mb-0 text-gray-900 ">
            YNV Tech, a division of Yantra Nirman
            <br />
            Vidhi (OPC) Private Limited, is an innovative
            <br />
            technology company based in India. Established in
            <br />
            2021, we specialize in cutting-edge AI solutions,
            <br />
            Mobile Device Management (MDM), and mobile &<br />
            web application development.
          </h1>
        </div>
      </div>

      <style jsx>{`
        .box {
          padding: 32px;
          padding-left: 64px;
        }

        .outerBox{
          padding: 6px;
        }
      `}</style>
    </div>
    </>
  );
};

export default About;
