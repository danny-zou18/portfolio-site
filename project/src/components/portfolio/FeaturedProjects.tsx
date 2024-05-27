"use client";

import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

type featuredProjectType = {
  id: string;
  title: String;
  startDate: Date;
  endDate: Date;
  description: String;
  skills: String[];
  images: String[];
};

const featuredProjects: featuredProjectType[] = [
  {
    id: "1",
    title: "LibreTunes",
    startDate: new Date("2024-01-10"),
    endDate: new Date("9999-12-30"),
    description:
      "A music player that allows you to listen to music from your local library.",
    skills: ["Rust", "Leptos", "CSS", "PostgreSQL", "Docker"],
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
  },
  {
    id: "2",
    title: "LifeScape",
    startDate: new Date("2023-05-01"),
    endDate: new Date("9999-12-30"),
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
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
  },
  {
    id: "3",
    title: "DevMan - ConUHacks VIII",
    startDate: new Date("2024-01-20"),
    endDate: new Date("2024-01-21"),
    description:
      "Participated in ConUHacks VIII with a team of 4 along 800 other participants. Recipient of CSE's DevSecOps Challenge Award. Built ",
    skills: [
      "Python",
      "Artificial Intelligence",
      "Prompt Engineering",
      "DevSecOps",
      "APIs",
    ],
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
  },
  {
    id: "4",
    title: "FinVis",
    startDate: new Date("2023-09-01"),
    endDate: new Date("2024-12-30"),
    description:
      "A all-in-one financial visualization tool that allows you to track all your investments.",
    skills: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "tRPC",
      "RPC APIs",
      "MongoDB",
      "Nextauth.js",
      "Docker",
    ],
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
  },
];

const FeaturedProjects: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>("");

  return (
    <motion.div>
      <div className="grid grid-cols-2 gap-4">
        {featuredProjects.map((project) => (
            <motion.div
              className={`card bg-white rounded-lg shadow-md cursor-pointer transform transition-transform duration-500 hover:scale-105 ${
                selectedId === project.id ? 'card-selected' : ''
              }`}
              layoutId={`card-container-${project.id}`}
              onClick={() => setSelectedId(project.id)}
              key={project.id}
              initial={{ scale: 1 }}
              animate={{ scale: selectedId === project.id ? 1.1 : 1 }} // Increase scale on selected card
              transition={{ duration: 0.3 }}
            >
              <div className="card-content">
                <motion.h2 className="text-xl font-bold mb-2 text-purple-600">{project.title}</motion.h2>
                <motion.h5 className="text-sm font-bold mb-1 text-gray-700">{project.description}</motion.h5>
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
            {featuredProjects.map((project) => (
              project.id === selectedId && (
                <motion.div
                  className="bg-white rounded-lg p-4 shadow-md max-w-lg mx-auto"
                  layoutId={`card-container-${project.id}`}
                  key={project.id}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                >
                  <motion.div className="relative">
                    <motion.button
                      className="absolute top-2 right-2 py-1 px-2 text-center text-white bg-red-500 rounded-full"
                      onClick={() => setSelectedId('')}
                    >
                      Close
                    </motion.button>
                    <motion.h2 className="text-xl font-bold mb-2 text-purple-600">{project.title}</motion.h2>
                    <motion.h5 className="text-sm font-bold mb-1 text-gray-700">{project.description}</motion.h5>
                    <motion.p className="text-md text-gray-700 mb-4">{project.startDate.toISOString()}</motion.p>
                    <motion.p
                      className="text-md text-gray-700"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Additional content can go here!
                    </motion.p>
                  </motion.div>
                </motion.div>
              )
            ))}
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
