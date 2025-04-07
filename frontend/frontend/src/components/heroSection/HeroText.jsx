import { motion } from "framer-motion";
import { fadeIn } from "../../frameMotion/variant";
import React from "react";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 mt-6 h-full justify-center 
                    w-full max-w-2xl 
                    text-center 
                    md:text-left md:max-w-3xl 
                    lg:max-w-4xl"
    >
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg sm:text-xl md:text-2xl lg:text-3xl 
                   text-black uppercase 
                   tracking-wide"
      >
        Full Stack Developer
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                   text-[rgb(2,68,48)] font-bold uppercase 
                   leading-tight tracking-tight"
      >
        Harshit 
        <br className="hidden md:block" />
        Sharma
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-base sm:text-lg md:text-xl 
                   mt-4 text-[rgb(2,68,48)] 
                   leading-relaxed"
      >
        A Passionate Full-Stack Developer | Eager to Build & Innovate |
        <br className="hidden sm:block" />
        Fresher with a Strong Grip on MERN Stack & Problem-Solving
      </motion.p>
    </div>
  );
};

export default HeroText;