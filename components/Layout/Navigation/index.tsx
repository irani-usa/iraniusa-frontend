
import React, { useState } from 'react'
import Link from 'next/link'

import { usePathname } from 'next/navigation'

import Logo from '../../Logo'
import { User } from '../../Icons/Solid'
import HamburgerNav from '../Hamburger'

const Navigation = () => {

  const [menuItems, setMenuItesm] = useState([
    { value: 'Home', slug: '/' },
    { value: 'Events', slug: '/events' },
    { value: 'Blog', slug: '/blog' },
    { value: 'Financial market', slug: '/financial-market' },
    { value: 'ADS reservation', slug: '/ads-reservationt' },
    { value: 'Music player', slug: '/music-player' },
    { value: 'Plans', slug: '/plans' },
    { value: 'About', slug: '/about' },
  ])

  const pathname = usePathname()

  return (
    <nav className='w-full h-24 border-b border-white-shade-4'>
      <div className='container flex justify-between items-center h-full'>
        <div className='flex h-full items-center gap-x-10'>
          <Link href={"/"}>
            <Logo width={80} height={200} />
          </Link>
          <ul className='navigation hidden h-full lg:flex items-center gap-x-10 text-white-shade-10 font-opensans font-medium'>
            {
              menuItems.map((link) => {
                const isActive = pathname.startsWith(link.slug)
                return (
                  <li className={isActive ? 'active' : 'normal'}>
                    <Link href={link.slug}>
                      {link.value}
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <Link className='hidden lg:flex bg-white-shade-3 p-4 jcc aic rounded-full' href={"/login"}>
          <User classes={''} />
        </Link>
        <HamburgerNav />
      </div>
    </nav>
  )

}

export default Navigation