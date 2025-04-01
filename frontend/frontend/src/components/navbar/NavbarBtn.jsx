// import { Link } from "react-scroll";
// import { LuArrowDownRight } from "react-icons/lu";
// import React from "react";
// const NavbarBtn = () => {
//   return (
//     <button className=" px-4 py-2 rounded-full text-xl font-bold font-body text- border-cyan border flex items-center gap-1 bg-gradient-to-r  from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow">
//       <Link spy={true} smooth={true} duration={500} offset={-120} to="contact">
//         Hire Me
//       </Link>
//       <div className="sm:hidden md:block">
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
    <button className="px-4 py-2 sm:px-3 sm:py-1 rounded-full text-xl sm:text-lg font-bold font-body border-cyan border flex items-center gap-1 sm:gap-0.5 bg-gradient-to-r from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-lg hover:shadow-cyan/40">
      <Link spy={true} smooth={true} duration={500} offset={-120} to="contact">
        Hire Me
      </Link>
      <div className="sm:hidden">
        <LuArrowDownRight />
      </div>
    </button>
  );
};

export default NavbarBtn;
