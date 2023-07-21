
import React from 'react'
import Logo from '../Logo'
import { User } from '../Icons/Solid'
import Link from 'next/link'
import HamburgerNav from '../Hamburger'

const Navigation = () => {
  return (
    <nav className='w-full h-24 border-b border-white-shade-4'>
      <div className='container flex justify-between items-center h-full'>
        <div className='flex h-full items-center gap-x-10'>
          <Link href={"/"}>
            <Logo width={80} height={200} />
          </Link>
          <ul className='navigation hidden h-full lg:flex items-center gap-x-10 text-white-shade-10 font-opensans font-medium'>
            <li className='active'>
              <Link href={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link href={"#"}>
                Event
              </Link>
            </li>
            <li>
              <Link href={"#"}>
                Blog
              </Link>
            </li>
            <li>
              <Link href={"/financial-market"}>
                Financial market
              </Link>
            </li>
            <li>
              <Link href={"#"}>
                ADS reservation
              </Link>
            </li>
            <li>
              <Link href={"#"}>
                Music player
              </Link>
            </li>
            <li>
              <Link href={"#"}>
                Plans
              </Link>
            </li>
            <li>
              <Link href={"/about"}>
                About
              </Link>
            </li>
          </ul>
        </div>
        <Link className='hidden lg:flex bg-white-shade-3 p-4 jcc aic rounded-full' href={"/login"}>
          <User classes={''} />
        </Link>
        <HamburgerNav/>
      </div>
    </nav>
  )
}

export default Navigation