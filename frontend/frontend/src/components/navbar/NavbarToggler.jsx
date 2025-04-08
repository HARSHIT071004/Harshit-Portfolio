// import { GiHamburgerMenu } from "react-icons/gi";
// import { useDispatch } from "react-redux";
// import { toggleMenu } from "../../state/menuSlice";
// import React from "react";
// const NavbarToggler = () => {
//   const dispatch = useDispatch();

//   const setToggleMenu = () => {
//     dispatch(toggleMenu());
//   };
//   return (
//     <button
//       className="text-2xl p-3 border border-orange rounded-full"
//       onClick={setToggleMenu}
//     >
//       <GiHamburgerMenu />
//     </button>
//   );
// };

// export default NavbarToggler;



import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../state/menuSlice";
import React from "react";

const NavbarToggler = () => {
  const dispatch = useDispatch();

  const setToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <button
      className="block lg:hidden text-2xl sm:text-xl p-3 sm:p-2 
                 border border-cyan rounded-full bg-white
                 backdrop-blur-md hover:bg-white
                 hover:border-orange hover:shadow-lg 
                 transition-all duration-300"
      onClick={setToggleMenu}
    >
      <GiHamburgerMenu />
    </button>
  );
};

export default NavbarToggler;
