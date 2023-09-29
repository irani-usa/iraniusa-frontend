import Company from "@/components/Profile/business/starter/Company";
import Avatar from "@/components/Profile/general/Avatar";
import Cover from "@/components/Profile/general/Cover";
import UserTitle from "@/components/Profile/general/UserTitle";
import React from "react";
import Exprince from "@/components/Profile/business/starter/Exprince";
import Gallery from "@/components/Profile/business/starter/Gallery";
import Contacts from "@/components/Profile/business/starter/Contacts";
import Navigation from "@/components/Profile/business/starter/Navigation";
import About from "@/components/Profile/business/starter/About";

const page = () => {
  return (
    <section>
      <div className="w-full border-b border-white-shade-4">
        <div className="w-full relative">
          <Cover background={"/images/profile/business/cover.png"} />
        </div>
        <div className="w-full container flex relative -top-[100px] left-0 p-10 mb-20 lg:mb-10">
          <Avatar background={"/images/profile/business/prof.png"} Contact={true} />
          <UserTitle fullname={"Nima Aleagha"} jobtitle={"Dentist"} city={"Los angelas"} isPro={false} blogLevel={""} follower={""} following={""} />
        </div>
      </div>
      <section className="lg:container relative top-0 left-0 lg:flex  lg:pr-0">
        <Navigation />
        <section className="lg:border-l  lg:border-white-shade-4 ">
          <Company logo={"/images/profile/business/logo.png"} title={"Feel the comfort with newst shoes and sweaters "} desc={"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "} cover={"/images/profile/business/card.png"}/>
          <About about={"Adidas has more than 20 years of experience in athletics industry through designing shoes and clothes also more than 20 collaborations wordwide "} city={"Los Angelas"} name={"Jason todd"} job={"Founder"} cover={"/images/blog/User.webp"} />
          <Exprince exprince={"Adidas has more than 20 years of experience in athletics industry through designing shoes and clothes also more than 20 collaborations wordwide "} />
          <Gallery img1={"/images/profile/business/photo.png"} img2={"/images/profile/business/photo.png"} img3={"/images/profile/business/photo.png"} />
          <Contacts email={"unreal@outlook.com"} call={" (603) 555-0123"} web={" byjason.com"} />
        </section>
      </section>
    </section>
  );
};

export default page;
