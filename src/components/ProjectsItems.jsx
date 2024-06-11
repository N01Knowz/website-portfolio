import React, { useRef } from "react";
import InViewport from "../hooks/InViewport";

import styles from "./Projects.module.css";

const ProjectsItems = ({ image, alt, title, introduction, description }) => {
  const pr_item = useRef(null);
  const pr_item_viewPort = InViewport(pr_item, 0.3);
  return (
    <div ref={pr_item}>
      <div className={`flex flex-col md:flex-row justify-center gap-6 `}>
        <div className="min-w-full md:min-w-96 md:w-1/2">
          <img src={image} alt={alt} className="w-full" />
        </div>
        <div className="min-w-full md:min-w-96 md:w-1/2 flex flex-col gap-2">
          <p className="text-4xl font-bold">{title}</p>
          <p className="text-xl">{introduction}</p>
          <p className="text-justify">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsItems;
