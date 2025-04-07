import React from "react";
import AllSkills from "./skillsSection/Allskills";
import SkillsText from "./skillsSection/SkillText";
import { motion } from "framer-motion";
import { fadeIn } from "../frameMotion/variant";

const SkillsMain = () => {
  return (
    <div id="skills" className="relative min-h-screen py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 animate-pulse">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,_rgba(0,255,255,0.15)_0%,_transparent_70%)] animate-glow" />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl px-4 mx-auto relative z-10">


      <motion.h2
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cyan-900 font-extrabold tracking-wide uppercase drop-shadow-[0_0_12px_rgba(0,255,255,0.7)] font-['Orbitron',_sans-serif]"
          >
            These Are My Foundation Skills
          </motion.h2>
        {/* Skills Header */}
        
<br/>
<br/>
<br/>
        {/* Skills Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <SkillsText />
        </motion.div>

          <div className="relative max-w-3xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_0_30px_rgba(0,255,255,0.2)] border border-cyan-500/30">
            <AllSkills />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsMain;
