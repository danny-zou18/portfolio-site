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

import { FaGithub, FaGitlab, FaNodeJs, FaDocker } from "react-icons/fa";
import { DiRedis } from "react-icons/di";

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

const SkillsCard = () => {
  const { theme, setTheme } = useTheme();

  return (
    <motion.div
      className="max-w-[23%] min-w-[23%] h-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full">
        <CardContent className="flex flex-col items-center text-background relative h-full font-mono">
          <h1 className="border-b-2 border-background mt-4">My Skills</h1>
          <div className="flex items-center justify-center flex-wrap gap-1 mt-2 text-xs text-card">
            <h1
              className={`${
                theme === "dark" ? "bg-gray-500" : "bg-gray-400"
              } flex justify-center items-center  rounded-full px-2`}
            >
              Beginner
            </h1>
            <h1
              className={`${
                theme === "dark" ? "bg-gray-700" : "bg-gray-300"
              } flex justify-center items-center px-1 rounded-full`}
            >
              Intermediate
            </h1>
            <h1
              className={`${
                theme === "dark" ? "bg-gray-900" : "bg-gray-100"
              } flex justify-center items-center  rounded-full px-1`}
            >
              Professional
            </h1>
          </div>
          <div className="mt-4 overflow-y-auto w-full">
            <div className="  w-full flex flex-col items-center">
              <div className="border-b-[1px] text-sm">
                Programming Languages:
              </div>
              <div className="max-h-[6.3rem] overflow-y-auto flex flex-wrap gap-2 justify-center">
                {programmingLanguages.map((language, index) => {
                  const level = language.level;
                  let background: string;
                  if (theme === "dark") {
                    if (level === "Beginner") {
                      background = "bg-gray-500";
                    } else if (level === "Intermediate") {
                      background = "bg-gray-700";
                    } else {
                      background = "bg-gray-900";
                    }
                  } else {
                    if (level === "Beginner") {
                      background = "bg-gray-400";
                    } else if (level === "Intermediate") {
                      background = "bg-gray-300";
                    } else {
                      background = "bg-gray-100";
                    }
                  }

                  return (
                    <h1
                      key={index}
                      className={`mt-2 flex items-center ${background} text-card px-2 rounded-full`}
                    >
                      {language.icon && <language.icon className="mr-2" />}
                      <h1 className="text-sm">{language.title}</h1>
                    </h1>
                  );
                })}
              </div>
            </div>
            <div className="mt-4  w-full flex flex-col items-center">
              <h1 className="border-b-[1px] text-sm">
                Frameworks and Libraries:
              </h1>
              <div className="max-h-[6.3rem] overflow-y-auto flex flex-wrap gap-2 justify-center">
                {frameworks.map((framework, index) => {
                  const level = framework.level;
                  let background: string;
                  if (theme === "dark") {
                    if (level === "Beginner") {
                      background = "bg-gray-500";
                    } else if (level === "Intermediate") {
                      background = "bg-gray-700";
                    } else {
                      background = "bg-gray-900";
                    }
                  } else {
                    if (level === "Beginner") {
                      background = "bg-gray-400";
                    } else if (level === "Intermediate") {
                      background = "bg-gray-300";
                    } else {
                      background = "bg-gray-100";
                    }
                  }

                  return (
                    <h1
                      key={index}
                      className={`mt-2 flex items-center ${background} text-card px-2 rounded-full`}
                    >
                      {framework.icon && <framework.icon className="mr-2" />}
                      <h1 className="text-sm">{framework.title}</h1>
                    </h1>
                  );
                })}
              </div>
            </div>
            <div className="mt-4  w-full flex flex-col items-center">
              <h1 className="border-b-[1px] text-sm">Databases:</h1>
              <div className="max-h-[6.3rem] overflow-y-auto flex flex-wrap gap-2 justify-center">
                {databases.map((database, index) => {
                  const level = database.level;
                  let background: string;
                  if (theme === "dark") {
                    if (level === "Beginner") {
                      background = "bg-gray-500";
                    } else if (level === "Intermediate") {
                      background = "bg-gray-700";
                    } else {
                      background = "bg-gray-900";
                    }
                  } else {
                    if (level === "Beginner") {
                      background = "bg-gray-400";
                    } else if (level === "Intermediate") {
                      background = "bg-gray-300";
                    } else {
                      background = "bg-gray-100";
                    }
                  }

                  return (
                    <h1
                      key={index}
                      className={`mt-2 flex items-center ${background} text-card px-2 rounded-full`}
                    >
                      {database.icon && <database.icon className="mr-2" />}
                      <h1 className="text-sm">{database.title}</h1>
                    </h1>
                  );
                })}
              </div>
            </div>
            <div className="mt-4  w-full flex flex-col items-center">
              <h1 className="border-b-[1px] text-sm">Tools</h1>
              <div className="max-h-[6.3rem] overflow-y-auto flex flex-wrap gap-2 justify-center">
                {databases.map((database, index) => {
                  return (
                    <h1
                      key={index}
                      className={`mt-2 flex items-center border-[1px] border-background px-2 rounded-full`}
                    >
                      {database.icon && <database.icon className="mr-2" />}
                      <h1 className="text-sm">{database.title}</h1>
                    </h1>
                  );
                })}
              </div>
            </div>
            <div className="mt-4  w-full flex flex-col items-center">
              <h1 className="border-b-[1px] text-sm">Operating Systems</h1>
              <div className="max-h-[6.3rem] overflow-y-auto flex flex-wrap gap-2 justify-center">
                {operatingSystems.map((operatingSystem, index) => {
                  return (
                    <h1
                      key={index}
                      className={`mt-2 flex items-center border-[1px] border-background px-2 rounded-full`}
                    >
                      {operatingSystem.icon && (
                        <operatingSystem.icon className="mr-2" />
                      )}
                      <h1 className="text-sm">{operatingSystem.title}</h1>
                    </h1>
                  );
                })}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SkillsCard;
