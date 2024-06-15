import { SolanaProviders } from "@/providers/SolanaProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SolanaProviders>
      <Component {...pageProps} />
    </SolanaProviders>
  );
}
