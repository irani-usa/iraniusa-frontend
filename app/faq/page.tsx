import React from "react";

import {InputWithBtn,DropDown} from "@/components/Forms/index";

import FAQList from "@/components/Pages/FAQ/FAQList";

const page = () => {
  return (
    <section className="container flex flex-col items-center">
      <h1 className="text-black  font-semibold font-outfit text-xl py-3 flex gap-x-5 items-center lg:text-3xl mt-10 lg:mt-20">
        <svg
          width="200px"
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
        FAQ
        <svg
          width="200px"
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
      <p className="text-center text-sm font-inter max-w-lg text-white-shade-9 my-5">
        Have any question about platform or us? check the most frequently
        questions down below
      </p>
      <InputWithBtn
        placeHolder={"Search your question"}
        classes={""}
        btnContent={"Search"}
      />
      <DropDown />
      <FAQList />
    </section>
  );
};

export default page;
