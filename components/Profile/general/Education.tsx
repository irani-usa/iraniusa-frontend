import EducationsIcon from "@/components/Icons/Profile/Educations";
import React from "react";

interface EducationProps {
  title: string;
  university: string;
  date?: string;
  city?:string
}

const Education: React.FC<EducationProps> = (props) => {
  return (
    <div className="flex flex-col lg:flex-row items-center-start text-black  w-full lg:items-center lg:justify-between  p-4 rounded-xl border border-white-shade-4 ">
     <div className="flex items-start gap-3">
     <div className="bg-white-shade-3 p-3 lg:p-2 rounded-lg">
     <EducationsIcon />

      </div>
      <div className="flex flex-col">
        <h1 className="text-lg font-medium text-black">{props.title}</h1>
        <span className="text-white-shade-9 font-medium">{props.university}</span>
        <span className="text-white-shade-9 font-medium">{props.city}</span>

      </div>
     </div>
     {props.date &&<span className="bg-white-shade-3 px-4 mt-3 lg:mt-0 py-1 w-[42%] max-w-[50%] lg:ml-0 ml-[54px] lg:w-full lg:max-w-full rounded-lg font-medium">{props.date}</span>
    }
    
    </div>
  );
};

export default Education;
