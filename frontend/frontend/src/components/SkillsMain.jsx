// import AllSkills from "./skillsSection/Allskills";
// // import AllSkillsSM from "./skillsSection/AllskillsSM";
// import SkillsText from "./skillsSection/SkillText";
// import { motion } from "framer-motion";
// import { fadeIn } from "../frameMotion/variant";
// import React from "react";

// const SkillsMain = () => {
//   return (
//     <div id="skills">
//       <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden">
//         <motion.div
//           variants={fadeIn("down", 0.2)}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: false, amount: 0.7 }}
//         >
//           <SkillsText />
//         </motion.div>
//         <div className="bottom-[50px] absolute left-[50%] -translate-x-[50%] sm:hidden lg:block">
//           <AllSkills />
//         </div>
//          <div className="sm:block lg:hidden">
//            {/* <AllSkillsSM /> */}
//         </div> 
//       </div>
//     </div>
//   );
// };

// export default SkillsMain;






import React from "react";
import AllSkills from "./skillsSection/Allskills";
// import AllSkillsSM from "./skillsSection/AllskillsSM";
import SkillsText from "./skillsSection/SkillText";
import { motion } from "framer-motion";
import { fadeIn } from "../frameMotion/variant";

const SkillsMain = () => {
  return (
    <div id="skills" className="relative min-h-[700px] py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0  animate-pulse">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,_rgba(0,255,255,0.15)_0%,_transparent_70%)] animate-glow" />
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] px-4 mx-auto relative z-10">
        {/* Skills Header */}
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          {/* <SkillsText /> */}
        </motion.div>

        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cyan-900 mt-8 sm:mt-10 md:mt-12 
                    font-extrabold tracking-wide uppercase 
                    drop-shadow-[0_0_12px_rgba(0,255,255,0.7)] 
                    font-['Orbitron',_sans-serif]"
        >
          These Are My Foundation Skills
        </motion.h2>
        <br/>
        <br/>
        <br/>
        <br/>
        {/* Skills Section */}
        <div className="relative max-w-[1000px] mx-auto bg-gray-800/20 rounded-3xl p-6 sm:p-8 md:p-10 
                       shadow-[0_0_30px_rgba(0,255,255,0.2)] border border-cyan-500/30 
                       backdrop-blur-md">
          <AllSkills />
        </div>

        {/* Optional Decorative Text */}
       
      </div>
    </div>
  );
};

// Custom CSS for animations (add to your CSS file or global styles)
const customStyles = `
  @keyframes glow {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(1.05); }
  }
  .animate-glow {
    animation: glow 4s infinite ease-in-out;
  }
`;

export default SkillsMain;