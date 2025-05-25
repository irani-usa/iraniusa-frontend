
import React from "react";
import {
  Main,
  SideMenu,
  Unsupportable,
} from "@/components/Dashboard/Layout";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Unsupportable />
      <section className="hidden lg:flex w-full">
        <SideMenu />
        <Main insideElement={children} />
      </section>
    </>
  );
}
