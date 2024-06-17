"use client";

import React, { useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";

import useContactModal from "@/hooks/useContactModal";
import ContactModal from "./ContactModal";
import ToggleDarkLightMode from "./ToggleDarkLightMode";

import { FaLinkedin, FaGithub, FaGitlab } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";

import { useTheme } from "next-themes";

interface NavBtnProp {
  href: string;
  whereto: string;
}

const NavBtn: React.FC<NavBtnProp> = ({ href, whereto }) => {
  const whileHover = {
    scale: 1.1,
    backgroundColor: "#00000010",
  };
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <motion.div
      className="group rounded-sm p-2 ml-10 relative first:ml-0"
      whileHover={whileHover}
    >
      <Link href={href} className="text-primary">
        {whereto}
      </Link>
      <div className="absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full w-0"></div>
      <div
        className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-500 ${
          isActive ? "w-full" : ""
        }`}
      ></div>
    </motion.div>
  );
};

const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const contactModal = useContactModal();

  const openContact = useCallback(() => {
    contactModal.onOpen();
  }, [contactModal]);

  const dark = theme === "dark";

  return (
    <div className="flex bg-background md:flex-row xsm:flex-col justify-between items-center py-2 w-[80%] ml-auto mr-auto pt-2 fixed top-0 left-1/2 transform -translate-x-1/2 z-40 ">
      <div className="flex flex-row  ">
        <NavBtn href="/" whereto="Home" />
        <NavBtn href="/portfolio" whereto="Portfolio" />
        <NavBtn href="/about" whereto="About" />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 1 }}
        className="flex flex-row items-center md:mt-0 xsm:mt-3 md:absolute  md:left-1/2 md:transform md:-translate-x-1/2 xsm:relative"
      >
        <div className="flex text-xl gap-2">
          <a
            href="https://www.linkedin.com/in/danny-zou-bzs1010/"
            target="_blank"
            title="Linkedin"
            className=" p-2 rounded-full border-2 border-card hover:bg-card hover:text-background hover:border-background transition-all duration-300 "
          >
            <FaLinkedin />
          </a>
          <a
            href="https://devpost.com/danny-zou18"
            target="_blank"
            title="Devpost"
            className=" p-2 rounded-full border-2 border-card hover:bg-card hover:text-background hover:border-background transition-all duration-300"
          >
            <SiDevpost />
          </a>
        </div>
        {dark ? (
          <Image
            src="/image (2).png"
            alt="Me"
            width={50}
            height={50}
            className="object-fit w-[50px] h-[50px] ml-2 mr-2 overflow-hidden p-2"
            style={{ objectPosition: "center" }} // Adjust as needed: 'top', 'bottom', etc.
          />
        ) : (
          <Image
            src="/icon.png"
            alt="Me"
            width={50}
            height={50}
            className="object-fit w-[50px] h-[50px] ml-2 mr-2 overflow-hidden p-2"
            style={{ objectPosition: "center" }} // Adjust as needed: 'top', 'bottom', etc.
          />
        )}

        <div className="flex text-xl gap-2">
          <a
            href="https://github.com/danny-zou18"
            target="_blank"
            title="Github"
            className=" p-2 rounded-full border-2 border-card hover:bg-card hover:text-background hover:border-background transition-all duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://gitlab.mregirouard.com/dannyzou18"
            target="_blank"
            title="Gitlab"
            className=" p-2 rounded-full border-2 border-card hover:bg-card hover:text-background hover:border-background transition-all duration-300"
          >
            <FaGitlab />
          </a>
        </div>
      </motion.div>
      <div className="flex flex-row items-center md:mt-0 xsm:mt-3">
        <ToggleDarkLightMode />
        <button
          className="p-3  bg-primary text-secondary hover: hover:text-primary hover:bg-secondary ml-5 transition-all duration-300"
          onClick={openContact}
        >
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Navbar;
