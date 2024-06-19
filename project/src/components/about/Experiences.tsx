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
  skills: string[];
}

const experiences = [
  {
    title: "Full Stack Web Developer",
    at: "RPI Union",
    type: "Professionional Experience",
    type2: "Part Time Paid",
    description:
      "Currently 1 of 4 students working to build and maintain critical web applications for Rensselaer Polytechnic Institute(My University). Working closely with cross-functional teams, including developers, designers, and managers, to implement and advocate for best practices in web development. ",
    startDate: "MAY 2024",
    endDate: "PRESENT",
    skills: ["React", "Postgresql", "Django", "Linux", "Docker"],
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
    skills: [
      "React-Native",
      "Typescript",
      "Nativewind",
      "PostgreSQL",
      "Firebase",
      "Docker",
    ],
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
    skills: ["Rust", "Leptos", "CSS", "PostgreSQL", "Docker", "Redis"],
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
    skills: [
      "Next.js",
      "Typescript",
      "tRPC",
      "NextAuth.js",
      "MongoDB",
      "TailwindCSS",
    ],
  },
];

const Experiences: React.FC = () => {
  return (
    <motion.div className="w-full ">
      {experiences.map((experience, index) => (
        <Experience key={index} data={experience} />
      ))}
    </motion.div>
  );
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
    skills: string[];
  };
}

const Experience: React.FC<ExperienceCardProps> = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="w-full flex flex-row justify-between rounded-lg cursor-pointer p-2 transition-all duration-200 ease-in-out hover:bg-experiencehover "
    >
      <div className="text-xs text-text font-bold mx-2 pt-1 ">
        {data.startDate} - {data.endDate}
      </div>
      <div className=" flex flex-col w-[70%] mb-2">
        <h1 className="font-[500] text-neutral-300">
          {data.title} · {data.at}
        </h1>
        <h3 className="text-sm mt-2 text-neutral-400">{data.description}</h3>
        <div className="flex flex-wrap gap-2 mt-3 mb-2">
          {data.skills.map((skill, index) => (
            <div
              key={index}
              className="px-4 py-1 bg-card rounded-full font-[400] shadow-md cursor-pointer text-[.8rem] text-background"
            >
              <h5>{skill}</h5>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
