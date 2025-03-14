// app/ClientLayout.tsx
"use client";

import { usePathname } from 'next/navigation';
import HeaderBanner from '@/components/Layout/HeaderBanner';
import Navigation from '@/components/Layout/Navigation';
import Footer from '@/components/Layout/Footer';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // مسیرهایی که فقط children رو رندر می‌کنن
  const minimalLayoutPaths = ['/login', '/register', '/forget-password', '/dashboard/professinal', '/_error'];
  const adminLayoutPaths = ['/admin-login'];

  if (minimalLayoutPaths.includes(pathname)) {
    return <>{children}</>;
  }

  if (adminLayoutPaths.includes(pathname)) {
    return (
      <>
        <HeaderBanner />
        <Navigation />
        {children}
      </>
    );
  }

  //レイアウト پیش‌فرض
  return (
    <>
      <HeaderBanner />
      <Navigation />
      {children}
      <Footer />
    </>
  );
}