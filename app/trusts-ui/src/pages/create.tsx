import SEO from "@/components/SEO";
import CreateForm from "@/components/create-form";
import CreateGrid from "@/components/create-grid";
import Header from "@/components/header";

export default function Create() {
  return (
    <>
      <SEO
        title="Create a Trust | Trusts Protocol"
        description="Support a multitude of wallets with your Solana DeFi yields."
        image=""
      />
      <Header />
      <main className={`mt-24 max-w-[1920px]`}>
        <div className="mx-auto relative flex w-full max-w-[1920px] items-center justify-center overflow-hidden rounded-lg bg-background">
          <CreateGrid />
        </div>
        <div className="mt-12 gap-4 px-20 pb-12">
          <CreateForm />
        </div>
      </main>
    </>
  );
}
