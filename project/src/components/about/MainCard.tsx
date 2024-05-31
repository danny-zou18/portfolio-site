"use client";

import React from "react";
import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";

const MainCard: React.FC = () => {
  return (
    <motion.div
      className="max-w-[29%] h-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full overflow-hidden">
        <CardContent className="flex flex-col items-center h-full text-background p-0 font-mono">
          <div
            className="w-full bg-cover bg-center  h-64 flex justify-center items-center border-2 border-card rounded-lg"
            style={{ backgroundImage: "url(/background1.jpg" }}
          >
            <img
              src="/face.jpg"
              alt="Me"
              className="w-[150px] h-[150px] rounded-full object-cover border-2 border-card"
            ></img>
          </div>
          <div className="mt-3 w-[90%] flex flex-col items-center">
            <h1 className="mt-5">Name: Danny Zou</h1>
            <h1 className=" mt-5 flex flex-col items-center">
              Current Occupation: Student at:{" "}
              <a
                href="https://www.rpi.edu/"
                target="_blank"
                className="border-b-2 border-red-50 hover:border-red-500 transition-all duration-200"
              >
                Rensselaer Polytechnic Institute{" "}
              </a>
            </h1>
            <h1 className="mt-5">Grade: Junior</h1>
            <h1 className="mt-5">GPA: 3.44</h1>
            <h1 className=" mt-5 flex flex-col items-center">
              Hobbies:{" "}
              <span>Coding, Gym, Rock Climbing, Chilling with friends{" "}</span>
                
              
            </h1>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default MainCard;
