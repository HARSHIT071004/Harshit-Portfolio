import ContactForm from "./ContactForm";
import ContactText from "./ContactText";
import React from "react";

const ContactMeLeft = () => {
  return (
    <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 w-full max-w-2xl px-4">
      <ContactText />
      <ContactForm />
    </div>
  );
};

export default ContactMeLeft;
