import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../frameMotion/variant";

const SkillsText = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] pt-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className="text-4xl md:text-6xl font-bold text-cyan-600 mb-8 tracking-tight"
      >
        My Skills
      </motion.h2>
      <motion.p
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className="text-lg text-center text-gray-700 max-w-3xl leading-relaxed"
      >
        "I not only work with these technologies but excel in utilizing them with best practices to deliver high-quality, efficient, and scalable solutions. With a strong foundation in both frontend and backend development, I have applied these skills to build impactful portfolio projects, ensuring clean code, optimized performance, and user-centric experiences. My focus is on writing maintainable code, implementing industry standards, and continuously refining my expertise to stay ahead in the ever-evolving tech landscape."
      </motion.p>
    </div>
  );
};

export default SkillsText;