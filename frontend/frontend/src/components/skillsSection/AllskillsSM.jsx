// // // // // import { FaHtml5 } from "react-icons/fa";
// // // // // import { FaCss3Alt } from "react-icons/fa";
// // // // // import { IoLogoJavascript } from "react-icons/io";
// // // // // import { SiTypescript } from "react-icons/si";
// // // // // import { FaReact } from "react-icons/fa";
// // // // // import { SiRedux } from "react-icons/si";
// // // // // import { SiNextdotjs } from "react-icons/si";
// // // // // import { RiTailwindCssFill } from "react-icons/ri";
// // // // // import { motion } from "framer-motion";
// // // // // import { fadeIn } from "../../frameMotion/variant";
// // // // // import React from "react";
// // // // // const skills = [
// // // // //   {
// // // // //     skill: "HTML",
// // // // //     icon: FaHtml5,
// // // // //   },
// // // // //   {
// // // // //     skill: "CSS",
// // // // //     icon: FaCss3Alt,
// // // // //   },
// // // // //   {
// // // // //     skill: "JavaScript",
// // // // //     icon: IoLogoJavascript,
// // // // //   },
// // // // //   {
// // // // //     skill: "TypeScript",
// // // // //     icon: SiTypescript,
// // // // //   },
// // // // //   {
// // // // //     skill: "ReactJS",
// // // // //     icon: FaReact,
// // // // //   },
// // // // //   {
// // // // //     skill: "Redux",
// // // // //     icon: SiRedux,
// // // // //   },
// // // // //   {
// // // // //     skill: "NextJS",
// // // // //     icon: SiNextdotjs,
// // // // //   },
// // // // //   {
// // // // //     skill: "TailwindCSS",
// // // // //     icon: RiTailwindCssFill,
// // // // //   },
// // // // // ];

// // // // // const AllSkillsSM = () => {
// // // // //   return (
// // // // //     <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
// // // // //       {skills.map((item, index) => {
// // // // //         return (
// // // // //           <motion.div
// // // // //             variants={fadeIn("up", 0.2)}
// // // // //             initial="hidden"
// // // // //             whileInView="show"
// // // // //             viewport={{ once: false, amount: 0.7 }}
// // // // //             key={index}
// // // // //             className="flex flex-col items-center"
// // // // //           >
// // // // //             <item.icon className="text-7xl text-orange" />
// // // // //             <p className="text-center mt-4">{item.skill}</p>
// // // // //           </motion.div>
// // // // //         );
// // // // //       })}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default AllSkillsSM;




















// // // // // import { FaHtml5 } from "react-icons/fa";
// // // // // import { FaCss3Alt } from "react-icons/fa";
// // // // // import { IoLogoJavascript } from "react-icons/io5";
// // // // // import { SiTypescript } from "react-icons/si";
// // // // // import { FaReact } from "react-icons/fa";
// // // // // import { SiRedux } from "react-icons/si";
// // // // // import { SiNextdotjs } from "react-icons/si";
// // // // // import { FaNodeJs } from "react-icons/fa";
// // // // // import { SiExpress } from "react-icons/si";
// // // // // import { SiMongodb } from "react-icons/si";
// // // // // import { RiTailwindCssFill } from "react-icons/ri";
// // // // // import { SiGreensock } from "react-icons/si";
// // // // // import { SiCplusplus } from "react-icons/si";
// // // // // import { FaPython } from "react-icons/fa";
// // // // // import { FaGitAlt } from "react-icons/fa";
// // // // // import { FaGithub } from "react-icons/fa";
// // // // // import { SiPostman } from "react-icons/si";
// // // // // import { motion } from "framer-motion";
// // // // // import { fadeIn } from "../../frameMotion/variant";
// // // // // import React from "react";

// // // // // const skills = [
// // // // //   { skill: "HTML", icon: FaHtml5 },
// // // // //   { skill: "CSS", icon: FaCss3Alt },
// // // // //   { skill: "JavaScript", icon: IoLogoJavascript },
// // // // //   { skill: "TypeScript", icon: SiTypescript },
// // // // //   { skill: "ReactJS", icon: FaReact },
// // // // //   { skill: "Redux", icon: SiRedux },
// // // // //   { skill: "NextJS", icon: SiNextdotjs },
// // // // //   { skill: "NodeJS", icon: FaNodeJs },
// // // // //   { skill: "ExpressJS", icon: SiExpress },
// // // // //   { skill: "MongoDB", icon: SiMongodb },
// // // // //   { skill: "TailwindCSS", icon: RiTailwindCssFill },
// // // // //   { skill: "GSAP", icon: SiGreensock },
// // // // //   { skill: "C++", icon: SiCplusplus },
// // // // //   { skill: "Python", icon: FaPython },
// // // // //   { skill: "Git", icon: FaGitAlt },
// // // // //   { skill: "GitHub", icon: FaGithub },
// // // // //   { skill: "Postman", icon: SiPostman },
// // // // // ];

// // // // // const AllSkillsSM = () => {
// // // // //   return (
// // // // //     <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
// // // // //       {skills.map((item, index) => {
// // // // //         return (
// // // // //           <motion.div
// // // // //             variants={fadeIn("up", 0.2)}
// // // // //             initial="hidden"
// // // // //             whileInView="show"
// // // // //             viewport={{ once: false, amount: 0.7 }}
// // // // //             key={index}
// // // // //             className="flex flex-col items-center"
// // // // //           >
// // // // //             {React.createElement(item.icon, { className: "text-7xl text-orange" })}
// // // // //             <p className="text-center mt-4">{item.skill}</p>
// // // // //           </motion.div>
// // // // //         );
// // // // //       })}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default AllSkillsSM;





// // // // import React from "react";
// // // // import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaPython } from "react-icons/fa";
// // // // import { IoLogoJavascript } from "react-icons/io5";
// // // // import { SiTypescript, SiRedux, SiNextdotjs, SiMongodb, SiExpress, SiGreensock, SiCplusplus, SiPostman } from "react-icons/si";
// // // // import { RiTailwindCssFill } from "react-icons/ri";
// // // // import { motion } from "framer-motion";
// // // // import { fadeIn } from "../../frameMotion/variant";

// // // // const skills = [
// // // //   { skill: "HTML", icon: FaHtml5 },
// // // //   { skill: "CSS", icon: FaCss3Alt },
// // // //   { skill: "JavaScript", icon: IoLogoJavascript },
// // // //   { skill: "TypeScript", icon: SiTypescript },
// // // //   { skill: "ReactJS", icon: FaReact },
// // // //   { skill: "Redux", icon: SiRedux },
// // // //   { skill: "NextJS", icon: SiNextdotjs },
// // // //   { skill: "NodeJS", icon: FaNodeJs },
// // // //   { skill: "ExpressJS", icon: SiExpress },
// // // //   { skill: "MongoDB", icon: SiMongodb },
// // // //   { skill: "TailwindCSS", icon: RiTailwindCssFill },
// // // //   { skill: "GSAP", icon: SiGreensock },
// // // //   { skill: "C++", icon: SiCplusplus },
// // // //   { skill: "Python", icon: FaPython },
// // // //   { skill: "Git", icon: FaGitAlt },
// // // //   { skill: "GitHub", icon: FaGithub },
// // // //   { skill: "Postman", icon: SiPostman },
// // // // ];

// // // // const AllSkillsSM = () => {
// // // //   return (
// // // //     <div className="py-12 bg-gray-100">
// // // //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto px-4 justify-items-end">
// // // //         {skills.map((item, index) => (
// // // //           <motion.div
// // // //             variants={fadeIn("left", `${index * 0.1}`)}
// // // //             initial="hidden"
// // // //             whileInView="show"
// // // //             viewport={{ once: false, amount: 0.3 }}
// // // //             key={item.skill}
// // // //             className="flex flex-col items-center"
// // // //           >
// // // //             {React.createElement(item.icon, { className: "text-5xl text-orange-500" })}
// // // //             <p className="text-center mt-3 text-gray-900 font-semibold">{item.skill}</p>
// // // //           </motion.div>
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default AllSkillsSM;












// // import React from "react";
// // import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaPython } from "react-icons/fa";
// // import { IoLogoJavascript } from "react-icons/io5";
// // import { SiTypescript, SiRedux, SiNextdotjs, SiMongodb, SiExpress, SiGreensock, SiCplusplus, SiPostman } from "react-icons/si";
// // import { RiTailwindCssFill } from "react-icons/ri";
// // import { motion } from "framer-motion";
// // import { fadeIn } from "../../frameMotion/variant";

// // const skills = [
// //   { skill: "HTML", icon: FaHtml5 },
// //   { skill: "CSS", icon: FaCss3Alt },
// //   { skill: "JavaScript", icon: IoLogoJavascript },
// //   { skill: "TypeScript", icon: SiTypescript },
// //   { skill: "ReactJS", icon: FaReact },
// //   { skill: "Redux", icon: SiRedux },
// //   { skill: "NextJS", icon: SiNextdotjs },
// //   { skill: "NodeJS", icon: FaNodeJs },
// //   { skill: "ExpressJS", icon: SiExpress },
// //   { skill: "MongoDB", icon: SiMongodb },
// //   { skill: "TailwindCSS", icon: RiTailwindCssFill },
// //   { skill: "GSAP", icon: SiGreensock },
// //   { skill: "C++", icon: SiCplusplus },
// //   { skill: "Python", icon: FaPython },
// //   { skill: "Git", icon: FaGitAlt },
// //   { skill: "GitHub", icon: FaGithub },
// //   { skill: "Postman", icon: SiPostman },
// // ];

// // const AllSkillsSM = () => {
// //   return (
// //     <div className="py-12 md:py-16 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 min-h-[400px]">
// //       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 
// //                      gap-6 sm:gap-8 md:gap-10 
// //                      max-w-[1400px] mx-auto 
// //                      px-4 sm:px-6 lg:px-8 
// //                      justify-items-center"
// //       >
// //         {skills.map((item, index) => (
// //           <motion.div
// //             variants={fadeIn("up", `${index * 0.1}`)}
// //             initial="hidden"
// //             whileInView="show"
// //             viewport={{ once: true, amount: 0.3 }}
// //             key={item.skill}
// //             className="flex flex-col items-center 
// //                       bg-white rounded-xl shadow-md 
// //                       p-4 sm:p-5 
// //                       hover:shadow-lg hover:scale-105 
// //                       transition-all duration-300 
// //                       w-[120px] sm:w-[130px] md:w-[140px]"
// //           >
// //             {React.createElement(item.icon, { 
// //               className: "text-4xl sm:text-5xl text-orange-500 hover:text-orange-600 transition-colors duration-300" 
// //             })}
// //             <p className="text-center mt-3 text-gray-900 font-semibold text-sm sm:text-base">
// //               {item.skill}
// //             </p>
// //           </motion.div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default AllSkillsSM;















// import React from "react";
// import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaPython } from "react-icons/fa";
// import { IoLogoJavascript } from "react-icons/io5";
// import { SiTypescript, SiRedux, SiNextdotjs, SiMongodb, SiExpress, SiGreensock, SiCplusplus, SiPostman, SiMysql } from "react-icons/si";
// import { RiTailwindCssFill } from "react-icons/ri";
// import { motion } from "framer-motion";
// import { fadeIn } from "../../frameMotion/variant";

// const skills = [
//   { skill: "HTML", icon: FaHtml5 },
//   { skill: "CSS", icon: FaCss3Alt },
//   { skill: "JavaScript", icon: IoLogoJavascript },
//   { skill: "TypeScript", icon: SiTypescript },
//   { skill: "ReactJS", icon: FaReact },
//   { skill: "Redux", icon: SiRedux },
//   { skill: "NextJS", icon: SiNextdotjs },
//   { skill: "NodeJS", icon: FaNodeJs },
//   { skill: "ExpressJS", icon: SiExpress },
//   { skill: "MongoDB", icon: SiMongodb },
//   { skill: "TailwindCSS", icon: RiTailwindCssFill },
//   { skill: "GSAP", icon: SiGreensock },
//   { skill: "C++", icon: SiCplusplus },
//   { skill: "Python", icon: FaPython },
//   { skill: "Git", icon: FaGitAlt },
//   { skill: "GitHub", icon: FaGithub },
//   { skill: "Postman", icon: SiPostman },
//   { skill: "SQL", icon: SiMysql }, // Added from AllSkills
// ];

// const AllSkillsSM = () => {
//   return (
//     <div className="py-12 md:py-16 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 min-h-[400px]">
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 
//                      gap-6 sm:gap-8 md:gap-10 
//                      max-w-[1400px] mx-auto 
//                      px-4 sm:px-6 lg:px-8 
//                      justify-items-center"
//       >
//         {skills.map((item, index) => (
//           <motion.div
//             variants={fadeIn("up", `${index * 0.1}`)}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.3 }}
//             key={item.skill}
//             className="flex flex-col items-center 
//                       bg-white rounded-xl shadow-md 
//                       p-4 sm:p-5 
//                       hover:shadow-lg hover:scale-105 
//                       transition-all duration-300 
//                       w-[120px] sm:w-[130px] md:w-[140px]"
//           >
//             {React.createElement(item.icon, { 
//               className: "text-4xl sm:text-5xl text-orange-500 hover:text-orange-600 transition-colors duration-300" 
//             })}
//             <p className="text-center mt-3 text-gray-900 font-semibold text-sm sm:text-base">
//               {item.skill}
//             </p>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllSkillsSM;















import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiRedux, SiNextdotjs, SiMongodb, SiExpress, SiGreensock, SiCplusplus, SiPostman, SiMysql } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../frameMotion/variant";

const skills = []; // Empty array

const AllSkillsSM = () => {
  return (
    <div className="py-12 md:py-16 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 min-h-[400px]">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 
                     gap-6 sm:gap-8 md:gap-10 
                     max-w-[1400px] mx-auto 
                     px-4 sm:px-6 lg:px-8 
                     justify-items-center"
      >
        {skills.map((item, index) => (
          <motion.div
            variants={fadeIn("up", `${index * 0.1}`)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            key={item.skill}
            className="flex flex-col items-center 
                      bg-white rounded-xl shadow-md 
                      p-4 sm:p-5 
                      hover:shadow-lg hover:scale-105 
                      transition-all duration-300 
                      w-[120px] sm:w-[130px] md:w-[140px]"
          >
            {React.createElement(item.icon, { 
              className: "text-4xl sm:text-5xl text-orange-500 hover:text-orange-600 transition-colors duration-300" 
            })}
            <p className="text-center mt-3 text-gray-900 font-semibold text-sm sm:text-base">
              {item.skill}
            </p>
          </motion.div>
        ))}
        {skills.length === 0 && (
          <p className="text-center text-gray-600 col-span-full">No skills to display</p>
        )}
      </div>
    </div>
  );
};

export default AllSkillsSM;