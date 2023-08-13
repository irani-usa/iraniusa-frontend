
import React from "react";
interface PlanCardProps {
    content: string,
    price:string,
    theme: string,
    classes:string,
    iconComp: React.ReactNode
}

const PlanCard: React.FC<PlanCardProps> = (props) => {
  return (
    <div className={`${props.classes} border-[1.5px] border-white-shade-4 rounded-2xl`}>
      <div className={`${props.theme} w-full h-[10px]  rounded-tr-full rounded-tl-full`}></div>
      <div className="bg-white-shade-2 flex items-center justify-between">
        <h1 className="text-black font-outfit font-semibold text-lg border-b-[1px] border-black w-1/2 text-center py-4">
          Starter
        </h1>
        <h1 className="text-white-shade-8 font-outfit font-semibold text-lg text-center  w-1/2">
          Pro
        </h1>
      </div>
      <div className="flex items-end 
      ">
        <div className="flex items-end justify-between w-full border-b-[1.5px] p-5 border-white-shade-4">
        <div className="flex gap-x-3 items-center">
          <div className="p-4 border-[1px] border-white-shade-4 rounded-full">
            {props.iconComp}
          </div>
          <div className="flex flex-col gap-y-2">
            <h1 className="text-black font-semibold font-outfit text-base">{props.content}</h1>
            <h3 className="text-white-shade-8 font-opensans font-semibold text-xs">No credit card required </h3>
          </div>
        </div>
        <h1 className="text-black font-semibold font-outfit text-base">{props.price}</h1>
        </div>
      </div>
      <div className="flex border-b-[1.5px] border-white-shade-4">
        <ul className="flex flex-col p-5  font-opensans font-bold gap-y-3 text-xs">
            <li className=" text-black flex items-center gap-x-2"> <div className="p-1 bg-green rounded-full"></div> Profile Pic</li>
            <li className="  text-black flex items-center gap-x-2"> <div className="p-1 bg-green rounded-full"></div>Who am i + 2 Pic</li>
            <li className="  text-black flex items-center gap-x-2"> <div className="p-1 bg-green rounded-full"></div>My Galley</li>
            <li className="text-white-shade-8 flex items-center gap-x-2"> <div className="p-1 bg-white-shade-4 rounded-full"></div> Experience & Project</li>
            <li className="text-white-shade-8 flex items-center gap-x-2"> <div className="p-1 bg-white-shade-4 rounded-full"></div>Educations </li>
            <li className="text-white-shade-8 flex items-center gap-x-2"><div className="p-1 bg-white-shade-4 rounded-full"></div>Contact</li>
            <li className="text-white-shade-8 flex items-center gap-x-2"><div className="p-1 bg-white-shade-4 rounded-full"></div>Companies i worked</li>
            <li className="text-white-shade-8 flex items-center gap-x-2"><div className="p-1 bg-white-shade-4 rounded-full"></div>Followers Instagram</li>
        </ul>
        <ul className="flex flex-col p-5  font-opensans font-bold gap-y-3 text-xs">
        <li className="text-white-shade-8 flex items-center gap-x-2"><div className="p-1 bg-white-shade-4 rounded-full"></div>What is my job about</li>
        <li className="text-white-shade-8 flex items-center gap-x-2"><div className="p-1 bg-white-shade-4 rounded-full"></div>My hard Skills</li>
        <li className="text-white-shade-8 flex items-center gap-x-2"><div className="p-1 bg-white-shade-4 rounded-full"></div>Project i have done</li>
        <li className="text-white-shade-8 flex items-center gap-x-2"><div className="p-1 bg-white-shade-4 rounded-full"></div>My soft skills </li>
        <li className="text-white-shade-8 flex items-center gap-x-2"><div className="p-1 bg-white-shade-4 rounded-full"></div>Courses i finished</li>
        <li className="text-white-shade-8 flex items-center gap-x-2"><div className="p-1 bg-white-shade-4 rounded-full"></div>My blog</li>
        <li className="text-white-shade-8 flex items-center gap-x-2"><div className="p-1 bg-white-shade-4 rounded-full"></div>Socials</li>
        <li className="text-white-shade-8 flex items-center gap-x-2"><div className="p-1 bg-white-shade-4 rounded-full"></div>Level Blog</li>
        </ul>
      </div>
<div className="p-3">
<button type="button" className={`${props.theme}  w-full py-3 font-opensans font-medium rounded-md`}>Choose plan</button>
</div>
    </div>
  );
};

export default PlanCard;
