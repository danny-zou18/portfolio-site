"use client";

import React, { useState, useCallback, useEffect } from "react";

import { Input, Textarea } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import useContactModal from "@/hooks/useContactModal";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const ContactModal: React.FC = () => {
  const router = useRouter();
  const contactModal = useContactModal();

  const [showModal, setShowModal] = useState(contactModal.isOpen);

  useEffect(() => {
    setShowModal(contactModal.isOpen);
    console.log("Contact Modal Opened");
  }, [contactModal.isOpen]);

  const hoverExit = {
    transition: {
      duration: 0.2,
    },
    backgroundColor: "#00000070",
  };

  const handleSubmit = () => {
    console.log("Form Submitted");
  }

  return (
    <div
      className={`bg-[#1c1c1c] flex flex-col w-[35rem] h-[28rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 pt-3 shadow-lg ${
        showModal ? "opacity-100" : "opacity-0"
      }`}
    >
      <motion.div
        className="close-button absolute top-3 right-3 text-2xl rounded-full p-[0.1rem] cursor-pointer"
        whileHover={hoverExit}
        onClick={() => contactModal.onClose()}
      >
        <IoClose className="mr-auto ml-auto" />
      </motion.div>
      <div className=" border-b-2 border-black text-[1.7rem]">Contact Me</div>
      <form className="w-full h-full" onSubmit={handleSubmit}>
        <div className="flex justify-between mt-5">
          <Input
            id="name"
            type="text"
            label="Name"
            color={"primary"}
            className="text-black w-[47%] "
            radius="sm"
            isRequired
          />
          <Input
            id="email"
            type="email"
            label="Email"
            className="text-black w-[47%]"
            radius="sm"
            isRequired
          />
        </div>
        <div className="mt-3">
          <Input
            id="subject"
            type="text"
            label="Subject"
            className="text-black w-[47%]"
            radius="sm"
            isRequired
          />
        </div>
        <Textarea
          id="message"
          label="Message"
          labelPlacement="outside"
          className="w-full mt-3"
          minRows={6}
        />
        <button
          type="submit"
          className="bg-black text-white h-[2.5rem] mt-4 rounded-md hover:bg-gray-800 w-full"
        >Submit</button>
      </form>
    </div>
  );
};

export default ContactModal;
