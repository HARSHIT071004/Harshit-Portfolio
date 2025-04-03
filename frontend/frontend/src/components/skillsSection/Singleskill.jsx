// import React from "react";
// const SingleSkill = ({ imgSvg, text }) => {
//     return (
//       <div className="hover:-translate-y-10 transition-all duration-500">
//         <div className="flex flex-col items-center gap-2 relative">
//           <div className="bg-[#ffffff] text-black h-[100px] w-[100px] flex items-center justify-center rounded-full hover:text-darkGrey hover:scale-105 transform transition-all duration-500 text-6xl border-4 border-orange">
//             {imgSvg}
//           </div>
//           <p className="text-[#024430] font-bold">{text}</p>
//         </div>
//         <div className="w-[100px] h-[200px] bg-orange absolute top-[50px] -z-10"></div>
//       </div>
//     );
//   };
  
//   export default SingleSkill;



import React from "react";
import { motion } from "framer-motion";

const SingleSkill = ({ imgSvg, text }) => {
  return (
    <motion.div
      className="relative group"
      whileHover={{ y: -8, scale: 1.05 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className="flex flex-col items-center gap-2">
        {/* Skill Icon */}
        <div className="bg-white h-[90px] w-[90px] flex items-center justify-center rounded-xl shadow-md border-2 border-orange-400 group-hover:border-orange-500 group-hover:shadow-xl transition-all duration-400">
          {imgSvg}
        </div>
        {/* Skill Text */}
        <p className="text-gray-900 font-semibold text-md">{text}</p>
      </div>
      {/* Transparent Background Effect */}
      <div className="w-[70px] h-[100px]  absolute top-6 left-1/2 -translate-x-1/2 -z-10 rounded-xl group-hover:bg-orange-300/30 transition-all duration-400"></div>
    </motion.div>
  );
};

export default SingleSkill;