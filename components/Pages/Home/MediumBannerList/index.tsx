import React from "react";
import MediumBanner from "@/components/Banners/MediumBanner";

const MediumBannerList = () => {
  return (
    <section className="container my-40 flex flex-col gap-y-6 lg:grid lg:grid-cols-2 lg:gap-x-3">
      <MediumBanner name={"Supplemental income"}/>
      <MediumBanner name={"Supplemental income"}/>
    </section>
  );
};

export default MediumBannerList;
