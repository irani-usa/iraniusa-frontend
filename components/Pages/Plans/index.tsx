"use client";

import React, { ReactNode, useState } from "react";
import Link from "next/link";

import classNames from "classnames";

import { ArrowDown, ArrowUp, Diamonds } from "@/components/Icons/Outline";

interface PlanCardProps {
  planData: any;
}

const PlanCard: React.FC<PlanCardProps> = (props) => {
  const { title, subTitle, types } = props.planData;

  const [open, setOpen] = useState(false);
  const [isPro, setIsPro] = useState(true);

  const openCardHandler = () => {
    setOpen(!open);
  };

  const cardStatusHandler = () => {
    setIsPro(!isPro);
  };

  const PricingCardClasses = classNames(
    "relative top-0 left-0 text-xl list-disc list-inside before:contents[''] before:absolute before:w-full  before:h-20 before:left-0 before:bottom-0 before:bg-gradient-to-t before:from-white before:to-white/10 trasnion-all duration-500 before:trasnion-all before:duration-500",
    {
      "h-auto  before:from-white/10": open,
      "max-h-20 overflow-hidden before:from-white": !open,
    }
  );

  const FeatureListClasses = classNames(
    "[&>*:nth-child(odd)] relative top-0 left-0 w-5/6 h-16 flex gap-x-6 p-2 justify-evenly text-center items-center font-medium text-xl bg-white-shade-3 rounded-2xl before:contents-[''] before:absolute before:top-1/2 before:-translate-y-1/2  before:h-[80%] before:bg-white before:rounded-2xl before:z-20 tranitaion-all duration-500 before:tranitaion-all before:duration-500",
    {
      "before:left-[55%]  before:w-5/12": isPro,
      "before:left-2  before:w-5/12": !isPro,
    }
  );

  return (
    <section className=" w-full lg:w-1/3 flex flex-col h-auto items-center transition-all">
      <span className="z-[1000] inline-block p-6 bg-white rounded-full border border-white-shade-4">
        <Diamonds />
      </span>
      <div className="w-full -mt-10 flex flex-col gap-y-3 items-center bg-white text-black p-10 pb-14  border border-white-shade-4 rounded-3xl">
        <div className="mt-6 text-center">
          <h3 className="font-outfit text-2xl font-semibold">{title}</h3>
          <span className="text-white-shade-8">{subTitle}</span>
        </div>
        <div className={FeatureListClasses}>
          <span
            onClick={cardStatusHandler}
            className="relative z-[2000] text-black w-1/2 flex items-center justify-center hover:cursor-pointer h-full rounded-xl"
          >
            Starter
          </span>
          <span
            onClick={cardStatusHandler}
            className="relative z-[2000] w-1/2 flex items-center justify-center hover:cursor-pointer h-full rounded-xl"
          >
            Pro
          </span>
        </div>
        <h4 className="font-outfit font-semibold text-3xl my-4">
          <span className="text-5xl">
            {isPro && types[1].pricing}
            {!isPro && types[0].pricing}
          </span>
          / 1 Year
        </h4>
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
                return <li>{item}</li>;
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
                return <li>{item}</li>;
              }
            )}
        </ul>
        <Link
          href={"/"}
          className="w-11/12 text-center py-4 text-lg bg-[#E5E7E9] rounded-3xl"
        >
          Choose Plan
        </Link>
      </div>
      <span
        onClick={openCardHandler}
        className="z-[1000] inline-block p-6 -mt-10 bg-white rounded-full border border-white-shade-4"
      >
        {open && <ArrowUp />}
        {!open && <ArrowDown />}
      </span>
    </section>
  );
};

export default PlanCard;
