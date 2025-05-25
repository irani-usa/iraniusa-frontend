
import React from "react";
import Link from "next/link";

import Logo from "./Logo";

import {
  Book,
  Connected,
  Exit,
  Profile,
  Reserve,
  Support,
  Verified,
} from "../Icons";
import ProfileBox from "./ProfileBox";

const SideMenu = () => {
  return (
    <>
      <nav className="flex flex-col justify-between w-1/5 h-screen py-8  border-r border-white-shade-4">
        <div className="w-full flex flex-col">
          <div  className="px-12">
            <Logo />
          </div>
          <div className="w-full border-b py-4 border-[#EDEDED] mt-4">
            <div className="px-12">
              <span className="inline-block mb-6 text-white-shade-8">Menu</span>
              <div className="flex flex-col gap-y-2 font-medium">
                <Link
                  className="flex items-center gap-x-2 px-6 py-4 bg-primary-tint-4 text-white text-lg rounded-2xl"
                  href={"/"}
                >
                  <Profile />
                  Edit profile
                </Link>
                <Link
                  className="flex items-center gap-x-2 py-4  text-white-shade-8 text-lg rounded-2xl"
                  href={"/"}
                >
                  <Reserve />
                  ADS reservation
                </Link>
                <Link
                  className="flex items-center gap-x-2 py-4  text-white-shade-8 text-lg rounded-2xl"
                  href={"/"}
                >
                  <Connected />
                  My ads
                </Link>
                <Link
                  className="flex items-center gap-x-2 py-4  text-white-shade-8 text-lg rounded-2xl"
                  href={"/"}
                >
                  <Book />
                  Blog
                </Link>
                <Link
                  className="flex items-center gap-x-2 py-4  text-white-shade-8 text-lg rounded-2xl"
                  href={"/"}
                >
                  <Verified />
                  Verify
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full mt-8">
            <div className="px-12">
              <span className="inline-block mb-6 text-white-shade-8">General</span>
              <div className="flex flex-col gap-y-2 font-medium">
                <Link
                  className="flex items-center gap-x-2 py-4 text-white-shade-8 text-lg rounded-2xl"
                  href={"/"}
                >
                  <Support />
                  Help
                </Link>
                <Link
                  className="flex items-center gap-x-2 py-4 text-[#DE000D] text-lg rounded-2xl"
                  href={"/"}
                >
                  <Exit />
                  Log out
                </Link>
              </div>
            </div>
          </div>
        </div>
        <ProfileBox />
      </nav>
    </>
  );
};

export default SideMenu;
