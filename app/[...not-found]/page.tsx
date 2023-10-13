import React from "react";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section className="container flex flex-col gap-y-14 lg:flex-row-reverse lg:items-center lg:justify-between lg:mt-24">
      <div className="mt-8">
        <span className="text-black font-opensans px-6 py-3 border-[1px] border-white-shade-4 rounded-full font-semibold">
          Page not found
        </span>
        <h1 className="text-4xl font-outfit mt-9 text-black font-semibold lg:text-6xl">
          Oh NO! Error 404
        </h1>
        <p className="text-white-shade-10 font-opensans font-medium text-lg mt-5 mb-8">
          Maybe Irani Usa has broken this page. <br /> Come back to the homepage
        </p>
        <Link
          className="text-white bg-black py-4  px-14 font-opensans rounded-2xl"
          href={"/"}
        >
          Back to homepage
        </Link>
      </div>
      <img className="w-full lg:w-1/2" src="/Images/404/404.webp" alt="" />
    </section>
  );
}
