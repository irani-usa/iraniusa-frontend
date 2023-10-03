import Call from "@/components/Icons/Profile/Call";
import Email from "@/components/Icons/Profile/Email";
import Facebook from "@/components/Icons/Profile/Facebook";
import Instagram from "@/components/Icons/Profile/Instagram";
import Telegram from "@/components/Icons/Profile/Telegram";
import Twitter from "@/components/Icons/Profile/Twitter";
import W from "@/components/Icons/Profile/W";
import Website from "@/components/Icons/Profile/Website";
import Whatsapp from "@/components/Icons/Profile/Whatsapp";
import Link from "next/link";
import React from "react";

interface SocialProps {
  desc:string,
  email:string,
  call:string,
  web:string,
}

const Social: React.FC<SocialProps> = (props) =>  {
  return (
    <div className=" w-full border-white-shade-4 border-b pb-8 lg:pb-12">
      <div className="container flex flex-col lg:items-center gap-y-6 mt-8 lg:px-0">
        <h1 className="text-[26px] font-outfit font-bold text-center text-black lg:text-3xl lg:mt-9">
        
          Socials
        </h1>
        <p className="text-center text-lg text-white-shade-9  font-opensans">
          {props.desc}
        </p>
        <section className="grid grid-cols-4 gap-y-4 mt-7 lg:grid-cols-6 lg:w-[500px] gap-x-5">
          <div className="w-[70px] h-[70px] flex items-center justify-center border border-white-shade-4 rounded-full ">
          <Facebook />
          </div>
          <div className="w-[70px] h-[70px] flex items-center justify-center border border-white-shade-4 rounded-full ">
          <Instagram />
          </div>
          <div className="w-[70px] h-[70px] flex items-center justify-center border border-white-shade-4 rounded-full ">
       <Twitter />
          </div>
          <div className="w-[70px] h-[70px] flex items-center justify-center border border-white-shade-4 rounded-full ">
          <Whatsapp />
          </div>
          <div className="w-[70px] h-[70px] flex items-center justify-center border border-white-shade-4 rounded-full ">
          <Telegram />
          </div>
          <div className="w-[70px] h-[70px] flex items-center justify-center border border-white-shade-4 rounded-full ">
         <W />
          </div>
        </section>
        <div className="flex  flex-col gap-y-4 mt-6 lg:flex-row lg:gap-x-12 lg:pt-10">
          <Link className="flex items-center gap-x-4" href={"#"}>
            <div className="flex justify-center items-center w-14 h-14 border border-white-shade-5 rounded-full">
             <Email />
            </div>
            <div className="flex flex-col font-opensans">
              <span className="text-white-shade-9 lg:text-lg">E-mail</span>
              <span className="text-black text-lg font-semibold lg:text-xl">
                {props.email}
              </span>
            </div>
          </Link>
          <Link className="flex items-center gap-x-4" href={"#"}>
            <div className="flex justify-center items-center w-14 h-14 border border-white-shade-5 rounded-full">
            <Call />
            </div>
            <div className="flex flex-col font-opensans">
              <span className="text-white-shade-9 lg:text-lg">Call</span>
              <span className="text-black text-lg font-semibold lg:text-xl">
              {props.call}
              </span>
            </div>
          </Link>
          <Link className="flex items-center gap-x-4" href={"#"}>
            <div className="flex justify-center items-center w-14 h-14 border border-white-shade-5 rounded-full">
             <Website />
            </div>
            <div className="flex flex-col font-opensans">
              <span className="text-white-shade-9 lg:text-lg">Website</span>
              <span className="text-black text-lg font-semibold lg:text-xl">
              {props.web}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Social;
