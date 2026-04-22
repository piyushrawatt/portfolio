
import RangeSlider from './Slider'
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoHtml5 } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";


function Skill() {
   
  return (
    <div>
        
    <div id='skill' className='flex flex-col items-center h-screen w-full  mt-10 pt-10 '>
        <h1 className='text-5xl font-mono font-bold'>Skills</h1>
        <p className='text-gray-500 font-extralight text-2xl'>Here an overview of my technical expertise and proficiency level</p>
     <div className='gap-20 h-screen w-full flex flex-col items-center mt-10'>  <div className='flex gap-20'>
        
    <RangeSlider value={90}  title={"html"} Icon={<IoLogoHtml5 className="text-blue-500 h-10 w-10"  />} />
     <RangeSlider value={90} title={"JavaScript"} Icon={< IoLogoJavascript className="text-blue-500 h-10 w-10"  />} /> 
     <RangeSlider value={90} title={"Tailwind Css"} Icon={<RiTailwindCssFill className="text-blue-500 h-10 w-10"  />} /></div>  
    <div className='flex gap-20 '>   <RangeSlider value={87} title={"React"} Icon={<FaReact className="text-blue-500 h-10 w-10"  />} />
           
 
 
           <RangeSlider value={87}  title={"Nodejs"} Icon={<IoLogoNodejs className="text-blue-500 h-10 w-10"  />} />
       <RangeSlider value={87} title={"MongoDb"} Icon={<SiMongodb className="text-blue-500 h-10 w-10"  />} /> </div>
        </div> 

</div> 

       
       
    </div>
  )
}

export default Skill