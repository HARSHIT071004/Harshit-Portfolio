import HeroText from "./HeroText";
import HeroPic from "./HeroPic";
import React from "react";
const HeroMain = () => {
  return (
    <div className=" pt-40 pb-16">
      <div className="flex md:flex-row sm:flex-col gap-20 max-w-[130000px] mx-auto justify-between items-center relative px-4">
        <HeroText />
        <HeroPic />
      </div>
    </div>
  );
};

export default HeroMain;