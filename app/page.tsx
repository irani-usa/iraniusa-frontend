
import FinancialSummery from "@/components/Financial/Summery";
import Hero from "@/components/Home/Hero";
import OverlayMenu from "@/components/Layout/OverlayMenu";
import PlanInfo from "@/components/Home/PlanInfo";
import StampBG from "@/components/StampBG";
import ToursSearch from "@/components/Home/Tours/ToursSearch";
import AboutCompany from "@/components/Home/AboutCompany";

export default function Home() {
  return (
    <>
      <OverlayMenu />
      <Hero />
      <StampBG />
      <FinancialSummery />
      <ToursSearch />
      <PlanInfo />
      <AboutCompany />
    </>
  )
}
