import { IconLogin } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import useScroll from "@/lib/hooks/useScroll";
import { motion } from "framer-motion";
import { useWallet } from "@solana/wallet-adapter-react";
import WalletModal from "./ui/wallet-modal";
import ConnectedButton from "./ui/connected-button";

export function Header() {
  const router = useRouter();
  const { connecting, connected } = useWallet();
  const { scrolled } = useScroll(15);
  const [open, setOpen] = useState<boolean>(false);
  const [active, setActive] = useState<string | null>(router.pathname);

  return (
    <>
      <WalletModal open={open} setOpen={setOpen} />
      <nav
        className={`fixed top-0 z-[100] w-full flex justify-center border-b border-transparent ${
          scrolled
            ? `bg-white/30 backdrop-blur-xl border-zinc-300/50`
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="w-full max-w-[1920px] grid grid-cols-3 items-center content-center px-8 py-6 h-16 max-[480px]:px-4 md:w-full">
          <Link href="/" className="ml-2 block">
            <div className="flex gap-2 items-center">
              <Image
                priority
                src={"trustslogoblack.svg"}
                alt="logo"
                width={125}
                height={50}
              />
              <div className="font-plex font-medium text-white text-xs py-1 px-1.5 bg-gradient-to-tr from-[#FF3D00] to-[#FFA895] rounded-lg">
                Beta
              </div>
            </div>
          </Link>
          <div className="md:flex justify-center space-x-4 hidden text-gray-900 dark:text-white font-plex text-sm">
            <Link href={"/create"} passHref>
              <motion.p
                transition={{ duration: 0.3 }}
                className={`cursor-pointer text-[#1a1a1a] hover:opacity-[0.9] hover:bg-[#FF3D00]/25 p-3 rounded-md ${
                  router.pathname == "/challenges" && "bg-[#FF3D00]/25"
                }`}
              >
                Create
              </motion.p>
            </Link>
            <Link href={"/how-it-works"} passHref>
              <motion.p
                transition={{ duration: 0.3 }}
                className={`cursor-pointer text-[#1a1a1a] hover:opacity-[0.9] hover:bg-[#FF3D00]/25 p-3 rounded-md ${
                  router.pathname == "/learn" && "bg-[#FF3D00]/25"
                }`}
              >
                How It Works
              </motion.p>
            </Link>
            <Link href="/sandbox" passHref>
              <motion.p
                transition={{ duration: 0.3 }}
                className={`cursor-pointer text-[#1a1a1a] hover:opacity-[0.9] hover:bg-[#FF3D00]/25 p-3 rounded-md ${
                  router.pathname == "/sandbox" && "bg-[#FF3D00]/25"
                }`}
              >
                Sandbox
              </motion.p>
            </Link>
          </div>
          <div className="flex gap-6 justify-end items-center">
            {connected ? (
              <ConnectedButton />
            ) : (
              <button
                className="px-2 inline-flex gap-2 items-center transition-all ease-in-out delay-110 hover:-translate-y-1 hover:scale-101 rounded-full bg-gradient-to-bl from-[#FF3D00] to-[#FFA895] shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white text-sm font-plex text-white w-32 max-[768px]:w-full h-10 justify-center"
                onClick={() => setOpen(true)}
              >
                {connecting ? (
                  <svg
                    aria-hidden="true"
                    className="inline w-4 h-4 mr-2 text-[#E40DB5] animate-spin  fill-white"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                ) : (
                  <IconLogin stroke={1} size={24} />
                )}
                <span>Connect</span>
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
