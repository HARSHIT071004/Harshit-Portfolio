// import React from "react";

// const Navbarlogo = () => {
//     return (
//       <div>
//         <h1 className="text-  text-2xl sm:hidden md:block">
//          Harshit Sharma
//         </h1>
//         <h1 className="text font-special font-extrabold text-4xl md:hidden sm:block">
//           AQ
//         </h1>
//       </div>
//     );
//   };
  
//   export default Navbarlogo;


import React from "react";

const NavbarLogo = () => {
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      {/* Full name for medium and above screens */}
      <h1 className="hidden md:block text-[rgb(255,255,255)] font-bold tracking-wide text-2xl">
        Harshit Sharma
      </h1>

      {/* Short initials for small screens */}
      <h1 className="block md:hidden text-[rgb(255,255,255)] font-special font-extrabold text-2xl sm:text-3xl">
        HS
      </h1>
    </div>
  );
};

export default NavbarLogo;
