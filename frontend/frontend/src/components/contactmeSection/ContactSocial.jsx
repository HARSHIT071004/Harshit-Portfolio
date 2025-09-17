import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import React from "react";

const ContactSocial = () => {
  return (
    <div className="flex justify-center gap-4">
      <SingleContactSocial
        link="linkedin.com/in/harshit-sharma-10a046318"
        Icon={FaLinkedinIn}
      />
      <SingleContactSocial
        link="https://github.com/HARSHIT071004"
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
// https://github.com/HARSHIT071004
