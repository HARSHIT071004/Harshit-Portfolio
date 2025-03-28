// import { Link } from "react-scroll";
// import React from "react";
// const AboutMeText = () => {
//   return (
//     <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
//       <h2 className="text-6xl text-cyan mb-10">About Me</h2>
//       <p>
//       I am Harshit Sharma, a passionate Full-Stack Developer 🚀 with a deep interest in building scalable and user-friendly web applications. As a fresher, I am eager to learn, experiment, and implement modern web technologies, mastering both frontend and backend development. My journey is driven by curiosity and the desire to create real-world solutions that make an impact. I thrive on problem-solving, optimizing performance, and continuously expanding my skill set to stay ahead in the ever-evolving tech industry. Beyond coding, I believe in knowledge sharing and inspiring others to grow in the world of web development      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
//        <p/> <Link
//           spy={true}
//           smooth={true}
//           duration={500}
//           offset={-120}
//           to="projects"
//           className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
//         >
//           My Projects
//         </Link>
//       </button>
//     </div>
//   );
// };

// export default AboutMeText;





import { Link } from "react-scroll";
import React from "react";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl font-bold text-[#b76dfc] mb-10">About Me</h2>
      <p className="text-2xl text-white">
        I am Harshit Sharma, a passionate Full-Stack Developer  with a deep interest in building scalable and user-friendly web applications. As a fresher, I am eager to learn, experiment, and implement modern web technologies, mastering both frontend and backend development. My journey is driven by curiosity and the desire to create real-world solutions that make an impact. I thrive on problem-solving, optimizing performance, and continuously expanding my skill set to stay ahead in the ever-evolving tech industry. Beyond coding, I believe in knowledge sharing and inspiring others to grow in the world of web development.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
