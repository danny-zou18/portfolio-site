"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import Image from "next/image";

const WhichImage = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return <Button variant="secondary" size="icon" disabled={true}></Button>;

  const dark = theme === "dark";

  return (
    <div className="w-[50px] h-[50px] ml-2 mr-2 overflow-hidden p-2">
      {dark ? (
        <Image
          src="/image (2).png"
          alt="Me"
          width={50}
          height={50}
          className="object-fit "
          style={{ objectPosition: "center" }} // Adjust as needed: 'top', 'bottom', etc.
        />
      ) : (
        <Image
          src="/icon.png"
          alt="Me"
          width={50}
          height={50}
          className="object-fit"
          style={{ objectPosition: "center" }} // Adjust as needed: 'top', 'bottom', etc.
        />
      )}
    </div>
  );
};

export default WhichImage;
