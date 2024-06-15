import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import RetroGrid from "@/components/ui/retro-grid";
import Header from "@/components/header";
import BackToHome from "@/components/ui/back-to-home";
import Footer from "@/components/footer";
import Link from "next/link";
import SEO from "@/components/SEO";

const inter = Inter({ subsets: ["latin"] });

export default function NotFound() {
  return (
    <>
      <SEO
        title="Not Found | Trusts Protocol"
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
            <span className="pointer-events-none z-10 bg-gradient-to-br from-[#1a1a1a] to-zinc-300 bg-clip-text text-center text-7xl max-w-7xl font-bold tracking-tighter text-transparent pb-1">
              Whoops! We couldn't find that page.
            </span>
            <span className="mx-auto text-zinc-500 text-center max-w-xl">
              Let's get you back on track, and off to where you need to go.
            </span>
            <div className="mx-auto flex gap-2 items-center z-50">
              <Link href={"/"} passHref>
                <BackToHome />
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
