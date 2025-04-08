// // import NavbarLogo from "./Navbarlogo";
// // import NavbarLinks from "./NavbarLinks";
// // import NavbarBtn from "./NavbarBtn";
// // import NavbarToggler from "./NavbarToggler";
// // import { useSelector } from "react-redux";
// // import React from "react";

// // const NavbarMain = () => {
// //   const menuOpen = useSelector((state) => state.menu.menuOpen);
// //   return (
// //     <nav className="max-w-[1300px] mx-auto w-full  px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
// //       <div className="flex justify-between w-full max-w-[1200px] mx-auto  bg-black items-center p-6 rounded-r-4xl rounded-l-4xl border-orange border-[0.5px] ">
// //         <NavbarLogo />
// //         <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
// //           <NavbarLinks />
// //         </div>

// //         <NavbarBtn />
// //       </div>
// //       <div className="flex lg:hidden sm:block p-6 bg-black items-center justify-center rounded-full  border-orange border-[0.5px] ">
// //         <NavbarToggler />
// //       </div>
// //     </nav>
// //   );
// // };

// // export default NavbarMain;



// // import NavbarLogo from "./Navbarlogo";
// // import NavbarLinks from "./NavbarLinks";
// // import NavbarBtn from "./NavbarBtn";
// // import NavbarToggler from "./NavbarToggler";
// // import { useSelector } from "react-redux";
// // import React from "react";
// // const NavbarMain = () => {
// //   const menuOpen = useSelector((state) => state.menu.menuOpen);
// //   return (
// //     <nav className="max-w-[1400px] mx-auto w-full px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
// //       <div className="flex justify-between w-full  max-w-[1100px] mx-auto  items-center p-6 rounded-r-4xl rounded-l-4xl border-orange border-[0.5px] sm:p-3 sm:h-[50px] sm:rounded-lg sm:bg-opacity-60 sm:backdrop-blur-md">
// //         <NavbarLogo />
// //         <div className={`lg:block ${menuOpen ? "block" : "hidden"} sm:flex sm:items-center sm:justify-center sm:text-sm`}>
// //           <NavbarLinks />
// //         </div>
// //         <NavbarBtn />
// //       </div>
// //       <div className="flex lg:hidden sm:flex p-6 sm:p-2 items-center justify-center rounded-full border-orange border-[0.5px] sm:h-[40px] sm:w-[40px] sm:bg-opacity-60 sm:backdrop-blur-md">
// //         <NavbarToggler />
// //       </div>
// //     </nav>
// //   );
// // };

// // export default NavbarMain;












// import NavbarLogo from "./Navbarlogo";
// import NavbarLinks from "./NavbarLinks";
// import NavbarBtn from "./NavbarBtn";
// import NavbarToggler from "./NavbarToggler";
// import { useSelector } from "react-redux";
// import React from "react";

// const NavbarMain = () => {
//   const menuOpen = useSelector((state) => state.menu.menuOpen);

//   return (
//     <nav className="max-w-[1400px] mx-auto w-full px-4 fixed top-4 left-[50%] -translate-x-[50%] z-20 flex gap-3 sm:gap-4">
//       {/* Main Navbar Container */}
//       <div className="flex justify-between w-full max-w-[1100px] mx-auto items-center 
//                       backdrop-blur-md border border-orange-500/50 
//                      rounded-full p-4 sm:p-3 h-[60px] sm:h-[50px] 
//                      shadow-[0_0_15px_rgba(255,149,0,0.3)]">
//         {/* Logo */}
//         <NavbarLogo />

//         {/* Links - Responsive Handling */}
//         <div
//           className={`${
//             menuOpen
//               ? "block absolute top-[70px] left-0 right-0  border border-orange-500/50 rounded-lg mx-4 p-4 sm:rounded-b-lg sm:p-3"
//               : "hidden"
//           } lg:flex lg:static lg:bg-transparent lg:border-none lg:p-0 lg:items-center lg:gap-6`}
//         >
//           <NavbarLinks />
//         </div>

//         {/* Button - Visible on larger screens */}
//         <div className="hidden sm:block">
//           <NavbarBtn />
//         </div>
//       </div>

//       {/* Toggler - For Mobile */}
//       <div className="flex lg:hidden items-center justify-center 
//                       backdrop-blur-md border border-orange-500/50 
//                      rounded-full w-[50px] h-[50px] sm:w-[40px] sm:h-[40px] 
//                      shadow-[0_0_10px_rgba(255,149,0,0.2)]">
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
    <nav className="max-w-[1400px] mx-auto w-full px-4 fixed top-4 left-1/2 -translate-x-1/2 z-20">
      <div 
        className="w-full flex items-center justify-between flex-wrap 
                  gap-2 sm:gap-4 px-4 py-3 
                  bg-[#251616] backdrop-blur-lg border border-gray-800/70 
                  rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.7)] 
                  relative"
      >
        {/* Logo - always top left */}
        <div className="flex-shrink-0 z-30">
          <NavbarLogo />
        </div>

        {/* Mobile Dropdown Content */}
        {menuOpen && (
          <div 
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 
                      flex flex-col items-center justify-center gap-6 
                      bg-black/50 backdrop-blur-md px-6 py-6 rounded-3xl 
                      shadow-[0_0_15px_rgba(0,0,0,0.6)] border border-gray-800/70 
                      lg:hidden"
          >
            <NavbarLinks />
            <NavbarBtn />
          </div>
        )}

        {/* Desktop Links */}
        <div className="flex-1 items-center justify-center gap-6 hidden lg:flex">
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