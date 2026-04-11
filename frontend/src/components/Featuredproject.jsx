import React from 'react'
import { FaCode } from "react-icons/fa";
import { TbLivePhoto } from "react-icons/tb";
function Featuredproject({img,text,project,info}) {
  return (
    // <div>
    //   <div className='h-fit w-fit flex items-center justify-center flex-col border   '>
        
       
      <div id='projects' className="group h-[350px] w-[400px] z-0 overflow-hidden rounded-4xl shadow-2xl shadow-black  duration-300 hover:scale-105">

  <div className="relative h-[200px] w-full">
    <img
      src={img}
      alt=""
      className="h-full w-full object-cover rounded-t-4xl"
    />

    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100  duration-300 flex flex-col items-center justify-center text-gray-200 px-4 text-center">
      <h1 className="text-2xl font-bold mb-2">{project}</h1>
      <p className="text-sm font-medium"> {info}
        My name is Piyush Rawat. I am learning web development and DSA and aim
        to become a skilled coder working at a great company.
      </p>
    </div>
  </div>

  <div className="mt-6 flex justify-center gap-4">
    <span className="px-3 py-1 text-xs rounded-2xl bg-blue-300 text-blue-800 font-bold">React</span>
    <span className="px-3 py-1 text-xs rounded-2xl bg-blue-300 text-blue-800 font-bold">Tailwind</span>
    <span className="px-3 py-1 text-xs rounded-2xl bg-blue-300 text-blue-800 font-bold">MongoDB</span>
  </div>

  <div className="mt-5 flex justify-around text-gray-600">
    <div className="flex items-center gap-2 hover:scale-110  cursor-pointer">
      <FaCode /> Code
    </div>
    <div className="flex items-center gap-2 hover:scale-110 cursor-pointer">
      <TbLivePhoto /> Live Demo
    </div>
  </div>

</div>


      // </div>
    // </div>
  )
}

export default Featuredproject