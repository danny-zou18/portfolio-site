"use client";

import React from "react";
import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";

interface experiencesProp {
  title: string;
  at: string;
  type: string;
  type2: string;
  description: string;
  startDate: string;
  endDate: string;
}

const experiences = [
  {
    title: "Full Stack Web Developer",
    at: "RPI Union",
    type: "Professionional Experience",
    type2: "Part Time Paid",
    description:
      "Worked with RPI Union Developer Team to develop and maintain RPI websites.",
    startDate: "May 2024",
    endDate: "Present",
  },
  {
    title: "Mobile Developer and Leader",
    at: "LifeScape",
    type: "Open Source Project",
    type2: "Part Time Unpaid",
    description:
      "Leading LifeScape Developer Team of 6 to develop LifeScape mobile application.",
    startDate: "May 2024",
    endDate: "Present",
  },
  {
    title: "Full Stack Developer",
    at: "LibreTunes",
    type: "Open Source Project",
    type2: "Part Time Unpaid",
    description:
      "Worked with LibreTunes Developer Team of 4 to develop and maintain LibreTune website.",
    startDate: "Jan 2024",
    endDate: "Present",
  },
  {
    title: "Full Stack Developer",
    at: "FinVis",
    type: "Open Source Project",
    type2: "Part Time Unpaid",
    description:
      "Worked with FinVis Developer Team of 8 to develop and maintain FinVis website.",
    startDate: "Sep 2023",
    endDate: "Dec 2023",
  },
];

const ExperiencesCard: React.FC = () => {
  return (
    <motion.div
      className="md:max-w-[46.3%] md:min-w-[46.3%] sm:w-full xsm:w-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full">
        <CardContent className="flex flex-col items-center text-background h-full font-mono">
          <h2 className="border-b-2 border-background mt-4">
            Relevant Experiences
          </h2>
          <div className="w-full h-full mt-2 flex flex-col gap-1 rounded-md md:min-h-[26%] sm:min-h-[40rem] xsm:min-h-[45rem] ">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} data={experience}/>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ExperiencesCard;

interface ExperienceCardProps {
  data: {
    title: string;
    at: string;
    type: string;
    type2: string;
    description: string;
    startDate: string;
    endDate: string;
  };
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ data }) => {
  return (
    <div className="bg-background rounded-md overflow-hidden text-[.8rem] h-[25%] p-2 relative">
      <div className="flex flex-col text-card">
        {data.title}
        <div className="flex justify-between text-accent">
          <h1 className=" mt-[-2px] text-[.7rem]  text-accent">
            {data.at}
          </h1>
          <h1 className="flex flex-col items-end text-[.7rem]">
            {data.type}
            <span className="mt-1">
                {data.type2}
            </span>
          </h1>
        </div>
      </div>
      <div className="absolute md:bottom-2 xsm:bottom-6 left-2 w-[50%] text-card max-h-[50%] overflow-y-auto text-xs">
        {data.description}
      </div>
      <time className="text-xs text-accent absolute bottom-2 right-2">
        {`${data.startDate} - ${data.endDate}`}
      </time>
    </div>
  );
};
