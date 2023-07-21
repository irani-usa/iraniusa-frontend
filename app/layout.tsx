"use client"

import {usePathname, useSearchParams} from 'next/navigation'

import './globals.css'

import { Open_Sans } from 'next/font/google'
import { Outfit } from 'next/font/google'

import HeaderBanner from '@/components/HeaderBanner'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

import MenuProvider from '@/context/MenuProvider'

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-opensans',
})
const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
})

// export const metadata = {
//   title: 'IRANI USA',
//   description: 'By WSA/RIV',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pathname = usePathname()

  if (pathname == '/login') {
    return (
      <html lang="en" className=''>
        <body className={`${openSans.variable} ${outfit.variable}`}>
          {children}
        </body>
      </html>
    )
  }

  if (pathname == '/register') {
    return (
      <html lang="en" className=''>
        <body className={`${openSans.variable} ${outfit.variable}`}>
          {children}
        </body>
      </html>
    )
  }

  if (pathname == '/forget-password') {
    return (
      <html lang="en" className=''>
        <body className={`${openSans.variable} ${outfit.variable}`}>
          {children}
        </body>
      </html>
    )
  }

  return (
    <html lang="en" className=''>
      <body className={`${openSans.variable} ${outfit.variable}`}>
        <MenuProvider>
          <HeaderBanner />
          <Navigation />
          {children}
          <Footer />
        </MenuProvider>
      </body>
    </html>
  )
}
