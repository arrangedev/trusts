import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import RetroGrid from "@/components/ui/retro-grid";
import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroButton from "@/components/ui/hero-button";
import GithubButton from "@/components/ui/github-button";
import Link from "next/link";
import { useWallet } from "@solana/wallet-adapter-react";
import SEO from "@/components/SEO";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { connected } = useWallet();
  return (
    <>
      <SEO
        title="Trusts Protocol"
        description="Support a multitude of wallets with your Solana DeFi yields."
        image=""
      />
      <Header />
      <main className={`mt-24 flex`}>
        <div className="relative flex h-[40.5rem] w-full items-center justify-center overflow-hidden rounded-lg bg-background p-20">
          <motion.div
            initial={{ opacity: 0.5, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mx-auto grid grid-cols-1 gap-4 max-w-3xl"
          >
            <span className="pointer-events-none z-10 bg-gradient-to-b from-[#FF3D00] to-[#FFA895] bg-clip-text text-center text-7xl max-w-7xl font-bold leading-none tracking-tighter text-transparent">
              Support Anyone With DeFi Yields.
            </span>
            <span className="mx-auto text-zinc-500 text-center max-w-xl">
              Deposit into popular Solana lending protocols, and contribute your
              yields to a number of wallets that you choose.
            </span>
            <div className="mx-auto flex gap-2 items-center z-50">
              {connected ? (
                <Link href={"/vaults"} passHref>
                  <HeroButton />
                </Link>
              ) : (
                <Link href={"/create"} passHref>
                  <HeroButton />
                </Link>
              )}
              <Link
                href={"https://github.com/arrangedev/trusts"}
                target="_blank"
                rel="noopener noreferrer"
                className="h-full"
                passHref
              >
                <GithubButton />
              </Link>
            </div>
          </motion.div>
          <RetroGrid />
        </div>
      </main>
      <Footer />
    </>
  );
}
