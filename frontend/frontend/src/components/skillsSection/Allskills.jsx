






import React from "react";
import SingleSkill from "./Singleskill";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiRedux, SiNextdotjs, SiMongodb, SiExpress, SiGreensock, SiCplusplus, SiPostman, SiMysql } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../frameMotion/variant";
import SkillsText from "./SkillText";

const skills = [
  { skill: "HTML", icon: FaHtml5 },
  { skill: "CSS", icon: FaCss3Alt },
  { skill: "JavaScript", icon: IoLogoJavascript },
  { skill: "TypeScript", icon: SiTypescript },
  { skill: "ReactJS", icon: FaReact },
  { skill: "NextJS", icon: SiNextdotjs },
  { skill: "Redux", icon: SiRedux },
  { skill: "TailwindCSS", icon: RiTailwindCssFill },
  { skill: "NodeJS", icon: FaNodeJs },
  { skill: "Express", icon: SiExpress },
  { skill: "MongoDB", icon: SiMongodb },
  { skill: "GSAP", icon: SiGreensock },
  { skill: "C++", icon: SiCplusplus },
  { skill: "Python", icon: FaPython },
  { skill: "Git", icon: FaGitAlt },
  { skill: "GitHub", icon: FaGithub },
  { skill: "Postman", icon: SiPostman },
  { skill: "SQL", icon: SiMysql },
];

const AllSkills = () => {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 min-h-[500px] overflow-hidden">
      {/* Glowing Background */}
      <div className="absolute inset-0  animate-pulse">
        <div className="absolute inset-0 bg-[rgb(254,198,39)] animate-glow" />
      </div>

      {/* Outer Text */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 px-4 
                  drop-shadow-[0_0_10px_rgba(0,255,255,0.7)] z-10 relative"
      >
        
      </motion.h2>

      {/* Main Skills Container */}
      <div className="relative z-10">
        {/* Skills Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10 px-4">
          {/* <SkillsText /> */}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 
                        gap-6 sm:gap-8 md:gap-10 
                        max-w-[1400px] mx-auto 
                        px-4 sm:px-6 lg:px-8 
                        justify-items-center"
        >
          {skills.map((item, index) => (
            <motion.div
              variants={fadeIn("up", `${index * 0.15}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              key={item.skill}
              className="w-[100px] sm:w-[120px] md:w-[130px] lg:w-[140px] 
                        group transition-all duration-500"
              whileHover={{ scale: 1.15, rotate: 5 }}
            >
              <SingleSkill
                text={item.skill}
                imgSvg={React.createElement(item.icon, { 
                  className: "text-4xl sm:text-5xl md:text-6xl text-white mx-auto group-hover:text-teal-300 transition-colors duration-300 drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]"
                })}
                className="bg-gradient-to-br from-gray-800/80 to-blue-900/80 rounded-2xl p-4 sm:p-5 
                          border border-cyan-500/30 
                          hover:bg-gradient-to-br hover:from-teal-900/90 hover:to-blue-800/90 
                          hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,255,255,0.6)] 
                          transition-all duration-500 backdrop-blur-sm"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
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

export default AllSkills;