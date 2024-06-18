"use client";

import { FaCloudDownloadAlt } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";

import Link from "next/link";
import { motion, Variants } from "framer-motion";


export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center overflow-hidden w-[80%] h-[80vh] mt-20 ml-auto mr-auto  p-10 ">
      <motion.h1
        className="text-5xl"
        initial={{ y: "100vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.5,
          type: "spring",
          stiffness: 500,
          damping: 30,
          opacity: { duration: 0.5 },
        }}
      >
        Welcome, I&apos;m Danny.
      </motion.h1>
      <motion.a
        href="/Danny_Zou_Resume.pdf"
        download="My_Resume.pdf"
        className="flex flex-row items-center mt-10 p-1 px-4 border-2 border-primary text-md  rounded-full transform 
        hover:scale-110 hover:bg-primary hover:text-background transition-all duration-200 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <FaCloudDownloadAlt className="text-xl" />
        <span className="ml-2">resume</span>
      </motion.a>
      <motion.div
        className="flex flex-row mt-14 gap-20"
        initial={{ y: "100vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.5,
          type: "spring",
          stiffness: 500,
          damping: 30,
          opacity: { duration: 0.5 },
        }}
      >
        <Link href="/portfolio" className="group relative">
          <div className="flex flex-row items-center ">
            <GoArrowRight className="mr-2 font-thin text-2xl " />
            <h1 className="">view what I&apos;ve done</h1>
          </div>

          <div className="absolute bottom-[-5px] left-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full w-0"></div>
        </Link>
        <Link href="/about" className="group relative">
          <div className="flex flex-row items-center ">
            <GoArrowRight className="mr-2 font-thin text-2xl" />
            <h1 className="">learn more about me</h1>
          </div>
          <div className="absolute bottom-[-5px] left-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full w-0"></div>
        </Link>
      </motion.div>
    </main>
  );
}
