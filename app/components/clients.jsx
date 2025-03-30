import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Clients = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-5 p-4">
      <div className="text-white text-center lg:text-left">
        <h1 className="text-2xl lg:text-3xl pb-4 text">OUR AWESOME CLIENTS</h1>
        <h1 className="text-4xl lg:text-6xl font-semibold">
          We Build Best<br /> Solutions For Your<br /> Company...
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="flex flex-wrap justify-center items-center gap-4">
          <div className="relative h-[15vh] w-[40vw] sm:h-[20vh] sm:w-[30vw] lg:h-[20vh] lg:w-[20vw] group">
            <Link href="https://arx.vision/">
              <Image
                src="/arx.png"
                alt="ARX VISION"
                layout="fill"
                objectFit="contain"
                quality={85}
                className="border-2 border-white p-2 rounded-md transition-all duration-300 group-hover:scale-110"
              />
            </Link>
          </div>
          <div className="relative h-[15vh] w-[40vw] sm:h-[20vh] sm:w-[30vw] lg:h-[20vh] lg:w-[20vw] group">
            <Link href="https://donadonations.com/">
              <Image
                src="/Dona.png"
                alt="DONA"
                layout="fill"
                objectFit="contain"
                quality={85}
                className="border-2 border-white p-2 rounded-md transition-all duration-300 group-hover:scale-110 "
              />
            </Link>
          </div>
        </div>
        <div className="relative h-[15vh] w-[40vw] sm:h-[20vh] sm:w-[30vw] lg:h-[20vh] lg:w-[20vw] group">
          <Link href="https://ourmedia.co.uk/">
            <Image
              src="/ourMedia.webp"
              alt="OUR MEDIA"
              layout="fill"
              objectFit="contain"
              quality={85}
              className="border-2 border-white p-2 rounded-md transition-all duration-300 group-hover:scale-110"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Clients;