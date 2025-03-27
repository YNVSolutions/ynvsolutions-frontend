import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Clients = () => {
  return (
    <>
      <div className='flex flex-col lg:flex-row justify-center items-center w-full gap-5 p-4'>
        <div className='text-white text-center lg:text-left'>
          <h1 className='text-2xl lg:text-3xl pb-4 text'>OUR AWESOME CLIENT</h1>
          <h1 className='text-4xl lg:text-6xl font-semibold'>
            We Built Best<br /> Solution For Your<br /> Company...
          </h1>
        </div>
        <div className='flex flex-col justify-center items-center gap-4'>
          <div className='flex flex-wrap justify-center items-center gap-4'>
            <div>
              <Link href='https://arx.vision/'>
                <Image
                  src='/ARX_vision.png'
                  height={64}
                  width={64}
                  alt='ARX VISION'
                  className='border-2 border-white p-2 h-[15vh] w-[40vw] sm:h-[20vh] sm:w-[30vw] lg:h-[20vh] lg:w-[20vw] hover:w-[22vw] hover:h-[22vh] transition-all duration-300'
                />
              </Link>
            </div>
            <div>
              <Link href='https://donadonations.com/'>
                <Image
                  src='/Dona.png'
                  height={64}
                  width={64}
                  alt='DONA'
                  className='border-2 border-white p-2 h-[15vh] w-[40vw] sm:h-[20vh] sm:w-[30vw] lg:h-[20vh] lg:w-[20vw] hover:w-[22vw] hover:h-[22vh] transition-all duration-300'
                />
              </Link>
            </div>
          </div>
          <div>
            <Link href='https://ourmedia.co.uk/'>
              <Image
                src='/Our_media.png'
                height={64}
                width={64}
                alt='OUR MEDIA'
                className='border-2 border-white p-2 h-[15vh] w-[40vw] sm:h-[20vh] sm:w-[30vw] lg:h-[20vh] lg:w-[20vw] hover:w-[22vw] hover:h-[22vh] transition-all duration-300'
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Clients