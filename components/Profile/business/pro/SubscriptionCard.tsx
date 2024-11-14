"use client";

import React, { ReactNode, useState } from "react";
import Link from "next/link";
import classNames from "classnames";
import { ArrowDown, ArrowUp } from "@/components/Icons/Outline";

interface SubscriptionCardProps {
  planData: any;
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = (props) => {
  const { title, pricing, features } = props.planData;
  const [open, setOpen] = useState(false);

  const openCardHandler = () => {
    setOpen(!open);
  };

  const pricingCardClasses = classNames(
    "relative top-0 left-0 text-xl list-none list-inside before:contents[''] before:absolute before:w-full h-40 before:h-40 before:left-0 before:bottom-0 before:bg-gradient-to-t before:from-white before:to-white/10 transition-all duration-500 before:transition-all before:duration-500 p-5 flex flex-col gap-1",
    {
      "h-auto min-h-[10rem] before:from-white/10": open,
      "max-h-40 h-40 overflow-hidden before:from-white": !open,
    }
  );

  return (
    <section className="w-full lg:w-1/3 flex flex-col h-auto items-center transition-all">
      <div className="w-full flex flex-col gap-y-3 bg-white text-black pb-8 border border-white-shade-4 rounded-3xl">
        <div className="bg-blue text-white rounded-t-3xl p-5">
          <h3 className="font-outfit text-base font-semibold text-white-shade-10">{title}</h3>
          <h4 className="font-outfit font-semibold text-xl my-4 text-white-shade-10">
            <span className="text-4xl text-white">{pricing}</span>/ month
          </h4>
        </div>
        <ul className={pricingCardClasses}>
          {features.map((item : any, index:any) => (
            <li key={index} className="flex gap-2 items-center font-semibold text-black text-sm">
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.5" d="M14.6666 8.50065C14.6666 12.1825 11.6819 15.1673 7.99996 15.1673C4.31807 15.1673 1.3333 12.1825 1.3333 8.50065C1.3333 4.81875 4.31807 1.83398 7.99996 1.83398C11.6819 1.83398 14.6666 4.81875 14.6666 8.50065Z" fill="#D9D9D9"/>
                <path d="M10.6869 6.48043C10.8821 6.67569 10.8821 6.99228 10.6869 7.18754L7.35353 10.5209C7.15827 10.7161 6.84168 10.7161 6.64642 10.5209L5.31309 9.18754C5.11783 8.99228 5.11783 8.67569 5.31309 8.48043C5.50835 8.28517 5.82493 8.28517 6.02019 8.48043L6.99997 9.46021L8.48986 7.97032L9.97975 6.48043C10.175 6.28517 10.4916 6.28517 10.6869 6.48043Z" fill="black"/>
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <span
        onClick={openCardHandler}
        className="z-[1000] inline-block p-2 -mt-5 bg-white rounded-full border border-white-shade-4 hover:cursor-pointer hover:deep-shadow"
      >
        {open ? <ArrowUp /> : <ArrowDown />}
      </span>
    </section>
  );
};

export default SubscriptionCard;
