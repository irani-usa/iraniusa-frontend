"use client";

import Link from "next/link";
import React, { useState } from "react";
import classNames from "classnames";
// import Loading from "@/components/Icons/Animated/Loading";

const page = () => {
  const [showErr, setShowErr] = useState(true);
  const ErrBoxClasses = classNames(
    "transition-all duration-300 bg-black ease-in-out absolute bottom-10 w-80 h-16 rounded-xl bg-white ",
    {
      "left-10": showErr,
      "-left-80": !showErr,
    }
  );
  return (
    <main className="relative">
      <div className={ErrBoxClasses}></div>
      <section
        className="w-full  flex flex-col items-center  gap-y-4 bg-center pt-8 bg-cover lg:h-[calc(100vh_-_160px)] h-[calc(100vh_-_148px)]" 
        style={{ backgroundImage: `url('/images/admin/admin-background.png')` } }
      >
        <div className="border border-white-shade-4 rounded-2xl py-3 px-4">
        <svg width="43" height="52" viewBox="0 0 43 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M33.1839 23.4614C35.6145 22.1285 37.7063 20.263 39.3021 18.0052L42.6604 20.3628C40.709 23.1237 38.1509 25.4049 35.1788 27.0349C32.2066 28.6648 28.8978 29.6011 25.5012 29.7732C23.3717 29.8811 21.2424 29.6869 19.1764 29.2016L17.6083 40.6132C17.4208 41.9779 18.3819 43.2416 19.7551 43.4357C21.1283 43.6298 22.3935 42.6808 22.581 41.3161L23.0865 37.6375C23.0847 37.6372 23.0829 37.637 23.0812 37.6367L23.1505 37.1716L23.5183 34.4948L23.5489 34.4991L23.682 33.6064C26.4773 34.0337 29.3305 33.8153 32.0203 32.9682L33.2776 36.8564C31.3021 37.4785 29.2544 37.8234 27.1933 37.8863L26.6431 41.8903C26.1492 45.4847 22.817 47.984 19.2004 47.4728C15.5838 46.9615 13.0523 43.6333 13.5462 40.0389L15.2174 27.8771C12.2201 26.5568 9.54313 24.603 7.37463 22.1507L10.4466 19.4673C12.289 21.5508 14.5801 23.1943 17.1477 24.274C19.7152 25.3537 22.4923 25.8415 25.2699 25.7008C28.0475 25.56 30.7534 24.7944 33.1839 23.4614Z" fill="black"/>
<path fillRule="evenodd" clipRule="evenodd" d="M24.9807 6.49316L23.1089 9.56946L19.4935 9.42469L21.8396 12.2011L20.5864 15.6018L23.9047 14.2122L26.7165 16.4563L26.441 12.8425L29.457 10.8135L25.9399 9.96407L24.9807 6.49316ZM21.1916 5.99276L24.0952 1.2207L27.2743 1.66385L28.7622 7.04806L34.1401 8.34691L34.7056 11.4974L30.0829 14.6074L30.5089 20.1956L27.6747 21.6952L23.3435 18.2386L18.2321 20.379L15.916 18.1615L17.854 12.9027L14.258 8.64716L15.6635 5.77142L21.1916 5.99276Z" fill="black"/>
</svg>

        </div>
        <h1 className="font-outfit font-semibold text-5xl text-black">Admins login</h1>
        <p className="font-inter font-medium text-sm text-white-shade-10 max-w-xs text-center mb-4">
          Admins only. Log in for system management. Regular users, use standard
          login.
        </p>
        <div className="flex gap-x-3">
          <div className="transition-all focus-within:border-white-shade-18  focus-within:border-2 flex items-center gap-xfocus-within:border-black-2 w-56 h-13 rounded-xl border-2 border-white-shade-4 px-4">
          
            <svg className="w-1/6 pr border-r border-white-shade-4" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M5.6263 6.66669C5.6263 4.25044 7.58506 2.29169 10.0013 2.29169C12.039 2.29169 13.7528 3.68537 14.2385 5.57247C14.3245 5.90676 14.6653 6.108 14.9996 6.02196C15.3339 5.93592 15.5351 5.59518 15.4491 5.2609C14.8247 2.83493 12.6232 1.04169 10.0013 1.04169C6.8947 1.04169 4.3763 3.56009 4.3763 6.66669V7.75233C4.18728 7.76562 4.00912 7.78292 3.84151 7.80546C3.09142 7.9063 2.45986 8.12205 1.95826 8.62364C1.45666 9.12524 1.24092 9.7568 1.14007 10.5069C1.04294 11.2294 1.04295 12.148 1.04297 13.2876V13.3791C1.04295 14.5187 1.04294 15.4373 1.14007 16.1598C1.24092 16.9099 1.45666 17.5415 1.95826 18.0431C2.45986 18.5447 3.09142 18.7604 3.84151 18.8612C4.56398 18.9584 5.48259 18.9584 6.62225 18.9584H13.3804C14.52 18.9584 15.4386 18.9584 16.1611 18.8612C16.9112 18.7604 17.5427 18.5447 18.0443 18.0431C18.5459 17.5415 18.7617 16.9099 18.8625 16.1598C18.9597 15.4373 18.9597 14.5187 18.9596 13.3791V13.2876C18.9597 12.148 18.9597 11.2294 18.8625 10.5069C18.7617 9.7568 18.5459 9.12524 18.0443 8.62364C17.5427 8.12205 16.9112 7.9063 16.1611 7.80546C15.4386 7.70832 14.52 7.70834 13.3804 7.70835H6.62224C6.26931 7.70835 5.93758 7.70834 5.6263 7.71122V6.66669ZM2.84214 9.50753C3.07278 9.27689 3.39659 9.12652 4.00807 9.04431C4.63753 8.95968 5.47179 8.95835 6.66797 8.95835H13.3346C14.5308 8.95835 15.3651 8.95968 15.9945 9.04431C16.606 9.12652 16.9298 9.27689 17.1605 9.50753C17.3911 9.73816 17.5415 10.062 17.6237 10.6735C17.7083 11.3029 17.7096 12.1372 17.7096 13.3334C17.7096 14.5295 17.7083 15.3638 17.6237 15.9933C17.5415 16.6047 17.3911 16.9285 17.1605 17.1592C16.9298 17.3898 16.606 17.5402 15.9945 17.6224C15.3651 17.707 14.5308 17.7084 13.3346 17.7084H6.66797C5.47179 17.7084 4.63753 17.707 4.00807 17.6224C3.39659 17.5402 3.07278 17.3898 2.84214 17.1592C2.61151 16.9285 2.46114 16.6047 2.37893 15.9933C2.2943 15.3638 2.29297 14.5295 2.29297 13.3334C2.29297 12.1372 2.2943 11.3029 2.37893 10.6735C2.46114 10.062 2.61151 9.73816 2.84214 9.50753Z" fill="#A6A6A6"/>
</svg>

            <input
              type="password"
              className="text-white-shade-9 text-sm font-medium font-inter group w-5/6 ml-3 h-full bg-white/0 rounded-2xl border-none focus:outline-hidden"
              placeholder="Password"
            />
          </div>
          <button
            onClick={() => {
              setShowErr(!showErr);
            }}
            type="submit"
            className="inline-flex items-center gap-x-2 px-5 rounded-2xl bg-blue text-white hover:bg-white/0 hover:text-black border-2 hover:border-blue transition-all duration-300"
          >
            {/* <Loading/> */}
            Login
          </button>
        </div>
          <a href={"/"} className="text-sm font-medium font-inter text-white-shade-8 mt-3">
            Back to home
          </a>        
      </section>
    </main>
  );
};

export default page;
