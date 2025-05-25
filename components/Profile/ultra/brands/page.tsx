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
import  Intro  from "@/components/Profile/ultra/architecture/Intro";
import Team from "@/components/Profile/business/pro/Team";
import Exprince from "@/components/Profile/business/starter/Exprince";
import Social from "@/components/Profile/ultra/architecture/Social";
import { Project } from "@/components/Profile/ultra/architecture/Project";
import Services from "@/components/Profile/business/pro/Services";
import  Frequent  from "@/components/Profile/ultra/architecture/Frequent";
import Terms from "@/components/Profile/business/pro/Terms";
import Branches from "@/components/Profile/ultra/architecture/Branches";
import Values from "@/components/Profile/business/pro/Values";
import Contact from "@/components/Profile/business/pro/Contact";
import Gallery from "@/components/Profile/general/Gallery";

const page = () => {
  return (
    <section>
      <OverlayMenu />
     <div className="w-full relative   mt-10  lg:mb-28 mb-72 mx-auto container">
      <Cover background={"/images/profile/ultra/Acover.png"} />
      <div className="flex absolute top-12 left-1/2 -translate-x-1/2 p-10 mb-20 lg:mb-9 w-full container">
      <Avatar background={"/images/profile/ultra/Aprof.png"} />
        <UserTitle
          fullname={"SAP Construction"}
          jobtitle={"Architecture Company"}
          gmail={"Product designer"}
          isPro={true}
          blogLevel={"Active"}
   
          Contact={true} 
        />
        </div>
      </div>
      <div className="w-full h-1 border-t border-white-shade-4"></div>
      <section className="xl:flex lg:container lg:pr-0 px-2">
        <Navigation />
        <section className="lg:border-l  lg:border-white-shade-4 lg:pl-6 lg:w-3/4 w-full ">
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
          <Branches />
          <Services />
          <Values />
          <Project />
          <Project /> 
          <Team />
          <Exprince
            exprince={
              "Adidas has more than 20 years of experience in athletics industry through designing shoes and clothes also more than 20 collaborations wordwide "
            }
          />
          <Branches />
          <Gallery />
          <Blog
            title={"Blog"}
            desc={
              "is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
            }
            classes={"lg:pl-5"}
          />
          <Frequent />
          <Social
            desc={
              "is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
            }
          />
          <Contact />
          <Terms />
        </section>
      </section>
    </section>
  );
};

export default page;
