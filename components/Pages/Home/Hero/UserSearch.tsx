import { Search } from "@/components/Dashboard/Icons";
import Field from "@/components/Icons/Outline/Field";
import React from "react";

const UserSearch = () => {
  return (
    <section className="flex flex-col items-center w-2/5 h-full bg-white rounded-3xl pt-5 hover:cursor-pointer">
      <div className="w-full flex gap-x-2 items-center mt-2 px-6">
        <Search />
        <span className="text-white-shade-11 font-normal">
        Search for specefic person or company
        </span>
      </div>
    </section>
  );
};

export default UserSearch;
