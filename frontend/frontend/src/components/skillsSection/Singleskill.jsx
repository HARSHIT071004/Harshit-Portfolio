// import React from "react";
// const SingleSkill = ({ imgSvg, text }) => {
//     return (
//       <div className="hover:-translate-y-10 transition-all duration-500">
//         <div className="flex flex-col items-center gap-2 relative">
//           <div className="bg-[#ffffff] text-black h-[100px] w-[100px] flex items-center justify-center rounded-full hover:text-darkGrey hover:scale-105 transform transition-all duration-500 text-6xl border-4 border-orange">
//             {imgSvg}
//           </div>
//           <p className="text-[#024430] font-bold">{text}</p>
//         </div>
//         <div className="w-[100px] h-[200px] bg-orange absolute top-[50px] -z-10"></div>
//       </div>
//     );
//   };
  
//   export default SingleSkill;










import React from "react";

const SingleSkill = ({ imgSvg, text }) => {
  return (
    <div className="relative group hover:-translate-y-6 transition-all duration-500 ease-in-out">
      <div className="flex flex-col items-center gap-3">
        <div className="bg-white h-[100px] w-[100px] flex items-center justify-center rounded-full shadow-md border-4 border-orange-500 group-hover:scale-110 group-hover:shadow-lg transition-all duration-500">
          {imgSvg}
        </div>
        <p className="text-[#024430] font-bold text-lg">{text}</p>
      </div>
      <div className="w-[80px] h-[120px] bg-orange-100 absolute top-[40px] left-1/2 -translate-x-1/2 -z-10 rounded-lg opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
    </div>
  );
};

export default SingleSkill;