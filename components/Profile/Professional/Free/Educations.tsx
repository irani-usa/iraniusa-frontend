"use client";

import React, { useState } from "react";
import Education from "../../general/Education";
import Sectiontitle from "../../general/Sectiontitle";

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
      <div className="container flex flex-col gap-y-6 lg:px-0 lg:py-8 items-center">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.15218 2.91638C9.33637 2.36121 10.6634 2.36121 11.8476 2.91638L17.4237 5.53057C18.6366 6.09921 18.6366 8.06761 17.4237 8.63625L11.8477 11.2504C10.6635 11.8056 9.33644 11.8056 8.15225 11.2504L2.57618 8.63621C1.36328 8.06757 1.36328 6.09917 2.57618 5.53053L8.15218 2.91638Z" stroke="black" stroke-width="1.25002"/>
<path d="M1.6665 7.08398V11.6674" stroke="black" stroke-width="1.25002" stroke-linecap="round"/>
<path d="M15.8333 9.58398V13.8552C15.8333 14.6953 15.4137 15.4817 14.6789 15.8887C13.4552 16.5664 11.4966 17.5007 9.99991 17.5007C8.50322 17.5007 6.54462 16.5664 5.32096 15.8887C4.58609 15.4817 4.1665 14.6953 4.1665 13.8552V9.58398" stroke="black" stroke-width="1.25002" stroke-linecap="round"/>
</svg>

        <Sectiontitle title={" Educations"} classes={"text-center"} />
        <p className=" text-white-shade-9  font-opensans text-center">{props.desc} </p>
        <div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-3 w-full">
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
