import React from "react";
import { CarouselItem } from "./ui/carousel";

const ProjectsCarouselItem = ({ image, alt, description }) => {
  return (
    <CarouselItem>
      <div className="flex flex-col items-center h-full">
        <div className="w-full h-2/3 bg-primary">
          <img src={image} alt={alt} className="h-full w-full" />
        </div>
        <p className="text-xl text-base-content py-4">{description}</p>
      </div>
    </CarouselItem>
  );
};

export default ProjectsCarouselItem;
