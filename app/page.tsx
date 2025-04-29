import PortfolioGate from "@/components/PortfolioGate";

export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <>
      <PortfolioGate />
    </>
  );
}
