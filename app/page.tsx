import FinancialSummery from "@/components/Pages/Financial/Summery";
import Hero from "@/components/Pages/Home/Hero";
import OverlayMenu from "@/components/Layout/OverlayMenu";
import PlanInfo from "@/components/Pages/Home/PlanInfo";
import StampBG from "@/components/StampBG";
import ToursSearch from "@/components/Pages/Home/Tours/ToursSearch";
import AboutCompany from "@/components/Pages/Home/AboutCompany";
import SmallBannerList from "@/components/Pages/Home/SmallBannerList";
import LargeBannerList from "@/components/Pages/Home/LargeBanner";
import NormalBannerList from "@/components/Pages/Home/NormalBannerList";
import EventCalendar from "@/components/Pages/Home/EventCalendar";
import PopularWriters from "@/components/Pages/Home/PopularWriters";
import MediumBannerList from "@/components/Pages/Home/MediumBannerList";

export default function Home() {
  return (
    <>
      <OverlayMenu />
      <Hero />
      <StampBG />
      <LargeBannerList />
      <EventCalendar />
      <MediumBannerList/>
      <ToursSearch />
      <NormalBannerList />
      <FinancialSummery />
      <SmallBannerList />
      <PopularWriters/>
      <PlanInfo />
      <AboutCompany />
    </>
  );
}
