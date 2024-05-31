"use client";

import React from "react";
import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";

const MyStoryCard = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full">
        <CardContent className="flex flex-col items-center text-background h-full">
          <h1 className="border-b-2 border-background mt-4">My Story</h1>
          <div className="mt-2 overflow-y-auto flex w-[90%] text-sm text-center">
            Hello, as you already know, I am Danny Zou. I currently reside in
            Staten Island, NY, but my childhood was spent in Brooklyn, NY. Not
            my entire childhood though, as because of my parents busy schedules
            when I was an adolscent, I went back to China until I was 6
            years old for my grandparents to take care of me. I am currently
            attending Rensselaer Polytechnic Institute pursuing a Bachelors of
            Science in Computer Science as a part of the graduating class of 2026.
            I began my coding journey when I got here, immediately getting hooked,
            both by the topic and the prospect of having so many like-minded individuals
            that surround me. I am interested in a variety of topics like Web Development,
            Machine Learning, and DevOps. During my freetimes, I love to be active, going to the gym, 
            running, cycling, rock climbing or just hanging out with friends going for a thrill.
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default MyStoryCard;
