"use client";

import TextAnimation from "@/components/home/TextAnimation";
import { RiArrowDownWideFill } from "react-icons/ri";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex justify-center items-center overflow-hidden w-[80%] h-[80vh] ml-auto mr-auto  p-10 ">
      <TextAnimation text="Hello, I am Danny Zou." />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-5"
      >
        <Link href="/portfolio" className="">
          <h1 className="font-mono mb-2">learn more about what I've done</h1>
          <RiArrowDownWideFill className=" animate-bounce-slow text-primary text-4xl mx-auto" />
        </Link>
      </motion.div>
    </main>
  );
}
