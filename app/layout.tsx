
import './globals.css'

import { Open_Sans } from 'next/font/google'
import { Outfit } from 'next/font/google'

import HeaderBanner from '@/components/HeaderBanner'
import Navigation from '@/components/Navigation'

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-opensans',
})
const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
})

export const metadata = {
  title: 'IRANI USA',
  description: 'By WSA/RIV',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className=''>
      <body className={`${openSans.variable} ${outfit.variable}`}>
        <HeaderBanner />
        <Navigation/>
        {children}
      </body>
    </html>
  )
}
