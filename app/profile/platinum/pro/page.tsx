import OverlayMenu from "@/components/Layout/OverlayMenu";
import Avatar from "@/components/Profile/general/Avatar";
import Cover from "@/components/Profile/general/Cover";
import UserTitle from "@/components/Profile/general/UserTitle";
import React from "react";
import Company from "@/components/Profile/business/pro/company";
import CompanyAbout from "@/components/Profile/business/pro/CompanyAbout";
import Services from "@/components/Profile/business/pro/Services";
import Values from "@/components/Profile/business/pro/Values";
import Team from "@/components/Profile/business/pro/Team";
import Exprince from "@/components/Profile/business/starter/Exprince";
import Gallery from "@/components/Profile/business/pro/Gallery";
import Blog from "@/components/Profile/business/pro/Blog";
import Frequent from "@/components/Profile/business/pro/Frequent";
import Social from "@/components/Profile/Professional/Pro/Social";
import Contact from "@/components/Profile/business/pro/Contact";
import Terms from "@/components/Profile/business/pro/Terms";
import Navigation from "@/components/Profile/Professional/Pro/Navigation";

const page = () => {
  return (
    <section>
      <OverlayMenu />
      <div className="w-full border-b border-white-shade-4 pb-24 lg:pb-10">
        <div className="w-full relative">
          <Cover background={"/images/profile/business/cover.png"} />
        </div>
        <div className="w-full container flex relative -top-[100px] left-0 p-10 mb-20 lg:mb-0">
          <Avatar background={'/images/profile/business/prof.png'} Contact={true} />
          <UserTitle fullname={"Amin gholami"} jobtitle={"Dentis"} city={"Los angles"} isPro={true} blogLevel={"Active"} follower={"11.2 k"} following={"23"} />
        </div>
      </div>
      <section className="lg:container flex lg:pr-0">
        <Navigation />
        <section className="lg:border-l lg:border-white-shade-4">
          <Company logo={"/images/profile/business/logo.png"} title={"Feel the comfort with newst shoes and sweaters "} desc={"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "} cover={"/images/profile/business/card.png"} />
          <CompanyAbout about={"Adidas has more than 20 years of experience in athletics industry through designing shoes and clothes also more than 20 collaborations wordwide "} city={" Los angless"} name={"Jason todd"} job={"Founder"} cover={"/images/blog/User.webp"} compimg={"/images/profile/business/about.png"} compimg2={"/images/profile/business/about.png"} />
          <Services />
          <Values />
          <Team />
          <Exprince exprince={"Adidas has more than 20 years of experience in athletics industry through designing shoes and clothes also more than 20 collaborations wordwide"} />
          <Gallery img1={"/images/profile/business/photo.png"} img2={"/images/profile/business/photo.png"} img3={"/images/profile/business/photo.png"} img4={"/images/profile/business/photo.png"} />
          <Blog />
          <Frequent />
          <Social email={"unreal@outlook.com"} call={"(603) 555-0123"} web={"byjason.com"} />
          <Contact />
          <Terms />
        </section>
      </section>
    </section>
  );
};

export default page;
