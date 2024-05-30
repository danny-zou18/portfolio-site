"use client";

import React from "react";

import MainCard from "@/components/about/MainCard";
import ExperiencesCard from "@/components/about/ExperiencesCard";
import Cards from "@/components/about/Cards";

const AboutPage: React.FC = () => {
  return (
    <div className=" w-[80%] mx-auto">
      <div className="flex justify-center mt-8 mb-12">
        <h1 className="text-3xl font-[200] text-primary border-b-2 border-primary p-2">
          about me
        </h1>
      </div>
      <div className="flex gap-2 w-[95%] h-[37rem] mt-10 mx-auto">
        <MainCard />
        <ExperiencesCard />
        <div className="grid grid-cols-2 grid-rows-2 gap-2 w-[46%]">
            {Array.from({ length: 4 }).map((_, index) => (
                <Cards key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
