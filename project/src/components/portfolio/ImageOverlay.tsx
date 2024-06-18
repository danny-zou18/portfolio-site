"use client";

import React from "react";

import { motion } from "framer-motion";

import { useImageContext } from "@/context/ImageContext";

export default function ImageOverlay() {
  const { isOpen, setIsOpen, imagePath, setImagePath } = useImageContext();

  const whenExit = () => {
    setIsOpen(false);
    setImagePath("");
    console.log("exit");
  };

  return (
    <div className="z-[999] relative">
      {isOpen && (
        <motion.div className="fixed inset-0 flex justify-center items-center z-90">
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 z-90"
            onClick={() => whenExit()}
          ></motion.div>
          <motion.img
            src={imagePath}
            className="relative h-[80%] z-100"
          ></motion.img>
        </motion.div>
      )}
    </div>
  );
}
