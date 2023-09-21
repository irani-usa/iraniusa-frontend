import React from 'react'
import Logo from './Logo'
import Link from 'next/link'

const SideMenu = () => {
    return (
        <nav className='flex flex-col w-1/5 h-screen py-8 px-12 border-r border-white-shade-4'>
            <Link href={"/"}>
                <Logo />
            </Link>
            <div className='flex flex-col mt-16'>
                <span className='text-white-shade-8'>Menu</span>
                <Link className='text-white bg-primaty-tint-4' href={"/"}>Edit profile</Link>
            </div>
        </nav>
    )
}

export default SideMenu