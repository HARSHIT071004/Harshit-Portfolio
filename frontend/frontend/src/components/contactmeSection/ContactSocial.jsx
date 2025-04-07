import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import React from "react";

const ContactSocial = () => {
  return (
    <div className="flex justify-center gap-4">
      <SingleContactSocial
        link="https://www.linkedin.com/in/yourprofile"
        Icon={FaLinkedinIn}
      />
      <SingleContactSocial
        link="https://github.com/yourusername"
        Icon={FaGithub}
      />
      <SingleContactSocial
        link="https://www.instagram.com/yourhandle"
        Icon={FaInstagram}
      />
    </div>
  );
};

export default ContactSocial;
