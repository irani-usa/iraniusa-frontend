import React from "react";
import Star from "../../About/Star";
import Link from "next/link";
import { CalHeader } from "./CalHeader";
import { CalRow } from "./CalRow";

const EventCalendar = () => {
  return (
    <section className="container">
      <div className="flex flex-col items-center">
        <div className="w-full flex items-center gap-x-2">
          <div className="w-1/2 h-[1px] bg-white-shade-4"></div>
          <Star content={"Events Calendar"} />
          <div className="w-1/2 h-[1px] bg-white-shade-4"></div>
        </div>
        <p className="text-white-shade-11 mt-4 text-lg">
          A calendar of events and concerts from all around the US
        </p>
      </div>
      <div className="w-full flex flex-col gap-y-6 lg:flex-row gap-x-4 mt-16">
        <div className="w-full lg:w-2/3 flex flex-col items-center">
          <div
            className="w-full h-80 rounded-3xl bg-center bg-cover"
            style={{
              backgroundImage: `url('/images/events/main-event.jpg')`,
            }}
          ></div>
          <div className="relative w-[90%] p-6  bg-white-shade-2 border border-white-shade-4 rounded-b-xl  ">
            <h4 className="text-black font-outfit font-medium text-lg">
              Homayoun Shajarian, Sohrab & Tahmoures Pournazeri
            </h4>
            <div className="flex gap-x-4 mt-4">
              <div className="flex items-center gap-x-2 text-white-shade-10">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.555 3.68335H17.3784C18.1571 3.68333 18.8064 3.6833 19.3219 3.75261C19.866 3.82576 20.3572 3.98667 20.752 4.38141C21.1467 4.77615 21.3076 5.26738 21.3808 5.81147C21.4501 6.32695 21.45 6.97627 21.45 7.75496V21.0167H21.6667C22.0257 21.0167 22.3167 21.3077 22.3167 21.6667C22.3167 22.0257 22.0257 22.3167 21.6667 22.3167H4.33335C3.97436 22.3167 3.68335 22.0257 3.68335 21.6667C3.68335 21.3077 3.97436 21.0167 4.33335 21.0167H4.55002L4.55002 10.355C4.54999 9.57627 4.54997 8.92695 4.61927 8.41147C4.69242 7.86738 4.85334 7.37615 5.24808 6.98141C5.64282 6.58667 6.13405 6.42576 6.67813 6.35261C7.19361 6.2833 7.84293 6.28332 8.62161 6.28335L11.5076 6.28335C11.5522 5.52573 11.6919 4.87096 12.1814 4.38141C12.5762 3.98667 13.0674 3.82576 13.6115 3.75261C14.1269 3.6833 14.7763 3.68333 15.555 3.68335ZM12.1393 7.58335C12.1382 7.58335 12.137 7.58335 12.1359 7.58335C12.1351 7.58335 12.1342 7.58335 12.1333 7.58335H8.66668C7.83121 7.58335 7.26999 7.58473 6.85136 7.64102C6.45142 7.69479 6.28026 7.78771 6.16732 7.90065C6.05438 8.01359 5.96145 8.18476 5.90768 8.58469C5.8514 9.00332 5.85002 9.56454 5.85002 10.4V21.0167H9.75002V19.0667C9.75002 18.7077 10.041 18.4167 10.4 18.4167C10.759 18.4167 11.05 18.7077 11.05 19.0667V21.0167H14.95V10.4C14.95 9.56454 14.9486 9.00332 14.8924 8.58469C14.8386 8.18476 14.7457 8.01359 14.6327 7.90065C14.5198 7.78771 14.3486 7.69479 13.9487 7.64102C13.531 7.58487 12.9715 7.58336 12.1393 7.58335ZM16.25 21.0167L16.25 10.355C16.25 9.57627 16.2501 8.92695 16.1808 8.41147C16.1076 7.86738 15.9467 7.37615 15.552 6.98141C15.1572 6.58667 14.666 6.42576 14.1219 6.35261C13.7533 6.30305 13.3162 6.28894 12.8123 6.28493C12.8557 5.67858 12.9511 5.45016 13.1006 5.30065C13.2136 5.18771 13.3848 5.09479 13.7847 5.04102C14.2033 4.98473 14.7645 4.98335 15.6 4.98335H17.3334C18.1688 4.98335 18.73 4.98473 19.1487 5.04102C19.5486 5.09479 19.7198 5.18771 19.8327 5.30065C19.9457 5.41359 20.0386 5.58476 20.0924 5.98469C20.1486 6.40332 20.15 6.96454 20.15 7.80002V21.0167H16.25ZM7.15002 9.53335C7.15002 9.17437 7.44103 8.88335 7.80002 8.88335H13C13.359 8.88335 13.65 9.17437 13.65 9.53335C13.65 9.89234 13.359 10.1834 13 10.1834H7.80002C7.44103 10.1834 7.15002 9.89234 7.15002 9.53335ZM7.15002 12.1334C7.15002 11.7744 7.44103 11.4834 7.80002 11.4834H13C13.359 11.4834 13.65 11.7744 13.65 12.1334C13.65 12.4923 13.359 12.7834 13 12.7834H7.80002C7.44103 12.7834 7.15002 12.4923 7.15002 12.1334ZM7.15002 14.7334C7.15002 14.3744 7.44103 14.0834 7.80002 14.0834H13C13.359 14.0834 13.65 14.3744 13.65 14.7334C13.65 15.0923 13.359 15.3834 13 15.3834H7.80002C7.44103 15.3834 7.15002 15.0923 7.15002 14.7334Z"
                    fill="#999999"
                  />
                </svg>
                The World In The Concert Hall
              </div>
              <div className="flex items-center gap-x-2 text-white-shade-10">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.41663 11.3909C5.41663 7.14505 8.80097 3.68335 13 3.68335C17.1989 3.68335 20.5833 7.14505 20.5833 11.3909C20.5833 13.4406 19.9991 15.6415 18.9665 17.543C17.9351 19.4421 16.4282 21.0923 14.5431 21.9734C13.5638 22.4311 12.4361 22.4311 11.4569 21.9734C9.57175 21.0923 8.06483 19.4421 7.03344 17.543C6.00078 15.6415 5.41663 13.4406 5.41663 11.3909ZM13 4.98335C9.5406 4.98335 6.71663 7.84117 6.71663 11.3909C6.71663 13.2083 7.23891 15.1974 8.17584 16.9225C9.11403 18.65 10.4398 20.063 12.0073 20.7957C12.6377 21.0903 13.3622 21.0903 13.9926 20.7957C15.5601 20.063 16.8859 18.65 17.8241 16.9225C18.761 15.1974 19.2833 13.2083 19.2833 11.3909C19.2833 7.84117 16.4593 4.98335 13 4.98335ZM13 9.31668C11.923 9.31668 11.05 10.1897 11.05 11.2667C11.05 12.3436 11.923 13.2167 13 13.2167C14.0769 13.2167 14.95 12.3436 14.95 11.2667C14.95 10.1897 14.0769 9.31668 13 9.31668ZM9.74996 11.2667C9.74996 9.47176 11.205 8.01668 13 8.01668C14.7949 8.01668 16.25 9.47176 16.25 11.2667C16.25 13.0616 14.7949 14.5167 13 14.5167C11.205 14.5167 9.74996 13.0616 9.74996 11.2667Z"
                    fill="#999999"
                  />
                </svg>
                Los Angeles, California
              </div>
            </div>
            <Link
              className="absolute bottom-2 right-2 w-12 h-12 flex items-center justify-center bg-black rounded-full"
              href="/"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 21L21 9M21 9H12M21 9V18"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-1/3  h-auto rounded-3xl border border-white-shade-4">
          <div className="w-full py-4 border-b border-white-shade-4">
            <div className="flex items-center justify-center gap-x-[85px]">
              <svg className="cursor-pointer" width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 13.5L1 7.5L7 1.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-white-shade-10 font-medium text-xl">Month year</span>
              <svg  className="cursor-pointer" width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 13.5L7 7.5L1 1.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

            </div>
          </div>
         <div className="flex flex-col  py-4 ">
       <div className="px-10">
       <CalHeader />
       </div>
        <div className="px-9">
        <CalRow />
        </div>
         </div>
        </div>
      </div>
    </section>
  );
};

export default EventCalendar;
