"use client";

import React from "react";

import MainCard from "@/components/about/MainCard";
import ExperiencesCard from "@/components/about/ExperiencesCard";
import MyStoryCard from "@/components/about/MyStoryCard";
import SkillsCard from "@/components/about/SkillsCard";
import CertificationsCard from "@/components/about/CertificationsCard";

const AboutPage: React.FC = () => {
  return (
    <div className=" w-[80%] mx-auto pt-14">
      <div className="flex justify-center md:mt-8 xsm:mt-36 mb-12 ">
        <h1 className="text-3xl font-[200] text-primary border-b-2 border-primary p-2">
          about me
        </h1>
      </div>
      <div className="flex 2xl:flex-row gap-2 md:flex-col sm:flex-col xsm:flex-col w-[97%] h-[37rem] mt-10 mx-auto">
        <div className="flex md:flex-row sm:flex-col xsm:flex-col 2xl:w-[54%] md:w-full gap-1">
          <MainCard />
          <ExperiencesCard />
        </div>
        <div className="flex md:flex-row sm:flex-col xsm:flex-col gap-1 2xl:w-[46%] 2xl:h-full md:w-full md:max-h-[100%]">
          <SkillsCard />
          <div className="grid grid-cols-1 grid-rows-2 gap-1 2xl:w-[50%] sm:w-[100%] xsm:w-[100%]">
            <MyStoryCard />
            <CertificationsCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
