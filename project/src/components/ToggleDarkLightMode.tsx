"use client";

import React, { useState, useEffect } from "react";

import { useTheme } from "next-themes";

import { Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";
import { set } from "react-hook-form";

const ToggleDarkLightMode: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  },[]);

  if (!mounted)
    return <Button variant="secondary" size="icon" disabled={true}></Button>;

  const dark = theme === "dark";

  return (
    <Button
      variant="default"
      size="icon"
      onClick={() => {
        setTheme(`${dark ? "light" : "dark"}`);
      }}
      className="mr-5 bg-transparent hover:bg-transparent"
    >
      {dark ? (
        <Sun className="text-primary hover:cursor-pointer hover:text-muted-foreground" />
      ) : (
        <Moon className="text-primary hover:cursor-pointer hover:text-foreground" />
      )}
    </Button>
  );
};

export default ToggleDarkLightMode;
