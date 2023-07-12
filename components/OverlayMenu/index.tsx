"use client"

import { MenuContext } from "@/context/MenuProvider"
import classNames from 'classnames';
import { useContext } from "react";
import Logo from "../Logo";
import Link from "next/link";

const OverlayMenu = () => {

  let menuVisibilty = useContext(MenuContext)

  const OverlayClasses = classNames('block lg:hidden w-full h-full transition-all fixed top-0 z-10', {
    'left-0': menuVisibilty.menu,
    '-left-[1200px]': !menuVisibilty.menu,
  })
  return (
    <section className={OverlayClasses}>
      <div className="w-full h-full bg-white text-black">
        <div className="container h-24">
          <Link href={"/"}>
            <Logo width={80} height={200} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default OverlayMenu