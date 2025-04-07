import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleMessage = (e) => setMessage(e.target.value);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_vtprnnj", "template_hdgcr5l", form.current, {
        publicKey: "scLK54C3I_RgkuBm-",
      })
      .then(
        () => {
          setEmail("");
          setName("");
          setMessage("");
          setSuccess("✅ Message Sent Successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="w-full max-w-2xl px-4">
      {success && <p className="text-green-600 font-semibold mb-4">{success}</p>}
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg border border-gray-300 bg-lightBrown px-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
          value={name}
          onChange={handleName}
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg border border-gray-300 bg-lightBlue px-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
          value={email}
          onChange={handleEmail}
        />
        <textarea
          name="message"
          rows="6"
          placeholder="Your Message"
          required
          className="rounded-lg border border-gray-300 bg-lightBrown p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all resize-none"
          value={message}
          onChange={handleMessage}
        />
        <button
          type="submit"
          className="w-full rounded-lg bg-cyan-600 text-white h-12 font-bold text-lg hover:bg-cyan-700 transition-all duration-300"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
