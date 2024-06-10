import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import ProjectsCarouselItem from "@/components/ProjectsCarouselItem";

import posims_global from "../assets/Posims_global.jpg";
import posims_branch from "../assets/posims_branch.jpg";
import ada_test_bank from "../assets/AdaTestBank.png";
import licky_movie from "../assets/LickyMovie.png";

const Projects = () => {
  return (
    <section
      className="w-auto bg-base-200 p-3 lg:p-12 sm:p-6 text-center flex flex-col items-center gap-6"
      id="projects"
    >
      <p className="text-3xl font-bold pb-5">Projects</p>
      <div className="w-2/3 md:w-3/5 lg:w-3/4 text-left flex flex-col gap-20">
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <div className="min-w-full md:min-w-96 md:w-1/2">
            <img
              src={posims_branch}
              alt="Image for Branch Posims"
              className="w-full"
            />
          </div>
          <div className="min-w-full md:min-w-96 md:w-1/2 flex flex-col gap-2">
            <p className="text-4xl font-bold">Posims Branch</p>
            <p className="text-xl">POS and Inventory Management</p>
            <p className="text-justify">
              A Point of Sales and Inventory Management application built with
              Laravel. Integrated with a Global application for data exchange
              and centralized monitoring.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-center gap-6">
          <div className="min-w-full md:min-w-96 md:w-1/2 flex flex-col gap-2">
            <p className="text-4xl font-bold">Posims Global</p>
            <p className="text-xl">Branch Monitoring System</p>
            <p className="text-justify">
              A centralized monitoring system for the branches built with
              laravel. Uses websocket for real-time data exchange.
            </p>
          </div>
          <div className="min-w-full md:min-w-96 md:w-1/2">
            <img
              src={posims_global}
              alt="Image for Global Posims"
              className="w-full"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <div className="min-w-full md:min-w-96 md:w-1/2">
            <img
              src={ada_test_bank}
              alt="Image for ADA Test Bank"
              className="w-full"
            />
          </div>
          <div className="min-w-full md:min-w-96 md:w-1/2 flex flex-col gap-2">
            <p className="text-4xl font-bold">ADA Test Bank</p>
            <p className="text-xl">
              A Comprehensive System for Storing and Administering Quizzes,
              Tests, and Exams
            </p>
            <p className="text-justify">
              A Web Application where teacher can store their tests, quizzes,
              and exams built with laravel. And it is also where students can
              take those tests. It has a machine learning where it can classify
              the questions based on John Holland's Theory of Career Choice
              (RIASEC).
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-center gap-6">
          <div className="min-w-full md:min-w-96 md:w-1/2 flex flex-col gap-2">
            <p className="text-4xl font-bold">Licky Movie</p>
            <p className="text-xl">Movie Release Monitoring</p>
            <p className="text-justify">
              A Web Application to see the monthly movie release in the
              Philippines.
            </p>
          </div>
          <div className="min-w-full md:min-w-96 md:w-1/2">
            <img
              src={licky_movie}
              alt="Image for Licky Movie"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
