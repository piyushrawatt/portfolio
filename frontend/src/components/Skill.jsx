import RangeSlider from "./Slider";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoHtml5 } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";

function Skill() {
  return (
    <div
      id="skill"
      className="flex flex-col items-center w-full py-16 px-4 bg-[#0F172A]"
    >
      
      <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
        Skills
      </h1>

      <p className="text-gray-400 text-center mt-2 text-sm md:text-xl max-w-2xl">
        Here is an overview of my technical expertise and proficiency level
      </p>


      <div className="mt-10 w-full flex flex-col gap-10 items-center">

  
        <div className="flex flex-wrap justify-center gap-10">
          <RangeSlider
            value={90}
            title="HTML"
            Icon={<IoLogoHtml5 className="text-orange-500 h-10 w-10" />}
          />

          <RangeSlider
            value={90}
            title="JavaScript"
            Icon={<IoLogoJavascript className="text-yellow-400 h-10 w-10" />}
          />

          <RangeSlider
            value={90}
            title="Tailwind CSS"
            Icon={<RiTailwindCssFill className="text-cyan-400 h-10 w-10" />}
          />
        </div>

      
        <div className="flex flex-wrap justify-center gap-10">
          <RangeSlider
            value={87}
            title="React"
            Icon={<FaReact className="text-blue-400 h-10 w-10" />}
          />

          <RangeSlider
            value={87}
            title="Node.js"
            Icon={<IoLogoNodejs className="text-green-500 h-10 w-10" />}
          />

          <RangeSlider
            value={87}
            title="MongoDB"
            Icon={<SiMongodb className="text-green-600 h-10 w-10" />}
          />
        </div>

      </div>
    </div>
  );
}

export default Skill;