"use client";

import React from "react";
import { Toggle } from "@/components/ui/toggle";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex justify-between items-center w-full">
      <div className="gap-6 flex items-center">
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl">
          Calculator
        </h1>
      </div>

      <Toggle
        aria-label="Toggle theme"
        onClick={() => {
          let t = theme === "dark" ? "light" : "dark";
          setTheme(t);
        }}
        variant="outline"
      >
        {theme === "dark" ? (
          <SunIcon className="h-[1.2rem] w-[1.2rem] transition-all rotate-0 scale-100" />
        ) : (
          <MoonIcon className="h-[1.2rem] w-[1.2rem] transition-all rotate-0 scale-100" />
        )}
      </Toggle>
    </div>
  );
};

export default Header;
