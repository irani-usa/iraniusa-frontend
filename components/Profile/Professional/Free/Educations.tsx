"use client";

import React, { useState } from "react";
import Education from "../../general/Education";

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
    <section className="w-full border-white-shade-4 border-b py-8">
      <div className="container flex flex-col gap-y-6 lg:px-0">
        <h1 className="text-[26px] font-outfit font-bold text-black">
          Educations
        </h1>
        <p className=" text-white-shade-9  font-opensans">{props.desc} </p>
        <div className="grid grid-cols-2 items-center lg:grid-cols-3">
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
