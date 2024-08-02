import React from "react";
import HTML from "../assets/HTML.png";
import CSS from "../assets/CSS.png";
import js from "../assets/js.png";
import php from "../assets/php.png";
import Laravel from "../assets/Laravel.png";
import ReactLogo from "../assets/React.png";
import ReactNative from "../assets/ReactNative.png";
import TailwindCSS from "../assets/TailwindCSS.png";
import DaisyUI from "../assets/DaisyUI.png";
import Git from "../assets/Git.png";
import GitHub from "../assets/GitHub.png";
import VisualStudio from "../assets/VisualStudio.png";
import NextJS from "../assets/NextJS.png";
import Vue from "../assets/Vue.png";

const Skills = () => {
  const starRating = (rating) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`h-4 w-4 ${i < rating ? "text-info" : "text-gray-300;"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.96a1 1 0 00.95.69h4.174c.969 0 1.371 1.24.588 1.81l-3.37 2.454a1 1 0 00-.364 1.118l1.287 3.96c.3.921-.755 1.688-1.54 1.118l-3.37-2.454a1 1 0 00-1.175 0l-3.37 2.454c-.785.57-1.84-.197-1.54-1.118l1.287-3.96a1 1 0 00-.364-1.118L2.05 9.387c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.287-3.96z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section
      className="w-auto bg-base p-3 lg:p-12 sm:p-6 text-center"
      id="skills"
    >
      <p className="text-3xl font-bold pb-5">Skills</p>
      <div className="w-full max-w-2xl space-y-8 text-left mx-auto">
        <div>
          <p className="text-2xl font-semibold mb-4">Markup and Styling</p>
          <div className="flex flex-wrap gap-6 justify-center">
            <div className="flex flex-col items-center">
              <img src={HTML} className="h-12 w-12" alt="HTML" />
              <p className="text-xl">HTML</p>
              {starRating(5)}
            </div>
            <div className="flex flex-col items-center">
              <img src={CSS} className="h-12 w-12" alt="CSS" />
              <p className="text-xl">CSS</p>
              {starRating(4)}
            </div>
          </div>
        </div>
        <div>
          <p className="text-2xl font-semibold mb-4">Programming Languages</p>
          <div className="flex flex-wrap gap-6 justify-center">
            <div className="flex flex-col items-center">
              <img src={js} className="h-12 w-12" alt="JavaScript" />
              <p className="text-xl">JavaScript</p>
              {starRating(4)}
            </div>
            <div className="flex flex-col items-center">
              <img src={php} className="h-12 w-12" alt="php" />
              <p className="text-xl">PHP</p>
              {starRating(5)}
            </div>
          </div>
        </div>
        <div>
          <p className="text-2xl font-semibold mb-4">Frameworks</p>
          <div className="flex flex-wrap gap-6 justify-center">
            <div className="flex flex-col items-center">
              <img src={Laravel} className="h-12 w-12" alt="Laravel" />
              <p className="text-xl">Laravel</p>
              {starRating(5)}
            </div>
            <div className="flex flex-col items-center">
              <img src={ReactLogo} className="h-12 w-12" alt="React" />
              <p className="text-xl">React</p>
              {starRating(4)}
            </div>
            <div className="flex flex-col items-center">
              <img src={NextJS} className="h-12 w-12" alt="NextJS" />
              <p className="text-xl">NextJS</p>
              {starRating(3)}
            </div>
            <div className="flex flex-col items-center">
              <img src={TailwindCSS} className="h-12 w-12" alt="Tailwind CSS" />
              <p className="text-xl">Tailwind CSS</p>
              {starRating(4)}
            </div>
            <div className="flex flex-col items-center">
              <img src={Vue} className="h-12 w-12" alt="Vue" />
              <p className="text-xl">Vue</p>
              {starRating(4)}
            </div>
          </div>
        </div>
        <div>
          <p className="text-2xl font-semibold mb-4">UI Components</p>
          <div className="flex flex-wrap gap-6 justify-center">
            <div className="flex flex-col items-center">
              <img src={DaisyUI} className="h-12 w-12" alt="DaisyUI" />
              <p className="text-xl">DaisyUI</p>
              {starRating(4)}
            </div>
          </div>
        </div>
        <div>
          <p className="text-2xl font-semibold mb-4">Tools</p>
          <div className="flex flex-wrap gap-6 justify-center">
            <div className="flex flex-col items-center">
              <img src={Git} className="h-12 w-12" alt="Git" />
              <p className="text-xl">Git</p>
              {starRating(4)}
            </div>
            <div className="flex flex-col items-center">
              <img src={GitHub} className="h-12 w-12" alt="GitHub" />
              <p className="text-xl">GitHub</p>
              {starRating(4)}
            </div>
            <div className="flex flex-col items-center">
              <img
                src={VisualStudio}
                className="h-12 w-12"
                alt="Visual Studio"
              />
              <p className="text-xl">Visual Studio</p>
              {starRating(5)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
