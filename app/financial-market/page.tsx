import React from "react";

import Star from "@/components/Icons/Solid/Star";
import OverlayMenu from "@/components/Layout/OverlayMenu";

import Image from "next/image";

import { Apple } from "@/components/Icons/Solid";

import Btc from "@/components/Icons/Solid/Btc";

import { Chart, Financial, Table } from "@/components/Pages/Financial/index";

import StampBG from "@/components/StampBG";
import Link from "next/link";

const page = () => {
  return (
    <>
      <OverlayMenu />
      <section className="container py-10 lg:flex lg:justify-between lg:items-start lg:mt-12">
        <div className="flex flex-col gap-y-5 lg:mt-5">
          <h1 className="flex gap-x-2 font-opensans items-center text-white-shade-9 text-lg">
            <Star />
            <svg
              width="25"
              height="1.5"
              viewBox="0 0 25 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="25"
                y1="0.5"
                x2="-4.37114e-08"
                y2="0.499998"
                stroke="#A6A6A6"
              />
            </svg>
            All markets & stocks
          </h1>
          <h1 className="text-black text-3xl font-bold font-outfit lg:text-5xl lg:max-w-md ">
            Reliable international Financial markets
          </h1>
          <p className="text-white-shade-9 font-opensans lg:max-w-md">
            Get inform from all financial markets like crypto, Precious Metals,
            Commodities, Fiat currency, Stock Market
          </p>
         
        </div>
        <div className="lg:flex items-center gap-x-4">
          <div>
            <Financial
              content={"Total shares"}
              content2={"Total return"}
              classes={"bg-blue lg:w-[300px] text-white "}
              title={"Apple"}
              price={"$310,40"}
              found={"-1,10%"}
              iconComp={<Apple />}
              frame={""}
              info={false}
            />
            <Financial
              content={"Price"}
              content2={"24h%"}
              classes={
                "bg-transparent text-black border-[1px] border-white-shade-4 lg:my-0"
              }
              frame={"border-[1.5px] border-white-shade-4"}
              title={"BTC"}
              price={"$36,641.20"}
              found={"+6.04%"}
              iconComp={<Btc />}
              info={false}
            />
          </div>
          <img
            src="/images/financial/chart.webp"
            className="w-full lg:w-[280px] lg:h-[325px]"
            alt=""
          />
        </div>
      </section>
      <section></section>
      <section>
        <div className="container lg:hidden">
          <Chart />
          <div className="flex justify-center items-center">
            <StampBG  />
          </div>
          <div className="mt-14">
            <div className="flex items-center justify-between py-7">
              <h1 className="font-outfit text-black font-semibold text-lg">
                Crypto Currency
              </h1>
              <span className="font-opensans text-white-shade-11">See all</span>
            </div>
            <Chart />
          </div>
          <div className="mt-14">
            <div className="flex items-center justify-between py-7">
              <h1 className="font-outfit text-black font-semibold text-lg">
                Crypto Currency
              </h1>
              <span className="font-opensans text-white-shade-11">See all</span>
            </div>
            <Chart />
          </div>
          <div className="mt-14">
            <div className="flex items-center justify-between py-7">
              <h1 className="font-outfit text-black font-semibold text-lg">
                Commodities
              </h1>
              <span className="font-opensans text-white-shade-11">See all</span>
            </div>
            <Chart />
          </div>
          <div className="mt-14">
            <div className="flex items-center justify-between py-7">
              <h1 className="font-outfit text-black font-semibold text-lg">
                Fiat Currency
              </h1>
              <span className="font-opensans text-white-shade-11">See all</span>
            </div>
            <Chart />
          </div>
          <div className="mt-14">
            <div className="flex items-center justify-between py-7">
              <h1 className="font-outfit text-black font-semibold text-lg">
                Stock Market
              </h1>
              <span className="font-opensans text-white-shade-11">See all</span>
            </div>
            <Chart />
          </div>
        </div>

        <div className="container hidden lg:flex">
          <div className="w-full flex gap-4">
             <div className="w-2/5">
             <StampBG  />
             </div>
              <Table />
          </div>
        </div>
        
        <div className="container hidden lg:flex">
          <div className="w-full flex flex-col">
            <div className="flex items-center justify-between py-7">
              <h1 className="font-outfit text-black font-semibold text-2xl">
                Crypto Currency
              </h1>
              <span className="font-opensans text-white-shade-11 font-medium">
                See all
              </span>
            </div>
            <Table />
          </div>
        </div>
        <div className="container hidden lg:flex">
          <div className="w-full flex flex-col">
            <div className="flex items-center justify-between py-7">
              <h1 className="font-outfit text-black font-semibold text-2xl">
                Precious Metals
              </h1>
              <span className="font-opensans text-white-shade-11 font-medium">
                See all
              </span>
            </div>
            <Table />
          </div>
        </div>
        <div className="container hidden lg:flex">
          <div className="w-full flex flex-col">
            <div className="flex items-center justify-between py-7">
              <h1 className="font-outfit text-black font-semibold text-2xl">
                Commodities
              </h1>
              <span className="font-opensans text-white-shade-11 font-medium">
                See all
              </span>
            </div>
            <Table />
          </div>
        </div>
        <div className="container hidden lg:flex">
          <div className="w-full flex flex-col">
            <div className="flex items-center justify-between py-7">
              <h1 className="font-outfit text-black font-semibold text-2xl">
                Fiat Currency
              </h1>
              <span className="font-opensans text-white-shade-11 font-medium">
                See all
              </span>
            </div>
            <Table />
          </div>
        </div>
        <div className="container hidden lg:flex">
          <div className="w-full flex flex-col">
            <div className="flex items-center justify-between py-7">
              <h1 className="font-outfit text-black font-semibold text-2xl">
                Stock Market
              </h1>
              <span className="font-opensans text-white-shade-11 font-medium">
                See all
              </span>
            </div>
            <Table />
          </div>
        </div>
        <div className="relative bg-blue w-full h-auto pt-[110px] pb-[150px] mt-10">
          <div className="bg-white/5 flex items-center justify-center w-14 h-14 backdrop-blur-lg rounded-full absolute top-8 left-7 lg:top-20 lg:left-[350px]">
            <svg  width="23" height="23" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.1666 14.5167H9.07489C7.70822 14.5167 6.59989 13.3667 6.59989 11.9501C6.59989 11.6084 6.88322 11.3251 7.22489 11.3251C7.56655 11.3251 7.84989 11.6084 7.84989 11.9501C7.84989 12.6751 8.39989 13.2667 9.07489 13.2667H11.1666C11.7082 13.2667 12.1582 12.7834 12.1582 12.2001C12.1582 11.4751 11.8999 11.3334 11.4749 11.1834L8.11655 10.0001C7.46655 9.77506 6.59155 9.29173 6.59155 7.80006C6.59155 6.51673 7.59989 5.4834 8.83322 5.4834H10.9249C12.2916 5.4834 13.3999 6.6334 13.3999 8.05006C13.3999 8.39173 13.1166 8.67506 12.7749 8.67506C12.4332 8.67506 12.1499 8.39173 12.1499 8.05006C12.1499 7.32506 11.5999 6.7334 10.9249 6.7334H8.83322C8.29155 6.7334 7.84155 7.21673 7.84155 7.80006C7.84155 8.52506 8.09989 8.66673 8.52489 8.81673L11.8832 10.0001C12.5332 10.2251 13.4082 10.7084 13.4082 12.2001C13.3999 13.4751 12.3999 14.5167 11.1666 14.5167Z" fill="white" />
              <path d="M10 15.625C9.65833 15.625 9.375 15.3417 9.375 15V5C9.375 4.65833 9.65833 4.375 10 4.375C10.3417 4.375 10.625 4.65833 10.625 5V15C10.625 15.3417 10.3417 15.625 10 15.625Z" fill="white" />
              <path d="M10.0001 18.9584C5.05842 18.9584 1.04175 14.9417 1.04175 10.0001C1.04175 5.05842 5.05842 1.04175 10.0001 1.04175C14.9417 1.04175 18.9584 5.05842 18.9584 10.0001C18.9584 14.9417 14.9417 18.9584 10.0001 18.9584ZM10.0001 2.29175C5.75008 2.29175 2.29175 5.75008 2.29175 10.0001C2.29175 14.2501 5.75008 17.7084 10.0001 17.7084C14.2501 17.7084 17.7084 14.2501 17.7084 10.0001C17.7084 5.75008 14.2501 2.29175 10.0001 2.29175Z" fill="white" />
            </svg>

          </div>
          <div className="bg-white/5 flex items-center justify-center w-14 h-14 backdrop-blur-lg rounded-full absolute top-9 right-7 lg:left-[280px] lg:top-48">
            <svg width="27" height="28" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_3866_4503)">
                <path d="M8.25048 18.9737C12.7316 20.1744 17.3376 17.5151 18.5383 13.034C19.739 8.55284 17.0798 3.94681 12.5986 2.7461C8.11752 1.54539 3.51149 4.20468 2.31078 8.6858C1.11007 13.1669 3.76936 17.7729 8.25048 18.9737Z" fill="#FF6838" />
                <path d="M14.2597 10.8112C14.7037 9.791 14.047 9.00249 13.0427 8.32465L13.7876 6.98066L12.9698 6.5278L12.2441 7.8362C12.0294 7.7167 11.8075 7.59963 11.5861 7.48269L12.3167 6.16584L11.499 5.71247L10.7542 7.05596C10.5752 6.96125 10.399 6.86838 10.2296 6.7741L10.2319 6.7698L9.10378 6.14414L8.61967 7.01776C8.61967 7.01776 9.23034 7.34118 9.21421 7.34664C9.54541 7.5305 9.54639 7.78242 9.48574 7.96618L8.63743 9.49716C8.66014 9.50977 8.68914 9.52732 8.72097 9.55053L8.63428 9.50284L7.44544 11.6475C7.37302 11.7433 7.21963 11.8756 6.98759 11.7477C6.99332 11.7628 6.39319 11.4183 6.39319 11.4183L5.68931 12.3048L6.75408 12.895C6.95179 13.005 7.14476 13.1165 7.33513 13.2235L6.5823 14.5828L7.39965 15.0355L8.14458 13.6915C8.36668 13.8201 8.58291 13.9421 8.79487 14.0598L8.05258 15.398L8.87044 15.8508L9.62246 14.4946C11.0416 15.1782 12.1959 15.3652 13.0313 14.14C13.7043 13.1539 13.4725 12.4184 12.7956 11.7984C13.404 11.8201 13.936 11.5588 14.2597 10.8112V10.8112ZM11.5041 13.0829C10.9421 14.0992 9.26663 13.0193 8.71184 12.7125L9.71062 10.912C10.2651 11.2198 12.0917 12.0239 11.5041 13.0829ZM12.5321 10.3315C12.0198 11.2557 10.6293 10.3434 10.1679 10.0877L11.0728 8.45503C11.5342 8.71074 13.0665 9.36753 12.5321 10.3315Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_3866_4503">
                  <rect width="16.8" height="16.8" fill="white" transform="translate(4.48486 0.572021) rotate(15)" />
                </clipPath>
              </defs>
            </svg>

          </div>
          <div className="bg-white/5 flex items-center justify-center w-14 h-14 backdrop-blur-lg rounded-full absolute top-[292px] left-5 lg:top-20 lg:right-4">
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 14.0938C12.0417 14.0938 11.5833 14 11.2187 13.8229L7.33333 11.875C6.52083 11.4688 5.94791 10.7604 5.77083 9.94792C5.59375 9.125 5.81249 8.25 6.38541 7.54167L10.2708 2.6875C10.8437 1.96875 11.6562 1.5625 12.5 1.5625C13.3437 1.5625 14.1562 1.96875 14.7292 2.6875L18.6146 7.55208C19.1875 8.26042 19.4062 9.13542 19.2292 9.95833C19.0521 10.7813 18.4792 11.4792 17.6667 11.8854L13.7812 13.8333C13.4167 14.0104 12.9583 14.0938 12.5 14.0938ZM11.4896 3.66667L7.60416 8.52083C7.33333 8.86458 7.21875 9.25 7.30208 9.61458C7.38541 9.97917 7.64583 10.2813 8.04166 10.4792L11.9271 12.4271C12.2187 12.5729 12.7917 12.5729 13.0833 12.4271L16.9687 10.4792C17.3646 10.2813 17.625 9.96875 17.7083 9.61458C17.7917 9.26042 17.6771 8.86458 17.4062 8.52083L13.5208 3.66667C12.9479 2.96875 12.0521 2.96875 11.4896 3.66667Z" fill="white" />
              <path d="M12.5 8.65617C12.0729 8.65617 11.7188 8.302 11.7188 7.87492V2.39575C11.7188 1.96867 12.0729 1.6145 12.5 1.6145C12.9271 1.6145 13.2812 1.96867 13.2812 2.39575V7.87492C13.2812 8.302 12.9271 8.65617 12.5 8.65617Z" fill="white" />
              <path d="M16.875 11.9375C16.7084 11.9375 16.5521 11.8854 16.4063 11.7813L12.5 8.84375L8.59379 11.7813C8.25004 12.0417 7.76046 11.9687 7.50004 11.625C7.23962 11.2812 7.31254 10.7917 7.65629 10.5312L12.0313 7.25C12.3125 7.04167 12.6875 7.04167 12.9688 7.25L17.3438 10.5312C17.6875 10.7917 17.7605 11.2812 17.5 11.625C17.3542 11.8333 17.1146 11.9375 16.875 11.9375Z" fill="white" />
              <path d="M12.5 23.4376C11.6666 23.4376 10.8541 23.0418 10.2812 22.3334L6.67704 17.9272C5.97913 17.073 5.95829 15.9063 6.62496 15.0209C7.29162 14.1355 8.42704 13.8543 9.43745 14.3022L11.1145 15.0522C11.9895 15.4376 12.9895 15.4376 13.8645 15.0522L15.5416 14.3022C16.552 13.8543 17.6875 14.1459 18.3541 15.0209C19.0312 15.9063 19.0104 17.073 18.302 17.9272L14.6979 22.3334C14.1458 23.0418 13.3333 23.4376 12.5 23.4376ZM8.47912 15.6668C8.15621 15.6668 7.94787 15.8959 7.87495 15.9793C7.79162 16.0938 7.53121 16.5001 7.89579 16.948L11.5 21.3543C12.052 22.0313 12.9583 22.0313 13.5104 21.3543L17.1145 16.948C17.4791 16.5001 17.2187 16.0938 17.1354 15.9793C17.052 15.8647 16.7187 15.5105 16.1979 15.7397L14.5208 16.4897C13.2395 17.0522 11.7812 17.0522 10.5 16.4897L8.82287 15.7397C8.68746 15.6876 8.57287 15.6668 8.47912 15.6668Z" fill="white" />
            </svg>


          </div>
          <div className="bg-white/5 flex items-center justify-center w-14 h-14 backdrop-blur-lg rounded-full absolute top-[285px] right-5 lg:top-80 lg:left-[330px] lg:right-8">
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1816_23500)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8933 6.73069C11.952 6.73069 9.61546 8.85858 9.61546 12.0192C9.61546 15.2749 12.0453 17.7884 14.8933 17.7884C15.6078 17.7884 16.2885 17.6336 16.9107 17.3518C17.026 17.2966 17.1513 17.265 17.2791 17.2588C17.4069 17.2526 17.5346 17.2719 17.6548 17.3157C17.775 17.3595 17.8853 17.4268 17.9791 17.5138C18.073 17.6007 18.1485 17.7055 18.2014 17.822C18.2542 17.9385 18.2833 18.0644 18.2869 18.1922C18.2905 18.3201 18.2685 18.4474 18.2223 18.5667C18.176 18.686 18.1064 18.7949 18.0176 18.8869C17.9288 18.979 17.8224 19.0524 17.7049 19.1028C16.8219 19.5042 15.8632 19.7117 14.8933 19.7115C10.8491 19.7115 7.69238 16.198 7.69238 12.0192C7.69238 7.74512 10.9424 4.80762 14.8933 4.80762C16.0828 4.80762 17.228 5.1855 18.3299 5.93646C18.438 6.00589 18.5311 6.09628 18.6037 6.2023C18.6763 6.30832 18.7269 6.42782 18.7526 6.55373C18.7782 6.67964 18.7784 6.80941 18.753 6.93538C18.7276 7.06134 18.6773 7.18095 18.6049 7.28712C18.5325 7.3933 18.4396 7.4839 18.3316 7.55356C18.2237 7.62322 18.1028 7.67053 17.9763 7.6927C17.8497 7.71486 17.72 7.71144 17.5947 7.68262C17.4695 7.65381 17.3513 7.60018 17.2472 7.52492C16.4222 6.96339 15.6482 6.73069 14.8933 6.73069Z" fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.76929 10.577C5.76929 10.322 5.87059 10.0774 6.05092 9.89711C6.23124 9.71678 6.47581 9.61548 6.73083 9.61548H15.3847C15.6397 9.61548 15.8843 9.71678 16.0646 9.89711C16.2449 10.0774 16.3462 10.322 16.3462 10.577C16.3462 10.832 16.2449 11.0766 16.0646 11.2569C15.8843 11.4373 15.6397 11.5386 15.3847 11.5386H6.73083C6.47581 11.5386 6.23124 11.4373 6.05092 11.2569C5.87059 11.0766 5.76929 10.832 5.76929 10.577ZM5.76929 13.9424C5.76929 13.6874 5.87059 13.4428 6.05092 13.2625C6.23124 13.0822 6.47581 12.9809 6.73083 12.9809H14.4231C14.6781 12.9809 14.9227 13.0822 15.103 13.2625C15.2834 13.4428 15.3847 13.6874 15.3847 13.9424C15.3847 14.1974 15.2834 14.442 15.103 14.6223C14.9227 14.8026 14.6781 14.9039 14.4231 14.9039H6.73083C6.47581 14.9039 6.23124 14.8026 6.05092 14.6223C5.87059 14.442 5.76929 14.1974 5.76929 13.9424Z" fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 23.0769C18.3413 23.0769 23.0769 18.3413 23.0769 12.5C23.0769 6.65865 18.3413 1.92308 12.5 1.92308C6.65865 1.92308 1.92308 6.65865 1.92308 12.5C1.92308 18.3413 6.65865 23.0769 12.5 23.0769ZM12.5 25C19.4038 25 25 19.4038 25 12.5C25 5.59615 19.4038 0 12.5 0C5.59615 0 0 5.59615 0 12.5C0 19.4038 5.59615 25 12.5 25Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_1816_23500">
                  <rect width="25" height="25" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="bg-white/5 flex items-center justify-center w-20 h-20 backdrop-blur-lg rounded-full absolute top-[420px] left-24">
            <svg width="33" height="33" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M23.8751 23.95C24.6126 22.825 24.8876 22.25 25.4501 20.9875C21.3001 19.4125 20.6376 13.5 24.7376 11.2375C23.4876 9.66249 21.7251 8.75 20.0626 8.75C18.8626 8.75 18.0376 9.06251 17.3001 9.35001C16.6751 9.58751 16.1126 9.8 15.4126 9.8C14.6626 9.8 14.0001 9.56252 13.3001 9.31252C12.5376 9.03752 11.7376 8.75 10.7376 8.75C8.87508 8.75 6.88758 9.8875 5.62508 11.8375C3.85008 14.5875 4.16259 19.7375 7.02509 24.1375C8.05009 25.7125 9.42508 27.475 11.2126 27.5C11.9626 27.5125 12.4501 27.2875 12.9876 27.05C13.6001 26.775 14.2626 26.475 15.4251 26.475C16.5876 26.4625 17.2376 26.775 17.8501 27.05C18.3751 27.2875 18.8501 27.5125 19.5876 27.5C21.4001 27.475 22.8501 25.525 23.8751 23.95Z" fill="white" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7998 2.5C19.9998 3.875 19.4373 5.23752 18.6998 6.18752C17.9123 7.21252 16.5373 8.01249 15.2123 7.96249C14.9748 6.63749 15.5873 5.27499 16.3373 4.36249C17.1748 3.36249 18.5873 2.5875 19.7998 2.5Z" fill="white" />
            </svg>
          </div>
          <div className="bg-white/5 flex items-center justify-center w-20 h-20   backdrop-blur-lg rounded-full absolute top-[400px] right-20">
            <svg width="33" height="33" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26 14.6125C26 13.7068 25.9205 12.836 25.7727 12H14V16.9405H20.7273C20.4375 18.537 19.5568 19.8897 18.233 20.7954V24H22.2727C24.6364 21.7765 26 18.5022 26 14.6125Z" fill="#4285F4" />
              <path d="M14.4904 26C17.962 26 20.8726 24.8945 23 23.009L18.8445 19.9113C17.6932 20.6521 16.2203 21.0898 14.4904 21.0898C11.1414 21.0898 8.30684 18.9181 7.29573 16H3V19.1987C5.11572 23.2334 9.46406 26 14.4904 26Z" fill="#58BD7D" />
              <path d="M7 16.5385C6.72755 15.7368 6.57276 14.8806 6.57276 14C6.57276 13.1194 6.72755 12.2632 7 11.4615V8H2.44892C1.49536 9.86177 0.99916 11.9165 1 14C1 16.1559 1.52632 18.1964 2.44892 20L7 16.5385Z" fill="#FBBC05" />
              <path d="M14.4369 5.91021C16.3159 5.91021 18.0029 6.53311 19.3293 7.75645L23 4.21549C20.7836 2.22334 17.8866 1 14.4369 1C9.43397 1 5.10588 3.76655 3 7.80135L7.27574 11C8.28214 8.08193 11.1035 5.91021 14.4369 5.91021Z" fill="#EA4335" />
            </svg>
          </div>
          <div className="container flex flex-col items-center gap-y-7">
            <span className="text-white-shade-9 text-lg">Financial markets</span>
            <h1 className="text-white text-3xl font-medium lg:text-5xl">Check market values daily</h1>
            <p className="text-white-shade-9 text-center max-w-[320px] lg:max-w-[500px]">
              Get data from financial markets like crypto, precious metals, commodities, fiat currency, and the US stock market
            </p>
            <Link className="bg-white text-black w-40 h-14 font-medium text-lg rounded-[16px]  flex items-center justify-center " href={'/'}>
              See all
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
