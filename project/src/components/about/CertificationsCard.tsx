"use client";

import React from "react";
import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";

import { IoOpenOutline } from "react-icons/io5";

interface certificationsProp {
  title: string;
  from: string;
  issueDate: string;
  expireDate: string;
  image: string;
  url: string;
}

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    from: "Amazon Web Services(AWS)",
    issueDate: "May 2024",
    expireDate: "May 2027",
    image: "/amazon_web_services_logo.jpg",
    url: "https://www.credly.com/badges/f74be726-95be-451f-893d-038a88943710/public_url",
  },
];

const CertificationsCard = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full">
        <CardContent className="flex flex-col items-center text-background relative h-full ">
          <h1 className="border-b-2 border-background mt-4 font-mono">
            Certifications
          </h1>
          <div className="mt-2 overflow-y-auto">
            {certifications.map((certification, index) => (
              <CertificationCard key={index} data={certification} />
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CertificationsCard;

interface CertificationCardProps {
  data: {
    title: string;
    from: string;
    issueDate: string;
    expireDate: string;
    image: string;
    url: string;
  };
}

const CertificationCard: React.FC<CertificationCardProps> = ({ data }) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <img
          className="w-[45px] h-[45px]"
          src={data.image}
          alt="aws logo"
        ></img>
        <div className="flex flex-col text-sm ml-2">
          <h1 className="font-bold ">{data.title}</h1>
          <h2 className="text-xs">{data.from}</h2>
          <div className="flex text-xs text-neutral-400">
            <h1>
              Issued {data.issueDate} · Expires {data.expireDate}
            </h1>
          </div>
        </div>
      </div>
      <span className="ml-[45px]">
        <a href={data.url} target="_blank" className="border-[1px] px-2 py-1 mt-1 rounded-full inline-flex items-center text-sm font-bold hover:bg-gray-200 ">
          Show Credentials <IoOpenOutline className="ml-2 text-md" />
        </a>
      </span>
    </div>
  );
};
