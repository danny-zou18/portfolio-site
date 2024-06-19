import React from "react";
import { motion } from "framer-motion";
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

import { useImageContext } from "@/context/ImageContext";
import { featuredProjectType } from "./FeaturedProjects";

export default function OpenCards({
  setSelectedId,
  project,
}: {
  setSelectedId: React.Dispatch<React.SetStateAction<string>>;
  project: featuredProjectType;
}) {
  const { setIsOpen, setImagePath } = useImageContext();

  const whenClick = ({src}:{src:string}) => {
    setImagePath(src);
    setIsOpen(true);
  }

  return (
    <motion.div
      className={`bg-card rounded-lg p-6 pb-2 shadow-md mx-auto lg:w-[70rem] lg:h-[30rem] xsm:w-[28rem] relative z-70`}
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
                      <CardContent className="flex items-center justify-center lg:min-h-[21rem] lg:max-h-[21rem] xsm:min-h-[15rem] xsm:max-h-[15rem] lg:p-0 xsm:p-1">
                        <Image
                          src={src}
                          alt={`Project image ${index}`}
                          width={800}
                          height={400}
                          className="max-h-full cursor-pointer"
                          onClick={() => whenClick({src})}
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
            <motion.h5 className="mt-5">{project.how_built}</motion.h5>
          </motion.div>
        </motion.div>
        <motion.div className="flex flex-wrap gap-2 lg:mt-5 xsm:mt-[-2rem] ">
          {project.skills.map((skill, index) => (
            <div
              key={index}
              className="card px-4 py-1 bg-background rounded-full font-[300] shadow-md cursor-pointer text-[.9rem]"
            >
              <h5>{skill}</h5>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
