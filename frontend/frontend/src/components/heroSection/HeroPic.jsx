// import { motion } from "framer-motion";
// import { fadeIn } from "../../frameMotion/variant";
// import { PiHexagonThin } from "react-icons/pi";
// import React from "react";
// const HeroPic = () => {
//   return (
//     <motion.div
//     variants={fadeIn("left", 0.2)}
//     initial="hidden"
//     animate="show"
//     className="h-full z-[11] flex items-center justify-center"
//   >
  
//       <img
//         src="/images/harshs.png"
//         alt="Harshit Sharma"
//         className="h-[370px] z-[-19] mt-7 rounded-[25%]"
//       />



// {/* 

// //   <img
// //     src="../../public/images/harshit.jpg"
// //     alt="Harshit Sharma"
// //     className="h-[300px] w-[300px] object-cover justify-end rounded-[35%] shadow-lg border-4 border-gray-200 transition-transform duration-500 hover:scale-105"
// //   />
// {/* </motion.div> */}


//       <div className=" absolute -z-10 flex justify-center items-center animate-pulse ">
//         <PiHexagonThin className=" md:h-[90%] sm:h-[90%] min-h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite] " />
//       </div>
//     </motion.div>
//   );
// };

// export default HeroPic;














// import { motion } from "framer-motion";
// import { fadeIn } from "../../frameMotion/variant";
// import { PiHexagonThin } from "react-icons/pi";
// import React from "react";

// const HeroPic = () => {
//   return (
//     <motion.div
//       variants={fadeIn("left", 0.2)}
//       initial="hidden"
//       animate="show"
//       className="relative h-full z-[11] flex items-center justify-center"
//     >
//       {/* Image */}
//       <img
//         src="/images/harshs.png"
//         alt="Harshit Sharma"
//         className="h-[250px] sm:h-[250px] md:h-[370px] rounded-[25%] z-[-10] mt-4 sm:mt-6"
//       />

//       {/* Animated Hexagon */}
//       <div className="absolute -z-10 flex justify-center items-center">
//         <PiHexagonThin className="h-[300px] sm:h-[350px] md:h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]" />
//       </div>
//     </motion.div>
//   );
// };

// export default HeroPic;







// import { motion } from "framer-motion";
// import { fadeIn } from "../../frameMotion/variant";
// import { PiHexagonThin } from "react-icons/pi";
// import React from "react";

// const HeroPic = () => {
//   return (
//     <motion.div
//       variants={fadeIn("left", 0.2)}
//       initial="hidden"
//       animate="show"
//       className="relative z-[11] flex items-center justify-center w-full"
//     >
//       {/* Wrapper for Hexagon + Image */}
//       <div className="relative flex items-center justify-center h-[240px] w-[240px] sm:h-[280px] sm:w-[280px] md:h-[400px] md:w-[400px]">
        
//         {/* Spinning Hexagon */}
//         <div className="absolute inset-0 animate-[spin_20s_linear_infinite] blur-sm">
//           <PiHexagonThin className="text-cyan h-full w-full" />
//         </div>

//         {/* Centered Image */}
//         <img
//           src="/images/harshs.png"
//           alt="Harshit Sharma"
//           className="relative z-10 h-[130px] sm:h-[160px] md:h-[240px] object-cover rounded-[25%]"
//         />
//       </div>
//     </motion.div>
//   );
// };

// export default HeroPic;








// import { motion } from "framer-motion";
// import { fadeIn } from "../../frameMotion/variant";
// import { PiHexagonThin } from "react-icons/pi";
// import React from "react";

// const HeroPic = () => {
//   return (
//     <motion.div
//       variants={fadeIn("left", 0.2)}
//       initial="hidden"
//       animate="show"
//       className="relative z-[11] flex items-center justify-center w-full 
//                  md:justify-end md:pr-8" // Moves content right on laptop screens
//     >
//       {/* Wrapper for Hexagon + Image */}
//       <div className="relative flex items-center justify-center 
//                       h-[240px] w-[240px] 
//                       sm:h-[280px] sm:w-[280px] 
//                       md:h-[400px] md:w-[400px]
//                       xs:h-[200px] xs:w-[200px]" // Smaller size for phones
//       >
//         {/* Spinning Hexagon */}
//         <div className="absolute inset-0 animate-[spin_20s_linear_infinite] blur-sm">
//           <PiHexagonThin className="text-cyan h-full w-full" />
//         </div>

//         {/* Centered Image */}
//         <img
//           src="/images/harshs.png"
//           alt="Harshit Sharma"
//           className="relative z-[-10] 
//                     h-[140px] sm:h-[160px] md:h-[280px] 
//                     xs:h-[110px] // Smaller height for phones
//                     object-cover rounded-[25%]"
//         />
//       </div>
//     </motion.div>
//   );
// };

// export default HeroPic;










// import { motion } from "framer-motion";
// import { fadeIn } from "../../frameMotion/variant";
// import { PiHexagonThin } from "react-icons/pi";
// import React from "react";

// const HeroPic = () => {
//   return (
//     <motion.div
//       variants={fadeIn("left", 0.2)}
//       initial="hidden"
//       animate="show"
//       className="relative z-[11] flex items-center justify-center w-full "
//     >
//       {/* Wrapper for Hexagon + Image */}
//       <div className="relative flex items-center justify-center 
//                       h-[240px] w-[240px] 
//                       sm:h-[280px] sm:w-[280px] 
//                       md:h-[400px] md:w-[400px]
//                       xs:h-[200px] xs:w-[200px]" // Smaller size for phones
//       >
//         {/* Spinning Hexagon */}
//         <div className="absolute inset-0 animate-[spin_20s_linear_infinite] blur-sm">
//           <PiHexagonThin className="text-cyan h-full w-full" />
//         </div>

//         {/* Centered Image */}
//         <img
//           src="/images/harshs.png"
//           alt="Harshit Sharma"
//           className="relative z-[-10] 
//                     h-[140px] sm:h-[160px] md:h-[250px] 
//                     xs:h-[110px] // Smaller height for phones
//                     object-cover rounded-[25%]"
//         />
//       </div>
//     </motion.div>
//   );
// };

// export default HeroPic;






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
                 md:justify-end md:pr-16"
    >
      {/* Hexagon + Image Container */}
      <div
        className="relative flex items-center justify-center 
                   h-[200px] w-[200px] 
                   sm:h-[250px] sm:w-[250px] 
                   md:h-[320px] md:w-[320px] 
                   lg:h-[400px] lg:w-[400px]"
      >
        {/* Spinning Hexagon */}
        <div className="absolute inset-0 animate-[spin_20s_linear_infinite] blur-sm">
          <PiHexagonThin className="text-cyan h-full w-full" />
        </div>

        {/* Centered Image */}
        <img
          src="/images/harshs.png"
          alt="Harshit Sharma"
          className="relative z-[-10] 
                     h-[120px] sm:h-[160px] md:h-[220px] lg:h-[250px] 
                     object-cover rounded-[25%]"
        />
      </div>
    </motion.div>
  );
};

export default HeroPic;
