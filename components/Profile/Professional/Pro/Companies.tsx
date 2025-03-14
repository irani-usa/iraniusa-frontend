import React from "react";

import Company from "./Company";

import M from "@/components/Icons/Profile/M";

import Sectiontitle from "../../general/Sectiontitle";
import IconElement from "../../general/IconElement";
import CompanyIcon from "@/components/Icons/Profile/Company";


interface CompaniesProps {
  title:string,
}


const Companies: React.FC<CompaniesProps> = (props) => {
  return (
    <div className=" w-full border-white-shade-4 border-b pb-8">
      <div className=" flex flex-col gap-y-6 mt-8 lg:px-0 items-center">
    
      <IconElement icon={<CompanyIcon />}/>
      <h1 className=" text-[27px] font-outfit font-bold text-black text-center lg:text-3xl">
        {props.title}
  </h1>
        <section className="flex items-center gap-7 py-5 flex-col w-full">
          <Company classes={"bg-blue"} iconComp={<M />} date={2021} title="Riv Design Sweden"/>
          <Company classes={"bg-blue"} iconComp={<M />} date={2021} title="Riv Design Sweden"/>
          <Company classes={"bg-blue"} iconComp={<M />} date={2021} title="Riv Design Sweden"/>
        </section>
      </div>
    </div>
  );
};

export default Companies;
