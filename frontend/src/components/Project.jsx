import React from 'react'
import Featuredproject from './Featuredproject'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Project() {
  return (
    <div id='project' className=' pb-3 md:h-170 bg-[#020617] w-full mt gap-20 flex flex-col items-center'>
        
     <div className='text-center'>  <h1 className='text-4xl text-slate-50 mt-5 font-bold p-4'>Featured Projects</h1>
      
        <p className='font-light text-2xl text-gray-600'>Showcasing my best project work and technical expertise</p> </div> 
  <div className='flex  gap-5 md:gap-20'>  
         <Featuredproject demo={"https://mini-trello-mgxdsp2q9-piyushrawatts-projects.vercel.app/"} code={"https://github.com/piyushrawatt/MINI-TRELLO" } img={"work.jpg"} project={"Mini Trello"} info={"Mini Trello is a task management app that helps users create, organize, and track tasks.Built with React, Node.js, Express, and MongoDB with JWT authentication.It includes drag-and-drop task movement and an easy-to-use interface."}/>
         
          <Featuredproject demo={"https://e-commerce-website-jp77-mefu9llmh-piyushrawatts-projects.vercel.app/"} code={"https://github.com/piyushrawatt/E-commerce-website"} img={"work.jpg"} project={"e-Commerce-Website"} info={"E-commerce website is an online shopping platform where users can browse, add products to cart, and place orders.Built with React, Node.js, Express, and MongoDB with secure authentication.It includes product management, image uploads, and a responsive user-friendly interface."}/> 
                     <Featuredproject demo={"https://passgenerator-9udge2131-piyushrawatts-projects.vercel.app/"} code={"https://github.com/piyushrawatt/passgenerator"} img={"work.jpg"} project={"PassGenerator"} info={"Random Password Generator is a tool that creates strong and secure passwords instantly.Built with React and JavaScript with customizable password length and character options.It helps users generate unique passwords to improve security and protect accounts."}/>
</div>
      <Link to="/projects">
  <button className="flex border h-10 w-40 gap-1 bg-blue-600 text-white items-center justify-center rounded-4xl">
    View all projects <FaArrowRight />
  </button>
</Link>    </div>
  )
}

export default Project