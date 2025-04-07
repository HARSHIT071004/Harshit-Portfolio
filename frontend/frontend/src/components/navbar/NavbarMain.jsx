import NavbarLogo from "./Navbarlogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import { useSelector } from "react-redux";
import React from "react";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);

  return (
    <nav className="max-w-[1400px] mx-auto w-full px-4 fixed top-4 left-1/2 -translate-x-1/2 z-20">
      <div className="w-full flex items-center justify-between flex-wrap 
                      gap-2 sm:gap-4 px-4 py-3 
                      backdrop-blur-md border border-orange-500/50 
                      rounded-full shadow-[0_0_15px_rgba(255,149,0,0.3)]">

        {/* Logo */}
        <div className="flex-shrink-0">
          <NavbarLogo />
        </div>

        {/* Links - Show on large screens OR if menuOpen (mobile) */}
        <div className={`flex-1 items-center justify-center gap-6 
                        ${menuOpen ? "flex" : "hidden"} 
                        lg:flex transition-all duration-300`}>
          <NavbarLinks />
        </div>

        {/* Button - Show on large screens OR if menuOpen (mobile) */}
        <div className={`${menuOpen ? "block" : "hidden"} lg:block`}>
          <NavbarBtn />
        </div>

        {/* Toggler - Only on Mobile */}
        <div className="lg:hidden ml-2">
          <NavbarToggler />
        </div>
      </div>
    </nav>
  );
};

export default NavbarMain;
