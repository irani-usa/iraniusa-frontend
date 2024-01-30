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
import { Intro } from "@/components/Profile/ultra/exhibition/Intro";
import Team from "@/components/Profile/business/pro/Team";
import Social from "@/components/Profile/ultra/architecture/Social";
import Gallery from "@/components/Profile/A&E/pro/Gallery";
import { Frequent } from "@/components/Profile/ultra/architecture/Frequent";
import Terms from "@/components/Profile/business/pro/Terms";
import { Company } from "@/components/Profile/Professional/Pro/index";
import Forms from "@/components/Profile/ultra/exhibition/Forms";
import { Service } from '@/components/Profile/ultra/realstate/Service'
import { Artist } from "@/components/Profile/ultra/exhibition/Artist";
import { Tickets } from "@/components/Profile/ultra/exhibition/Tickets";

const page = () => {
  return (
    <section>
      <OverlayMenu />
      <div className="w-full relative">
        <Cover background={"/images/profile/ultra/Ecover.png"} />
      </div>
      <div className="w-full container flex relative -top-[100px] left-0 p-10 mb-40 lg:mb-9">
        <Avatar background={"/images/profile/ultra/Eprof.png"} Contact={true} />
        <UserTitle
          fullname={"Funner Events"}
          jobtitle={"Event producer"}
          city={"Product designer"}
          isPro={true}
          blogLevel={"Active"}
          follower={"11.2 k"}
          following={"23"}
        />
      </div>
      <div className="w-full h-1 border-t border-white-shade-4"></div>
      <section className="lg:container lg:flex">
        <Navigation />
        <section className="lg:border-l lg:border-white-shade-4 ">
          <Intro
            about={
              "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys"
            }
            cover={"/images/profile/ultra/Chair.png"}
            title={"Get The Tickets, Now Or Never"}
          />
          <About
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
          <Service />
          <Artist />
          <Company title={"Venue Partners"} />
          <Tickets title={"Available Events And Tickets"} />
          <Tickets title={"Upcoming Events And Tickets"} />
          <Tickets title={"Additional Events And Tickets"} />
          <Gallery />
          <Forms desc={""} />
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
