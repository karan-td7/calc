"use client";

import React, { useState, useEffect } from "react";
import CalculatorWindow from "@/components/Calculator/Calculator";
import Header from "@/components/Header";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { ICONS } from "@/helpers/Constants";
import Head from "next/head";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full p-10">

      {isLoading ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex items-center space-x-4"
        >
          <p>Developed by Karan</p>
        </motion.div>
      ) : (
        <Card>
          <CardHeader>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Header />
            </motion.div>
          </CardHeader>
          <CardContent>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <CalculatorWindow />
            </motion.div>
          </CardContent>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <CardFooter>
              <div className="flex flex-row justify-end w-full">
                {ICONS.map((icon, index) => (
                  <div
                    key={index}
                    className="border border-1 rounded-full lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                    style={{
                      transform: `translateX(-${5 * index + 2}px)`,
                    }}
                  >
                    <img src={icon} alt="icon5" className="p-2" />
                  </div>
                ))}
              </div>
            </CardFooter>
          </motion.div>
        </Card>
      )}
    </div>
  );
}
