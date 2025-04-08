import { Link } from "react-scroll";
import { LuArrowDownRight } from "react-icons/lu";
import React from "react";

const NavbarBtn = () => {
  return (
    <Link
      spy={true}
      smooth={true}
      duration={500}
      offset={-120}
      to="contact"
      className="cursor-pointer"
    >
      <button className="px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2.5 
                        rounded-full text-xs sm:text-sm md:text-lg 
                        font-bold font-body border-2 border-cyan 
                        flex items-center gap-2 md:gap-3 
                        bg-gradient-to-r from-darkCyan to-orange 
                        transition-all duration-500 
                        hover:scale-105 hover:border-orange 
                        hover:shadow-lg hover:shadow-cyan/40 text-white">
        Hire Me
        <span className="hidden md:inline">
          <LuArrowDownRight />
        </span>
      </button>
    </Link>
  );
};

export default NavbarBtn;
