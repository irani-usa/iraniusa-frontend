import EducationsIcon from "@/components/Icons/Profile/Educations";
import React from "react";

interface EducationProps {
  title: string;
  university: string;
  date: string;
}

const Education: React.FC<EducationProps> = (props) => {
  return (
    <div className="flex  w-full items-center justify-between px-5 py-2 rounded-xl border border-white-shade-4 ">
     <div className="flex items-center gap-5">
     <div className="bg-white-shade-3 p-2 rounded-lg">
     <EducationsIcon />

      </div>
      <div className="flex flex-col">
        <h1 className="text-lg font-medium text-black">{props.title}</h1>
        <span className="text-white-shade-9 font-medium">{props.university}</span>
      </div>
     </div>
      <span className="bg-white-shade-3 px-4 py-1 rounded-lg font-medium">{props.date}</span>
    </div>
  );
};

export default Education;
