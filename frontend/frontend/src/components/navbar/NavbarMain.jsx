// import NavbarLogo from "./Navbarlogo";
// import NavbarLinks from "./NavbarLinks";
// import NavbarBtn from "./NavbarBtn";
// import NavbarToggler from "./NavbarToggler";
// import { useSelector } from "react-redux";
// import React from "react";

// const NavbarMain = () => {
//   const menuOpen = useSelector((state) => state.menu.menuOpen);
//   return (
//     <nav className="max-w-[1300px] mx-auto w-full  px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
//       <div className="flex justify-between w-full max-w-[1200px] mx-auto  bg-black items-center p-6 rounded-r-4xl rounded-l-4xl border-orange border-[0.5px] ">
//         <NavbarLogo />
//         <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
//           <NavbarLinks />
//         </div>

//         <NavbarBtn />
//       </div>
//       <div className="flex lg:hidden sm:block p-6 bg-black items-center justify-center rounded-full  border-orange border-[0.5px] ">
//         <NavbarToggler />
//       </div>
//     </nav>
//   );
// };

// export default NavbarMain;



import NavbarLogo from "./Navbarlogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import { useSelector } from "react-redux";
import React from "react";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);
  return (
    <nav className="max-w-[1400px] mx-auto w-full px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
      <div className="flex justify-between w-full  max-w-[1100px] mx-auto  items-center p-6 rounded-r-4xl rounded-l-4xl border-orange border-[0.5px] sm:p-3 sm:h-[50px] sm:rounded-lg sm:bg-opacity-60 sm:backdrop-blur-md">
        <NavbarLogo />
        <div className={`lg:block ${menuOpen ? "block" : "hidden"} sm:flex sm:items-center sm:justify-center sm:text-sm`}>
          <NavbarLinks />
        </div>
        <NavbarBtn />
      </div>
      <div className="flex lg:hidden sm:flex p-6 sm:p-2 bg-black items-center justify-center rounded-full border-orange border-[0.5px] sm:h-[40px] sm:w-[40px] sm:bg-opacity-60 sm:backdrop-blur-md">
        <NavbarToggler />
      </div>
    </nav>
  );
};

export default NavbarMain;
