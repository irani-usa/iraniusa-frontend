import { Bath } from "@/components/Icons/Profile/Bath";
import { Meter } from "@/components/Icons/Profile/Meter";
import { Room } from "@/components/Icons/Profile/Room";
import React from "react";

interface RentcardProps {
  status: string;
  type: string;
  price: string;
  discountedPrice: string;
  desc: string;
  meterage: string;
  rooms: string;
  bathes: string;
  image: React.ReactNode;
}

export const Rentcard: React.FC<RentcardProps> = (props) => {
  return (
    <div className="border border-white-shade-4 w-[275px] min-w-[275px] rounded-3xl hover:shadow-soft-shadow duration-500 transition-all cursor-pointer">
      <div className="p-2">
        <div
          className="w-full bg-center bg-cover h-[200px] rounded-lg flex  justify-center items-start"
          style={{ backgroundImage: `url(${props.image})` }}
        >
          <div className="text-white flex items-center justify-center gap-2 mt-6">
            <div className="flex items-center justify-center bg-black/20 backdrop-blur-lg px-9 py-2 rounded-full">
              {props.status}
            </div>
            <span className="bg-[#FF6838] py-2 px-2 rounded-full">
              {props.type}
            </span>
          </div>
        </div>
        <div className="py-3 flex flex-col gap-y-5">
          <div className="flex items-center gap-2 font-medium">
            <span className="text-white-shade-10 relative">
              ${props.discountedPrice}{" "}
              <svg
                className="absolute top-0 -right-4 "
                width="80"
                height="22"
                viewBox="0 0 48 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="47.1456"
                  y1="0.420552"
                  x2="0.841257"
                  y2="16.449"
                  stroke="#B3B3B3"
                  strokeWidth="0.890071"
                />
              </svg>
            </span>
            <span className="text-black text-lg">${props.price}</span>
          </div>
          <p className="text-white-shade-8 text-[17px]">
            1738 Angus Drive Vancouver, British Columbia
          </p>
        </div>
      </div>
      <div className="w-full border-t border-white-shade-4 pb-4"></div>
      <div className="px-4 flex items-center justify-between text-black font-medium pb-4">
        <span className="flex items-center gap-x-2">
          <Meter /> {props.meterage}SF
        </span>
        <div className="flex items-center gap-x-4">
          <span className="flex items-center gap-x-2">
            <Room /> {props.rooms}
          </span>
          <span className="flex items-center gap-x-2">
            <Bath /> {props.bathes}
          </span>
        </div>
      </div>
    </div>
  );
};
