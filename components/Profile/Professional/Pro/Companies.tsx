import React from "react";

import Company from "./company";

import M from "@/components/Icons/Profile/M";

import Sectiontitle from "../../general/Sectiontitle";

const Companies = () => {
  return (
    <div className=" w-full border-white-shade-4 border-b pb-8">
      <div className="container flex flex-col gap-y-6 mt-8 lg:px-0">
      <Sectiontitle title={"Companies I worked with"} />
        <section className="flex items-center gap-x-7 py-5">
          <Company classes={"bg-blue"} iconComp={<M />} />
          <Company classes={"bg-blue hidden lg:flex"} iconComp={<M />} />
        </section>
      </div>
    </div>
  );
};

export default Companies;
