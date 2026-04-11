import React from 'react'
import { MdDarkMode } from "react-icons/md";
import { BsBoxes } from "react-icons/bs";

function Nav() {
  return (
    <div className='flex justify-around border border-white/10 rounded-b-2xl items-center  cursor-pointer w-full h-17.5 bg-[#020617] t p-5 fixed top-0 '>
            <div className="text-4xl font-bold text-[#CBD5E1] flex gap-8 items-center">  <BsBoxes className="text-4xl fill-current" />Portfolio</div>
            <div >
                <ul className='flex gap-15 text-2xl ml-30 items-center text-slate-300 '>
           <a href="home">    <li  className=' hover:border-b hover:scale-95'>Home</li>  </a> 
              <a href="#aboutme">     <li className=' hover:border-b hover:scale-95'>About</li> </a> 
               <a href="#skill">    <li className=' hover:border-b hover:scale-95'>Skills</li> </a> 
             <a href="#project">     <li className=' hover:border-b hover:scale-95'>Projects</li> </a>  
                 <a href="#footer">  <li className=' hover:border-b hover:scale-95'>Contact</li> </a> 
                    <li >
                        <MdDarkMode className='h-14.5 w-10.5 hover:text-blue-300 hover:border-white'/>
                    </li>
                </ul>
            </div>
    </div>
  )
}

export default Nav