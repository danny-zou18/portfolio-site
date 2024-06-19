"use client";

import { useTheme } from "next-themes";
import React, { useState, useEffect, useRef } from "react";

import { motion } from "framer-motion";
import Experiences from "@/components/about/Experiences";
import Skills from "@/components/about/Skills";

const AboutPage: React.FC = () => {
  const { theme } = useTheme();
  const [currentDiv, setCurrentDiv] = useState<number | null>(1);

  const containerRef = useRef<HTMLInputElement>(null);
  const ref1 = useRef<HTMLInputElement>(null);
  const ref2 = useRef<HTMLInputElement>(null);
  const ref3 = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => updateScrollPositions();
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      updateScrollPositions(); // Initial call
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const dark = theme === "dark";

  const updateScrollPositions = () => {
    if (containerRef.current && ref1.current && ref2.current && ref3.current) {
      const containerTop = containerRef.current.getBoundingClientRect().top;
      const containerBottom =
        containerRef.current.getBoundingClientRect().bottom;

      const div1Top = ref1.current.getBoundingClientRect().top;
      const div1Bottom = ref1.current.getBoundingClientRect().bottom;
      const div2Top = ref2.current.getBoundingClientRect().top;
      const div2Bottom = ref2.current.getBoundingClientRect().bottom;
      const div3Top = ref3.current.getBoundingClientRect().top;
      const div3Bottom = ref3.current.getBoundingClientRect().bottom;

      console.log(div3Top, div3Bottom);

      if (div1Top < containerBottom && div1Bottom > containerTop) {
        setCurrentDiv(1);
      } else if (div2Top < containerBottom && div2Bottom > containerTop) {
        setCurrentDiv(2);
      } else if (div3Top < containerBottom && div3Bottom > containerTop) {
        setCurrentDiv(3);
      } else {
        setCurrentDiv(null);
      }
    }
  };

  return (
    <div className=" w-[80%] mx-auto pt-14 overflow-hidden lg:max-h-[100vh] xsm:max-h-none">
      <head>
        <title>About</title>
      </head>
      <div className="lg:w-[75%] xsm:w-[100%]  mx-auto flex lg:flex-row xsm:flex-col justify-between">
        <div className="lg:max-w-[50%] xsm:max-w-full mt-60 ">
          <div>
            <h1
              className={`text-5xl font-bold ${
                dark ? "text-neutral-300" : "text-neutral-400"
              } xsm:text-center lg:text-start`}
            >
              Danny Zou
            </h1>
            <h1
              className={`${
                dark ? "text-neutral-400" : "text-neutral-500"
              } mt-2 xsm:text-center lg:text-start`}
            >
              Software Developer · Junior @{" "}
              <a
                className="text-red-500 relative group cursor-pointer"
                href="https://www.rpi.edu/"
                target="_blank"
              >
                Rensselaer Polytechnic Institute
                <div className="absolute bottom-0 left-0 h-0.5 bg-red-500 transition-all duration-500 group-hover:w-full w-0"></div>
              </a>
            </h1>
          </div>
          <div
            className={`flex flex-col gap-5 mt-20 xsm:opacity-0 lg:opacity-100 text-neutral-500`}
          >
            <div className="flex flex-row items-center gap-4">
              <div
                className={`${
                  currentDiv === 1 ? "bg-card w-12" : "bg-text w-5"
                } transition-all duration-200 ease-in-out h-[.06rem] `}
              ></div>
              <h1
                className={`text-sm font-[600] ${
                  currentDiv === 1 ? "text-card" : ""
                }`}
              >
                EXPERIENCE
              </h1>
            </div>
            <div className="flex flex-row items-center gap-4">
              <div
                className={`${
                  currentDiv === 2 ? "bg-card w-12" : "bg-text w-5"
                } transition-all duration-200 ease-in-out h-[.06rem]`}
              ></div>
              <h1
                className={`text-sm font-[600] ${
                  currentDiv === 2 ? "text-card" : ""
                }`}
              >
                SKILLS
              </h1>
            </div>
            <div className="flex flex-row items-center gap-4">
              <div
                className={`${
                  currentDiv === 3 ? "bg-card w-12" : "bg-text w-5"
                } transition-all duration-200 ease-in-out h-[.06rem]`}
              ></div>
              <h1
                className={`text-sm font-[600] ${
                  currentDiv === 3 ? "text-card" : ""
                }`}
              >
                ABOUT
              </h1>
            </div>
          </div>
        </div>
        <div
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          ref={containerRef}
          className=" overflow-auto lg:max-h-[100vh] xsm:max-h-none lg:w-[45%] xsm:w-full lg:mt-20 xsm:mt-0 "
        >
          <div>
            <motion.div ref={ref1}>
              <h1 className="text-experiencetitle mb-16 lg:hidden xsm:flex w-full font-bold text-xl justify-center">
                EXPERIENCE
              </h1>
              <Experiences />
            </motion.div>
            <motion.div ref={ref2} style={{}} className="mt-28">
              <h1 className="text-experiencetitle mb-16 lg:hidden xsm:flex w-full font-bold text-xl justify-center">
                SKILLS
              </h1>

              <Skills />
            </motion.div>
            <motion.div ref={ref3} className="mt-32 p-2">
              <h1 className="text-experiencetitle mb-16 lg:hidden xsm:flex w-full font-bold text-xl justify-center ">
                ABOUT
              </h1>

              <h1 className="text-experiencetitle">
                Back in 2021, I received an acceptance letter from Rensselaer
                Polytechnic Institute (RPI), and my excitement was through the
                roof. However, I was faced with the difficult decision of
                choosing a major, a choice that would shape my future career
                trajectory. After much deliberation, I chose Computer Science.
                This decision propelled me into a world of coding, where I
                immersed myself daily in programming, worked for the school, and
                contributed to numerous open-source projects.
              </h1>
              <h1 className="text-experiencetitle mt-5">
                Each experience has been incredibly rewarding and cool. As a web
                developer for RPI, I build and maintain critical applications
                that students use daily. I focus on creating interfaces that are
                not only functional but also visually appealing and
                pixel-perfect. Ensuring everything looks crisp and feels right
                is a priority in my work.
              </h1>
              <h1 className="text-experiencetitle mt-5">
                When I&apos;m not at the computer, you&apos;ll find me working
                out, rock climbing, running, or hanging out with friends, often
                doing missions in various games.
              </h1>
            </motion.div>
            <motion.div className="min-w-[20%] min-h-[70vh]"></motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
