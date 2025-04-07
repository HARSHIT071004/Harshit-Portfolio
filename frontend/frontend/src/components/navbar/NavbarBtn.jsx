// import { Link } from "react-scroll";
// import { LuArrowDownRight } from "react-icons/lu";
// import React from "react";

// const NavbarBtn = () => {
//   return (
//     <button className="px-3 py-1 sm:px-4 sm:py-2 rounded-full text-base sm:text-xl font-bold font-body border-2 border-cyan flex items-center gap-1 bg-gradient-to-r from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-lg hover:shadow-cyan/40">
//       <Link
//         spy={true}
//         smooth={true}
//         duration={500}
//         offset={-120}
//         to="contact"
//         className="cursor-pointer"
//       >
//         Hire Me
//       </Link>
//       <div className="hidden sm:block">
//         <LuArrowDownRight />
//       </div>
//     </button>
//   );
// };

// export default NavbarBtn;








import { Link } from "react-scroll";
import { LuArrowDownRight } from "react-icons/lu";
import React from "react";

const NavbarBtn = () => {
  return (
    <button className="px-4 py-2 md:px-6 md:py-2.5 rounded-full text-sm md:text-lg font-bold font-body border-2 border-cyan flex items-center gap-2 md:gap-3 bg-gradient-to-r from-darkCyan to-orange transition-all duration-500 hover:scale-105 hover:border-orange cursor-pointer hover:shadow-lg hover:shadow-cyan/40">
      <Link
        spy={true}
        smooth={true}
        duration={500}
        offset={-120}
        to="contact"
        className="cursor-pointer"
      >
        Hire Me
      </Link>
      <span className="hidden md:inline">
        <LuArrowDownRight />
      </span>
    </button>
  );
};

export default NavbarBtn;
