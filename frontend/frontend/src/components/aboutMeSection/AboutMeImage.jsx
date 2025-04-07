



// import React from "react";

// const AboutMeImage = () => {
//   return (
//     <div className="h-[500px] w-[300px] sm:h-[300px] sm:w-[200px] relative">
//       <div className="h-[500px] w-[500px] sm:h-[300px] sm:w-[300px] rounded-full absolute overflow-hidden">
//         <img
//           src="/images/port2.jpg"
//           alt="About Me Image"
//           className="h-full w-full object-cover"
//         />
//       </div>
//       <div className="h-[500px] w-[250px] sm:h-[250px] sm:w-[180px] bg-orange absolute bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10"></div>
//     </div>
//   );
// };

// export default AboutMeImage;




import React from "react";

const AboutMeImage = () => {
  return (
    <div className="relative w-[200px] h-[300px] md:w-[300px] md:h-[400px]">
      {/* Image Wrapper */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 rounded-full overflow-hidden w-[200px] h-[200px] md:w-[300px] md:h-[300px] shadow-xl border-4 border-white">
        <img
          src="/images/port2.jpg"
          alt="About Me"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Decorative Background Shape */}
      <div className="absolute bottom-0 left-0 w-[180px] h-[220px] md:w-[250px] md:h-[300px] bg-orange rounded-bl-[100px] rounded-tr-[100px] rounded-br-[20px] rounded-tl-[20px] -z-10 shadow-lg"></div>
    </div>
  );
};

export default AboutMeImage;
