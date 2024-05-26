"use client";

import React, { useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

import useContactModal from "@/hooks/useContactModal";
import ContactModal from "./ContactModal";
import ToggleDarkLightMode from "./ToggleDarkLightMode";

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
      <Link href={href} className="">
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
  const contactModal = useContactModal();

  const openContact = useCallback(() => {
    contactModal.onOpen();
  }, [contactModal]);
  return (
    <div className="flex flew-row justify-between items-center h-14 w-[90%] ml-auto mr-auto">
      <div className="flex flex-row  ">
        <NavBtn href="/" whereto="Home" />
        <NavBtn href="/portfolio" whereto="Portfolio" />
        <NavBtn href="/about" whereto="About" />
      </div>
      <div className="">
        <ToggleDarkLightMode />
        <button
          className="p-2 rounded-lg bg-primary text-secondary "
          onClick={openContact}
        >
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Navbar;
