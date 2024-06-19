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
    startDate: "MAY 2024",
    endDate: "PRESENT",
  },
  {
    title: "Mobile Developer and Leader",
    at: "LifeScape",
    type: "Open Source Project",
    type2: "Part Time Unpaid",
    description:
      "Leading LifeScape Developer Team of 6 to develop LifeScape mobile application.",
    startDate: "MAY 2024",
    endDate: "PRESENT",
  },
  {
    title: "Full Stack Developer",
    at: "LibreTunes",
    type: "Open Source Project",
    type2: "Part Time Unpaid",
    description:
      "Worked with LibreTunes Developer Team of 4 to develop and maintain LibreTune website.",
    startDate: "JAN 2024",
    endDate: "PRESENT",
  },
  {
    title: "Full Stack Developer",
    at: "FinVis",
    type: "Open Source Project",
    type2: "Part Time Unpaid",
    description:
      "Worked with FinVis Developer Team of 8 to develop and maintain FinVis website.",
    startDate: "SEP 2023",
    endDate: "DEC 2023",
  },
];

const Experiences: React.FC = () => {
  return <motion.div className="w-full p-2 ">
    {experiences.map((experience, index) => (
      <Experience key={index} data={experience} />
    ))}
  </motion.div>;
};

export default Experiences;

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

const Experience: React.FC<ExperienceCardProps> = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="w-full flex flex-row justify-between"
    >
      <div className="text-xs text-text font-bold mx-2 pt-1 ">
        {data.startDate} - {data.endDate}
      </div>
      <div className=" flex flex-col w-[70%] mb-2">
        <h1 className="font-[500] text-neutral-300">{data.title} · {data.at}</h1>
        <h3>{data.description}</h3>
      </div>
    </motion.div>
  );
};
