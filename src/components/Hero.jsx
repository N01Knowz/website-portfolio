import React from "react";
import pfp from "../assets/ronaldo.png";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import cv from "../assets/ronaldo_resume.pdf";
import hero_bg from "../assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      className="w-auto h-screen flex items-center justify-center relative"
      style={{ backgroundImage: "url(../assets/hero-bg.jpg)" }}
      id="home"
    >
      <img
        src={hero_bg}
        alt=""
        className="absolute z-0 w-full h-full opacity-10"
      />
      <div className="flex flex-col md:flex-row text-center items-center gap-4 z-10 md:w-4/5 lg:w-3/5">
        <img
          src={pfp}
          alt="Ronaldo's Picture"
          className="rounded-full w-1/3 aspect-square"
        />
        <div className="text-center md:text-left flex flex-col gap-2">
          <p className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Ronaldo Arnibal Jr
          </p>
          <p className="text-2xl font-semibold">
            I am a <span className="text-info">FullStack Developer</span>
          </p>
          <p className="hidden md:block text-xl">
            I'm a web developer with a passion for building online experiences
            that people love to use. From smooth navigation to powerful
            features, I've got you covered.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex md:flex-col gap-4">
            <a
              href="https://www.facebook.com/N01Knowz"
              className="inline-flex items-center justify-center border-accent text-accent border-2 p-1 transition hover:bg-accent hover:text-accent-content duration-500 hover:shadow-[0_0_20px_5px_rgba(0,0,0,0.3)] hover:shadow-accent"
            >
              <FaFacebook className="text-3xl" />
            </a>
            <a
              href="https://github.com/N01Knowz"
              className="inline-flex items-center justify-center border-accent text-accent border-2 p-1 transition hover:bg-accent hover:text-accent-content duration-500 hover:shadow-[0_0_20px_5px_rgba(0,0,0,0.3)] hover:shadow-accent"
            >
              <FaGithub className="text-3xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/ronaldo-arnibal-92a423312/"
              className="inline-flex items-center justify-center border-accent text-accent border-2 p-1 transition hover:bg-accent hover:text-accent-content duration-500 hover:shadow-[0_0_20px_5px_rgba(0,0,0,0.3)] hover:shadow-accent"
            >
              <FaLinkedin className="text-3xl" />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~019669b44581bde85c"
              className="inline-flex items-center justify-center border-accent text-accent border-2 p-1 transition hover:bg-accent hover:text-accent-content duration-500 hover:shadow-[0_0_20px_5px_rgba(0,0,0,0.3)] hover:shadow-accent"
            >
              <FaUpwork className="text-3xl" />
            </a>
          </div>
          <div>
            <a
              href={cv}
              download="Example-PDF-document"
              target="_blank"
              rel="noreferrer"
            >
              <button className="transition duration-500 hover:shadow-[0_0_20px_5px_rgba(0,0,0,0.3)] hover:shadow-accent btn btn-accent btn-outline">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
