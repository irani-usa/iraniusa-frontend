
import FinancialSummery from "@/components/Pages/Financial/Summery";
import Hero from "@/components/Pages/Home/Hero";
import OverlayMenu from "@/components/Layout/OverlayMenu";
import PlanInfo from "@/components/Pages/Home/PlanInfo";
import StampBG from "@/components/StampBG";
import ToursSearch from "@/components/Pages/Home/Tours/ToursSearch";
import AboutCompany from "@/components/Pages/Home/AboutCompany";

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
