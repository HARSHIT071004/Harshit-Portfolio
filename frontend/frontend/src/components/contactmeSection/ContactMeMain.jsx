import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";
import React from "react";

const ContactMeMain = () => {
  return (
    <div id="contact" className="max-w-7xl mx-auto mt-24 px-6">
      {/* Section Heading */}
      <h2 className="text-4xl sm:text-5xl font-bold text-cyan-600 mb-12 text-center">
        Contact Me
      </h2>

      {/* Contact Sections Container */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16 bg-brown p-8 rounded-2xl shadow-lg">
        {/* Left Section */}
        <div className="w-full lg:w-1/2">
          <ContactMeLeft />
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2">
          <ContactMeRight />
        </div>
      </div>
    </div>
  );
};

export default ContactMeMain;
