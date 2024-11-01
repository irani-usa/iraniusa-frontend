import Company from "@/components/Profile/business/starter/Company";
import Avatar from "@/components/Profile/general/Avatar";
import Cover from "@/components/Profile/general/Cover";
import UserTitle from "@/components/Profile/general/UserTitle";
import React from "react";
import Exprince from "@/components/Profile/business/starter/Exprince";
import Gallery from "@/components/Profile/business/starter/Gallery";
import Contacts from "@/components/Profile/general/Contacts";
import Navigation from "@/components/Profile/business/starter/Navigation";
import About from "@/components/Profile/business/starter/About";

const page = () => {
  return (
    <section>     
      <div className="w-full relative container  mt-10  lg:mb-28 mb-52 mx-auto">
        <Cover background={"/images/profile/business/cover.png"} />
        <div className="flex absolute top-12 left-0 p-10 mb-20 lg:mb-9 w-full">
        <Avatar background={"/images/profile/business/Prof.png"} Contact={true} />
        <UserTitle fullname={"Nima Aleagha"} jobtitle={"Dentist"} city={"Los angelas"} isPro={false} blogLevel={""} follower={""} following={""} />
      </div>
      </div>
      <section className="lg:container relative top-0 left-0 lg:flex  lg:pr-0">
        <Navigation />
        <section className="lg:border-l  lg:border-white-shade-4 ">
          
          <About about={"Adidas has more than 20 years of experience in athletics industry through designing shoes and clothes also more than 20 collaborations wordwide "} city={"Los Angelas"} name={"Jason todd"} job={"Founder"} cover={"/images/blog/User.webp"} title={"Who we are?"} />
          <Exprince exprince={"Adidas has more than 20 years of experience in athletics industry through designing shoes and clothes also more than 20 collaborations wordwide "} />
          <Gallery/>
          <Contacts desc={"description"} />
        </section>
      </section>
    </section>
  );
};

export default page;
