import React from "react";
import { motion } from "framer-motion";

const SkillsCircle = () => {
  return (
    <motion.div
      className="h-[200px] w-[200px] rounded-full flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-orange-500 overflow-hidden shadow-lg"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <img
        src="/images/skills.avif"
        alt="my skills"
        className="object-cover h-full w-full"
      />
    </motion.div>
  );
};

export default SkillsCircle;