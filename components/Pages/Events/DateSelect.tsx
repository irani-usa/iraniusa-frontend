"use client";

import React, { useState } from "react";

import { Location } from "@/components/Icons/Outline";
import ArrowUp from "@/components/Icons/Solid/ArrowUp";
import ArrowDown from "@/components/Icons/Solid/ArrowDown";


const DateSelect = () => {
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <section className="flex flex-col items-center w-full  h-full bg-white rounded-3xl pt-5 hover:cursor-pointer">
      <div className="w-full flex gap-x-2 items-center mt-2 px-6">
        <Location />
        <span className="text-white-shade-11 font-normal text-sm lg:text-base">
          Date
        </span>
      </div>
      <div className="flex flex-col items-start w-full font-medium  text-black rounded-3xl">
        <div
          onClick={() => setOpen(!open)}
          className={`bg-white text-xl gap-x-2 font-normal p-2 mt-4 flex items-center mx-4 rounded-2xl ${
            !selected && ""
          }`}
        >
          {selected
            ? selected?.length > 25
              ? selected?.substring(0, 25) + "..."
              : selected
            : `Tue, 09 Aug 2023`}

          {selected ? <ArrowUp /> : <ArrowDown />}
        </div>
        <ul
          className={`w-[90%] self-center bg-white mt-2 overflow-y-auto shadow-drop-shadow rounded-2xl z-1000 transition-opacity duration-500 ${
            open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          } `}
        >
          <div className="flex items-center px-2 sticky top-0 bg-white">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value.toLowerCase())}
              placeholder="Search here"
              className="w-full placeholder:text-black text-[15px] font-normal font-sans bg-white-shade-3 0 p-3 rounded-2xl outline-hidden"
            />
          </div>
          <div className="flex flex-col gap-y-3 pt-2 p-3">
            <li
              className={`p-2 text-lg font-light text-white-shade-10 hover:text-black transition-all duration-200`}
            >
              Tue, 09 Aug 2023
            </li>
          </div>
        </ul>
      </div>
    </section>
  );
};

export default DateSelect;
