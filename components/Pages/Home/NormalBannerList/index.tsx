import React from "react";
import NormallBanner from "@/components/Banners/NormalBanner";

const NormalBannerList = () => {
  return (
    <section className="container my-24 flex flex-col gap-y-6 lg:grid lg:grid-cols-2 lg:gap-x-3">
      <NormallBanner name={"Supplemental income"} jobTitle={"Dentist"} />
      <NormallBanner name={"Supplemental income"} jobTitle={"Dentist"} />
    </section>
  );
};

export default NormalBannerList;
