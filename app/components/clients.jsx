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
            <div className='text-4xl p-4 flex gap-3  cursor-pointer'><FaIndustry />Client 1</div>
            <div className='text-4xl p-4 flex gap-3  cursor-pointer'><GrTechnology /><span >Client 2</span></div>
            <div className='text-4xl p-4 flex gap-3  cursor-pointer'><GiTechnoHeart />Client 3</div>
            <div className='text-4xl p-4 flex gap-3  cursor-pointer'><LiaIndustrySolid /><span>Client 4</span></div>
            <div className='text-4xl p-4 flex gap-3  cursor-pointer'><MdBiotech />Client 5</div>
        </div>
    </>
  )
}

export default Clients