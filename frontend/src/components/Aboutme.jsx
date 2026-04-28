import React from "react";
import { FaArrowsLeftRight } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { CiRainbow } from "react-icons/ci";
import { MdGraphicEq } from "react-icons/md";
import { FaMedal } from "react-icons/fa6";

function Aboutme() {
  return (
    <div
      id="aboutme"
      className="flex flex-col items-center sm:h-screen bg-[#0F172A] w-full gap-10 pt-10 px-4"
    >
    
      <h1 className="text-3xl md:text-5xl font-bold text-[#38BDF8] text-center">
        About Me
      </h1>

      <div className="flex flex-wrap justify-center gap-3">
        <button className="flex items-center gap-2 px-4 h-10 md:h-11 md:w-52 bg-blue-900 text-white rounded-3xl">
          <FaArrowsLeftRight />
          Fresher
        </button>

        <button className="flex items-center gap-2 px-4 h-10 md:h-11 md:w-52 bg-green-500 text-white rounded-3xl">
          <FaDatabase />
          MERN Stack
        </button>

        <button className="flex items-center gap-2 px-4 h-10 md:h-11 md:w-52 bg-violet-500 text-white rounded-3xl">
          <CiRainbow />
          UI/UX Design
        </button>

        <button className="flex items-center gap-2 px-4 h-10 md:h-11 md:w-52 bg-orange-500 text-white rounded-3xl">
          <MdGraphicEq />
          Version Control
        </button>

        <button className="flex items-center gap-2 px-4 h-10 md:h-11 md:w-52 bg-red-500 text-white rounded-3xl">
          <FaMedal />
          Best Practice
        </button>
      </div>


      <div className="flex flex-col md:flex-row gap-6 w-full justify-center items-center">


        <div className="w-full md:w-[500px] border rounded-2xl shadow-2xl bg-[#020617] shadow-blue-950 p-4 hover:scale-105 transition">
          <h1 className="text-2xl md:text-3xl text-[#38BDF8] font-bold">
            Experience
          </h1>

          <ul className="list-disc text-sm md:text-xl text-[#94A3B8] pl-5 md:pl-10 space-y-3 mt-4">
            <li>Learned HTML, CSS, JavaScript, React</li>
            <li>Developed backend using Node.js & Express</li>
            <li>Worked with MongoDB & Mongoose</li>
            <li>Built authentication systems</li>
            <li>API integration and error handling</li>
            <li>Built full-stack projects</li>
          </ul>
        </div>

       
        <div className="w-full md:w-[500px] border rounded-2xl shadow-2xl bg-[#020617] shadow-blue-950 p-4 hover:scale-105 transition">
          <h1 className="text-2xl md:text-3xl text-[#38BDF8] font-bold">
            Education
          </h1>

          <ul className="list-disc text-sm md:text-xl text-[#94A3B8] pl-5 md:pl-10 space-y-3 mt-4">
            <li>BCA – IGNOU University (2025)</li>
          </ul>

          <h1 className="text-xl md:text-2xl text-white font-bold mt-6">
            Certifications & Training
          </h1>

          <ul className="list-disc text-sm md:text-xl text-white pl-5 md:pl-10 space-y-3 mt-4">
            <li>MERN Stack Full Stack Development</li>
            <li>React & Tailwind Projects</li>
            <li>Node.js, Express & MongoDB Practice</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Aboutme;