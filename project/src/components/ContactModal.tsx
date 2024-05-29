"use client";

import React, { useState, useCallback, useEffect } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { useRouter } from "next/navigation";
import useContactModal from "@/hooks/useContactModal";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactModal: React.FC = () => {
  const router = useRouter();
  const contactModal = useContactModal();

  const [showModal, setShowModal] = useState(contactModal.isOpen);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log(result.message);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

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

  return (
    showModal && (
      <div
        className={` border-2 flex flex-col bg-background w-[35rem] h-[32rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-10 pt-5 shadow-lg rounded-md z-30`}
      >
        <motion.div
          className="close-button absolute top-3 right-3 text-2xl rounded-full p-[0.1rem] cursor-pointer"
          whileHover={hoverExit}
          onClick={() => contactModal.onClose()}
        >
          <IoClose className="mr-auto ml-auto" />
        </motion.div>
        <div className=" border-primary text-[1.7rem] text-primary font-sans">Contact Me</div>
        <form className="w-full h-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-between mt-5 text-primary">
            <div className="grid w-[48%] max-w-sm items-center gap-1.5">
              <Label htmlFor="text">Name</Label>
              <Input
                type="text"
                id="name"
                className="bg-primary text-secondary"
                {...register("name", { required: true })}
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="grid w-[48%] max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                className="bg-primary text-secondary"
                {...register("email", { required: true })}
              />
              {errors.email && <span>This field is required</span>}
            </div>
          </div>
          <div className="mt-5 text-primary">
            <div className="grid w-[48%] max-w-sm items-center gap-1.5">
              <Label htmlFor="text" className="flex items-center">
                Subject{" "}
                <span className="text-[.8rem] text-gray-400">(Optional)</span>
              </Label>
              <Input
                type="text"
                id="subject"
                className="bg-primary text-secondary"
                {...register("subject", { required: false })}
              />
              {errors.subject && <span>This field is required</span>}
            </div>
          </div>
          <div className="grid w-full gap-1.5 mt-5 text-primary ">
            <Label htmlFor="message">Message</Label>
            <Textarea
              placeholder="Type your message here."
              id="message"
              rows={6}
              className="bg-primary text-secondary"
              {...register("message", { required: true })}
            />
            {errors.message && <span>This field is required</span>}
          </div>
          <button
            type="submit"
            className="bg-primary text-background h-[2.5rem] mt-8 rounded-md hover:bg-gray-800 w-full"
          >
            Submit
          </button>
        </form>
      </div>
    )
  );
};

export default ContactModal;
