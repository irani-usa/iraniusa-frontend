import React from "react";

import About from "@/components/Profile/business/starter/About";
import {
  Cover,
  Avatar,
  UserTitle,
  Blog,
  Navigation,
} from "@/components/Profile/general";
import OverlayMenu from "@/components/Layout/OverlayMenu";
import  Intro  from "@/components/Profile/ultra/exhibition/Intro";
import Team from "@/components/Profile/business/pro/Team";
import Social from "@/components/Profile/ultra/architecture/Social";
import  Frequent  from "@/components/Profile/ultra/architecture/Frequent";
import Terms from "@/components/Profile/business/pro/Terms";
import { Artist } from "@/components/Profile/ultra/exhibition/Artist";
import { Tickets } from "@/components/Profile/ultra/exhibition/Tickets";
import Services from "@/components/Profile/business/pro/Services";
import Company from "@/components/Profile/ultra/exhibition/Company";
import Contact from "@/components/Profile/business/pro/Contact";
import { Gallery } from "@/components/Profile/Professional/Free";

const page = () => {
  return (
    <section>
      <OverlayMenu />
      <div className="w-full relative   mt-10  xl:mb-28 mb-72 mx-auto container">
      <Cover background={"/images/profile/ultra/Ecover.png"} />
      <div className="flex absolute top-12 left-1/2 -translate-x-1/2 p-10 mb-20 xl:mb-9 w-full container">
      <Avatar background={"/images/profile/ultra/Eprof.png"}  />
        <UserTitle
          fullname={"Funner Events"}
          jobtitle={"Event producer"}
          gmail={"Product designer"}
          isPro={true}
          blogLevel={"Active"}
          Contact={true}         />
        </div>
      </div>
      
      <div className="w-full h-1 border-t border-white-shade-4"></div>
      <section className="xl:flex lg:container lg:pr-0 px-2">
        <Navigation />
        <section className="lg:border-l  lg:border-white-shade-4 lg:pl-6  w-full ">
          <Intro title={"Get The Tickets, Now Or Never"} desc={"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys"} cover={"/images/profile/ultra/Chair.png"} />
          <About
          compimg={"/images/profile/business/about.png"} compimg2={"/images/profile/business/about.png"}
            about={
              "Adidas has more than 20 years of experience in athletics industry through designing shoes and clothes also more than 20 collaborations wordwide "
            }
            city={" Los angless"}
            name={"Jason todd"}
            job={"Founder"}
            cover={"/images/blog/User.webp"}
            title={"What is our company all about?"}
          />
          <Team />
          <Services />
          <Company />
          <Artist />
          <Tickets title={"Available Events And Tickets"} />
          <Tickets title={"Upcoming Events And Tickets"} />
          <Tickets title={"Additional Events And Tickets"} />
          <Gallery />
          <Contact />
          <Social
            desc={
              "is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
            }
          />
          <Blog
            title={"Blog"}
            desc={
              "is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
            }
            classes={"lg:pl-5"}
          />
          <Frequent />
          <Terms />
        </section>
      </section>
    </section>
  );
};

export default page;
