import React from "react";

import Company from "./Company";

import M from "@/components/Icons/Profile/M";

import Sectiontitle from "../../general/Sectiontitle";


interface CompaniesProps {
  title:string,
}


const Companies: React.FC<CompaniesProps> = (props) => {
  return (
    <div className=" w-full border-white-shade-4 border-b pb-8">
      <div className=" flex flex-col gap-y-6 mt-8 lg:px-0">
      <h1 className=" text-[27px] font-outfit font-bold text-black text-center lg:text-3xl">
        {props.title}
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
