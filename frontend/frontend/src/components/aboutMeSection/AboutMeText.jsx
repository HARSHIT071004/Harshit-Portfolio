


// import { Link } from "react-scroll";
// import React from "react";

// const AboutMeText = () => {
//   return (
//     <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center sm:px-4">
//       <h2 className="text-6xl sm:text-6xl font-semibold text-[rgb(0,0,0)] mb-6 sm:mb-4">
//         About Me
//       </h2>
//       <p className="text-2xl sm:text-lg text-[rgb(2,68,48)] leading-relaxed sm:w-full">
//         I am Harshit Sharma, a passionate Full-Stack Developer with a deep
//         interest in building scalable and user-friendly web applications. As a fresher,
//         I am eager to learn, experiment, and implement modern web technologies,
//         mastering both frontend and backend development. My journey is driven by
//         curiosity and the desire to create real-world solutions that make an impact.
//       </p>
//       <button className="border border-white rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-8 sm:mt-6  
//   bg-gradient-to-r from-orange-400 to-orange-500 text-white shadow-lg hover:shadow-2xl  
//   transition-all duration-500 ease-in-out transform hover:scale-105 hover:from-orange-500 hover:to-orange-600">

//   <Link
//     spy={true}
//     smooth={true}
//     duration={500}
//     offset={-120}
//     to="projects"
//     className="cursor-pointer text-[rgb(2,68,48)] hover:text-gray-500 transition-all duration-500"
//   >
//     My Projects
//   </Link>
// </button>

//     </div>
//   );
// };

// export default AboutMeText;











import { Link } from "react-scroll";
import React from "react";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start items-center text-center md:text-left px-2 sm:px-4">
    <h2 className="text-4xl sm:text-5xl md:text-6xl font-tech font-semibold tracking-wide text-white mb-4">
  About Me
</h2>


<br/>
      <p className="text-base sm:text-lg md:text-1xl text-[rgb(255,255,255)] leading-relaxed sm:w-full max-w-[600px]">
        I’m Harshit Sharma, a passionate Full-Stack Developer with expertise in the MERN stack (MongoDB, Express.js, React, Node.js). I build scalable, high-performance web apps with responsive frontends and robust backends      </p>
      <button className="border border-white rounded-full py-2 px-4 text-base sm:text-lg flex gap-2 items-center mt-6 bg-gradient-to-r from-orange-400 to-orange-500 text-white shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-105 hover:from-orange-500 hover:to-orange-600">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-[rgb(2,68,48)] hover:text-gray-500 transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;




