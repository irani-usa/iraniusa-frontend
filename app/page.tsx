
import FinancialSummery from "@/components/Financial/Summery";
import Hero from "@/components/Hero";
import OverlayMenu from "@/components/OverlayMenu";
import StampBG from "@/components/StampBG";
import ToursSearch from "@/components/Tours/ToursSearch";

export default function Home() {
  return (
    <>
      <OverlayMenu />
      <Hero />
      <StampBG />
      <FinancialSummery />
      <ToursSearch />
    </>
  )
}
