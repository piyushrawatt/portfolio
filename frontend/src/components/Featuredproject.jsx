import React from "react";
import { FaCode } from "react-icons/fa";
import { TbLivePhoto } from "react-icons/tb";
import { Link } from "react-router-dom";
function Featuredproject({ img, project, info ,code ,demo}) {
  return (
    <div className="group w-full max-w-sm overflow-hidden rounded-3xl shadow-2xl bg-[#0F172A] hover:scale-105 transition duration-300">
      
      {/* IMAGE */}
      <div className="relative h-44 sm:h-52 md:h-56 w-full">
        <img src={img} alt="" className="h-full w-full object-cover" />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center text-white text-center px-3">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
            {project}
          </h1>
          <p className="text-xs sm:text-sm mt-2">{info}</p>
        </div>
      </div>

      {/* TECH STACK */}
      <div className="mt-4 flex flex-wrap justify-center gap-2 px-3">
        <span className="px-3 py-1 text-xs rounded-full bg-blue-300 text-blue-800 font-bold">
          React
        </span>
        <span className="px-3 py-1 text-xs rounded-full bg-blue-300 text-blue-800 font-bold">
          Tailwind
        </span>
        <span className="px-3 py-1 text-xs rounded-full bg-blue-300 text-blue-800 font-bold">
          MongoDB
        </span>
      </div>

      {/* BUTTONS */}
      <div className="mt-5 flex flex-col sm:flex-row justify-around text-gray-300 pb-5 text-sm sm:text-base  ml-2">
        <div className="flex items-center gap-2 hover:text-blue-400 cursor-pointer transition">
        <a href={code}> <FaCode  /> Code </a> 
        </div>

        <div className="flex items-center gap-2 hover:text-blue-400 cursor-pointer transition">
       <a href={demo}>  <TbLivePhoto /> Live Demo </a> 
        </div>
      </div>
    </div>
  );
}

export default Featuredproject;