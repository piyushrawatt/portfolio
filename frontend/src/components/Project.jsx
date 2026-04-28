import React from 'react'
import Featuredproject from './Featuredproject'
import { FaArrowRight } from "react-icons/fa";
function Project() {
  return (
    <div id='project' className=' pb-3 md:h-170 bg-[#020617] w-full mt gap-20 flex flex-col items-center'>
        
     <div className='text-center'>  <h1 className='text-4xl text-slate-50 mt-5 font-bold p-4'>Featured Projects</h1>
      
        <p className='font-light text-2xl text-gray-600'>Showcasing my best project work and technical expertise</p> </div> 
  <div className='flex  gap-5 md:gap-20'>    <Featuredproject img={"work.jpg"}/>
         <Featuredproject img={"work.jpg"} project={"Project"} info={""}/>
          <Featuredproject img={"work.jpg"}/> </div>
          <button className='flex border h-10 w-40 gap-1  bg-blue-600 text-white items-center justify-center rounded-4xl'>View all projects <FaArrowRight /></button>
    </div>
  )
}

export default Project