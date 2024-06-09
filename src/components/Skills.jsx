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

const Skills = () => {
  return (
    <section className="w-auto bg-base p-3 lg:p-12 sm:p-6 text-center">
      <p className="text-3xl font-bold">Skills</p>
      <div className="w-full max-w-2xl space-y-8 text-left mx-auto">
        <div>
          <p className="text-2xl font-semibold">Programming Languages</p>
          <div className="flex flex-wrap gap-6 justify-center">
            <div className="flex flex-col items-center">
              <img src={HTML} className="h-12 w-12" alt="HTML" />
              <p className="text-xl">HTML</p>
              <div>Rating</div>
            </div>
            <div className="flex flex-col items-center">
              <img src={CSS} className="h-12 w-12" alt="CSS" />
              <p className="text-xl">CSS</p>
              <div>Rating</div>
            </div>
            <div className="flex flex-col items-center">
              <img src={js} className="h-12 w-12" alt="JavaScript" />
              <p className="text-xl">JavaScript</p>
              <div>Rating</div>
            </div>
            <div className="flex flex-col items-center">
              <img src={php} className="h-12 w-12" alt="php" />
              <p className="text-xl">PHP</p>
              <div>Rating</div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-2xl font-semibold">Frameworks</p>
          <div className="flex flex-wrap gap-6 justify-center">
            <div className="flex flex-col items-center">
              <img src={Laravel} className="h-12 w-12" alt="Laravel" />
              <p className="text-xl">Laravel</p>
              <div>Rating</div>
            </div>
            <div className="flex flex-col items-center">
              <img src={ReactLogo} className="h-12 w-12" alt="React" />
              <p className="text-xl">React</p>
              <div>Rating</div>
            </div>
            <div className="flex flex-col items-center">
              <img src={ReactNative} className="h-12 w-12" alt="React Native" />
              <p className="text-xl">React Native</p>
              <div>Rating</div>
            </div>
            <div className="flex flex-col items-center">
              <img src={TailwindCSS} className="h-12 w-12" alt="Tailwind CSS" />
              <p className="text-xl">Tailwind CSS</p>
              <div>Rating</div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-2xl font-semibold">UI Components</p>
          <div className="flex flex-wrap gap-6 justify-center">
            <div className="flex flex-col items-center">
              <img src={DaisyUI} className="h-12 w-12" alt="DaisyUI" />
              <p className="text-xl">DaisyUI</p>
              <div>Rating</div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-2xl font-semibold">Tools</p>
          <div className="flex flex-wrap gap-6 justify-center">
            <div className="flex flex-col items-center">
              <img src={Git} className="h-12 w-12" alt="Git" />
              <p className="text-xl">Git</p>
              <div>Rating</div>
            </div>
            <div className="flex flex-col items-center">
              <img src={GitHub} className="h-12 w-12" alt="GitHub" />
              <p className="text-xl">GitHub</p>
              <div>Rating</div>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={VisualStudio}
                className="h-12 w-12"
                alt="Visual Studio"
              />
              <p className="text-xl">Visual Studio</p>
              <div>Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
