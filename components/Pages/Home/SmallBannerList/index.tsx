import React from "react";
import SmallBanner from "@/components/Banners/SmallBanner";
import { Arrowbtn } from "@/components/Profile/general";

const SmallBannerList = () => {
  return (
    <section className="container mt-20 flex flex-col gap-y-6 lg:grid lg:grid-cols-3 lg:gap-x-3">
      <SmallBanner name={"Supplemental income"} jobTitle={"Dentist"} />
      <SmallBanner name={"Supplemental income"} jobTitle={"Dentist"} />
      <SmallBanner name={"Supplemental income"} jobTitle={"Dentist"} />
      <SmallBanner name={"Supplemental income"} jobTitle={"Dentist"} />
      <SmallBanner name={"Supplemental income"} jobTitle={"Dentist"} />
      <SmallBanner name={"Supplemental income"} jobTitle={"Dentist"} />
      <Arrowbtn classes={"lg:hidden"} />
    </section>
  );
};

export default SmallBannerList;
