"use client";

import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

type featuredProjectType = {
  id: string;
  title: string;
  types: string[];
  startDate: Date;
  endDate: Date;
  brief_description: string;
  description: string;
  skills: string[];
  images: string[];
};

const featuredProjects: featuredProjectType[] = [
  {
    id: "1",
    title: "LibreTunes",
    types: ["Web Application", "Open Source"],
    startDate: new Date("2024-01-10"),
    endDate: new Date("9999-12-30"),
    brief_description:
      "A self-hosted music player that allows you listen to music from your local library. Built for collaborative listening experiences.",
    description:
      "A self-hosted shared music player that allows you listen to music from your local library. Built for collaborative listening experiences.",
    skills: ["Rust", "Leptos", "CSS", "PostgreSQL", "RSC APIs", "Docker"],
    images: [
      "/libretunes/libre4.png",
      "/libretunes/libre3.png",
      "/libretunes/libre2.png",
      "/libretunes/libre1.png",
    ],
  },
  {
    id: "2",
    title: "LifeScape",
    types: ["Mobile Application", "Open Source", "Founder"],
    startDate: new Date("2023-05-01"),
    endDate: new Date("9999-12-30"),
    brief_description:
      "A mobile application that allows you to leverage a MMO-RPG style environment to gain motivation to do daily tasks to imrpove oneself.",
    description:
      "A mobile application that allows you to leverage a MMO-RPG style environment to gain motivation to do daily tasks to imrpove oneself.",
    skills: [
      "React Native",
      "TypeScript",
      "NativeWind",
      "PostGreSQL",
      "Docker",
    ],
    images: [
      "/libretunes/libre4.png",
      "/libretunes/libre3.png",
      "/libretunes/libre2.png",
      "/libretunes/libre1.png",
    ],
  },
  {
    id: "3",
    title: "DevMan - ConUHacks VIII",
    types: ["Hackathon", "Winner 🏆", "SaaS"],
    startDate: new Date("2024-01-20"),
    endDate: new Date("2024-01-21"),
    brief_description:
      "Participated in ConUHacks VIII with a team of 4 along 800 other participants. Recipient of CSE's DevSecOps Challenge Award. Built ",
    description:
      "Participated in ConUHacks VIII with a team of 4 along 800 other participants. Recipient of CSE's DevSecOps Challenge Award. Built ",
    skills: [
      "Python",
      "Artificial Intelligence",
      "Prompt Engineering",
      "DevSecOps",
      "Gitlab",
      "CI/CD",
      "Docker",
      "APIs",
    ],
    images: [
      "/devman/1.jpg",
      "/devman/4.jpg",
      "/devman/2.jpg",
      "/devman/3.jpg",
    ],
  },
];

const FeaturedProjects: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>("");

  return (
    <motion.div>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8 2xl:w-[80%] xl:w-[90%] h-[37rem] ml-auto mr-auto">
        {featuredProjects.map((project) => (
          <motion.div
            className={`card p-3 pr-2 bg-primary-foreground rounded-lg shadow-md cursor-pointer transform transition-transform duration-500 hover:scale-105 ${
              selectedId === project.id ? "card-selected" : ""
            }`}
            layoutId={`card-container-${project.id}`}
            onClick={() => setSelectedId(project.id)}
            key={project.id}
            initial={{ scale: 1 }}
            animate={{ scale: selectedId === project.id ? 1.1 : 1 }} // Increase scale on selected card
            transition={{ duration: 0.3 }}
          >
            <div className="card-content">
              <motion.div className="flex flex-row justify-between  ">
                <motion.h2 className="text-xl font-[300] mb-2 text-background">
                  {project.title}
                </motion.h2>
                <motion.div>
                  {project.types.map((type, index)=> (
                    <motion.span>
                      <span className="card p-1  bg-background rounded-[10px] font-[600] shadow-md cursor-pointer text-[.6rem] mr-2">
                        {type}
                      </span>                     
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div className="flex h-48 ">
                <motion.div className="border-0 w-[100%] overflow-hiddenrounded-lg mr-2 relative z-0">
                  {project.images.map((src, index) => (
                    <Image
                      key={index}
                      src={src}
                      alt={`Stacked image ${index}`}
                      className={`absolute lg:w-72 h-44 md:w-96 rounded-lg transition-transform translate-x-2 translate-y-0 duration-300 ease-in-out object-cover`}
                      style={{
                        top: `${index * 5}px`,
                        left: `${index * 10}px`,
                        zIndex: project.images.length - index,
                      }}
                      width={300}
                      height={200}
                    />
                  ))}
                </motion.div>
                <motion.h5 className="text-sm w-[70%] font-[400] mb-1 text-background pr-2">
                  {project.brief_description}
                </motion.h5>
              </motion.div>
              <motion.div className="flex flex-row mt-3 ">
                {project.skills.slice(0, 3).map((skill, index) => (
                  <div
                    key={index}
                    className="card p-2 pl-3 pr-3 bg-background rounded-[10px] font-[600] shadow-md cursor-pointer text-sm mr-2"
                  >
                    <h5>{skill}</h5>
                  </div>
                ))}
                <div className="card bg-background rounded-[10px] shadow-md cursor-pointer pl-3 pr-3">
                  . . .
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selectedId && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {featuredProjects.map(
              (project) =>
                project.id === selectedId && (
                  <motion.div
                    className="bg-primary-foreground rounded-lg p-6 pb-2 shadow-md mx-auto w-[70rem] h-[30rem] z-10"
                    layoutId={`card-container-${project.id}`}
                    key={project.id}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                  >
                    <motion.div className="relative ">
                      <motion.button
                        className="absolute top-0 right-0 py-1 px-2 text-center text-white bg-red-500 rounded-full"
                        onClick={() => setSelectedId("")}
                      >
                        Close
                      </motion.button>
                      <motion.h2 className="text-3xl font-[300] mb-2 text-background">
                        {project.title}
                      </motion.h2>
                      <motion.div className="flex h-[21rem] mt-4">
                        <motion.div className=" w-[100%] rounded-lg mr-5 flex justify-center items-center">
                          <Carousel className="w-full">
                            <CarouselContent className="flex items-center ">
                              {project.images.map((src, index) => (
                                <CarouselItem key={index}>
                                  <Card>
                                    <CardContent className="flex items-center justify-center min-h-[21rem] max-h-[21rem] p-2 hover:max-h-full">
                                      <Image
                                        src={src}
                                        alt={`Project image ${index}`}
                                        width={800}
                                        height={400}
                                        className="max-h-full"
                                      />
                                    </CardContent>
                                  </Card>
                                </CarouselItem>
                              ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                          </Carousel>
                        </motion.div>
                        <motion.h5 className="text-sm w-[70%] font-[400] mb-1 text-background">
                          {project.description}
                        </motion.h5>
                      </motion.div>
                      <motion.div className="flex flex-row mt-4 ">
                        {project.skills.map((skill, index) => (
                          <div
                            key={index}
                            className="card p-2 pl-3 pr-3 bg-background rounded-[10px] font-[600] shadow-md cursor-pointer text-[.9rem] mr-2"
                          >
                            <h5>{skill}</h5>
                          </div>
                        ))}
                      </motion.div>
                    </motion.div>
                  </motion.div>
                )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

interface FeaturedProjectCardProps {
  project: featuredProjectType;
}

const FeaturedProjectCard: React.FC<FeaturedProjectCardProps> = ({
  project,
}) => {
  return <div></div>;
};

export default FeaturedProjects;
