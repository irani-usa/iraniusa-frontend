import React from "react";

import FeatureNotAvailable from "../../Layout/FeatureNotAvailable";

import { Input } from "../../Form";
import {
  About,
  AccountInfo,
  Cover,
  Gallery,
  ProfileCircle,
} from "../../General";

const General = () => {
  return (
    <section className="flex gap-x-10 w-full h-full p-7">
      {/* <FeatureNotAvailable /> */}
      <div className="w-1/4 h-[88%] p-5 rounded-2xl border border-white-shade-3">
        <ProfileCircle />
        <div className="w-full flex flex-col gap-y-4 mb-4">
          <Input label={"Full name"} placeHolder={"Nima Aleagha"} />
          <Input label={"Location"} placeHolder={"Los Angles"} />
          <Input label={"Your field"} placeHolder={"Product designer"} />
        </div>
        <AccountInfo />
      </div>
      <div className="flex flex-col gap-y-5 w-3/4">
        <Cover />
        <About />
        <Gallery />
      </div>
    </section>
  );
};

export default General;
