import { PiHexagonThin } from "react-icons/pi";
import React from "react";

const HeroImage = () => {
  return (
    <div className="relative self-end h-full w-full items-center justify-center">
      <div className="h-full w-full">
        <img
          src="/images/harshit.jpg"
          alt="Harshit Sharma"
          className="w-auto h-auto sm:max-w-[280px] md:max-w-[380px] lg:max-w-[450px] absolute bottom-0 z-10 left-1/2 -translate-x-1/2"
        />

        {/* Hexagon 1 */}
        <div className="absolute w-full h-full bottom-[-20%] sm:bottom-[-15%] md:bottom-[-10%] -z-10 flex justify-center items-center rotate-90">
          <PiHexagonThin className="h-[90%] sm:h-[110%] md:h-[120%] w-auto text-[rgb(2,68,48)] opacity-70 animate-[spin_20s_linear_infinite]" />
        </div>

        {/* Hexagon 2 (blur orange) */}
        <div className="absolute w-full h-full bottom-[-20%] sm:bottom-[-15%] md:bottom-[-10%] -z-10 flex justify-center items-center rotate-90">
          <PiHexagonThin className="h-[90%] sm:h-[110%] md:h-[120%] w-auto text-orange opacity-70 blur-lg animate-[spin_20s_linear_infinite]" />
        </div>

        {/* Hexagon 3 */}
        <div className="absolute w-full h-full bottom-[-20%] sm:bottom-[-15%] md:bottom-[-10%] -z-10 flex justify-center items-center">
          <PiHexagonThin className="h-[90%] sm:h-[110%] md:h-[120%] w-auto text-cyan opacity-70 animate-[spin_20s_linear_infinite]" />
        </div>

        {/* Hexagon 4 (blur cyan) */}
        <div className="absolute w-full h-full bottom-[-20%] sm:bottom-[-15%] md:bottom-[-10%] -z-10 flex justify-center items-center">
          <PiHexagonThin className="h-[90%] sm:h-[110%] md:h-[120%] w-auto text-cyan opacity-70 blur-lg animate-[spin_20s_linear_infinite]" />
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
