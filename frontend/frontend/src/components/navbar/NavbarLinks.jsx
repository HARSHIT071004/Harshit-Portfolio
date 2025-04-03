// import { Link } from "react-scroll";
// import React from "react";
// const links = [
//   { link: "About Me", section: "about" },
//   { link: "Skills", section: "skills" },
//   // { link: "Experience", section: "experience" },
//   { link: "Projects", section: "projects" },
//   { link: "Contact Me", section: "contact" },
// ];

// const NavbarLinks = () => {
//   return (
//     <ul className="flex lg:flex-row sm:flex-col gap-6 text- font-body lg:relative sm:absolute sm:top-[120%] text-center left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-cyan/30 backdrop-blur-lg lg:bg-bl sm:w-full py-4">
//       {links.map((link, index) => {
//         return (
//           <li key={index} className="group">
//             <Link
//               spy={true}
//               smooth={true}
//               duration={500}
//               offset={-130}
//               to={link.section}
//               className="cursor-pointer  hover:text-cyan transition-all duration-500"
//             >
//               {link.link}
//             </Link>
//             <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

// export default NavbarLinks;
















import { Link } from "react-scroll";
import React from "react";
const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  // { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact Me", section: "contact" },
];

const NavbarLinks = () => {
  return (
    <ul className="flex lg:flex-row sm:flex-col gap-6 font-body lg:relative sm:absolute sm:top-[120%] text-center left-[50%] -translate-x-[50%] lg:text-md sm:text-lg py-4">
      {links.map((link, index) => {
        return (
          <li key={index} className="group sm:py-2">
            <Link
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              to={link.section}
              className="cursor-pointer hover:text-cyan transition-all duration-500 sm:block sm:w-full"
            >
              {link.link}
            </Link>
            <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;