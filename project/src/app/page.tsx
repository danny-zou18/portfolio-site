"use client";

import TextAnimation from "@/components/home/TextAnimation";

import { RiArrowDownWideFill } from "react-icons/ri";
import { FaCloudDownloadAlt } from "react-icons/fa";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center overflow-hidden w-[80%] h-[80vh] mt-10 ml-auto mr-auto  p-10 ">
      <TextAnimation text="Hello, I am Danny Zou." />
      <motion.a
        href="/Danny_Zou_Resume.pdf"
        download="My_Resume.pdf"
        className="flex flex-row items-center mt-10 p-1 px-4 border-2 border-primary text-md font-mono rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <FaCloudDownloadAlt className="text-xl" />
        <span className="ml-2 mt-1">resume</span>
      </motion.a>
      

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-5 flex gap-16"
      >
        <Link href="/portfolio" className="">
          <h1 className="font-mono mb-2">learn more about what I&apos;ve done</h1>
          <RiArrowDownWideFill className=" animate-bounce-slow text-primary text-4xl mx-auto" />
        </Link>
        <Link href="/about" className="">
          <h1 className="font-mono mb-2">learn more about me</h1>
          <RiArrowDownWideFill className=" animate-bounce-slow text-primary text-4xl mx-auto" />
        </Link>
      </motion.div>
    </main>
  );
}
