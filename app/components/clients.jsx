import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Clients = () => {
  return (
    <>
      <div className='flex justify-center items-center text-6xl font-semibold pb-5'>
        <h1 className='text'><span className='text-7xl text-white'>O</span>ur <span className='text-7xl text-white'>C</span>lients</h1>
      </div>
      <div className='text-zinc-300 flex justify-around items-center'>
      <Link href='https://arx.vision/'>
        <div className='text-5xl p-4 flex gap-3  cursor-pointer transition-all duration-200 ease-in-out hover:border-b-2 hover:border-pink-500'>
          <Image src='/ARX_vision.png' width={64} height={64} alt='image' />
          <span className='text'>ARX Vision</span>
        </div>
        </Link>
        <Link href='https://donadonations.com/'>
        <div className='text-5xl p-4 flex gap-3  cursor-pointer transition-all duration-200 ease-in-out hover:border-b-2 hover:border-pink-500'>
          <Image src='/Dona.png' width={64} height={64} alt='image' />
          <span className='text'>Dona Donations</span>
        </div>
        </Link>
        <Link href='https://ourmedia.co.uk/'>
        <div className='text-5xl p-4 flex gap-3  cursor-pointer transition-all duration-200 ease-in-out hover:border-b-2 hover:border-blue-500'>
          <Image src='/Our_media.png' width={64} height={64} alt='image' />
          <span className='text' >Our Media</span>
        </div>
        </Link>
      </div>
    </>
  )
}

export default Clients