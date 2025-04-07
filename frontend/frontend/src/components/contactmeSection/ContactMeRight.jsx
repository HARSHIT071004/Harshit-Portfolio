import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";
import React from "react";

const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 sm:gap-10 md:gap-12 px-4">
      {/* Responsive Image */}
      <img
        src="/images/email-image.png"
        alt="email image"
        className="w-[200px] sm:w-[250px] md:w-[300px] transition-all duration-300"
      />
      
      {/* Contact Info and Social */}
      <div className="w-full max-w-md">
        <ContactInfo />
      </div>
      
      <div className="w-full max-w-md">
        <ContactSocial />
      </div>
    </div>
  );
};

export default ContactMeRight;
