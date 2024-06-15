import { cn } from "@/lib/cn";
import { IconChevronRight } from "@tabler/icons-react";
import AnimatedGradientText from "./animated-gradient-text";

export default function BackToHome() {
  return (
    <div className="z-10 flex items-center justify-center">
      <AnimatedGradientText>
      🏠 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#FF3D00] to-[#FFA895] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent text-lg`,
          )}
        >
          Back To Home
        </span>
        <IconChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedGradientText>
    </div>
  );
}
