import Link from "next/link";
import React from "react";
import Star from "../../About/Star";
import Card from "./Card";

const PopularWriters = () => {
  return (
    <section className="container mb-64">
      <div className="w-full flex flex-col items-center">
        <div className="w-full flex items-center justify-center gap-x-2">
          <div className="w-1/3 h-[1px] bg-white-shade-4"></div>
          <Star content={"Most popular writers"} />
          <div className="w-1/3 h-[1px] bg-white-shade-4"></div>
        </div>
        <p className="text-white-shade-11 mt-4 text-lg">
          New individuals and companies join our platform every month, let’s get
          to know them!
        </p>
      </div>
      <div className="grid grid-cols-4 my-10">
        <Card />
      </div>
    </section>
  );
};

export default PopularWriters;
