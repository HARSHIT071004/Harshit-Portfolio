import HeroText from "./HeroText";
import HeroPic from "./HeroPic";
import React from "react";

const HeroMain = () => {
  return (
    <div className="pt-32 sm:pt-28 pb-16 sm:pb-10">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-[1300px] mx-auto px-4 gap-12 sm:gap-8">
        <HeroText />
        <HeroPic />
      </div>
    </div>
  );
};

export default HeroMain;
