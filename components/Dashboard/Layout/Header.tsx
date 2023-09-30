import React from "react";
import { Notification, Search } from "../Icons";

const Header = () => {
  return (
    <header className="flex justify-between items-center w-full px-12 py-6 border-b border-white-shade-4">
      <h2 className="font-outfit text-black text-2xl font-medium">
        Edit Profile
      </h2>
      <div className="flex gap-x-4">
        <div className="flex items-center w-72 h-16 gap-x-1 pl-2 bg-white-shade-2 border border-white-shade-4 rounded-full">
          <Search />
          <input
            type="text"
            placeholder="Search here"
            className="focus:z-10 focus:border-blue-500 focus:ring-blue-500 h-full px-4 text-black bg-white-shade-2 focus:outline-none rounded-full focus:border-none"
          />
        </div>
        <div className="flex justify-center items-center w-16 h-16 border border-white-shade-4 rounded-full">
          <Notification />
        </div>
      </div>
    </header>
  );
};

export default Header;
