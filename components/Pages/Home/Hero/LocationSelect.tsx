"use client";

import React, { useEffect, useState } from "react";

import ArrowDown from "../../../Icons/Solid/ArrowDown";
import ArrowUp from "../../../Icons/Solid/ArrowUp";

import { Location } from "@/components/Icons/Outline";

const LoactionSelect = () => {
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <section className="flex flex-col items-center w-1/5 h-full bg-white rounded-3xl pt-5 hover:cursor-pointer">
      <div className="w-full flex gap-x-2 items-center mt-2 px-6">
        <Location />
        <span className="text-white-shade-11 font-normal">
          Location
        </span>
      </div>
      <div className="flex flex-col w-full font-medium  text-black rounded-2xl">
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
            : `Las Angles`}

          {selected ? <ArrowDown /> : <ArrowUp />}
        </div>
        <ul
          className={`w-52 bg-white mt-2 overflow-y-auto shadow-drop-shadow rounded-2xl z-[1000] transition-opacity duration-500 ${
            open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          } `}
        >
          <div className="flex items-center px-2 sticky top-0 bg-white">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value.toLowerCase())}
              placeholder="Search here"
              className="w-full placeholder:text-black text-[15px] font-normal font-sans bg-white-shade-3 0 p-3 rounded-2xl outline-none"
            />
          </div>
          <div className="flex flex-col gap-y-3 pt-2 p-3">
            <li
              className={`p-2 text-lg font-light text-white-shade-10 hover:text-black transition-all duration-200`}
            >
              Restaurant
            </li>
          </div>
        </ul>
      </div>
    </section>
  );
};

export default LoactionSelect;
