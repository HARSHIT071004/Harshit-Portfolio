import { motion } from "framer-motion";
import { fadeIn } from "../../frameMotion/variant";
import React from "react";
const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 mt-6 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl text-black uppercase  "
      >
        Full stack developer
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-[rgb(2,68,48)] font-bold uppercase"
      >
        Harshit <br className="text-sm:hidden md:block" />Sharma
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4 text-[rgb(2,68,48)]"
      >
       A Passionate Full-Stack Developer | Eager to Build & Innovate |<br/> Fresher with a Strong Grip on MERN Stack & Problem-Solving
      </motion.p>
    </div>
  );
};

export default HeroText;