import { motion } from "framer-motion";
import { fadeIn } from "../../frameMotion/variant";
import { PiHexagonThin } from "react-icons/pi";
import React from "react";
const HeroPic = () => {
  return (
    <motion.div
    variants={fadeIn("left", 0.2)}
    initial="hidden"
    animate="show"
    className="h-full z-[11] flex items-center justify-center"
  >
  
      <img
        src="/images/harshs.png"
        alt="Harshit Sharma"
        className="h-[370px] z-[-19] mt-7 rounded-[25%]"
      />



{/* 

//   <img
//     src="../../public/images/harshit.jpg"
//     alt="Harshit Sharma"
//     className="h-[300px] w-[300px] object-cover justify-end rounded-[35%] shadow-lg border-4 border-gray-200 transition-transform duration-500 hover:scale-105"
//   />
{/* </motion.div> */}


      <div className=" absolute -z-10 flex justify-center items-center animate-pulse ">
        <PiHexagonThin className=" md:h-[90%] sm:h-[90%] min-h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite] " />
      </div>
    </motion.div>
  );
};

export default HeroPic;