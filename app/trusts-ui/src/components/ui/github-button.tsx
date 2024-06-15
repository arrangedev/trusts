import { cn } from "@/lib/cn";
import { IconBrandGithub, IconStar } from "@tabler/icons-react";

export default function GithubButton() {
  return (
    <button className="z-10 bg-gradient-to-tr from-zinc-700 to-zinc-500 border border-zinc-500 rounded-2xl h-full px-2.5 flex items-center justify-center">
      <IconBrandGithub size={16} className="text-zinc-300" /> <hr className="mx-2 h-4 w-[1px] shrink-0 bg-zinc-300" />{" "}
        <span
          className={cn(
            `text-white text-base`,
          )}
        >
          View GitHub
        </span>
    </button>
  );
}