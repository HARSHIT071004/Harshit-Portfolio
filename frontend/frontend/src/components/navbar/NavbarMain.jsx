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
                      rounded-full shadow-[0_0_15px_rgba(255,149,0,0.3)] 
                      relative">

        {/* Logo - always top left */}
        <div className="flex-shrink-0 z-30">
          <NavbarLogo />
        </div>

        {/* Mobile Dropdown Content */}
        {menuOpen && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 
                          flex flex-col items-center justify-center gap-6 
                          bg-white/90 px-6 py-6 rounded-3xl shadow-xl 
                          lg:hidden">
            <NavbarLinks />
            <NavbarBtn />
          </div>
        )}

        {/* Desktop Links */}
        <div className={`flex-1 items-center justify-center gap-6 
                         hidden lg:flex`}>
          <NavbarLinks />
        </div>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <NavbarBtn />
        </div>

        {/* Toggler - mobile only */}
        <div className="lg:hidden ml-2 z-30">
          <NavbarToggler />
        </div>
      </div>
    </nav>
  );
};

export default NavbarMain;
