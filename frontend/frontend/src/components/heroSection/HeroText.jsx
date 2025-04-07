import { motion } from "framer-motion";
import { fadeIn } from "../../frameMotion/variant";
import React from "react";

const HeroText = () => {
  return (
    <div
      className="flex flex-col gap-4 mt-6 justify-center 
                 w-full px-4 
                 text-center 
                 sm:max-w-xl sm:mx-auto 
                 md:text-left md:max-w-2xl md:px-0 
                 lg:max-w-3xl"
    >
      {/* Subheading */}
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-sm sm:text-base md:text-lg lg:text-xl 
                   text-black uppercase tracking-wide"
      >
        Full Stack Developer
      </motion.h2>

      {/* Main Name Heading */}
      <motion.h1
  variants={fadeIn("right", 0.4)}
  initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0 }}
  className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl 
             text-[rgb(2,68,48)] font-extrabold uppercase 
             leading-tight tracking-tight text-center md:text-left"
>
  <span className="inline-block mr-2">Harshit</span>
  <span className="inline-block">Sharma</span>
</motion.h1>

      {/* Description */}
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-sm sm:text-base md:text-lg lg:text-xl 
                   mt-4 text-[rgb(2,68,48)] leading-relaxed"
      >
        A Passionate Full-Stack Developer | Eager to Build & Innovate |
        <br className="hidden sm:block" />
        Fresher with a Strong Grip on MERN Stack & Problem-Solving
      </motion.p>
    </div>
  );
};

export default HeroText;
