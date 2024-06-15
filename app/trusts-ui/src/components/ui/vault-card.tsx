import {
  IconCoin,
  IconCoins,
  IconExternalLink,
  IconHeartDollar,
  IconPhotoScan,
  IconSwitchHorizontal,
  IconWallet,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";
import { FC } from "react";

interface VaultCardProps {
  pubkey: string;
  protocol: string;
  tokenSymbol: string;
  tokenMint: string;
  apy: number;
  percent: number;
  targets: number;
}

const VaultCard: FC<VaultCardProps> = ({
  pubkey,
  protocol,
  tokenSymbol,
  tokenMint,
  apy,
  percent,
  targets,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0.5, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="relative bg-gradient-to-tr from-white via-white to-zinc-100 border border-zinc-400/25 p-4 flex-col rounded-xl"
    >
      <Link
        href={`/vault/${pubkey}`}
        className="absolute top-2 right-2"
        passHref
      >
        <IconExternalLink className="w-5 h-5 text-zinc-400 hover:text-zinc-200" />
      </Link>
      <div className="border border-zinc-400/25 py-1.5 px-2 flex gap-2 items-center rounded-lg w-fit">
        <Image
          src={"/solendicon.webp"}
          alt=""
          width={25}
          height={25}
          className="rounded-full w-10 h-10"
        />
        <label className="flex gap-1 items-center text-lg font-semibold bg-gradient-to-br from-[#1a1a1a] to-zinc-400 bg-clip-text leading-none text-transparent">
          {tokenSymbol + " <> " + protocol}
        </label>
      </div>
      <div className="mt-3 grid grid-cols-3 place-items-start gap-2 w-full">
        <TooltipProvider>
          <Tooltip delayDuration={500}>
            <TooltipTrigger>
              <div className="w-full flex gap-1 items-center border border-zinc-400/25 rounded-md px-2.5 py-1 shadow-sm">
                <IconCoins className="w-5 h-5 text-zinc-400" />
                <label className="text-zinc-400 font-medium text-sm">
                  <span className="font-light">{apy + "%" + " APY"}</span>
                </label>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <label>Current APY</label>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip delayDuration={500}>
            <TooltipTrigger>
              <div className="flex gap-1 items-center border border-zinc-400/25 w-full rounded-md px-2.5 py-1 shadow-sm">
                <IconHeartDollar className="w-5 h-5 text-zinc-400" />
                <label className="text-zinc-400 font-medium text-sm">
                  <span className="font-light">Send {percent + "%"}</span>
                </label>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <label>Interest Contribution</label>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip delayDuration={500}>
            <TooltipTrigger>
              <div className="flex gap-1 items-center border border-zinc-400/25 w-full rounded-md px-2.5 py-1 shadow-sm">
                <IconWallet className="w-5 h-5 text-zinc-400" />
                <label className="text-zinc-400 font-medium text-sm">
                  <span className="font-light">{targets} targets</span>
                </label>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <label>Target Wallets</label>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </motion.div>
  );
}

export default VaultCard;
