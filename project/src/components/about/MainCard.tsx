"use client";

import React from "react";
import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";

const MainCard: React.FC = () => {
  return (
    <motion.div
      className="w-[31%] h-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
        <Card className="h-full">
            <CardContent className="h-full text-background">
                
            </CardContent>
        </Card>
    </motion.div>
  );
};

export default MainCard;
