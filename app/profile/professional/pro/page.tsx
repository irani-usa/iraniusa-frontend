import React from "react";

import OverlayMenu from "@/components/Layout/OverlayMenu";

import {Cover,UserTitle,Avatar,Blog, Navigation} from "@/components/Profile/general/index";

import {AboutMe,Experinces, Gallery} from "@/components/Profile/Professional/Free/index";

import {Educations,Social,Company,Job,HardSkills,Project} from "@/components/Profile/Professional/Pro/index";
import Contact from "@/components/Profile/business/pro/Contact";

const page = () => {
  return (
    <section>
      <OverlayMenu />
      <div className="w-full relative   mt-10  lg:mb-28 mb-[310px] mx-auto container">
      <Cover background={"/images/profile/Cover.png"} />
      <div className="flex absolute top-12 left-1/2 -translate-x-1/2 p-10 mb-20 lg:mb-9 w-full container">
      <Avatar background={"/images/profile/Prof.png"}  />
        <UserTitle
          fullname={"Amin gholami"}
          gmail="arashdevarts@gmail.com"
          jobtitle={"Product designer"}
          isPro={true}
          blogLevel={"Active"}
          Contact={true}
        />
        </div>
      </div>
    
      <div className="w-full h-1 border-t border-white-shade-4"></div>
      <section className="lg:flex lg:container lg:pr-0 ">
        <Navigation />
        <section className="lg:border-l lg:border-white-shade-4 lg:px-6  w-full">
        <AboutMe title={"Product designer with 10 years of  experience"} aboutexprnce={"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "} about={"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "} cover={"/images/profile/round.png"} exp={"+10"} city={"Los Angelas"} img={"/images/profile/cart.png"} img2={"/images/profile/card.png"} />
        <Experinces exprince={"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "} />
          < Company title={"Company i worked with"} />
          <Job jobabout={"     Digital product designers work in a delicate space that straddles the line between programmer and artist, embracing aspects of both realms . How do I become a digital product designer?  Becoming a digital product designer typically requires a strong portfolio or track record as a developer."} jobcover={"/images/profile/desk.png"} />
          <HardSkills />
          <Project softskillabout={"Addition skills and languages that are essential to the services I provide. "} />
          <Educations courseabout={"is simply dummy text of the printing and typesetting industry.  "} educationabout={"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "} />
          <Gallery />
          <Blog title={"Blog"} desc={"is simply dummy text of the printing and typesetting industry. Lorem Ipsum"} classes={"lg:pl-0"} />
          <Contact />
          <Social desc={"is simply dummy text of the printing and typesetting industry. LoremIpsum"} />
        </section>
      </section>
    </section>
  );
};

export default page;
