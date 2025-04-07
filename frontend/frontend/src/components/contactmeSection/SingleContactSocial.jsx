import React from "react";

const SingleContactSocial = ({ Icon, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center h-12 w-12 rounded-full border border-orange text-orange transition-transform transform hover:scale-110 hover:bg-orange hover:text-white"
    >
      <Icon className="text-2xl" />
    </a>
  );
};

export default SingleContactSocial;
