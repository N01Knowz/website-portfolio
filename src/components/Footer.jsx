import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className="bg-base-300 p-2 text-center md:p-4 lg:p-6" id="contact">
        <p className="py-2 text-3xl">Contact Me</p>
        <div className="flex items-center justify-center gap-6 text-xl">
          <p className="flex items-center justify-center gap-2">
            <MdEmail />
            Email: ronronoarnibal@gmail.com
          </p>
          <p>|</p>
          <p className="flex items-center justify-center gap-2">
            <FaPhoneAlt />
            Contact Number: 09663393855
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
