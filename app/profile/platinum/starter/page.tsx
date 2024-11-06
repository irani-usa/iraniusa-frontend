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
       <div className="w-full relative   mt-10  lg:mb-28 mb-72 mx-auto">
          <Cover background={"/images/profile/business/cover.png"} />
          <div className="flex absolute top-12 left-1/2 -translate-x-1/2 p-10 mb-20 lg:mb-9 w-full container">
            <Avatar background={"/images/profile/Prof.png"} Contact={true} />
            <UserTitle
              fullname={"Amin gholami"}
              jobtitle={"Product designer"}
              city={"Product designer"}
              isPro={true}
              blogLevel={"Active"}
              follower={"11.2 k"}
              following={"23"}
            />
          </div>
        </div>
      <section className="lg:container relative top-0 left-0 lg:flex  lg:pr-0">
        <Navigation />
        <section className="lg:border-l  lg:border-white-shade-4 lg:w-3/4 w-full">
          <Company title={"Feel the comfort with newst shoes and sweaters "} desc={"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "} cover={"/images/profile/business/A (2).png"} />
          <About about={"Adidas has more than 20 years of experience in athletics industry through designing shoes and clothes also more than 20 collaborations wordwide "} city={"Los Angelas"} name={"Jason todd"} job={"Founder"} cover={"/images/blog/User.webp"} title={"Who we are?"} />
          <Exprince compimg={"/images/profile/business/about.png"} compimg2={"/images/profile/business/about.png"} exprince={"Adidas has more than 20 years of experience in athletics industry through designing shoes and clothes also more than 20 collaborations wordwide "} />
          <Gallery />
          <Contacts desc={"description"} />
        </section>
      </section>
    </section>
  );
};

export default page;
