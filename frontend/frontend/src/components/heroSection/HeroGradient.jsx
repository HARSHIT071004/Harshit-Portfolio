import React from "react";

const HeroGradient = () => {
  return (
    <div className="absolute inset-0 -z-10">
      {/* Right Cyan Glow (Laptop) */}
      <div className="hidden md:block shadow-cyanMediumShadow absolute top-0 right-[400px] animate-pulse w-40 h-40"></div>

      {/* Left Cyan Glow (Mobile & Tablet visible) */}
      <div className="shadow-cyanMediumShadow absolute top-[5%] left-0 opacity-40 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40"></div>

      {/* Right Orange Glow */}
      <div className="shadow-orangeMediumShadow absolute top-0 right-0 animate-pulse w-32 h-32 sm:w-36 sm:h-36 md:w-48 md:h-48"></div>

      {/* Left Orange Glow (Mobile & Tablet visible) */}
      <div className="shadow-orangeMediumShadow absolute top-[10%] left-0 opacity-30 w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36"></div>
    </div>
  );
};

export default HeroGradient;
