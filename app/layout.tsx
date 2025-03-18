// app/layout.tsx
import './globals.css';
import localFont from 'next/font/local';
import { Open_Sans } from 'next/font/google';
import { Outfit } from 'next/font/google';

import HeaderBanner from '@/components/Layout/HeaderBanner';
import Navigation from '@/components/Layout/Navigation';
import Footer from '@/components/Layout/Footer';
import MenuProvider from '@/context/MenuProvider';
import ClientLayout from './ClientLayout'; // کامپوننت جدید

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-opensans',
});
const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

export const vazirmatn = localFont({
  src: [
    {
      path: '../public/fonts/Vazirmatn-Bold.woff2',
      weight: '200',
    },
  ],
  variable: '--font-vazirmatn',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body className={`${vazirmatn.variable} ${openSans.variable} ${outfit.variable} !text-black`}>
        <MenuProvider>
          <ClientLayout>{children}</ClientLayout>
        </MenuProvider>
      </body>
    </html>
  );
}