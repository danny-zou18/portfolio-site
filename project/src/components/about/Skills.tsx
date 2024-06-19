"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

import { Card, CardContent } from "@/components/ui/card";

import { IconType } from "react-icons/lib";

import { FaJava, FaPython, FaRust, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { SiCplusplus } from "react-icons/si";

interface skillsProp {
  title: string;
  icon?: IconType | null;
  level: string;
}

const programmingLanguages: skillsProp[] = [
  {
    title: "Java",
    icon: FaJava,
    level: "Professional",
  },
  {
    title: "JavaScript",
    icon: IoLogoJavascript,
    level: "Professional",
  },
  {
    title: "TypeScript",
    icon: BiLogoTypescript,
    level: "Professional",
  },
  {
    title: "HTML",
    icon: FaHtml5,
    level: "Professional",
  },
  {
    title: "CSS",
    icon: FaCss3Alt,
    level: "Professional",
  },
  {
    title: "Python",
    icon: FaPython,
    level: "Intermediate",
  },
  {
    title: "Rust",
    icon: FaRust,
    level: "Intermediate",
  },
  {
    title: "C++",
    icon: SiCplusplus,
    level: "Beginner",
  },
];

import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTrpc, SiLeptos, SiDjango } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const frameworks: skillsProp[] = [
  {
    title: "ReactJS",
    icon: FaReact,
    level: "Professional",
  },
  {
    title: "NextJS",
    icon: SiNextdotjs,
    level: "Professional",
  },
  {
    title: "TailwindCSS",
    icon: RiTailwindCssFill,
    level: "Professional",
  },
  {
    title: "Leptos",
    icon: SiLeptos,
    level: "Professional",
  },
  {
    title: "ExpressJS",
    level: "Intermediate",
  },
  {
    title: "tRPC",
    icon: SiTrpc,
    level: "Intermediate",
  },
  {
    title: "react-native",
    icon: FaReact,
    level: "Beginner",
  },
  {
    title: "django",
    icon: SiDjango,
    level: "Beginner",
  },
];

import { SiPostgresql, SiMongoose, SiPrisma } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

const databases: skillsProp[] = [
  {
    title: "PostgreSQL",
    icon: SiPostgresql,
    level: "Professional",
  },
  {
    title: "Diesel ORM",
    level: "Professional",
  },
  {
    title: "MongoDB",
    icon: DiMongodb,
    level: "Intermediate",
  },
  {
    title: "Prisma ORM",
    icon: SiPrisma,
    level: "Intermediate",
  },
  {
    title: "Mongoose ODM",
    icon: SiMongoose,
    level: "Beginner",
  },
];

import { FaGithub, FaGitlab, FaNodeJs, FaDocker, FaAws } from "react-icons/fa";
import { DiRedis } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";

const tools: skillsProp[] = [
  {
    title: "Github",
    icon: FaGithub,
    level: "Professional",
  },
  {
    title: "Gitlab",
    icon: FaGitlab,
    level: "Professional",
  },
  {
    title: "NodeJS",
    icon: FaNodeJs,
    level: "Professional",
  },
  {
    title: "Docker",
    icon: FaDocker,
    level: "Intermediate",
  },
  {
    title: "Redis",
    icon: DiRedis,
    level: "Beginner",
  },
  {
    title: "AWS Web Services",
    icon: FaAws,
    level: "Beginner",
  },
  {
    title: "Firebase",
    icon: IoLogoFirebase,
    level: "Beginner",
  },
];

import { FaFedora, FaWindows } from "react-icons/fa";
import { SiMacos } from "react-icons/si";

const operatingSystems: skillsProp[] = [
  {
    title: "Linux - Fedora",
    icon: FaFedora,
    level: "Intermediate",
  },
  {
    title: "Windows",
    icon: FaWindows,
    level: "Professional",
  },
  {
    title: "MacOS",
    icon: SiMacos,
    level: "Intermediate",
  },
];

const Skills = () => {

  return (
    <motion.div
      className="p-2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <h1 className="text-xl text-experiencetitle text-center font-bold pb-1 border-b-2 border-b-experiencetitle">PROGRAMMING LANGUAGES</h1>
      <div className="mx-auto w-[70%] flex flex-row flex-wrap gap-3 justify-center mt-5">
        {programmingLanguages.map((skill, index) => (
          <div className="px-3 py-1 bg-card rounded-full flex flex-row text-text items-center  ">
              {skill.icon && <skill.icon className="text-2xl " />}
              <h5 className="ml-2 ">{skill.title}</h5>
          </div>
        ))}
      </div>
      <h1 className="text-xl text-experiencetitle text-center font-bold pb-1 border-b-2 border-b-experiencetitle mt-10">FRAMEWORKS</h1>
      <div className="mx-auto w-[70%] flex flex-row flex-wrap gap-3 justify-center mt-5">
        {frameworks.map((skill, index) => (
          <div className="px-3 py-1 bg-card rounded-full flex flex-row text-text items-center  ">
              {skill.icon && <skill.icon className="text-2xl " />}
              <h5 className="ml-2 ">{skill.title}</h5>
          </div>
        ))}
      </div>
      <h1 className="text-xl text-experiencetitle text-center font-bold pb-1 border-b-2 border-b-experiencetitle mt-10">DATABASES</h1>
      <div className="mx-auto w-[70%] flex flex-row flex-wrap gap-3 justify-center mt-5">
        {databases.map((skill, index) => (
          <div className="px-3 py-1 bg-card rounded-full flex flex-row text-text items-center  ">
              {skill.icon && <skill.icon className="text-2xl " />}
              <h5 className="ml-2 ">{skill.title}</h5>
          </div>
        ))}
      </div>
      <h1 className="text-xl text-experiencetitle text-center font-bold pb-1 border-b-2 border-b-experiencetitle mt-10">TOOLS</h1>
      <div className="mx-auto w-[70%] flex flex-row flex-wrap gap-3 justify-center mt-5">
        {tools.map((skill, index) => (
          <div className="px-3 py-1 bg-card rounded-full flex flex-row text-text items-center  ">
              {skill.icon && <skill.icon className="text-2xl " />}
              <h5 className="ml-2 ">{skill.title}</h5>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
