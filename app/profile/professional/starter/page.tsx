import React from "react";

import OverlayMenu from "@/components/Layout/OverlayMenu";

import {AboutMe,Educations,Experinces,Gallery} from "@/components/Profile/Professional/Free/index";

import {Avatar,Cover,Contacts,Navigation,UserTitle} from "@/components/Profile/general/index";

const page = () => {
  return (
    <section>
      <OverlayMenu />
     <div className="w-full relative   mt-10  lg:mb-28 mb-72 mx-auto container ">
      <Cover background={"/images/profile/Cover.png"} />
      <div className="flex absolute top-12 left-1/2 -translate-x-1/2 p-10 mb-20 lg:mb-9 w-full container">
       <Avatar background={"/images/profile/Prof.png"}  />
           <UserTitle
             fullname={"Amin gholami"}
             gmail="arashdevarts@gmail.com"
             jobtitle={"Product designer"}
             isPro={false}
             blogLevel={"Active"}
             Contact={false}
           />
        </div>
      </div>
    
      <div className="w-full h-1  border-t border-white-shade-4"></div>
      <section className="lg:flex lg:container lg:pr-0">
        <Navigation />
        <section className="lg:border-l  lg:border-white-shade-4 lg:pl-6 lg:w-3/4 w-full ">
          <AboutMe
            title={"Product designer with 10 years of  experience"}
            aboutexprnce={
              "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
            }
            about={
              "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
            }
            cover={"/images/profile/round.png"}
            exp={"+10"}
            city={"Los Angelas"}
            img={"/images/profile/cart.png"}
            img2={"/images/profile/card.png"}
          />
          <Experinces
            exprince={
              "My experience and projects show my expertise and knowledge. "
            }
          />
          <Educations
            desc={
              "A brief list of my educational background."
            }
          />
          <Gallery
          />
          <Contacts desc={"is simply dummy text of the printing and typesetting industry. Lorem Ipsum "}      
          />
        </section>
      </section>
    </section>
  );
};

export default page;
