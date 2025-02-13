import { Search } from "@/components/Dashboard/Icons";
import React from "react";

const UserSearch = () => {
  return (
    <section className="flex flex-col items-center justify-between w-full lg:w-2/5 h-auto lg:h-full bg-white rounded-3xl p-4 hover:cursor-pointer">
      <div className="w-full flex gap-x-4 items-center mt-2">
        <Search />
        <span className="text-white-shade-11 font-normal text-lg">
          Search for specefic person or company
        </span>
      </div>
      <input
        className="w-full h-16 rounded-2xl bg-white-shade-3 px-4 mt-2 focus:outline-hidden text-black"
        type="text"
        placeholder="Persons,Companies,Jobs"
      />
    </section>
  );
};

export default UserSearch;
