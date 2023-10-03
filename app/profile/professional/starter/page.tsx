import React from "react";

import OverlayMenu from "@/components/Layout/OverlayMenu";

import {AboutMe,Educations,Experinces,Gallery} from "@/components/Profile/Professional/Free/index";

import {Avatar,Cover,Contacts,Navigation,UserTitle} from "@/components/Profile/general/index";

const page = () => {
  return (
    <section>
      <OverlayMenu />
      <div className="w-full relative">
        <Cover background={"/images/profile/Cover.png"} />
      </div>
      <div className="container flex relative -top-[100px] left-0 p-10 mb-20 lg:mb-9">
        <Avatar background={"/images/profile/Prof.png"} Contact={false} />
        <UserTitle
          fullname={"Amin gholami"}
          jobtitle={"Product designer"}
          city={"Los angles"}
          isPro={false}
          blogLevel={""}
          follower={""}
          following={""}
        />
      </div>
      <div className="w-full h-1  border-t border-white-shade-4"></div>
      <section className="flex lg:container">
        <Navigation />
        <section className="lg:border-l  lg:border-white-shade-4 lg:pl-6">
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
              "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
            }
          />
          <Educations
            desc={
              "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
            }
          />
          <Gallery
          />
          <Contacts
            email={"unreal@outlook.com"}
            call={"(603) 555-0123"}
            web={"byjason.com"}
          />
        </section>
      </section>
    </section>
  );
};

export default page;
