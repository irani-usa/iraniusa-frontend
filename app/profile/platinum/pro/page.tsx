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
import Blog from "@/components/Profile/general/Blog";
import Frequent from "@/components/Profile/business/pro/Frequent";
import Social from "@/components/Profile/Professional/Pro/Social";
import Contact from "@/components/Profile/business/pro/Contact";
import Terms from "@/components/Profile/business/pro/Terms";
import Navigation from "@/components/Profile/Professional/Pro/Navigation";
import Subscription from "@/components/Profile/business/pro/Subscription";
import Project from "@/components/Profile/business/pro/Project";

const page = () => {
  return (
    <section>
      <OverlayMenu />     
      <div className="w-full relative container  mt-10  lg:mb-28 mb-72 mx-auto">
        <Cover background={"/images/profile/business/cover.png"} />
        <div className="flex absolute top-12 left-0 p-10 mb-20 lg:mb-9 w-full">
        <Avatar background={'/images/profile/business/Prof.png'} Contact={true} />
        <UserTitle fullname={"Amin gholami"} jobtitle={"Dentis"} city={"Los angles"} isPro={true} blogLevel={"Active"} follower={"11.2 k"} following={"23"} />
        </div>
      </div>
      <div className="w-full h-1 border-t border-white-shade-4"></div>

      <section className="container relative top-0 left-0 lg:flex  lg:pr-0">
        <Navigation />
        <section className="lg:w-3/4 w-full">
          <Company  title={"Feel the comfort with newst shoes and sweaters "} desc={"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "} cover={"/images/profile/business/A (2).png"} />
          <CompanyAbout about={"Adidas has more than 20 years of experience in athletics industry through designing shoes and clothes also more than 20 collaborations wordwide "} city={" Los angless"} name={"Jason todd"} job={"Founder"} cover={"/images/blog/User.webp"} compimg={"/images/profile/business/about.png"} compimg2={"/images/profile/business/about.png"} />
          <Services />
          <Values />
          <Subscription />          
          <Team />
          <Project />
          <Exprince exprince={"Adidas has more than 20 years of experience in athletics industry through designing shoes and clothes also more than 20 collaborations wordwide"} compimg={"/images/profile/business/about.png"} compimg2={"/images/profile/business/about.png"}/>
          <Gallery img1={"/images/profile/business/Gallery.png"} img2={"/images/profile/business/Gallery4.png"} img3={"/images/profile/business/Gallery2.png"} img4={"/images/profile/business/Gallery3.png"} />
          <Blog title={"Blog"} desc={"is simply dummy text of the printing and typesetting industry. Lorem Ipsum"} classes={"lg:pl-5"} />
          <Frequent />
          <Social  desc={"description"} />
          <Contact />
          <Terms />
        </section>
      </section>
    </section>
  );
};

export default page;
