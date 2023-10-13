import { Location } from "@/components/Icons/Outline";
import Gem from "@/components/Icons/Profile/Gem";
import Insta from "@/components/Icons/Profile/Insta";
import Tick from "@/components/Icons/Profile/Tick";
import React from "react";
interface UserTitleProps {
  fullname: string;
  jobtitle: string;
  city: string;
  isPro:boolean,
  blogLevel:string;
  follower:string;
  following:string;
}

const UserTitle: React.FC<UserTitleProps> = (props) => {
  return (
    <section className="absolute left-5  lg:left-[33%] top-[160px]  lg:top-32 lg:flex lg:gap-x-4">
    <div className=" flex  lg:items-center flex-col gap-y-2  lg:gap-y-0 ">
      <h1 className="flex items-center gap-x-3 text-black font-outfit font-semibold text-xl ">
       {props.fullname}
          {props.isPro && <Tick /> }
      </h1>
      <div className="w-full flex items-center lg:justify-center font-medium gap-x-6 text-white-shade-9 font-opensans lg:text-lg">
        <span>{props.jobtitle}</span>
        <span className="flex items-center gap-x-2 lg:hidden">
        <Location />
          {props.city}
        </span>
      </div>
    </div>
  {props.isPro &&  <div className="flex items-center gap-x-5 mt-7 lg:flex-col lg:mt-0 lg:border-l border-white-shade-4 lg:pl-4">
      <span className="text-black font-opensans font-bold flex items-center gap-x-2 lg:text-lg">
        Blog level
    <Gem />
      </span>
      <span className="font-opensans text-green flex items-center gap-x-2 font-medium lg:text-lg">
       <div className="bg-green w-[6px] h-[6px] rounded-full"></div>
        {props.blogLevel}
      </span>
    </div>}
{  props.isPro &&  <div className="flex items-center gap-x-7 py-4 lg:hidden">
      <div className="flex items-center gap-x-4">
        <span className="text-black font-opensans text-lg font-semibold">
          {props.follower}
        </span>
        <span className="text-white-shade-8 font-outfit text-lg font-medium flex items-center gap-x-2">
       <Insta />
          Followers
        </span>
      </div>
      <div className="flex items-center gap-x-4">
        <span className="text-black font-opensans text-lg font-semibold">
         {props.following}
        </span>
        <span className="text-white-shade-8 font-outfit text-lg font-medium flex items-center gap-x-2">
        <Insta />
          Following
        </span>
      </div>
    </div>}
  </section>
);
};

export default UserTitle;
