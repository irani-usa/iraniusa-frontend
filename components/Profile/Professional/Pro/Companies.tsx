import React from "react";

import Company from "./company";

import M from "@/components/Icons/Profile/M";

const Companies = () => {
  return (
    <div className=" w-full border-white-shade-4 border-b pb-8">
      <div className="container flex flex-col gap-y-6 mt-8 lg:px-0">
        <h1 className="text-[26px] font-outfit font-bold text-center text-black lg:text-3xl">
          Companies i worked with
        </h1>

        <section className="flex items-center gap-x-7 py-5">
          <Company classes={"bg-blue"} iconComp={<M />} />
          <Company classes={"bg-blue hidden lg:flex"} iconComp={<M />} />
        </section>
      </div>
    </div>
  );
};

export default Companies;
