"use client";
import React, { useState } from "react";
import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorButtons from "./CalculatorButtons";
import { CALCULATOR } from "@/helpers/Constants";

function CalculatorWindow() {
  const [displayContent, setDisplayContent] = useState("");
  return (
    <div>
      <CalculatorDisplay displayContent={displayContent} setDisplayContent={setDisplayContent} />
      <CalculatorButtons
        setDisplayContent={setDisplayContent}
        displayContent={displayContent}
      />
    </div>
  );
}

export default CalculatorWindow;
