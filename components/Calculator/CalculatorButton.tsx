import React from "react";
import { Button } from "@/components/ui/button";

interface CalculatorButtonProps {
  text: string;
  onPress: (text: string) => void;
}

const CalculatorButton: React.FC<CalculatorButtonProps> = ({ text, onPress }) => {
  return (
    <Button
      onClick={() => {
        onPress(text);
      }}
      className="flex h-full w-full justify-center items-center"
      variant="outline"
    >
      <span className="text-2xl font-bold">{text}</span>
    </Button>
  );
};

export default CalculatorButton;
