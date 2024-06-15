import { UnifiedWalletProvider } from "@jup-ag/wallet-adapter";
import {
  ConnectionProvider,
  WalletProvider,
  useWallet,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
  LedgerWalletAdapter,
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { Cluster } from "@solana/web3.js";
import React, { useMemo } from "react";

export const DEFAULT_ENDPOINT = `https://rpc.ironforge.network/${process.env.NEXT_PUBLIC_SOLANA_ENVIRONMENT}?apiKey=${process.env.NEXT_PUBLIC_IRONFORGE_API_KEY}`;

export const SolanaProviders = ({ children }: any) => {
  const wallets = useMemo(
    () => [
      new SolflareWalletAdapter(),
      new TorusWalletAdapter(),
      new LedgerWalletAdapter(),
      new PhantomWalletAdapter(),
    ],
    []
  );

  return (
    <ConnectionProvider endpoint={DEFAULT_ENDPOINT}>
      <UnifiedWalletProvider
        wallets={wallets}
        config={{
          autoConnect: true,
          env: process.env.NEXT_PUBLIC_SOLANA_ENVIRONMENT as Cluster,
          metadata: {
            name: "Stockpile",
            description: "Funding Without Barriers",
            url: "https://stockpile.so",
            iconUrls: ["https://jup.ag/favicon.ico"],
          },
          theme: "dark",
          walletlistExplanation: {
            href: "https://station.jup.ag/docs/additional-topics/wallet-list",
          },
        }}
      >
        <WalletModalProvider>{children}</WalletModalProvider>
      </UnifiedWalletProvider>
    </ConnectionProvider>
  );
};
