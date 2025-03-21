import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
    <>
    <div className='flex justify-center items-center pt-24 pb-20'>
      <h1 className='text-8xl text-white font-semibold'>Projects<span className='text text-7xl'> We Done</span></h1>
    </div>
    <div className='flex flex-col gap-3 p-3'>
    <div className='flex gap-3'>
      <div className='border h-[33vh] w-[33vw]'>
        <Image src='/img1.jpg' height={64} width={64} className='h-[32vh] w-[33vw]'/>
      </div>
      <div className='border h-[33vh] w-[33vw]'>
        <Image src='/img2.jpg' height={64} width={64} className='h-[32vh] w-[33vw]'/>
      </div>
      <div className='border h-[33vh] w-[33vw]'>
        <Image src='/img3.jpg' height={64} width={64} className='h-[32vh] w-[33vw]'/>
      </div>
    </div>
    <div className='flex gap-3'>
      <div className='border h-[33vh] w-[33vw]'>
        <Image src='/img4.jpg' height={64} width={64} className='h-[32vh] w-[33vw]'/>
      </div>
      <div className='border h-[33vh] w-[33vw]'>
        <Image src='/img5.jpg' height={64} width={64} className='h-[32vh] w-[33vw]'/>
      </div>
      <div className='border h-[33vh] w-[33vw]'>
        <Image src='/img6.jpg' height={64} width={64} className='h-[32vh] w-[33vw]'/>
      </div>
    </div>
    </div>
    </>
  )
}

export default Projects