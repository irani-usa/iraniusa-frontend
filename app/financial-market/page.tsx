import React from "react";

import Star from "@/components/Icons/Solid/Star";
import OverlayMenu from "@/components/OverlayMenu";

import Image from "next/image";
import Financial from "@/components/Financial";
import { Apple } from "@/components/Icons/Solid";
import Btc from "@/components/Icons/Solid/Btc";

const page = () => {
  return (
    <>
      <OverlayMenu />
      <section className="container py-10 lg:flex lg:justify-between lg:items-start lg:mt-12">
        <div className="flex flex-col gap-y-5 lg:mt-5">
          <h1 className="flex gap-x-2 font-opensans items-center text-white-shade-9 text-lg">
            <Star />
            <svg
              width="25"
              height="1.5"
              viewBox="0 0 25 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="25"
                y1="0.5"
                x2="-4.37114e-08"
                y2="0.499998"
                stroke="#A6A6A6"
              />
            </svg>
            All markets & stocks
          </h1>
          <h1 className="text-black text-3xl font-bold font-outfit lg:text-5xl lg:max-w-md ">
          Reliable international
          Financial markets 
          </h1>
          <p className="text-white-shade-9 font-opensans lg:max-w-md">
          Get inform from all financial markets like crypto, Precious Metals, Commodities, Fiat currency, Stock Market
          </p>
          <div className="flex gap-x-14">
          <div className="flex relative">
             <Image src="/images/financial/usflag.webp" alt={"usflag"} width={50} height={50}/>
             <Image className="absolute left-9 -z-10" src="/images/financial/irflag.webp" alt={"usflag"} width={50} height={50}/>
          </div>
          <div>
            <h1 className="text-black font-bold font-opensans text-lg">+2M</h1>
            <h4 className="text-white-shade-8 font-normal text-base">users from usa</h4>
          </div>
          </div>
        </div>
         <div className="lg:flex items-center gap-x-4">
         <div>
         <Financial content={"Total shares"} content2={"Total return"} classes={"bg-blue lg:w-[300px] "} title={"Apple"} price={"$310,40"} found={"-1,10%"} iconComp={<Apple/>} frame={""} /> 
         <Financial content={"Price"} content2={"24h%"} classes={"bg-transparent text-black border-[1px] border-white-shade-4 lg:my-0"} frame={"border-[1.5px] border-white-shade-4"} title={"BTC"} price={"$36,641.20"} found={"+6.04%"} iconComp={<Btc />} />
        </div>
        <img src="/images/financial/chart.webp" className="w-full lg:w-[280px] lg:h-[325px]" alt="" />
         </div>
      </section>
    </>
  );
};

export default page;
