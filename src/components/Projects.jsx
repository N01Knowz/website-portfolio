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
      <div className="w-2/3 md: 3/5 lg:w-1/2">
        <Carousel>
          <CarouselContent>
            <ProjectsCarouselItem
              image={posims_branch}
              alt="Image for Branch Posims"
              description="
                  Posims Branch: A Web Application POS (Point of Sale) system
                  simplifies sales and inventory management for your branches.
                  Integrates with POSIMS Global for seamless data exchange and
                  centralized monitoring."
            />
            <ProjectsCarouselItem
              image={posims_global}
              alt="Image for Global Posims"
              description="
                  POSIMS Global: A Web Application used to view the revenue,
                  transactions, reports, and products of the branches. Able to
                  remotely add payments for the Purchase Orders of the branches.
                  Uses BeyondCode Websocket to communicate with the branches in
                  real-time. Giving real-time updates for each of the branches."
            />
            <ProjectsCarouselItem
              image={ada_test_bank}
              alt="Image for Ada Test Bank Posims"
              description="
                  ADA Test Bank: A Web Application where teacher can store their
                  tests, quizzes, exams, and etc. And it is also where students
                  can take those tests. It has a machine learning where it can
                  classify the questions based on John Holland's Theory of
                  Career Choice (RIASEC)."
            />
            <ProjectsCarouselItem
              image={licky_movie}
              alt="Image for Ada Test Licky Movie"
              description="
                  Licky Movie: A Web Application to see the monthly movie release in the Philippines."
            />
          </CarouselContent>
          <CarouselPrevious className="text-primary hover:scale-125" />
          <CarouselNext className="text-primary hover:scale-125" />
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;
