// import ProjectsText from "./ProjectText";
// import SingleProject from "./SingleProject";
// import { motion } from "framer-motion";
// import { fadeIn } from "../../frameMotion/variant";
// import React from "react";

// const projects = [
//   {
//     name: "ScreenScape",
//     year: "Jan 2025",
//     align: "right",
//     image: "/images/Screenscapeimage.png",
//     link: "https://sceenscape.vercel.app/",
//   },
//   {
//     name: "Eveman",
//     year: "Jan 2025",
//     align: "left",
//     image: "/images/Evemanimage.png",
//     link: "https://eveman-two.vercel.app/",
//   },
//   {
//     name: "Medicure",
//     year: "Jan 2025",
//     align: "right",
//     image: "/images/medicureimage.png",
//     link: "https://medicure-alpha.vercel.app/",
//   },
//   {
//     name: "HeroVerse",
//     year: "Feb 2025",
//     align: "left",
//     image: "/images/HeroVerse.png",
//     link: "https://heroverse-kappa.vercel.app/",
//   },
// ];

// const ProjectsMain = () => {
//   return (
//     <div id="projects" className="max-w-[1200px] mx-auto px-4">
//       <motion.div
//         variants={fadeIn("top", 0)}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: false, amount: 0.7 }}
//       >
//         <ProjectsText />
//       </motion.div>
//       <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
//         {projects.map((project, index) => (
//           <SingleProject
//             key={index}
//             name={project.name}
//             year={project.year}
//             align={project.align}
//             image={project.image}
//             link={project.link}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProjectsMain;








import ProjectsText from "./ProjectText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../frameMotion/variant";
import React from "react";

const projects = [
  {
    name: "ScreenScape",
    year: "Jan 2025",
    align: "right",
    image: "/images/Screenscapeimage.png",
    link: "https://sceenscape.vercel.app/",
  },
  {
    name: "Eveman",
    year: "Jan 2025",
    align: "left",
    image: "/images/eveman69.jpg",
    link: "https://eveman-two.vercel.app/",
  },
  {
    name: "Medicure",
    year: "Jan 2025",
    align: "right",
    image: "/images/medicureimage.png",
    link: "https://medicure-alpha.vercel.app/",
  },
  {
    name: "HeroVerse",
    year: "Feb 2025",
    align: "left",
    image: "/images/HeroVerse.png",
    link: "https://heroverse-kappa.vercel.app/",
  },
  {
    name: "EasyStay",
    year: " Mar 2025",
    align: "right",
    image: "/images/HeroVerse.png",
    link: "https://easystay-sigma.vercel.app/",
  }
];

const ProjectsMain = () => {
  return (
    <div
      id="projects"
      className="max-w-[1900px] mx-auto px-4 py-16 
                 bg-[rgb(37,22,22)] backdrop-blur-xl 
                 border border-[rgba(255,255,255,0.05)] rounded-3xl 
                 shadow-[0_10px_40px_rgba(0,0,0,0.7)] 
                 hover:bg-[rgb(37,22,22)] transition-all duration-300"
    >
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div
        className="flex flex-col gap-20 max-w-[900px] mx-auto mt-10 
                  bg-[rgb(236,220,220)] backdrop-blur-xl 
                  border border-[rgba(255,255,255,0.05)] rounded-3xl 
                  shadow-[0_10px_40px_rgba(0,0,0,0.7)] p-6 
                  hover:bg-[rgba(243,239,239,0.97)] transition-all duration-300"
      >
        {projects.map((project, index) => (
          <SingleProject
            key={index}
            name={project.name}
            year={project.year}
            align={project.align}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;