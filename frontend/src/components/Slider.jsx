  import { useState } from "react";

   function RangeSlider({value,Icon,title}) {
  

    return (
    
    <div>
      <div className="  h-40  w-[400px] border flex flex-col items-center justify-center rounded-xl shadow-2xl shadow-black hover:scale-105 ">
          <div className="flex justify-start text-left " >{Icon} <label className="font-bold pl-3 text-2xl">{title}</label></div>
     <h1 className="w-full text-left pl-10 font-bold">Proficiency</h1>

      <div className=""> <input
          type="range"
          min="0"
          max="100"
          value={value}
          disabled
          className="w-70 text-blue-800 accent-blue-900"></input>
        

        <span style={{ marginLeft: "10px", fontSize: "18px" }}>
          {value}
        </span>
        </div> 

      </div>
      </div>
    )

    

  }
  export default RangeSlider