import React from "react";

const About = () => {
  return (
    <div
      className=" w-full min-h-screen bg-zinc-900 pt-1 flex items-center justify-center"
      id="about"
    >
      <div className="w-full min-h-[80vh] rounded-2xl bounding-box bg-gray-400 flex items-center justify-around shadow-2xl">
        <div className="flex flex-col justify-around min-h-[70vh]">
          <div className="hidden md:block">
            <img
              src="favicon.ico"
              alt="logo"
              className="w-40 h-40 md:w-80 md:h-80 mx-auto"
            />
          </div>
          
            <h2 className="text-xl font-medium italic text-black">
              "Be a part of our growing tech community. <br />
              Let’s create something incredible together.”
            </h2>
            <button className="">
              <a
                href="#contactUs"
                className="contact-btn text-xl font-medium capitalize bg-white text-gray-800 hover:text-black border-2 rounded-xl shadow-2xl border-gray-600"
              >
                Connect with us
              </a>
            </button>
          
        </div>

        <div>
          <h1 className="text-3xl font-md leading-relaxed text-center md:text-left mb-8 md:mb-0 text-gray-900">
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

      {/* <div className='w-full px-4 py-8'> 
        <div className='flex flex-col md:flex-row justify-around items-center'>
          <h1 className='text-3xl font-md leading-relaxed text-center md:text-left mb-8 md:mb-0'>
            YNV Tech, a division of Yantra Nirman<br />
            Vidhi (OPC) Private Limited, is an innovative<br />
            technology company based in India. Established in<br />
            2021, we specialize in cutting-edge AI solutions,<br />
            Mobile Device Management (MDM), and mobile &<br />
            web application development.
          </h1>
          <div className='hidden md:block'>
            <img src='favicon.ico' alt='logo' className='w-40 h-40 md:w-80 md:h-80 mx-auto' />
          </div>
        </div>
        <br/>
        <br/>
        <div className='box w-full border-t-1 border-zinc-600 flex flex-row md:flex-row justify-between items-center mt-8 cursor-pointer'>
          {["App Development", "MDM Solution", "A.I Solution"].map((i) => (
            <p key={i} className='text-xl font-semibold tracking-tight leading-none hover:text-gray-500 mb-3 md:mb-0'>{i}</p>
          ))}
        </div>
      </div> */}
      <style jsx>{`
        .box {
          padding: 32px;
          padding-left: 64px;
        }
        .bounding-box {
          margin: 20px;
          margin-top: 60px;
        }
          .contact-btn{
          padding: 8px;
          }
      `}</style>
    </div>
  );
};

export default About;
