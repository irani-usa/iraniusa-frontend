"use client";

import React, { useState } from "react";
import Education from "../../general/Education";
import Sectiontitle from "../../general/Sectiontitle";
import IconElement from "../../general/IconElement";
import EducationsIcon from "@/components/Icons/Profile/Educations";

interface EducationsProps {
  desc: string;
}

const Educations: React.FC<EducationsProps> = (props) => {
  const [educations, setEducations] = useState([
    { id: 1, title: "Developer", univercity: "MIT University", date: "2021" },
    { id: 1, title: "Math", univercity: "Harvard University", date: "2020" },
    { id: 1, title: "Art", univercity: "Leonardo University", date: "2003" },
  ]);
  return (
    <section className="w-full border-white-shade-4 border-b py-16 lg:py-8 container ">
      <div className=" flex flex-col gap-y-2 lg:px-0 lg:py-8 lg:gap-y-2 items-center">
      <IconElement icon={<EducationsIcon />}/>
      
        <Sectiontitle title={" Educations"} classes={"text-center mt-2"} />
        <p className=" text-white-shade-9  font-opensans text-center">{props.desc} </p>
        <div className="grid grid-cols-1 items-center mt-9 lg:mt-7 lg:grid-cols-2 gap-3 w-full">
          {educations.map((item, id) => {
            return (
              <Education
                key={id}
                title={item.title}
                university={item.univercity}
                date={item.date}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Educations;
