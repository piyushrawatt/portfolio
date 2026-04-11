import React from 'react'
import Nav from './nav'
import { CiSaveDown2 } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

function Hero() {
  return (
    <div id='home' className='h-screen w-full bg-[#020617] '>
     =
       <Nav />
       =
       <div className='flex flex-col items-center gap-3 mt-5 gap-9' >
        <div className='h-50 w-50 rounded-full border border-white mt-10  '>
            <img id='image' src="chaar.png" className=' ' alt="" />
        </div>
  

                      <h1 className='text-5xl text-[#38BDF8]'>Hii,I'm <span className='text-7xl font-bold bg-gradient-to-r from-blue-200 to bg-cyan-900 bg-clip-text text-transparent'>Piyush Rawat</span></h1>
            <h1 className='text-3xl text-[#94A3B8] '>Frontend Developer <span className='text-cyan-950'>|</span> React.js Enthusiast</h1>
            <p className=' text-center text-[#94A3B8]'>I build fast, responsive, and modern web interfaces using React, Next.js, and <br /> Tailwind CSS.</p>
         
                <div className=' flex gap-2.5'>
                    <button className='border flex h-[45px] w-60 items-center text-xl justify-center bg-white rounded-2xl text-violet-950 hover:scale-104 '><CiSaveDown2 className='h-[40px] w-[40px]'/> <span>download Resume</span></button>
                    <button className='border flex h-[45px] w-60  items-center text-xl justify-center bg-white rounded-2xl text-violet-950  hover:scale-104' > <FaRegMessage className='h-[40px] w-[40px] '/><span className='p-2'>Contact me</span></button>
                </div>
            <div className='flex gap-10.5 mt-2  text-white'><a href="https://youtu.be/p6ca7gq5H70?si=-YmJJMpfPKv2Upk2"target='_blank'><CiLinkedin  className='h-[40px] w-[40px]  hover:scale-94 hover:text-blue-600'/></a>
           <a href="www.linkedin.com/in/piyush-rawat-69985b35b" target='_blank'>     <FaGithub className='h-[40px] w-[40px] hover:scale-94  hover:text-blue-600  '/></a> 
           <a href="www.linkedin.com/in/piyush-rawat-69985b35b" target='_blank'>         <FaSquareXTwitter className='h-[40px] w-[40px] hover:scale-94  hover:text-blue-600 '/> </a> </div>
               
       </div>
    </div>
  )
}

export default Hero