"use client";

import React, { useEffect, useState } from "react";

import ArrowDown from "../../../Icons/Solid/ArrowDown";
import ArrowUp from "../../../Icons/Solid/ArrowUp";

import { Home } from "@/components/Icons/Outline";

const Select = () => {
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <section className="flex flex-col items-center w-full  h-full bg-white rounded-3xl pt-5 hover:cursor-pointer">
      <div className="w-full flex gap-x-2 items-center mt-2 px-6">
        <Home />
        <span className="text-white-shade-11 font-normal text-sm">
        Destination or hotel
        </span>
      </div>
      <div className="flex flex-col w-full font-medium  text-black rounded-2xl">
        <div
          onClick={() => setOpen(!open)}
          className={`bg-white  gap-x-2 font-normal p-2 mt-4 flex items-center mx-4 rounded-2xl ${
            !selected && ""
          }`}
        >
          {selected
            ? selected?.length > 25
              ? selected?.substring(0, 25) + "..."
              : selected
            : `Hawaii`}

          {selected ? <ArrowDown /> : <ArrowUp />}
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
             Hawaii
            </li>
          </div>
        </ul>
      </div>
    </section>
  );
};

export default Select;
