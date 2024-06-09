import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import posims_global from "../assets/Posims_global.jpg";
import posims_branch from "../assets/posims_branch.jpg";

const Projects = () => {
  return (
    <section
      className="w-auto bg-base-200 p-3 lg:p-12 sm:p-6 text-center flex flex-col items-center gap-6"
      id="skills"
    >
      <p className="text-3xl font-bold">Projects</p>
      <div className="w-4/5 md:w-3/5">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <div>
                <img src={posims_branch} alt="Global for Posims" />
                <p className="text-xl text-base-content">
                  This web-based POS (Point of Sale) system simplifies sales and
                  inventory management for your branches.
                  <br />
                  It features: Role-based access: Salespeople create orders,
                  cashiers handle payments, and admins manage purchase orders,
                  reports, products, and activity logs.
                  <br />
                  Real-time data: Integrates with POSIMS Global for seamless
                  data exchange and centralized monitoring. Focuses on the key
                  functionalities and simplifies the technical details.
                </p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div>
                <img src={posims_global} alt="Global for Posims" />
                <p className="text-xl text-base-content">
                  {" "}
                  POSIMS Global: A Web Application used to view the revenue,
                  transactions, reports, and products of the branches. Able to
                  remotely add payments for the Purchase Orders of the branches.
                  Uses BeyondCode Websocket to communicate with the branches in
                  real-time. Giving real-time updates for each of the branches.
                </p>
              </div>
            </CarouselItem>
            <CarouselItem>...</CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;
