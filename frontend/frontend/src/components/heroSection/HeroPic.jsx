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
      className="relative z-[11] flex items-center justify-center w-full 
                 md:justify-end md:pr-16 overflow:hidden"
    >
      {/* Hexagon + Image Container */}
      <div
        className="relative flex items-center justify-center 
                   h-[160px] w-[160px] 
                   sm:h-[200px] sm:w-[200px] 
                   md:h-[280px] md:w-[280px] 
                   lg:h-[360px] lg:w-[360px]
                   xl:h-[400px] xl:w-[400px]"
      >
        {/* Spinning Hexagon */}
        <div className="absolute inset-0 animate-[spin__linear_infinite] blur-sm">
          <PiHexagonThin className="text-cyan h-full w-full" />
        </div>

        {/* Centered Image */}
        <img
          src="/images/harshitttt.png"
          alt="Harshit Sharma"
          className="relative z-[-100] 
                     h-[100px] sm:h-[120px] md:h-[200px] lg:h-[240px] xl:h-[280px] 
                     object-cover rounded-[15%]"
        />
      </div>
    </motion.div>
  );
};

export default HeroPic;