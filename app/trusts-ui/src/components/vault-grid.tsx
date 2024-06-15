"use client";

import { cn } from "@/lib/cn";
import GridPattern from "./ui/grid-pattern";
import { motion } from "framer-motion";

const VaultGrid = () => {
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
        My Vaults
      </motion.p>
      <GridPattern
        numSquares={60}
        maxOpacity={0.2}
        duration={3}
        repeatDelay={0.2}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />
    </div>
  );
};

export default VaultGrid;
