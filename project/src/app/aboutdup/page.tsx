"use client";

import { useTheme } from "next-themes";
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

import { motion } from "framer-motion";

const AboutDupPage:React.FC = () => {
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
      container.addEventListener('scroll', handleScroll);
      updateScrollPositions(); // Initial call
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [containerRef.current]);

  if (!mounted)
    return <Button variant="secondary" size="icon" disabled={true}></Button>;

  const dark = theme === "dark";

  const updateScrollPositions = () => {
    if (containerRef.current && ref1.current && ref2.current && ref3.current) {
      const containerTop = containerRef.current.getBoundingClientRect().top;
      const containerBottom = containerRef.current.getBoundingClientRect().bottom;
      console.log(containerTop, containerBottom);

      const div1Top = ref1.current.getBoundingClientRect().top;
      const div1Bottom = ref1.current.getBoundingClientRect().bottom;
      const div2Top = ref2.current.getBoundingClientRect().top;
      const div2Bottom = ref2.current.getBoundingClientRect().bottom;
      const div3Top = ref3.current.getBoundingClientRect().top;
      const div3Bottom = ref3.current.getBoundingClientRect().bottom;

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
    <div className=" w-[80%] mx-auto pt-14 overflow-hidden">
      <div className="flex justify-center md:mt-8 xsm:mt-36 mb-10 ">
        <h1 className="text-3xl font-[200] text-primary border-b-2 border-primary p-2">
          about me
        </h1>
      </div>
      <div className="w-[70%] mx-auto flex flex-row justify-between">
        <div className="max-w-[50%] mt-28">
          <div>
            <h1 className={`text-5xl font-bold ${dark ? "text-neutral-300" : "text-neutral-400"} `}>Danny Zou</h1>
            <h1 className={`${dark ? "text-neutral-400" : "text-neutral-500"} mt-2`}>
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
          <div className={`flex flex-col gap-5 mt-20 xsm:opacity-0 md:opacity-100 text-neutral-500`}>
            <div className="flex flex-row items-center gap-4">
              <div className={`bg-card w-12 transition-all duration-200 ease-in-out h-[.06rem] `}></div>
              <h1 className="text-sm font-[600] text-card">EXPERIENCE</h1>
            </div>
            <div className="flex flex-row items-center gap-4">
              <div className={`bg-text w-5 h-[.06rem]`}></div>
              <h1 className="text-sm font-[600]">SKILLS</h1>
            </div>
            <div className="flex flex-row items-center gap-4">
              <div className={`bg-text w-5 h-[.06rem]`}></div>
              <h1 className="text-sm font-[600]">ABOUT</h1>
            </div>
          </div>
        </div>
        <div style={{ height: '100vh', overflow: 'auto' }} ref={containerRef} className="bg-red-400">
        <div style={{ height: '300vh' }}>
        <motion.div
          ref={ref1}
          style={{
            height: '100vh',
            background: currentDiv === 1 ? 'lightblue' : 'gray',
          }}
        >
          Div 1
        </motion.div>
        <motion.div
          ref={ref2}
          style={{
            height: '100vh',
            background: currentDiv === 2 ? 'lightgreen' : 'gray',
          }}
        >
          Div 2
        </motion.div>
        <motion.div
          ref={ref3}
          style={{
            height: '100vh',
            background: currentDiv === 3 ? 'lightcoral' : 'gray',
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

export default AboutDupPage;
