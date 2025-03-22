import React from 'react'

/* These icons are just for demo */
import { LiaIndustrySolid } from "react-icons/lia";
import { GrTechnology } from "react-icons/gr";
import { MdBiotech } from "react-icons/md";
import { GiTechnoHeart } from "react-icons/gi";
import { FaIndustry } from "react-icons/fa6";
const Clients = () => {
  return (
    <>
      <div className='text-zinc-300 flex justify-around items-center'>
        <div className='text-5xl p-4 flex gap-3  cursor-pointer transition-all duration-200 ease-in-out hover:border-b-2 hover:border-pink-500'><FaIndustry /><span className='text'>Client</span></div>
        <div className='text-5xl p-4 flex gap-3  cursor-pointer transition-all duration-200 ease-in-out hover:border-b-2 hover:border-blue-500'><GrTechnology /><span className='text' >Client 2</span></div>
        <div className='text-5xl p-4 flex gap-3  cursor-pointer transition-all duration-200 ease-in-out hover:border-b-2 hover:border-pink-500'><GiTechnoHeart /><span className='text'>Client</span></div>
        <div className='text-5xl p-4 flex gap-3  cursor-pointer transition-all duration-200 ease-in-out hover:border-b-2 hover:border-blue-500'><LiaIndustrySolid /><span className='text'>Client 4</span></div>
        <div className='text-5xl p-4 flex gap-3  cursor-pointer transition-all duration-200 ease-in-out hover:border-b-2 hover:border-pink-500'><MdBiotech /><span className='text'>Client</span></div>
      </div>
    </>
  )
}

export default Clients