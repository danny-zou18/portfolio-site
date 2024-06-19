"use client";

import { useTheme } from "next-themes";
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

import { motion } from "framer-motion";
import Experiences from "@/components/about/Experiences";

const AboutPage: React.FC = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentDiv, setCurrentDiv] = useState<number | null>(1);

  const containerRef = useRef<HTMLInputElement>(null);
  const ref1 = useRef<HTMLInputElement>(null);
  const ref2 = useRef<HTMLInputElement>(null);
  const ref3 = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => updateScrollPositions();
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      updateScrollPositions(); // Initial call
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [containerRef.current, ref1.current, ref2.current, ref3.current]);

  if (!mounted)
    return <Button variant="secondary" size="icon" disabled={true}></Button>;

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
    <div className=" w-[80%] mx-auto pt-14 overflow-hidden md:max-h-[100vh] xsm:max-h-none">

      <div className="md:w-[75%] xsm:w-[100%]  mx-auto flex md:flex-row xsm:flex-col justify-between">
        <div className="md:max-w-[50%] xsm:max-w-full mt-60 ">
          <div>
            <h1
              className={`text-5xl font-bold ${
                dark ? "text-neutral-300" : "text-neutral-400"
              } xsm:text-center md:text-start`}
            >
              Danny Zou
            </h1>
            <h1
              className={`${
                dark ? "text-neutral-400" : "text-neutral-500"
              } mt-2 xsm:text-center md:text-start`}
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
            className={`flex flex-col gap-5 mt-20 xsm:opacity-0 md:opacity-100 text-neutral-500`}
          >
            <div className="flex flex-row items-center gap-4">
              <div
                className={`${currentDiv===1 ? "bg-card w-12":"bg-text w-5"} transition-all duration-200 ease-in-out h-[.06rem] `}
              ></div>
              <h1 className="text-sm font-[600] text-card">EXPERIENCE</h1>
            </div>
            <div className="flex flex-row items-center gap-4">
              <div className={`${currentDiv===2 ? "bg-card w-12":"bg-text w-5"} transition-all duration-200 ease-in-out h-[.06rem]`}></div>
              <h1 className="text-sm font-[600]">SKILLS</h1>
            </div>
            <div className="flex flex-row items-center gap-4">
              <div className={`${currentDiv===3 ? "bg-card w-12":"bg-text w-5"} transition-all duration-200 ease-in-out h-[.06rem]`}></div>
              <h1 className="text-sm font-[600]">ABOUT</h1>
            </div>
          </div>
        </div>
        <div
          style={{"scrollbarWidth": "none", "msOverflowStyle": "none"}}
          ref={containerRef}
          className=" overflow-auto md:max-h-[100vh] xsm:max-h-none md:w-[45%] xsm:w-full md:mt-20 xsm:mt-0 "
          
        >
          <div >
            <motion.div
              ref={ref1}
              
            >
              <Experiences />
            </motion.div>
            <motion.div
              ref={ref2}
              style={{
                height: "100vh",
                background: currentDiv === 2 ? "lightcoral" : "gray",
              }}
            >
              Div 2
            </motion.div>
            <motion.div
              ref={ref3}
              style={{
                height: "101vh",
                background: currentDiv === 3 ? "lightcoral" : "gray",
              }}
            >
              Div 3
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
