"use client";

import { MenuContext } from "@/context/MenuProvider";
import classNames from "classnames";
import { useContext } from "react";
import Logo from "../../Logo";
import Link from "next/link";

const OverlayMenu = () => {
  let menuVisibilty = useContext(MenuContext);

  const OverlayClasses = classNames(
    "block lg:hidden w-full h-full transition-all duration-500 fixed top-0 z-10",
    {
      "left-0": menuVisibilty.menu,
      "-left-[1200px]": !menuVisibilty.menu,
    }
  );
  return (
    <section className={OverlayClasses}>
      <div
        className="w-full h-full bg-white text-black bg-cover"
        style={{
          backgroundImage: `url('/images/menu/overlay-background.png')`,
        }}
      >
        <div className="container h-24">
          <Link
            href={"/"}
            onClick={() => {
              menuVisibilty.setMenu(!menuVisibilty.menu);
            }}
          >
            <Logo width={80} height={200} />
          </Link>
        </div>
        <ul className="container flex flex-col items-center gap-y-6 font-opensans text-xl font-medium text-white-shade-10 mt-20">
          <li className="font-semibold text-black">
            <Link
              href={"/"}
              onClick={() => {
                menuVisibilty.setMenu(!menuVisibilty.menu);
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/events"}
              onClick={() => {
                menuVisibilty.setMenu(!menuVisibilty.menu);
              }}
            >
              Event
            </Link>
          </li>
          <li>
            <Link
              href={"/blog"}
              onClick={() => {
                menuVisibilty.setMenu(!menuVisibilty.menu);
              }}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href={"/financial-market"}
              onClick={() => {
                menuVisibilty.setMenu(!menuVisibilty.menu);
              }}
            >
              Financial market
            </Link>
          </li>
          <li>
            <Link
              href={"#"}
              onClick={() => {
                menuVisibilty.setMenu(!menuVisibilty.menu);
              }}
            >
              ADS reservation
            </Link>
          </li>
          <li>
            <Link
              href={"#"}
              onClick={() => {
                menuVisibilty.setMenu(!menuVisibilty.menu);
              }}
            >
              Music player
            </Link>
          </li>
          <li>
            <Link
              href={"#"}
              onClick={() => {
                menuVisibilty.setMenu(!menuVisibilty.menu);
              }}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              href={"/about"}
              onClick={() => {
                menuVisibilty.setMenu(!menuVisibilty.menu);
              }}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default OverlayMenu;
