"use client"

import React from "react";

import useContactModal from "@/hooks/useContactModal";

interface TextAnimationProps {
  text: string;
}

const TextAnimation: React.FC<TextAnimationProps> = ({ text }) => {
    const contactModal = useContactModal();

  return (
    <div>
      <h1
        className="relative w-[max-content] font-mono
        before:absolute before:inset-0 before:animate-typewriter
        before:bg-background
        after:absolute after:inset-0 after:w-[0.125em] after:animate-caret
        after:bg-primary font-[400] text-primary text-4xl mt-2">
        {contactModal.isOpen ? "" : text}
      </h1>
    </div>
  );
};

export default TextAnimation;
