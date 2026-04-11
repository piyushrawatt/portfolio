import React from 'react'
import { FaArrowsLeftRight } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { CiRainbow } from "react-icons/ci";
import { MdGraphicEq } from "react-icons/md";
import { FaMedal } from "react-icons/fa6";

function Aboutme() {
  return (
    <div id='aboutme' className='flex flex-col items-center  bg-[#0F172A] h-fit w-full gap-15 pt-10'>
        <h1  className='text-5xl mt-5 font-bold  text-[#38BDF8]'>About Me</h1>
        <div className='flex gap-4 mt-3'>
            <button className='h-[40px] w-[200px] flex border rounded-3xl items-center justify-center bg-blue-900 text-white'><FaArrowsLeftRight />Fresher</button>
            <button className='h-[40px] w-[200px] flex border rounded-3xl items-center justify-center bg-green-500 text-white'><FaDatabase />Mern Stack</button>
            <button className='h-[40px] w-[200px] flex border rounded-3xl items-center justify-center bg-violet-500 text-white'><CiRainbow />UI/UX Design</button> <br /> </div>
      <div className='flex gap-5  '>   <button className='h-[40px] w-[200px] flex border rounded-3xl items-center justify-center bg-orange-500 text-white'><MdGraphicEq />Version Control</button>
            <button className='h-[40px] w-[200px] flex border rounded-3xl items-center justify-center  bg-red-500 text-white '><FaMedal  />Best practice</button>
        </div>   
          
        <div className='border h-fit w-[500px] rounded-2xl shadow-2xl bg-[#020617] shadow-blue-950 pb-4 hover:scale-110'>
            <h1 className='text-3xl ml-4 text-[#38BDF8] font-bold ' >Experince</h1>
            <ul className='list-disc  text-xl text-[#94A3B8] pl-10 gap-10 space-y-5 '>
                <li>Learned and implemented HTML, CSS, JavaScript, React</li>
                <li>Developed backend using Node.js & Express</li>
                <li>Worked with MongoDB & Mongoose</li>
                <li>Built authentication systems (Login, Signup, OTP verification)</li>
                <li>Practiced API integration and error handling</li>
                <li>Built multiple mini-projects and one major full-stack project</li>
            </ul>
            </div>
          
           
         
            <div className='border h-fit w-[500px] bg-[#020617] rounded-2xl shadow-2xl shadow-blue-950 mb-4 pb-3 hover:scale-105'>
                <h1 className='text-3xl ml-4  text-[#38BDF8] font-bold'>Education</h1>
            <ul className='list-disc  text-xl text-[#94A3B8] pl-10 gap-10 space-y-5 m-4'>
                <h1> Bachelor of  in Computer ApplicationIGNOU University (2025)</h1>

            
                </ul>
                <ul className='list-disc  text-xl text-white pl-10 gap-10 space-y-5 '>
                    <h1>Certifications & Training</h1>
                    <li>Full Stack Web Development (MERN Stack) –  Institute</li>
                    <li>React & Tailwind CSS – Project-based learning</li>
                    <li>Node.js, Express & MongoDB – Hands-on practice</li>
                </ul>
                </div>
    </div>
  )
}

export default Aboutme