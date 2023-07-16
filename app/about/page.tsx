import React from "react";

import Star from "@/components/Icons/Solid/Star";

import OverlayMenu from "@/components/OverlayMenu";
import Infobox from "@/components/Info";
import Button from "@/components/Button";

const page = () => {
  return (
    <>
      <OverlayMenu />
      <div className="container flex flex-col items-center py-10">
        <Star />
        <h1 className="text-black  font-bold font-outfit text-xl py-3 flex gap-x-5 items-center lg:text-2xl">
          <svg
            width="full"
            height="2"
            viewBox="0 0 514 1"
            fill="#E6E6E6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="4.37114e-08"
              y1="0.5"
              x2="514"
              y2="0.500045"
              stroke="#E6E6E6"
            />
          </svg>
          Company
          <svg
            width="full"
            height="2"
            viewBox="0 0 514 1"
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="4.37114e-08"
              y1="0.5"
              x2="514"
              y2="0.500045"
              stroke="#E6E6E6"
            />
          </svg>
        </h1>
        <p className="font-opensans text-white-shade-9 text-center text-lg py-3">
        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
        </p>
        <div className="flex flex-col gap-y-5 lg:flex-row lg:gap-x-5 lg:mt-16">
        <img src="images/about/conversetaion.webp" className="rounded-3xl lg:w-[680px] lg:h-[220px]" alt="conversetaion" />
          <img src="images/about/freedom.webp" className="rounded-3xl lg:w-[400px] lg:h-[220px]"  alt="freedom" />
        </div>
      </div>
      <div className="container flex flex-col items-center py-10">
        <Star />
        <h1 className="text-black  font-bold font-outfit text-xl py-3 flex gap-x-5 items-center lg:text-2xl">
          <svg
            width="full"
            height="2"
            viewBox="0 0 514 1"
            fill="#E6E6E6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="4.37114e-08"
              y1="0.5"
              x2="514"
              y2="0.500045"
              stroke="#E6E6E6"
            />
          </svg>
          Platform
          <svg
            width="full"
            height="2"
            viewBox="0 0 514 1"
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="4.37114e-08"
              y1="0.5"
              x2="514"
              y2="0.500045"
              stroke="#E6E6E6"
            />
          </svg>
        </h1>
        <p className="font-opensans text-white-shade-9 text-left text-lg py-3">
        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
        </p>
        <div className="flex w-full gap-x-7 overflow-x-scroll py-10 no-scroll">
        <Infobox content={"+200k"} info={"Users"} classes={"bg-white-shade-3 text-black"} />
        <Infobox content={"+1000"} info={"Jobs"} classes={"bg-white-shade-3 text-black"} />
        <Infobox content={"+200k"} info={"Users"} classes={"bg-white-shade-3 text-black"} />
          <Infobox content={"+200k"} info={"Users"} classes={"bg-blue text-white"} />
        </div>
      </div>
      <div className="container flex flex-col items-center">
        <Star />
        <h1 className="text-black  font-bold font-outfit text-xl py-3 flex gap-x-5 items-center lg:text-2xl">
          <svg
            width="full"
            height="2"
            viewBox="0 0 514 1"
            fill="#E6E6E6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="4.37114e-08"
              y1="0.5"
              x2="514"
              y2="0.500045"
              stroke="#E6E6E6"
            />
          </svg>
          Partners
          <svg
            width="full"
            height="2"
            viewBox="0 0 514 1"
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="4.37114e-08"
              y1="0.5"
              x2="514"
              y2="0.500045"
              stroke="#E6E6E6"
            />
          </svg>
        </h1>
        <div className="flex gap-x-7 py-8 lg:gap-x-28 lg:py-10">
          <img src="images/about/revlogo.webp" className="w-24 lg:w-44" alt="" />
          <img src="images/about/revlogo.webp" className="w-24 lg:w-44" alt="" />
          <img src="images/about/revlogo.webp" className="w-24 lg:w-44" alt="" />
        </div>
      </div>
      <div className="w-full bg-blue pt-12 my-28 lg:pt-0">
        <div className="container lg:flex gap-x-44 items-center">
          <div className="">
            <h1 className="text-white font-outfit text-2xl font-medium lg:font-semibold ">Have a question? Our team is happy to assist you</h1>
            <p className="text-white-shade-8 font-opensans py-7">
            Ask about our platform, pricing, implementation or anything else. Our highly trained reps are standing by. Ready to help 
            </p>
               <svg
            width="full"
            height="1"
            viewBox="0 0 514 1"
            fill="#E6E6E6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="4.37114e-08"
              y1="0.5"
              x2="514"
              y2="0.500045"
              stroke="#04366a"
            />
          </svg>
          <div className="flex flex-col items-center lg:flex-row gap-x-5">
            <Button content={"Contact us"} classes={"bg-white py-3 my-7 text-black "} />
            <h1 className="text-white font-opensans">Or email us:unreal@outlook.com</h1>
          </div>
          </div>
          <img src="images/about/man.webp" alt="man" className=" w-1/2 hidden lg:flex"/>
        </div>
        <img src="images/about/man.webp" alt="man" className="mt-24 lg:hidden"/>
      </div>
    </>
  );
};

export default page;
