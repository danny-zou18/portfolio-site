"use client";

import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

type featuredProjectType = {
  id: number;
  title: String;
  startDate: Date;
  endDate: Date;
  description: String;
  skills: String[];
  images: String[];
};

const featuredProjects: featuredProjectType[] = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div>
      {featuredProjects.map((project) => {
        return (
          <motion.div
            key={project.id}
            layoutId={project.id.toString()}
            onClick={() => setSelectedId(project.id.toString())}
            className="card"
          >
            <motion.h5>{item.subtitle}</motion.h5>
            <motion.h2>{item.title}</motion.h2>
          </motion.div>
        );
      })}
    </div>
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
