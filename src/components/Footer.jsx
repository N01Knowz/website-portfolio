import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section
        className="bg-base-300 p-2 text-center md:p-4 lg:p-6"
        id="contact"
      >
        <p className="py-2 text-3xl">Contact Me</p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-base md:text-xl">
          <p className="flex items-center justify-center gap-2">
            <MdEmail />
            Email: <span> ronronarnibal@gmail.com</span>
          </p>
          <p className="hidden md:block">|</p>
          <p className="flex items-center justify-center gap-2">
            <FaPhoneAlt />
            Contact Number: <span> 09663393855</span>
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
