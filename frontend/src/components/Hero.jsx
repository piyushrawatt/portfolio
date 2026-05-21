import React from "react";
import Nav from "./Nav.jsx";
import { CiSaveDown2 } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

function Hero() {
  return (
    <div
      id="home"
      className="min-h-fit pb-2 bg-[#020617] pt-20 px-4 flex flex-col items-center"
    >
      <Nav />

     
      <div className="mt-10 h-32 w-32 md:h-52 md:w-52 rounded-full border border-white overflow-hidden">
        <img
          src="chaar.png"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

    <h1 className="text-2xl text-white md:text-5xl">  LETS CONNECT </h1>
      <h1 className="text-2xl md:text-5xl text-[#38BDF8] text-center mt-6">
        Hii, I'm {""}
        <span className="text-3xl md:text-7xl font-bold bg-gradient-to-r from-blue-200 to-cyan-900 bg-clip-text text-transparent">
          Piyush Rawat
        </span>
      </h1>

      <h2 className="text-lg md:text-3xl text-[#94A3B8] text-center mt-3">
        Frontend Developer <span className="text-cyan-600">|</span> React.js Enthusiast
      </h2>

      <p className="text-sm md:text-base text-[#94A3B8] text-center mt-3 max-w-xl">
        I build fast, responsive, and modern web interfaces using React, Next.js, and Tailwind CSS.
      </p>

      {/* BUTTONS */}
      <div className="flex flex-col md:flex-row gap-4 mt-6">
     <a href="Piyush_Rawat_Resume.pdf" target="_blank" download>   <button className="flex items-center gap-2 h-11 md:h-[45px] w-52 md:w-60 justify-center bg-white rounded-2xl text-violet-950 hover:scale-105 transition">
          <CiSaveDown2 className="text-2xl" />
          Download Resume
        </button>
        </a>

       <a href="#footer"> <button  className="flex  items-center gap-2 h-11 md:h-[45px] w-52 md:w-60 justify-center bg-white rounded-2xl text-violet-950 hover:scale-105 transition">
          <FaRegMessage className="text-2xl"  />
          Contact Me
        </button>
        </a>
      </div>

      {/* SOCIAL ICONS */}
      <div className="flex gap-8 mt-6 text-white">
        <a href="https://www.linkedin.com/in/piyush-rawat-69985b35b" target="_blank">
          <CiLinkedin className="text-3xl md:text-4xl hover:text-blue-500 transition" />
        </a>

        <a href="https://github.com/piyushrawatt" target="_blank">
          <FaGithub className="text-3xl md:text-4xl hover:text-blue-500 transition" />
        </a>

   
      </div>
    </div>
  );
}

export default Hero;