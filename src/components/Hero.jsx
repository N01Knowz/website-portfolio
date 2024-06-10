import React from "react";
import pfp from "../assets/ronaldo.png";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import cv from "../assets/ronaldo_resume.pdf";

const Hero = () => {
  return (
    <section
      className="w-auto h-screen flex items-center justify-center"
      id="home"
    >
      <div className="flex flex-col text-center items-center gap-4">
        <img
          src={pfp}
          alt="Ronaldo's Picture"
          className="rounded-full h-48 w-48"
        />
        <p className="text-4xl font-bold">Ronaldo Arnibal Jr</p>
        <p className="text-xl font-semibold">I'm a FullStack Developer</p>
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/N01Knowz"
            className="h-full border-accent text-accent border-2 p-1 transition hover:bg-accent hover:text-accent-content duration-500 hover:shadow-[0_0_20px_5px_rgba(0,0,0,0.3)] hover:shadow-accent"
          >
            <FaFacebook className="text-3xl" />
          </a>
          <a
            href="https://github.com/N01Knowz"
            className="h-full border-accent text-accent border-2 p-1 transition hover:bg-accent hover:text-accent-content duration-500 hover:shadow-[0_0_20px_5px_rgba(0,0,0,0.3)] hover:shadow-accent"
          >
            <FaGithub className="text-3xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/ronaldo-arnibal-92a423312/"
            className="h-full border-accent text-accent border-2 p-1 transition hover:bg-accent hover:text-accent-content duration-500 hover:shadow-[0_0_20px_5px_rgba(0,0,0,0.3)] hover:shadow-accent"
          >
            <FaLinkedin className="text-3xl" />
          </a>
          <a
            href="https://www.upwork.com/freelancers/~019669b44581bde85c"
            className="h-full border-accent text-accent border-2 p-1 transition hover:bg-accent hover:text-accent-content duration-500 hover:shadow-[0_0_20px_5px_rgba(0,0,0,0.3)] hover:shadow-accent"
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
            <button
              className={`transition duration-500 hover:shadow-[0_0_20px_5px_rgba(0,0,0,0.3)] hover:shadow-accent btn btn-accent btn-outline`}
            >
              Download CV
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
