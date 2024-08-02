import React from "react";

import posims_global from "../assets/Posims_global.jpg";
import posims_branch from "../assets/posims_branch.jpg";
import ada_test_bank from "../assets/AdaTestBank.png";
import licky_movie from "../assets/LickyMovie.png";
import ProjectsItems from "./ProjectsItems";
import ProjectsItemsReverse from "./ProjectsItemsReverse";

const Projects = () => {
  return (
    <section
      className="w-auto bg-base-200 p-3 lg:p-12 sm:p-6 text-center flex flex-col items-center gap-6"
      id="projects"
    >
      <p className="text-3xl font-bold pb-5">Projects</p>
      <div className="w-2/3 md:w-3/5 lg:w-3/4 text-left flex flex-col gap-20">
        <ProjectsItems
          image={posims_branch}
          alt="Image for Branch Posims"
          title="Posims Branch"
          introduction="POS and Inventory Management"
          description="A Point of Sales and Inventory Management application built with
              Laravel and Vue. Integrated with a Global application for data exchange
              and centralized monitoring."
        />
        <ProjectsItemsReverse
          image={posims_global}
          alt="Image for Global Posims"
          title="Posims Global"
          introduction="Branch Monitoring System"
          description="A centralized monitoring system for the branches built with
              laravel and Vue. Uses websocket for real-time data exchange."
        />
        <ProjectsItems
          image={ada_test_bank}
          alt="Image for ADA Test Bank"
          title="ADA Test Bank"
          introduction=" A Comprehensive System for Storing and Administering Quizzes,
              Tests, and Exams"
          description=" A Web Application where teacher can store their tests, quizzes,
              and exams built with laravel. And it is also where students can
              take those tests. It has a machine learning where it can classify
              the questions based on John Holland's Theory of Career Choice
              (RIASEC)."
        />
        <ProjectsItemsReverse
          image={licky_movie}
          alt="Image for Licky Movie"
          title="Licky Movie"
          introduction="Movie Release Monitoring"
          description="A Web Application to see the monthly movie release in the
              Philippines."
        />
      </div>
    </section>
  );
};

export default Projects;
