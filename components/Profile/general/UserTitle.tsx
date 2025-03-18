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
    <section className="absolute left-0 right-0 m-auto  lg:left-[33%]  top-32 lg:flex lg:gap-x-4 justify-between ">
      <div className=" flex  flex-col gap-y-2  lg:gap-y-0 ">
        <h1 className="flex items-center justify-center lg:justify-start gap-x-3 text-black font-outfit font-semibold text-xl ">
          {props.fullname}
          {props.isPro && <Tick />}
        </h1>
        <div className="w-full flex justify-center items-center  font-medium gap-x-2 text-white-shade-9 font-opensans lg:text-lg">
          <span>{props.jobtitle}</span>
          <span className="flex items-center gap-2">
             {props.gmail && ` - ${props.gmail}`}
          </span>
        </div>
      </div>
  <div className="flex lg:flex-row flex-col justify-between items-center lg:w-1/2 gap-y-4">
  {props.isPro && (
        <div className="flex items-center justify-center lg:justify-start gap-x-5 mt-7 lg:flex-col lg:mt-0 lg:border-l border-white-shade-4 lg:pl-4">
          <span className="text-black font-opensans font-bold flex items-center gap-x-2 lg:text-lg">
            Blog level
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_704_7172)">
                <path
                  d="M3.28002 8.7178L6.31002 4.82779C6.51002 4.57779 6.77002 4.36781 7.05002 4.22781C7.34002 4.08781 7.65002 4.01781 7.97002 4.00781H15.75C16.07 4.00781 16.39 4.07781 16.67 4.22781C16.96 4.36781 17.21 4.57779 17.41 4.82779L20.44 8.7178C20.72 9.0878 20.86 9.5378 20.84 9.9978C20.82 10.4578 20.64 10.9078 20.33 11.2378L12.52 19.6978C12.43 19.7878 12.33 19.8678 12.21 19.9178C12.09 19.9678 11.97 19.9978 11.84 19.9978C11.71 19.9978 11.59 19.9678 11.47 19.9178C11.35 19.8678 11.25 19.7878 11.16 19.6978L3.36002 11.2378C3.05002 10.8978 2.87002 10.4578 2.85002 9.9978C2.83002 9.5378 2.97002 9.0778 3.25002 8.7178H3.28002Z"
                  stroke="#391AF7"
                  strokeWidth="1.5"
                  stroke-miterlimit="10"
                />
                <path
                  d="M15.8701 10.8008L13.8701 12.8008"
                  stroke="#391AF7"
                  strokeWidth="1.5"
                  stroke-miterlimit="10"
                  strokeLinecap="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_704_7172">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <span className="font-opensans text-green flex items-center gap-x-2 font-medium lg:text-lg">
            <div className="bg-green w-[6px] h-[6px] rounded-full"></div>
            {props.blogLevel}
          </span>
          
        </div>        
      )}
      {props.Contact && <div className="flex items-center gap-x-2 w-full px-5 lg:w-max lg:px-0">
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
