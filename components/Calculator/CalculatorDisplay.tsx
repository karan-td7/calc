"use client";

import { Input } from "@/components/ui/input";
import React from "react";

interface CalculatorDisplayProps {
  setDisplayContent: React.Dispatch<React.SetStateAction<string>>;
  displayContent: string;
}

const CalculatorDisplay: React.FC<CalculatorDisplayProps> = ({
  displayContent,
  setDisplayContent,
}) => {
  const onEnter = () => {
    try {
      const result = Function(`'use strict'; return (${displayContent})`)();
      setDisplayContent(result.toString());
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <Input
      className="h-24 text-end text-5xl border font-bold"
      value={displayContent}
      onChange={(e) => setDisplayContent(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          onEnter();
        }
      }}
    />
  );
};

export default CalculatorDisplay;
