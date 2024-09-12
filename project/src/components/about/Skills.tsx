"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { IoOpenOutline } from "react-icons/io5";

import { IconType } from "react-icons/lib";

import { FaJava, FaPython, FaRust, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { SiCplusplus, SiCsharp } from "react-icons/si";

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
  {
    title: "C#",
    icon: SiCsharp,
    level: "Beginner",
  }
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
import { FaUnity } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { SiVim } from "react-icons/si";

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
  {
    title: "Unity",
    icon: FaUnity,
    level: "Beginner",
  },
  {
    title: "VSCode",
    icon: VscVscode,
    level: "Professional",
  },
  {
    title: "Vim",
    icon: SiVim,
    level: "Intermediate",
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

interface certificationsProp {
  title: string;
  from: string;
  issueDate: string;
  expireDate: string;
  image: string;
  url: string;
}

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    from: "Amazon Web Services(AWS)",
    issueDate: "May 2024",
    expireDate: "May 2027",
    image: "/amazon_web_services_logo.jpg",
    url: "https://www.credly.com/badges/f74be726-95be-451f-893d-038a88943710/public_url",
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
      <h1 className="text-xl text-experiencetitle text-center font-bold pb-1 border-b-2 border-b-experiencetitle w-[80%] mx-auto">
        CERTIFICATIONS
      </h1>
      <div className="mt-6 overflow-y-auto flex justify-center">
        {certifications.map((certification, index) => (
          <CertificationCard key={index} data={certification} />
        ))}
      </div>

      <h1 className="text-xl text-experiencetitle text-center font-bold pb-1 border-b-2 border-b-experiencetitle mt-14">
        PROGRAMMING LANGUAGES
      </h1>
      <div className="mx-auto w-[70%] flex flex-row flex-wrap gap-3 justify-center mt-5">
        {programmingLanguages.map((skill, index) => (
          <div
            className="px-3 py-1 bg-card rounded-full flex flex-row text-text items-center"
            key={index}
          >
            {skill.icon && <skill.icon className="text-2xl " />}
            <h5 className="ml-2 ">{skill.title}</h5>
          </div>
        ))}
      </div>
      <h1 className="text-xl text-experiencetitle text-center font-bold pb-1 border-b-2 border-b-experiencetitle mt-10">
        FRAMEWORKS
      </h1>
      <div className="mx-auto w-[70%] flex flex-row flex-wrap gap-3 justify-center mt-5">
        {frameworks.map((skill, index) => (
          <div
            className="px-3 py-1 bg-card rounded-full flex flex-row text-text items-center"
            key={index}
          >
            {skill.icon && <skill.icon className="text-2xl " />}
            <h5 className="ml-2 ">{skill.title}</h5>
          </div>
        ))}
      </div>
      <h1 className="text-xl text-experiencetitle text-center font-bold pb-1 border-b-2 border-b-experiencetitle mt-10">
        DATABASES
      </h1>
      <div className="mx-auto w-[70%] flex flex-row flex-wrap gap-3 justify-center mt-5">
        {databases.map((skill, index) => (
          <div
            className="px-3 py-1 bg-card rounded-full flex flex-row text-text items-center"
            key={index}
          >
            {skill.icon && <skill.icon className="text-2xl " />}
            <h5 className="ml-2 ">{skill.title}</h5>
          </div>
        ))}
      </div>
      <h1 className="text-xl text-experiencetitle text-center font-bold pb-1 border-b-2 border-b-experiencetitle mt-10">
        TOOLS
      </h1>
      <div className="mx-auto w-[70%] flex flex-row flex-wrap gap-3 justify-center mt-5">
        {tools.map((skill, index) => (
          <div
            className="px-3 py-1 bg-card rounded-full flex flex-row text-text items-center"
            key={index}
          >
            {skill.icon && <skill.icon className="text-2xl " />}
            <h5 className="ml-2 ">{skill.title}</h5>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;

interface CertificationCardProps {
  data: {
    title: string;
    from: string;
    issueDate: string;
    expireDate: string;
    image: string;
    url: string;
  };
}

const CertificationCard: React.FC<CertificationCardProps> = ({ data }) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <Image
          className="w-[55px] h-[55px]"
          src={data.image}
          alt="aws logo"
          width={45}
          height={45}
        />
        <div className="flex flex-col text-md ml-2">
          <h1 className="font-bold ">{data.title}</h1>
          <h2 className="text-xs">{data.from}</h2>
          <div className="flex text-xs text-experiencetitle">
            <h1>
              Issued {data.issueDate} · Expires {data.expireDate}
            </h1>
          </div>
        </div>
      </div>
      <span className="ml-[55px]">
        <a
          href={data.url}
          target="_blank"
          className="transition-all duration-200 border-[1px] border-background px-2 py-1 mt-1 rounded-full inline-flex items-center text-sm font-bold bg-card text-background hover:bg-background hover:text-card "
        >
          Show Credentials <IoOpenOutline className="ml-2 text-md" />
        </a>
      </span>
    </div>
  );
};
