import React from "react";

const ContactText = () => {
  return (
    <div>
      {/* शीर्षक */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-black mb-4">
        Get In Touch
      </h2>
      {/* विवरण */}
      <p className="text-green-800 text-base sm:text-lg md:text-xl">
        Feel free to reach out if you’d like to collaborate
        <br />
        you are just a few clicks away!
      </p>
    </div>
  );
};

export default ContactText;
