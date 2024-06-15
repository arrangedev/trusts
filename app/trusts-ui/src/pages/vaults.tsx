import SEO from "@/components/SEO";
import Header from "@/components/header";
import VaultCard from "@/components/ui/vault-card";
import VaultGrid from "@/components/vault-grid";

export default function Vaults() {
  return (
    <>
      <SEO
        title="Vaults | Trusts Protocol"
        description="Support a multitude of wallets with your Solana DeFi yields."
        image=""
      />
      <Header />
      <main className={`mt-24 max-w-[1920px]`}>
        <div className="mx-auto relative flex w-full max-w-[1920px] items-center justify-center overflow-hidden rounded-lg bg-background">
          <VaultGrid />
        </div>
        <div className="mt-12 grid grid-cols-3 gap-4 px-20">
          <VaultCard
            pubkey="hello"
            protocol="Solend"
            apy={12}
            tokenSymbol="USDC"
            tokenMint=""
            percent={25}
            targets={5}
          />
        </div>
      </main>
    </>
  );
}
