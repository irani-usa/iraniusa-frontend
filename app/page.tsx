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
import Monthlynewusers from "@/components/Pages/Home/NewUsers";
import MonthlyNnewUsers from "@/components/Pages/Home/MonthlyNnewUsers";
import BlogExplore from "@/components/Pages/Home/BlogExplore";
import MusicPlayer from "@/components/Pages/Home/MusicPlayer/page";

export default function Home() {
  return (
    <>
      <OverlayMenu />
      <Hero />
      <StampBG isHome />
      <LargeBannerList />
      <EventCalendar />
      <MonthlyNnewUsers />
      <FinancialSummery />
      <NormalBannerList />
      <ToursSearch />
      <PopularWriters/>
      <Monthlynewusers />
      <BlogExplore />
      <SmallBannerList />
      <PlanInfo />
      <AboutCompany />
      <MusicPlayer/>
    </>
  );
}
