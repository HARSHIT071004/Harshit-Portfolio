






// import AboutMeImage from "./AboutMeImage";
// import AboutMeText from "./AboutMeText";
// import { motion } from "framer-motion";
// import { fadeIn } from "../../frameMotion/variant.jsx";
// import React from "react";

// const AboutMeMain = () => {
//   return (
//     <div
//       id="about"
//       className="flex md:flex-row sm:flex-col-reverse gap-8 sm:gap-6 px-4 max-w-[1200px] mx-auto mt-16 sm:mt-12 justify-between items-center"
//     >
//       <motion.div
//         variants={fadeIn("right", 0)}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: false, amount: 0.7 }}
//       >
//         <AboutMeText />
//       </motion.div>
//       <motion.div
//         variants={fadeIn("left", 0)}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: false, amount: 0.7 }}
//       >
//         <AboutMeImage />
//       </motion.div>
//     </div>
//   );
// };

// export default AboutMeMain;











import AboutMeImage from "./AboutMeImage";
import AboutMeText from "./AboutMeText";
import { motion } from "framer-motion";
import { fadeIn } from "../../frameMotion/variant.jsx";
import React from "react";

const AboutMeMain = () => {
  return (
    <div
      id="about"
      className="flex flex-col-reverse md:flex-row gap-300 sm:gap-8 px-4 max-w-[1200px] mx-auto  sm:mt-12 justify-between items-center"
    >
      <motion.div
        variants={fadeIn("right", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <AboutMeText />
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <AboutMeImage />
      </motion.div>
    </div>
  );
};

export default AboutMeMain;
