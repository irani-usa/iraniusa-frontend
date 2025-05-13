import { Location } from "@/components/Icons/Outline";
import Gem from "@/components/Icons/Profile/Gem";
import Insta from "@/components/Icons/Profile/Insta";
import Like from "@/components/Icons/Profile/Like";
import Tick from "@/components/Icons/Profile/Tick";
import React from "react";
interface UserTitleProps {
  fullname: string;
  jobtitle: string;
  gmail: string;
  isPro: boolean;
  blogLevel: string;
  Contact: boolean,

}

const UserTitle: React.FC<UserTitleProps> = (props) => {
  return (
    <section className="absolute left-0 right-0 m-auto   lg:left-[27%] 2xl:left-[25%] top-[110px] lg:top-[120px] lg:flex  ">
      <div className=" flex  flex-col gap-y-2  lg:w-[75%] 2xl:w-[53%]  ">
        <h1 className="flex items-center justify-center lg:justify-start gap-x-3 text-black font-outfit font-semibold text-xl ">
          {props.fullname}
          {props.isPro && <Tick />}
        </h1>
        <div className="w-full lg:flex-row flex-col flex justify-center lg:justify-start items-center  font-medium gap-x-2 text-white-shade-9 font-opensans lg:text-lg">
          <span>{props.jobtitle}</span>
          <span className="lg:flex hidden  items-center gap-2 ">
             {props.gmail && ` - ${props.gmail}`}
          </span>
          <span className="lg:hidden mt-1">
          {props.gmail}
          </span>
        </div>
      </div>
  <div className="flex lg:flex-row flex-col justify-around lg:justify-start lg:gap-x-[165px] 2xl:gap-x-[380px]  items-center lg:w-full  gap-y-4 gap-x-10">
  {props.isPro && (
        <div className="flex items-center justify-center lg:justify-start lg:items-start gap-x-5 mt-6 lg:flex-col lg:mt-0 lg:border-l border-white-shade-4 lg:pl-4">
          <span className="text-black font-opensans font-bold flex items-center gap-x-2 lg:text-lg">
            Blog level
       
          </span>
          <span className="font-opensans lg:bg-white lg:border-none lg:px-0 bg-[#58BD7D]/10 lg:border border-[#58BD7D]/12 px-2 rounded-full py-0.5 text-green flex items-center gap-x-2 font-medium lg:text-lg">
            {props.blogLevel}
          </span>
          
        </div>        
      )}
      {props.Contact && <div className="flex items-center gap-x-2 w-full px-5  lg:w-max mt-2 lg:mt-0 lg:px-0 ">
            <div className="bg-primary-shade-4/10 lg:rounded-xl flex items-center justify-center font-opensans gap-x-3 py-2 rounded-lg px-4 lg:py-3 w-full lg:w-max ">
              <Like />
              <span className="text-[#075DB7] font-medium">3.4k</span>
            </div>
            <button
              className="hover:bg-blue hover:text-white font-opensans py-2 rounded-xl lg:rounded-2xl px-6 lg:py-3 lg:px-10 w-full lg:w-max border border-white-shade-4" 
              type="button"
            >
              Contact
            </button>
          </div>}
  </div>



    </section>
  );
};

export default UserTitle;
