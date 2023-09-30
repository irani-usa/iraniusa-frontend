import React from "react";

interface EducationProps {
  title: string;
  university: string;
  date: string;
}

const Education: React.FC<EducationProps> = (props) => {
  return (
    <div className="flex flex-col w-full">
      <h1 className="text-lg font-medium text-black">{props.title}</h1>
      <span className="text-white-shade-9 font-medium">{props.university}</span>
      <span className="text-white-shade-9 font-medium">{props.date}</span>
    </div>
  );
};

export default Education;
