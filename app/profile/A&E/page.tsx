import OverlayMenu from "@/components/Layout/OverlayMenu";
import Cover from "@/components/Profile/general/Cover";
import React from "react";
import Concert from "@/components/Profile/A&E/starter/Concert";
import Tracks from "@/components/Profile/A&E/starter/Tracks";
import Social from "@/components/Profile/Professional/Pro/Social";
import Donate from "@/components/Profile/A&E/starter/Donate";
import Navigation from "@/components/Profile/general/Navigation";
import Upcoming from "@/components/Profile/A&E/pro/Upcoming";
import Steream from "@/components/Profile/A&E/pro/Steream";
import Ticket from "@/components/Profile/A&E/pro/Ticket";
import Albums from "@/components/Profile/A&E/pro/Albums";
import Labels from "@/components/Profile/A&E/pro/Labels";
import Hskills from "@/components/Profile/A&E/pro/Hskills";
import Educations from "@/components/Profile/Professional/Free/Educations";
import Blog from "@/components/Profile/general/Blog";
import About from "@/components/Profile/A&E/pro/About";
import { Gallery } from "@/components/Profile/Professional/Free";
import { Company } from "@/components/Profile/Professional/Pro";
import { Avatar, UserTitle } from "@/components/Profile/general";
import MusicPlayer from "@/components/Profile/A&E/starter/MusicPlayer";


const page = () => {
  return (
    <section>
      <OverlayMenu />
      <div className="w-full relative   mt-10  lg:mb-28 mb-72 mx-auto container">
      <Cover background={"/images/profile/A&E/cover.png"} />

      <div className="flex absolute top-12 left-1/2 -translate-x-1/2 p-10 mb-20 lg:mb-9 w-full container">
 
      <Avatar background={"/images/profile/A&E/profile.png"}  />
        <UserTitle
          fullname={"Siavash Ghomeishi"}
          gmail="arashdevarts@gmail.com"
          jobtitle={"song writer"}
          isPro={true}
          blogLevel={"Active"}
          Contact={true}
        />
        </div>
      </div>

      <div className="w-full h-1  border-t border-white-shade-4"></div>
      
      <section className="lg:flex lg:container lg:pr-0 px-2">
        <Navigation />
        <section className="lg:border-l  lg:border-white-shade-4 lg:pl-6 lg:w-3/4 w-full">
        <Concert cover={"/images/profile/A&E/bg.png"} Musicname={"Ashegh"} date={"September 4, 2020"} artist={" Siavash ghomeyshi"} job={" Artist and song writer"} />
        <About
           
            about={"Adidas has more than 20 years of experience in athletics industry through designing shoes and clothes also more than 20 collaborations wordwide "}
            city={" Los angless"}
            cover={"/images/blog/User.webp"}
            title={"Who We Are?"} author={"Jason todd"} publish={"Founder"} singer={"Saeed Sayam"} name={"jason todd"} job={"Founder"} img={"/images/profile/A&E/about.png"} img2={"/images/profile/A&E/about2.png"}          />
          <MusicPlayer/>
          <Upcoming />
          <Tracks />
          <Steream artist={"Siavash"} />
          <Ticket />
          <Albums />
          <Company title={"Associates, Parters & Sponsors"} />
          <Hskills />
          <div className="lg:pl-5">
            <Educations desc={""} />
          </div>
          <Gallery />
          <Blog title={"My blog"} desc={"desc"} classes={"lg:pl-5"} />
          <Social desc={"desc"} />
          <Donate artist={"siavash"} />
        </section>
      </section>
    </section>
  );
};

export default page;
