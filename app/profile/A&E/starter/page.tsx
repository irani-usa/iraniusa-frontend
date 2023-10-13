import OverlayMenu from "@/components/Layout/OverlayMenu";
import Avatar from "@/components/Profile/A&E/starter/Avatar";
import Cover from "@/components/Profile/general/Cover";
import UserTitle from "@/components/Profile/A&E/starter/UserTitle";
import React from "react";
import Concert from "@/components/Profile/A&E/starter/Concert";
import Platform from "@/components/Profile/A&E/starter/Platform";
import About from "@/components/Profile/A&E/starter/About";
import Tracks from "@/components/Profile/A&E/starter/Tracks";
import Gallery from "@/components/Profile/A&E/starter/Gallery";
import Social from "@/components/Profile/Professional/Pro/Social";
import Donate from "@/components/Profile/A&E/starter/Donate";
import Navigation from "@/components/Profile/general/Navigation";

const page = () => {
  return (
    <section>
      <OverlayMenu />
      <div className="w-full border-b border-white-shade-4 pb-24 lg:pb-0">
        <div className="w-full relative">
          <Cover background={"/images/profile/A&E/cover.png"} />
        </div>
        <div className="w-full container flex relative -top-[100px] left-0 p-10 mb-20 lg:mb-10">
          <Avatar />
          <UserTitle />
        </div>
      </div>
      <section className="lg:flex lg:pl-[110px]">
        <Navigation />
        <section className="lg:border-l lg:border-white-shade-4 ">
          <Concert cover={"/images/profile/A&E/bg.png"} Musicname={"Ashegh"} date={"September 4, 2020"} artist={" Siavash ghomeyshi"} job={" Artist and song writer"} />
          <Platform />
          <About about={"Siavash Ghomayshi is an Iranian musician, singer and song writer. Siavash studied music in London where he got his master's degree. He left Iran in 1978 and now lives in Los Angeles."} artist={"siavash ghomeyshi"} city={"Los angless"} />
          <Tracks />
          <Gallery />
          <Social desc={"desc"} />
          <Donate artist={"siavash"} />
        </section>
      </section>
    </section>
  );
};

export default page;
