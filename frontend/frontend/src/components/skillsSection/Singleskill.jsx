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
      whileHover={{ y: -10, scale: 1.05 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="flex flex-col items-center gap-3">
        <div className="bg-white h-[100px] w-[100px] flex items-center justify-center rounded-full shadow-lg border-4 border-orange-500 group-hover:shadow-xl transition-all duration-300">
          {imgSvg}
        </div>
        <p className="text-gray-800 font-semibold text-lg">{text}</p>
      </div>
      <div className="w-[80px] h-[120px] bg-orange-200 absolute top-10 left-1/2 -translate-x-1/2 -z-10 rounded-lg opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
    </motion.div>
  );
};

export default SingleSkill;