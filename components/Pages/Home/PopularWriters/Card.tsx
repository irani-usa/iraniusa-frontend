import { Verified } from "@/components/Dashboard/Icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = () => {
  return (
    <div className="w-full h-18">
      <div className="flex gap-x-5 w-full py-10 px-8 rounded-2xl bg-white border border-white-shade-4 z-20">
        <Image
          src={"/images/avatars/3.png"}
          width={100}
          height={100}
          alt=""
          className="w-16 rounded-full"
        />
        <div className="flex flex-col gap-y-1">
          <span className="flex gap-x-2 items-center text-lg font-opensans font-medium text-black">
            Darkcafé
          </span>
          <span className="text-white-shade-8">Coffee shop</span>
        </div>
      </div>
      <div className="w-full items-center flex justify-between px-6 gap-x-2 bg-[#F3F3F3] rounded-b-2xl -mt-6 -z-20">
        <svg
          width="58"
          height="8"
          viewBox="0 0 58 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 7.5L56.75 7.5L50.25 0.999998"
            stroke="black"
            stroke-linecap="round"
          />
        </svg>
        <Link className="text-white bg-red font-outfit py-1 px-2 rounded-full " href="/">
        View Profile
        </Link>
        <Link className="text-white bg-black font-outfit py-1 px-2 rounded-full" href="/">
        View Profile
        </Link>
      </div>
    </div>
  );
};

export default Card;
