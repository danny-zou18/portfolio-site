"use client";

import React from "react";
import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";

const CourseworksCard = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full">
        <CardContent className="flex flex-col items-center text-background relative h-full font-mono">
          <h1 className="border-b-2 border-background mt-4">
            Relevant Courseworks
          </h1>

        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CourseworksCard;