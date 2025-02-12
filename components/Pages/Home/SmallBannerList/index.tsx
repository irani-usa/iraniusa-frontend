import React from "react";
import SmallBanner from "@/components/Banners/SmallBanner";
import { Arrowbtn } from "@/components/Profile/general";

const SmallBannerList = () => {
  return (
    <section className="container gap-28 mt-20 flex flex-col gap-y-6 lg:grid lg:grid-cols-3 p-5">
      <SmallBanner name={"Supplemental income"} jobTitle={"Dentist"} role=""/>
      <SmallBanner name={"Supplemental income"} jobTitle={"Dentist"} role=""/>
      <SmallBanner name={"Supplemental income"} jobTitle={"Dentist"} role=""/>
      <SmallBanner name={"Supplemental income"} jobTitle={"Dentist"} role=""/>
      <SmallBanner name={"Supplemental income"} jobTitle={"Dentist"} role=""/>
      <SmallBanner name={"Supplemental income"} jobTitle={"Dentist"} role=""/>
      <Arrowbtn classes={"lg:hidden"} />
    </section>
  );
};

export default SmallBannerList;
