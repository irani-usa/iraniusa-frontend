"use client"

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";

import Logo from "../../Logo";
import { User } from "../../Icons/Solid";
import HamburgerNav from "../Hamburger";

const Navigation = () => {
  const [isOpenUser, setIsOpenUser] = useState(false)

  const userMenuRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutsideUser = (event: MouseEvent) => {
    if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
      setIsOpenUser(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutsideUser);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideUser);
    };
  }, []);

  const [menuItems, setMenuItesm] = useState([
    { value: "Home", slug: "/" },
    { value: "Events", slug: "/events" },
    { value: "Blog", slug: "/blog" },
    { value: "Financial market", slug: "/financial-market" },
    { value: "ADS reservation", slug: "/ads-reservationt" },
    { value: "Music player", slug: "/music-player" },
    { value: "Plans", slug: "/plans" },
    { value: "About", slug: "/about" },
  ]);

  const currentRoute = usePathname();

  const linkStyle =
    "h-full flex items-center hover:cursor-pointer transitaion-all";
  const activeStyle =
    linkStyle +
    "text-black border-b-4 border-black";
  const nonActiveStyle = linkStyle + " border-b-none text-white-shade-8";

  return (
    <nav className="w-full h-24 border-b border-white-shade-4">
      <div className="container flex justify-between items-center h-full">
        <div className="flex h-full items-center gap-x-10">
          <Link href={"/"}>
            <Logo width={80} height={200} />
          </Link>
          <ul className="navigation hidden h-full lg:flex items-center gap-x-10 text-black font-opensans font-medium">
            {menuItems.map((link) => {
              return (
                <li
                  key={link.slug}
                  className={
                    currentRoute === link.slug ? activeStyle : nonActiveStyle
                  }
                >
                  <Link href={link.slug}>{link.value}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="relative z-50" ref={userMenuRef}>
          <div onClick={() => setIsOpenUser(!isOpenUser)}
            className=" hidden lg:flex bg-white-shade-2 border border-white-shade-4 p-3 cursor-pointer rounded-xl"

          >
            <User classes={""} />
          </div>
          <div className={`bg-white rounded-xl border border-white-shade-3 absolute w-full right-0 shadow-drop-2 transition-all duration-200 ease-in-out lg:mt-2 min-w-max pr-12 ${isOpenUser ? 'opacity-100 min-h-max' : 'opacity-0 h-0'}`}>
            <ul className="w-full flex flex-col gap-4 p-4">
              <li className="flex items-center gap-3 font-medium"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.29297 9.99996C2.29297 5.74276 5.74411 2.29163 10.0013 2.29163C14.2585 2.29163 17.7096 5.74276 17.7096 9.99996C17.7096 14.2572 14.2585 17.7083 10.0013 17.7083C9.65612 17.7083 9.3763 17.9881 9.3763 18.3333C9.3763 18.6785 9.65612 18.9583 10.0013 18.9583C14.9489 18.9583 18.9596 14.9475 18.9596 9.99996C18.9596 5.05241 14.9489 1.04163 10.0013 1.04163C5.05375 1.04163 1.04297 5.05241 1.04297 9.99996C1.04297 10.3451 1.32279 10.625 1.66797 10.625C2.01315 10.625 2.29297 10.3451 2.29297 9.99996Z" fill="black" />
                <path d="M4.16797 10.2083C3.82279 10.2083 3.54297 10.4881 3.54297 10.8333C3.54297 11.1785 3.82279 11.4583 4.16797 11.4583H7.65908L2.05936 17.058C1.81528 17.3021 1.81528 17.6978 2.05936 17.9419C2.30344 18.186 2.69917 18.186 2.94324 17.9419L8.54297 12.3422V15.8333C8.54297 16.1785 8.82279 16.4583 9.16797 16.4583C9.51315 16.4583 9.79297 16.1785 9.79297 15.8333V10.8333C9.79297 10.4881 9.51315 10.2083 9.16797 10.2083H4.16797Z" fill="black" />
              </svg>
              Lorem ipusm</li>
              <li className="flex items-center gap-3 font-medium"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.29297 9.99996C2.29297 5.74276 5.74411 2.29163 10.0013 2.29163C14.2585 2.29163 17.7096 5.74276 17.7096 9.99996C17.7096 14.2572 14.2585 17.7083 10.0013 17.7083C9.65612 17.7083 9.3763 17.9881 9.3763 18.3333C9.3763 18.6785 9.65612 18.9583 10.0013 18.9583C14.9489 18.9583 18.9596 14.9475 18.9596 9.99996C18.9596 5.05241 14.9489 1.04163 10.0013 1.04163C5.05375 1.04163 1.04297 5.05241 1.04297 9.99996C1.04297 10.3451 1.32279 10.625 1.66797 10.625C2.01315 10.625 2.29297 10.3451 2.29297 9.99996Z" fill="black" />
                <path d="M4.16797 10.2083C3.82279 10.2083 3.54297 10.4881 3.54297 10.8333C3.54297 11.1785 3.82279 11.4583 4.16797 11.4583H7.65908L2.05936 17.058C1.81528 17.3021 1.81528 17.6978 2.05936 17.9419C2.30344 18.186 2.69917 18.186 2.94324 17.9419L8.54297 12.3422V15.8333C8.54297 16.1785 8.82279 16.4583 9.16797 16.4583C9.51315 16.4583 9.79297 16.1785 9.79297 15.8333V10.8333C9.79297 10.4881 9.51315 10.2083 9.16797 10.2083H4.16797Z" fill="black" />
              </svg>
              Lorem ipusm</li>

              <li className="flex items-center gap-3 font-medium"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.29297 9.99996C2.29297 5.74276 5.74411 2.29163 10.0013 2.29163C14.2585 2.29163 17.7096 5.74276 17.7096 9.99996C17.7096 14.2572 14.2585 17.7083 10.0013 17.7083C9.65612 17.7083 9.3763 17.9881 9.3763 18.3333C9.3763 18.6785 9.65612 18.9583 10.0013 18.9583C14.9489 18.9583 18.9596 14.9475 18.9596 9.99996C18.9596 5.05241 14.9489 1.04163 10.0013 1.04163C5.05375 1.04163 1.04297 5.05241 1.04297 9.99996C1.04297 10.3451 1.32279 10.625 1.66797 10.625C2.01315 10.625 2.29297 10.3451 2.29297 9.99996Z" fill="black" />
                <path d="M4.16797 10.2083C3.82279 10.2083 3.54297 10.4881 3.54297 10.8333C3.54297 11.1785 3.82279 11.4583 4.16797 11.4583H7.65908L2.05936 17.058C1.81528 17.3021 1.81528 17.6978 2.05936 17.9419C2.30344 18.186 2.69917 18.186 2.94324 17.9419L8.54297 12.3422V15.8333C8.54297 16.1785 8.82279 16.4583 9.16797 16.4583C9.51315 16.4583 9.79297 16.1785 9.79297 15.8333V10.8333C9.79297 10.4881 9.51315 10.2083 9.16797 10.2083H4.16797Z" fill="black" />
              </svg>
              Lorem ipusm</li>

              <li className="flex items-center gap-3 font-medium"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.29297 9.99996C2.29297 5.74276 5.74411 2.29163 10.0013 2.29163C14.2585 2.29163 17.7096 5.74276 17.7096 9.99996C17.7096 14.2572 14.2585 17.7083 10.0013 17.7083C9.65612 17.7083 9.3763 17.9881 9.3763 18.3333C9.3763 18.6785 9.65612 18.9583 10.0013 18.9583C14.9489 18.9583 18.9596 14.9475 18.9596 9.99996C18.9596 5.05241 14.9489 1.04163 10.0013 1.04163C5.05375 1.04163 1.04297 5.05241 1.04297 9.99996C1.04297 10.3451 1.32279 10.625 1.66797 10.625C2.01315 10.625 2.29297 10.3451 2.29297 9.99996Z" fill="black" />
                <path d="M4.16797 10.2083C3.82279 10.2083 3.54297 10.4881 3.54297 10.8333C3.54297 11.1785 3.82279 11.4583 4.16797 11.4583H7.65908L2.05936 17.058C1.81528 17.3021 1.81528 17.6978 2.05936 17.9419C2.30344 18.186 2.69917 18.186 2.94324 17.9419L8.54297 12.3422V15.8333C8.54297 16.1785 8.82279 16.4583 9.16797 16.4583C9.51315 16.4583 9.79297 16.1785 9.79297 15.8333V10.8333C9.79297 10.4881 9.51315 10.2083 9.16797 10.2083H4.16797Z" fill="black" />
              </svg>
              Lorem ipusm</li>

            </ul>
          </div>
        </div>
        <HamburgerNav />
      </div>
    </nav>
  );
};

export default Navigation;
