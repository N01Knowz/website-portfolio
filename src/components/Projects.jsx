import React from "react";

import posims_global from "../assets/Posims_global.jpg";
import posims_branch from "../assets/posims_branch.jpg";
import ada_test_bank from "../assets/AdaTestBank.png";
import licky_movie from "../assets/LickyMovie.png";
import FinancialPlan from "../assets/FinancialPlan.png";
import MoneyPH from "../assets/MoneyPH.png";
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
          image={FinancialPlan}
          alt="Image for Financial Plan"
          title="Financial Plan"
          introduction="Your partner in protecting and growing your wealth"
          description="Financial Plan is a digital platform for Aetos Financial. I contributed to several key parts of the system and helped improve and refactor existing features from earlier development. The platform helps users understand their finances and build personalized plans using the right tools — all in one place."
        />

        <ProjectsItemsReverse
          image={MoneyPH}
          alt="Image for MoneyPH"
          title="MoneyPH"
          introduction="Loan Management System"
          description="MoneyPH is a web-based loan manager that helps track and manage loans with ease. I maintained and enhanced the system — improving image handling, updating outdated loan calculation logic, and cleaning up the codebase to make it more robust for daily use."
        />

        <ProjectsItems
          image={posims_branch}
          alt="Image for Branch Posims"
          title="Posims Branch"
          introduction="POS and Inventory Management"
          description="A Point of Sales and Inventory Management system built with Laravel. I worked on a significant portion of the project, adding queue management, websocket communication, and other improvements to ensure smooth integration with the Global monitoring system."
        />

        <ProjectsItemsReverse
          image={posims_global}
          alt="Image for Global Posims"
          title="Posims Global"
          introduction="Branch Monitoring System"
          description="A centralized monitoring system for multiple branches, built with Laravel. I developed this project and implemented websocket communication to connect it in real time with the POSIMS Branch app."
        />

        <ProjectsItems
          image={ada_test_bank}
          alt="Image for ADA Test Bank"
          title="ADA Test Bank"
          introduction="A Comprehensive System for Storing and Administering Quizzes, Tests, and Exams"
          description="A web application for teachers to manage quizzes and exams, and for students to take them online. I built the core website using Laravel, while the machine learning component (RIASEC-based classification) was developed by another team members."
        />

        <ProjectsItemsReverse
          image={licky_movie}
          alt="Image for Licky Movie"
          title="Licky Movie"
          introduction="Movie Release Monitoring"
          description="Developed as a college project, this web app tracks monthly movie releases in the Philippines. I handled most of the development, primarily focusing on the API integration and the foundational structure of the front-end."
        />
      </div>
    </section>
  );
};

export default Projects;
