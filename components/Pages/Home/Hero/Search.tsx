import React from "react";
import FieldSelect from "./FieldSelect";
import UserSearch from "./UserSearch";
import LoactionSelect from "./LocationSelect";

const Search = () => {
  return (
    <section className="flex flex-col gap-y-8 justify-center items-center my-16 rounded-2xl">
      <div className="flex gap-x-1 p-2 w-full h-40 bg-white-shade-3 rounded-3xl">
        <FieldSelect />
        <UserSearch />
        <LoactionSelect />
        <button className="w-1/5 h-full font-opensans text-xl rounded-3xl bg-black text-white flex items-center justify-center border-2 border-black hover:bg-black/0 transition-all duration-300 hover:text-black">
          Search
        </button>
      </div>
      <span className="flex flex-col lg:flex-row items-center font-open-sans text-white-shade-11">
        <span className="text-black ml-2">Popular searches:</span>
        <span>Lawyer,Restaurant,plumber,programmer</span>
      </span>
    </section>
  );
};

export default Search;
