import React, { useState } from "react";

import FeaturedProjects from "@/components/portfolio/FeaturedProjects";
import Timeline from "@/components/portfolio/timeline/FullProjectTimeline";
import { RiArrowDownWideFill } from "react-icons/ri";

const PortfolioPage: React.FC = () => {
  return (
    <div className="w-[80%] ml-auto mr-auto flex flex-col">
      <div className="flex justify-center mt-8 mb-12">
        <h1 className="text-3xl font-[200] text-primary border-b-2 border-primary p-2">
          featured projects
        </h1>
      </div>
      <FeaturedProjects />
      <div className="lg:mt-[5rem] lg:mb-[2rem] xsm:mt-[30rem] xsm:mb-[2rem] flex flex-col items-center">
        <h1 className="font-mono mb-2">full portfolio timeline</h1>
        <RiArrowDownWideFill className=" animate-bounce-slow text-primary text-4xl" />
      </div> 
      <div className="flex justify-center mb-[6rem]">
        <h1 className="text-3xl font-[200] text-primary border-b-2 border-primary p-2">
          timeline
        </h1>
      </div>   
      <Timeline />
    </div>
  );
};

export default PortfolioPage;
