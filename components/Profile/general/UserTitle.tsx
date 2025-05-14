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
    <section className="absolute left-0 right-0 m-auto   xl:left-[27%] 2xl:left-[25%] top-[110px] xl:top-[120px] xl:flex  ">
      <div className=" flex  flex-col gap-y-2  xl:w-[75%] 2xl:w-[53%]  ">
        <h1 className="flex items-center justify-center xl:justify-start gap-x-3 text-black font-outfit font-semibold text-xl ">
          {props.fullname}
          {props.isPro && <Tick />}
        </h1>
        <div className="w-full xl:flex-row flex-col flex justify-center xl:justify-start items-center  font-medium gap-x-2 text-white-shade-9 font-opensans xl:text-xl">
          <span>{props.jobtitle}</span>
          <span className="xl:flex hidden  items-center gap-2 ">
             {props.gmail && ` - ${props.gmail}`}
          </span>
          <span className="xl:hidden mt-1">
          {props.gmail}
          </span>
        </div>
      </div>
  <div className="flex xl:flex-row flex-col justify-around xl:justify-start xl:gap-x-[165px] 2xl:gap-x-[380px]  items-center xl:w-full  gap-y-4 gap-x-10">
  {props.isPro && (
        <div className="flex items-center justify-center xl:justify-start xl:items-start gap-x-5 mt-6 xl:flex-col xl:mt-0 xl:border-l border-white-shade-4 xl:pl-4">
          <span className="text-black font-opensans font-bold flex items-center gap-x-2 xl:text-xl">
            Blog level
       
          </span>
          <span className="font-opensans xl:bg-white xl:border-none xl:px-0 bg-[#58BD7D]/10 xl:border border-[#58BD7D]/12 px-2 rounded-full py-0.5 text-green flex items-center gap-x-2 font-medium xl:text-xl">
            {props.blogLevel}
          </span>
          
        </div>        
      )}
      {props.Contact && <div className="flex items-center gap-x-2 w-full px-5  xl:w-max mt-2 xl:mt-0 xl:px-0 ">
            <div className="bg-primary-shade-4/10 xl:rounded-xl flex items-center justify-center font-opensans gap-x-3 py-2 rounded-xl px-4 xl:py-3 w-full xl:w-max ">
              <Like />
              <span className="text-[#075DB7] font-medium">3.4k</span>
            </div>
            <button
              className="hover:bg-blue hover:text-white font-opensans py-2 rounded-xl xl:rounded-2xl px-6 xl:py-3 xl:px-10 w-full xl:w-max border border-white-shade-4" 
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
