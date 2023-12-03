"use client";

import React, { useEffect, useState } from "react";
import Field from "../Icons/Outline/Field";

const Selector = () => {
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <section className="flex flex-col items-center w-1/4 h-full bg-white rounded-2xl pt-5">
      <div className="w-full flex gap-x-2 items-start justify-center">
        <Field />
        <span className="text-white-shade-11 text-lg">Choose your field</span>
      </div>
      <div className="w-full font-medium  text-black rounded-2xl">
        <div
          onClick={() => setOpen(!open)}
          className={`bg-white w-full p-2 flex items-center justify-between rounded-2xl ${
            !selected && "text-gray-700"
          }`}
        >
          {selected
            ? selected?.length > 25
              ? selected?.substring(0, 25) + "..."
              : selected
            : "Restaurant"}


        </div>
        <ul
          className={`bg-white mt-2 overflow-y-auto ${
            open ? "max-h-60" : "max-h-0"
          } `}
        >
          <div className="flex items-center px-2 sticky top-0 bg-white">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value.toLowerCase())}
              placeholder="Search here"
              className="placeholder:text-black  font-sans bg-white-shade-3 0 px-3 py-5 rounded-2xl outline-none"
            />
          </div>
          <li className={`p-2 text-sm hover:bg-sky-600 hover:text-black`}>
            IRAN
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Selector;
