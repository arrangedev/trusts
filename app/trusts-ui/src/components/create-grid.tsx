"use client";

import { cn } from "@/lib/cn";
import GridPattern from "./ui/grid-pattern";
import { motion } from "framer-motion";
import Ripple from "./ui/ripple";

const CreateGrid = () => {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden border-t border-b bg-background p-20 md:shadow-xl">
      <motion.p
        initial={{ opacity: 0.5, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="z-10 whitespace-pre-wrap text-center text-5xl font-bold tracking-tighter bg-gradient-to-b from-[#FF3D00] to-[#FFA895] bg-clip-text text-transparent leading-none p-2"
      >
        Create a Trust
      </motion.p>
      <Ripple />
    </div>
  );
};

export default CreateGrid;
