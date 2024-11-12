"use client";

import React, { ReactNode, useState } from "react";
import Link from "next/link";

import classNames from "classnames";

import { ArrowDown, ArrowUp, Diamonds } from "@/components/Icons/Outline";


interface PlanCardProps {
  planData: any;
}

const PlanCard: React.FC<PlanCardProps> = (props) => {
  const { title, subTitle, types , isPopular } = props.planData;

  const [open, setOpen] = useState(false);
  const [isPro, setIsPro] = useState(true);

  const openCardHandler = () => {
    setOpen(!open);
  };

  const cardStatusHandler = () => {
    setIsPro(!isPro);
  };

  const PricingCardClasses = classNames(
    "relative top-0 left-0 text-xl list-none list-inside before:contents[''] before:absolute before:w-full h-40   before:h-40 before:left-0 before:bottom-0 before:bg-gradient-to-t before:from-white before:to-white/10 trasnion-all duration-500 before:trasnion-all before:duration-500 p-5 flex flex-col gap-1",
    {
      "h-auto min-h-[10rem]  before:from-white/10": open,
      "max-h-40 h-40 overflow-hidden before:from-white": !open,
    }
  );

  const FeatureListClasses = classNames(
    "[&>*:nth-child(odd)] relative top-0 left-0 w-full h-12 flex gap-x-6 p-2 justify-evenly text-center items-center  text-base bg-white-shade-3 rounded-xl before:contents-[''] before:absolute before:top-1/2 before:-translate-y-1/2  before:h-[80%] before:bg-white before:rounded-xl before:z-20 tranitaion-all duration-500 before:tranitaion-all before:duration-500 border border-white-shade-3",
    {
      "before:left-[55%]  before:w-5/12": isPro,
      "before:left-2  before:w-5/12": !isPro,
    }
  );

  return (
    <section className=" w-full  flex flex-col h-auto items-center transition-all">
      <div className="w-full bg-top bg-cover flex flex-col gap-y-3 bg-white text-black p-5 pb-14  border border-white-shade-4 rounded-3xl" style={isPopular ? { backgroundImage: 'url("/images/plans/bg.png")' } : {}}>
        <div className="flex w-full items-center justify-between">
          <div className=" w-min p-5 bg-white rounded-full border border-white-shade-4">
            <Diamonds />
          </div>
          <span className="bg-white-shade-3 px-3 py-1 rounded-2xl">%12 save</span>
        </div>
        <div className="mt-2 ">
          <h3 className="font-outfit text-xl font-semibold">{title}</h3>
          <span className="text-white-shade-8 text-sm">{subTitle}</span>
        </div>
      <div>
      <h4 className="font-outfit font-semibold text-lg mt-4 mb-1 text-white-shade-8">
          <span className="text-3xl text-black">
            {isPro && types[1].pricing}
            {!isPro && types[0].pricing}
          </span>
          / Year
        </h4>
        <div className="relative  text-white-shade-8">
          $279 / Year
          <span className="w-20  h-[1px] -rotate-12 absolute top-1/2 bg-orange block"></span>
        </div>
      </div>
        <div className={FeatureListClasses}>
          <span
            onClick={cardStatusHandler}
            className={`relative z-[2000]  w-1/2 flex items-center justify-center hover:cursor-pointer h-full rounded-xl ${isPro && "text-white-shade-8"}`}
          >
            Starter
          </span>
          <span
            onClick={cardStatusHandler}
            className={`relative z-[2000]  w-1/2 flex items-center justify-center hover:cursor-pointer h-full rounded-xl ${!isPro && "text-white-shade-8"}`}
          >
            Pro
          </span>
        </div>
        <div className="w-full flex items-center justify-center gap-x-2 my-2">
          <div className="w-1/3 h-[1px] bg-white-shade-4"></div>
          <span className="text-sm text-white-shade-10">Includes</span>
          <div className="w-1/3 h-[1px] bg-white-shade-4"></div>
        </div>
        <ul className={PricingCardClasses}>
          {isPro &&
            types[1].features.map(
              (
                item:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | React.PromiseLikeOfReactNode
                  | null
                  | undefined
              ) => {
                return <li className="flex gap-3 items-center font-semibold text-black text-sm"><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.5" d="M14.6666 8.50065C14.6666 12.1825 11.6819 15.1673 7.99996 15.1673C4.31807 15.1673 1.3333 12.1825 1.3333 8.50065C1.3333 4.81875 4.31807 1.83398 7.99996 1.83398C11.6819 1.83398 14.6666 4.81875 14.6666 8.50065Z" fill="#D9D9D9" />
                  <path d="M10.6869 6.48043C10.8821 6.67569 10.8821 6.99228 10.6869 7.18754L7.35353 10.5209C7.15827 10.7161 6.84168 10.7161 6.64642 10.5209L5.31309 9.18754C5.11783 8.99228 5.11783 8.67569 5.31309 8.48043C5.50835 8.28517 5.82493 8.28517 6.02019 8.48043L6.99997 9.46021L8.48986 7.97032L9.97975 6.48043C10.175 6.28517 10.4916 6.28517 10.6869 6.48043Z" fill="black" />
                </svg>
                  {item}</li>
              }
            )}
          {!isPro &&
            types[0].features.map(
              (
                item:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | React.PromiseLikeOfReactNode
                  | null
                  | undefined
              ) => {
                return <li className="flex gap-3 items-center font-semibold text-black text-sm"><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.5" d="M14.6666 8.50065C14.6666 12.1825 11.6819 15.1673 7.99996 15.1673C4.31807 15.1673 1.3333 12.1825 1.3333 8.50065C1.3333 4.81875 4.31807 1.83398 7.99996 1.83398C11.6819 1.83398 14.6666 4.81875 14.6666 8.50065Z" fill="#D9D9D9" />
                  <path d="M10.6869 6.48043C10.8821 6.67569 10.8821 6.99228 10.6869 7.18754L7.35353 10.5209C7.15827 10.7161 6.84168 10.7161 6.64642 10.5209L5.31309 9.18754C5.11783 8.99228 5.11783 8.67569 5.31309 8.48043C5.50835 8.28517 5.82493 8.28517 6.02019 8.48043L6.99997 9.46021L8.48986 7.97032L9.97975 6.48043C10.175 6.28517 10.4916 6.28517 10.6869 6.48043Z" fill="black" />
                </svg>
                  {item}</li>
              }
            )}
        </ul>
        <Link
          href={"/"}
          className={`w-full mx-auto text-center py-2 text-lg  transition-all rounded-2xl duration-300 ${isPopular ? "bg-black text-white hover:text-black hover:bg-[#E5E7E9]" : "bg-[#E5E7E9]  hover:bg-black hover:text-white"}`}
        >
          I want this
        </Link>
      </div>
      <span
        onClick={openCardHandler}
        className="z-[1000] inline-block p-2 -mt-8 bg-white rounded-full border border-white-shade-4 hover:cursor-pointer hover:deep-shadow"
      >
        {open && <ArrowUp />}
        {!open && <ArrowDown />}
      </span>
    </section>
  );
};

export default PlanCard;
