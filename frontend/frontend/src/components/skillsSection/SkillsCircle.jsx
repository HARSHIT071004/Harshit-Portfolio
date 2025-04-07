import React from "react";
import { FcSettings } from "react-icons/fc";

const SkillsCircle = () => {
  return (
    <div className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] 
                    rounded-full flex items-center justify-center absolute left-[50%] top-[50%] 
                    transform -translate-x-1/2 -translate-y-1/2 border-2 border-black overflow-hidden">
      <img 
        src="../../public/images/skills.avif" 
        alt="my skills" 
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default SkillsCircle;