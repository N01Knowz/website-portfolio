import React from "react";

const About = () => {
  return (
    <section
      className="w-auto bg-base-200 p-3 lg:p-12 sm:p-6 text-center md:hidden"
      id="about"
    >
      <p className="text-3xl font-bold pb-5">About Me</p>
      <div className="flex justify-center">
        <p className="w-4/5 text-2xl">
          I'm a web developer with a passion for building online experiences
          that people love to use. From smooth navigation to powerful features,
          I've got you covered.
        </p>
      </div>
    </section>
  );
};

export default About;
