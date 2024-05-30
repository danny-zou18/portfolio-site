"use client";

import React from "react";
import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";

const Cards: React.FC = () => {
  return (
    <motion.div
      className="w-full h-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full">
        <CardContent className="text-background">
            
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Cards
