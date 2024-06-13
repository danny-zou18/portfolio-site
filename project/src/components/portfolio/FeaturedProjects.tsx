"use client";

import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import { FaGithub, FaGitlab } from "react-icons/fa";

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
  github: string | null;
  gitlab: string | null;
  brief_description: string;
  description: string;
  how_built: string;
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
    github: null,
    gitlab: "Project Repository ^ https://gitlab.mregirouard.com/libretunes",
    brief_description:
      "A self-hosted music player that allows you listen to music from your local library. Built for collaborative listening experiences.",
    description:
      "LibreTunes is a self-hosted music player designed to make listening a more social experience. LibreTunes includes features like shared playlists, viewing friends` activity and listening along, a shared queue, and more. LibreTunes is the music equivalent of self-hosted movie and TV show platforms like Jellyfin, Plex, Kodi, and others. It is designed for users to run their own server and provide their own audio files for playing. Users can upload new music through the web interface or import an existing library.",
    how_built:
      'LibreTunes is built (almost) entirely in Rust using the Leptos web framework. Leptos provides easy ways to write "Server Functions" that make up our API, and serializes/deserilizes data when calling these functions. Our frontend code is compiled to WebAssembly for a highly response UI. Client-side routing also makes our site incredibly fast. We also use Axum webserver and axum-login for login, authentication, and user sessions. User data is stored in PostgreSQL and login session tokens are stored in Redis.',
    skills: ["Rust", "Leptos", "CSS", "PostgreSQL", "RSC APIs", "Docker", "Redis"],
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
    github:
      "Project Repository ^ https://github.com/danny-zou18/LifeScape | Website Repository ^ https://github.com/danny-zou18/LifeScape-Website",
    gitlab: null,
    brief_description:
      "A mobile application designed to leverage a MMO-RPG style environment to facilitate personal growth and productivity.",
    description:
      "LifeScape is an innovative mobile application designed to transform your personal growth and productivity journey into an engaging and immersive experience. Inspired by the dynamic elements of MMO-RPGs(Massively Multiplayer Online Role Playing Games), LifeScape provides a unique environment where you can set and achieve your personal goals(either on a daily, weekly, monthly, or custom basis), track your progress, and stay motivated. In LifeScape, your real-life tasks and objectives become exciting quests, hoping to just give you that little extra motivation to do what you need to do. Your achievements unlocks new levels and rewards to mirror your accomplishments in real life.",
    how_built:
      "LifeScape is a fairly new project. I gained inspiration for this idea when I realized that many people obsess over their ingame characters in MMO-RPGs, spending an ungodly amount of time doing quests and whatever to just push their character to the next level, either in terms of stats, actual levels, or equipments. I thought, who not apply this concept in real life and make it engaging? There are already applications that promote this same concept, but I believe that my vision is fairly different and quality is what matters. LifeScape will be initially built with React Native, TypeScript, NativeWind, PostGreSQL, and Docker, but other technologies will definitely be added over time",
    skills: [
      "React Native",
      "TypeScript",
      "NativeWind",
      "PostGreSQL",
      "Firebase",
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
    github: null,
    gitlab:
      "Merge Analyzer ^ https://gitlab.com/conuhacks_devman/mergeanalyzer | CI/CD Cal.com Implementation ^ https://gitlab.com/conuhacks_devman/demo-testing/cal.com",
    brief_description:
      "A DevSecOps tool that provides a comprehensive analysis feedback of merge requests. A CI/CD pipeline built for Cal.com as the demo. Built for ConUHacks VIII.",
    description:
      "Participated in ConUHacks VIII with a team of 4 along 800 other participants. Recipient of CSE's DevSecOps Challenge Award. Built a DevSecOps tool that provides a comprehensive analysis feedback of merge requests in GitLab and a CI/CD pipeline built for Cal.com as the demo.",
    how_built:
      "We built the Merge Analyzer using Python/Gitlabs Software Development Kit and LLAMA.CPP. In Python, we ran a locally ran llama.cpp instance that is interfaced with Gitlab API to go through all new pull requests to provide feedback. The pipelane was made with gitlab-ci, using Docker and various tools.",
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
      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8 2xl:w-[80%] xl:w-[90%] lg:mb-0 h-[37rem]  ml-auto mr-auto">
        {featuredProjects.map((project) => (
          <motion.div
            className={`card p-3 pr-2 bg-card rounded-lg shadow-md cursor-pointer transform transition-transform duration-500 hover:scale-105 ${
              selectedId === project.id ? "card-selected" : ""
            }`}
            layoutId={`card-container-${project.id}`}
            onClick={() => setSelectedId(project.id)}
            key={project.id}
            initial={{ scale: 1, opacity: 0 }}
            animate={{ scale: selectedId === project.id ? 1.1 : 1 }} // Increase scale on selected card
            whileInView={{opacity: 1}}
            transition={{ duration: .3 }}
            viewport={{ once: true }}
          >
            <div className="card-content">
              <motion.div className="flex flex-row justify-between  ">
                <motion.h2 className="text-xl font-[300] mb-2 text-background">
                  {project.title}
                </motion.h2>
                <motion.div>
                  {project.types.map((type, index) => (
                    <motion.span key={index}>
                      <span className="card p-1  bg-background rounded-[10px] font-[600] shadow-md cursor-pointer text-[.6rem] mr-2">
                        {type}
                      </span>
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div className="flex h-48 ">
                <motion.div className="border-0 w-[100%] overflow-hidden rounded-lg mr-2 relative z-0">
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
              <motion.div className="flex flex-row flex-wrap gap-2 mt-3 ">
                {project.skills.slice(0, 3).map((skill, index) => (
                  <div
                    key={index}
                    className="card p-2 pl-3 pr-3 bg-background rounded-[10px] font-[600] shadow-md cursor-pointer text-sm"
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
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {featuredProjects.map(
              (project) =>
                project.id === selectedId && (
                  <motion.div
                    className="bg-card rounded-lg p-6 pb-2 shadow-md mx-auto lg:w-[70rem] lg:h-[30rem] xsm:w-[28rem] overflow-y-auto z-50"
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
                      <motion.div className="flex lg:flex-row xsm:flex-col justify-between lg:w-11/12 xsm:w-10/12">
                        <motion.div className="flex flex-row text-background">
                          <motion.h2 className="text-3xl font-[300] mb-2">
                            {project.title}
                          </motion.h2>
                          {project.github &&
                            project.github.split(" | ").map((link, index) => {
                              const [title, url] = link.split(" ^ ");
                              return (
                                <motion.a
                                  key={index}
                                  className="w-10 h-10 flex justify-center items-center ml-4 rounded-full  border-2"
                                  href={url}
                                  target="_blank"
                                  title={title}
                                  whileHover={{
                                    scale: 1.2,
                                    transition: { duration: 0.2 },
                                    backgroundColor: "#00000070",
                                  }}
                                >
                                  <FaGithub className="text-2xl" />
                                </motion.a>
                              );
                            })}

                          {project.gitlab &&
                            project.gitlab.split("|").map((link, index) => {
                              const [title, url] = link.split(" ^ ");
                              return (
                                <motion.a
                                  key={index}
                                  className="w-10 h-10 flex justify-center items-center ml-4 rounded-full  border-2"
                                  href={url}
                                  target="_blank"
                                  title={title}
                                  whileHover={{
                                    scale: 1.2,
                                    transition: { duration: 0.2 },
                                    backgroundColor: "#00000070",
                                  }}
                                >
                                  <FaGitlab className="text-2xl" />
                                </motion.a>
                              );
                            })}
                        </motion.div>

                        <motion.div className="xsm:mt-2">
                          {project.types.map((type, index) => (
                            <motion.span key={index}>
                              <span className="card p-2  bg-background rounded-[20px] font-[600] shadow-md cursor-pointer text-[.8rem] mr-2">
                                {type}
                              </span>
                            </motion.span>
                          ))}
                        </motion.div>
                      </motion.div>
                      <motion.div className="flex lg:flex-row xsm:flex-col lg:h-[21rem] xsm:h-[30rem] mt-3">
                        <motion.div className=" w-[100%] rounded-lg mr-5 flex justify-center items-center">
                          <Carousel className="w-[95%]">
                            <CarouselContent className="flex items-center ">
                              {project.images.map((src, index) => (
                                <CarouselItem key={index}>
                                  <Card>
                                    <CardContent className="flex items-center justify-center lg:min-h-[21rem] lg:max-h-[21rem] xsm:min-h-[15rem] xsm:max-h-[15rem] lg:p-0 xsm:p-1 hover:max-h-full">
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
                        <motion.div className="text-[.95rem] lg:w-[70%] lg:min-h-[100%] xsm:w-[95%] xsm:ml-auto xsm:mr-auto xsm:max-h-[11rem] font-[400] lg:mt-[-.5rem] xsm:mt-[1rem] pl-2 mb-1 text-background overflow-y-auto">
                          <motion.h5>{project.description}</motion.h5>
                          <motion.h5 className="mt-5">
                            {project.how_built}
                          </motion.h5>
                        </motion.div>
                      </motion.div>
                      <motion.div className="flex flex-wrap gap-2 lg:mt-4 xsm:mt-[-2rem] ">
                        {project.skills.map((skill, index) => (
                          <div
                            key={index}
                            className="card p-2 pl-3 pr-3 bg-background rounded-[10px] font-[600] shadow-md cursor-pointer text-[.9rem]"
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


export default FeaturedProjects;
