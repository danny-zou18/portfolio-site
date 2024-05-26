import React from "react";

interface TextAnimationProps {
  text: string;
}

const TextAnimation: React.FC<TextAnimationProps> = ({ text }) => {
  return (
    <div>
      <h1
        className="relative w-[max-content] font-mono
        before:absolute before:inset-0 before:animate-typewriter
        before:bg-background
        after:absolute after:inset-0 after:w-[0.125em] after:animate-caret
        after:bg-primary">
        {text}
      </h1>
    </div>
  );
};

export default TextAnimation;
