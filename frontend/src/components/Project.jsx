import React from 'react'
import Featuredproject from './Featuredproject'
import { FaArrowRight } from "react-icons/fa";
function Project() {
  return (
    <div id='project' className='h-screen w-full  gap-20 flex flex-col items-center'>
        
     <div className='text-center'>  <h1 className='text-4xl font-bold'>Featured Projects</h1>
      
        <p className='font-light text-2xl text-gray-600'>Showcasing my best project work and technical expertise</p> </div> 
  <div className='flex  gap-20'>    <Featuredproject img={"work.jpg"}/>
         <Featuredproject img={"work.jpg"} project={"Project"} info={""}/>
          <Featuredproject img={"work.jpg"}/> </div>
          <button className='flex border h-10 w-40 gap-1 bg-blue-600 text-white items-center justify-center rounded-4xl'>View all projects <FaArrowRight /></button>
    </div>
  )
}

export default Project