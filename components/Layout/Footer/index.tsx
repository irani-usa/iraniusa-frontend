"use client";

import Link from "next/link";
import React, { useState } from "react";

import Logo from "../../Logo";
import Phone from "../../Icons/Outline/Phone";
import Mail from "../../Icons/Outline/Mail";
import Location from "../../Icons/Outline/Location";

const Footer = () => {
  const [countriesTime, setCountriesTime] = useState([
    { newyork: "00:00" },
    { stockholm: "00:00" },
    { losangles: "00:00" },
    { dubai: "00:00" },
  ]);

  return (
    <footer className="w-full mt-32">
      <div className="flex items-center w-full h-20 no-scroll overflow-x-scroll lg:overflow-x-auto">
        <ul className="navigation container h-full font-opensans font-medium text-white-shade-8 border-b border-white-shade-4 flex gap-x-8">
          <li className="active">NewYork,USA</li>
          <li>Stockholm,sweden</li>
          <li>Dubai,UEA</li>
          <li className="pr-6">Tehran,iran</li>
        </ul>
      </div>
      <section className="container flex flex-col mb-10 lg:mb-0 lg:flex-row py-10">
        <div className="flex flex-col w-full mb-10 lg:mb-0 lg:w-1/2 gap-y-6 text-white-shade-10">
          <Logo width={70} height={40} />
          <p className="text-lg lg:text-base max-w-md">
            Our goal is not only to provide travel opportunities, but to
            strengthen the unity of nations and introduce the art and culture of
            the destination country: you would see the lifestyle of the people,
            hear their stories and...
            <Link href={"/"} className="text-black">
              {" "}
              Read more
            </Link>
          </p>
          <div className="flex flex-col gap-y-4 mt-6">
            <Link className="flex items-center gap-x-4" href={"#"}>
              <div className="flex justify-center items-center w-14 h-14 border border-white-shade-5 rounded-full">
                <Phone />
              </div>
              <div className="flex flex-col">
                <span>Tel</span>
                <span className="text-black">(+49) 71112196760</span>
              </div>
            </Link>
            <Link className="flex items-center gap-x-4" href={"#"}>
              <div className="flex justify-center items-center w-14 h-14 border border-white-shade-5 rounded-full">
                <Mail classes={""} />
              </div>
              <div className="flex flex-col">
                <span>Contact us at</span>
                <span className="text-black">info@example.org</span>
              </div>
            </Link>
            <Link className="flex items-center gap-x-4" href={"#"}>
              <div className="flex justify-center items-center w-14 h-14 border border-white-shade-5 rounded-full">
                <Location />
              </div>
              <div className="flex flex-col">
                <span>Address</span>
                <span className="text-black">
                  Birkenweg.20 24107 Kiel
                  <br />- Christophstraße 26, 70180 Stuttgart
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div>
          <h3 className="hidden lg:block font-outfit text-4xl font-semibold  text-black mt-10 mb-6">
            Our technical team
          </h3>
          <span className="hidden lg:block font-outfit text-2xl font-semibold text-black">
            Based in:
          </span>
          <span className="block lg:hidden font-outfit text-xl font-semibold text-black my-10">
            Our technical team based in:
          </span>
          <div className="grid grid-cols-2 lg:flex lg:gap-x-8 mt-6">
            <div className="flex flex-col items-center gap-y-4">
              <span className="text-white-shade-10">
                {countriesTime[0].newyork}
              </span>
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="100" height="100" rx="50" fill="#FAFAFA" />
                <path
                  d="M50 27.5C37.574 27.5 27.5 37.574 27.5 50C27.5 62.426 37.574 72.5 50 72.5C62.426 72.5 72.5 62.426 72.5 50C72.5 37.574 62.426 27.5 50 27.5ZM40.409 68.672C38.6582 67.769 37.0427 66.6249 35.6097 65.273H64.391C62.9579 66.6247 61.3425 67.7688 59.5918 68.672H40.409ZM32.69 61.8717C31.9531 60.8001 31.3176 59.6622 30.7917 58.4728H69.209C68.6828 59.6621 68.0473 60.7999 67.3108 61.8717H32.69ZM29.6232 55.0737C29.3465 53.9576 29.1623 52.8205 29.0728 51.674H70.928C70.8384 52.8205 70.6543 53.9576 70.3775 55.0737H29.6232ZM32.4058 38.5557H32.6892L32.936 37.7833C32.9833 37.7173 33.0282 37.6498 33.077 37.5845L33.386 38.5557H34.5125L33.6013 39.2772L33.95 40.3948L33.038 39.731L32.126 40.412L32.4748 39.275L32.1223 38.9968C32.2145 38.849 32.3105 38.7027 32.4058 38.5557ZM33.95 49.2448L33.038 48.581L32.126 49.262L32.4748 48.125L31.5627 47.405H32.6892L33.038 46.3115L33.386 47.405H34.5125L33.6013 48.1265L33.95 49.2448ZM47.7875 33.0373L48.1362 34.1307H49.2628L48.3508 34.8523L48.6995 35.9705L47.7875 35.306L46.8755 35.987L47.2242 34.8507L46.3123 34.13H47.4387L47.7875 33.0373ZM47.4387 42.9808L47.7875 41.888L48.1362 42.9808H49.2628L48.3508 43.703L48.6995 44.8205L47.7875 44.156L46.8755 44.837L47.2242 43.7007L46.3123 42.98H47.4387V42.9808ZM45.4003 39.2772L45.749 40.3948L44.8378 39.731L43.9257 40.412L44.2737 39.275L43.3625 38.555H44.489L44.8378 37.4615L45.1857 38.555H46.3123L45.4003 39.2772ZM45.749 49.2448L44.8378 48.581L43.9257 49.262L44.2737 48.125L43.3625 47.405H44.489L44.8378 46.3115L45.1857 47.405H46.3123L45.4003 48.1265L45.749 49.2448ZM42.4512 34.8523L42.8 35.9705L41.888 35.306L40.976 35.987L41.3248 34.8507L40.4127 34.13H41.5392L41.888 33.0365L42.2368 34.13H43.3632L42.4512 34.8523ZM41.5392 42.9808L41.888 41.888L42.2368 42.9808H43.3632L42.4512 43.703L42.8 44.8205L41.888 44.156L40.976 44.837L41.3248 43.7007L40.4127 42.98H41.5392V42.9808ZM39.5007 39.2772L39.8495 40.3948L38.9375 39.731L38.0255 40.412L38.3743 39.275L37.4622 38.555H38.5887L38.9375 37.4615L39.2863 38.555H40.4127L39.5007 39.2772ZM38.5887 47.4058L38.9375 46.3123L39.2863 47.4058H40.4127L39.5007 48.1273L39.8495 49.2448L38.9375 48.581L38.0255 49.262L38.3743 48.125L37.4622 47.405L38.5887 47.4058ZM36.5503 43.703L36.899 44.8205L35.987 44.156L35.075 44.837L35.4237 43.7007L34.5117 42.98H35.6382L35.987 41.8873L36.3358 42.98H37.4622L36.5503 43.703ZM50 44.8738H70.364C70.6415 45.9748 70.8275 47.111 70.9227 48.2728H50V44.8738ZM50 41.474V38.075H67.2717C68.0131 39.1464 68.6533 40.2842 69.1842 41.474H50ZM50 34.6737V31.274H59.486C61.2543 32.1732 62.8867 33.3178 64.3347 34.6737H50ZM45.143 29.573L45.1857 29.7065H46.3123L45.4003 30.428L45.749 31.5455L44.8378 30.881L43.9257 31.5627L44.2737 30.4258L43.6955 29.9682C44.1732 29.8195 44.656 29.6876 45.143 29.573ZM36.3358 34.1307H37.4622L36.5503 34.8523L36.899 35.9705L35.987 35.306L35.075 35.987L35.4012 34.925C35.699 34.6362 36.0065 34.3565 36.3215 34.0858L36.3358 34.1307ZM30.4362 42.9808H31.5627L30.6508 43.703L30.9995 44.8205L30.0875 44.156L29.765 44.3967C29.93 43.8035 30.1168 43.2207 30.3313 42.6492L30.4362 42.9808Z"
                  fill="#B3B3B3"
                />
              </svg>
              <span className="font-opensans text-black font-medium">
                New York,USA
              </span>
            </div>
            <div className="flex flex-col items-center gap-y-4">
              <span className="text-white-shade-10">
                {countriesTime[1].stockholm}
              </span>
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="100" height="100" rx="50" fill="#FAFAFA" />
                <path
                  d="M50 27.5C37.574 27.5 27.5 37.574 27.5 50C27.5 62.426 37.574 72.5 50 72.5C62.426 72.5 72.5 62.426 72.5 50C72.5 37.574 62.426 27.5 50 27.5ZM71 50C71 51.7812 70.775 53.5107 70.3565 55.163H49.2628V70.9812C45.605 70.8577 42.0441 69.7742 38.9375 67.8395V55.163H29.6435C28.7843 51.7749 28.7843 48.2259 29.6435 44.8377H38.9375V32.1613C42.0438 30.2258 45.6049 29.1422 49.2628 29.0195V44.8385H70.3565C70.775 46.49 71 48.2195 71 50Z"
                  fill="#B3B3B3"
                />
              </svg>
              <span className="font-opensans text-black font-medium">
                Stockholm, Sweden
              </span>
            </div>
            <div className="flex flex-col items-center gap-y-4">
              <span className="text-white-shade-10">
                {countriesTime[2].losangles}
              </span>
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="100" height="100" rx="50" fill="#FAFAFA" />
                <path
                  d="M50 27.5C37.574 27.5 27.5 37.574 27.5 50C27.5 62.426 37.574 72.5 50 72.5C62.426 72.5 72.5 62.426 72.5 50C72.5 37.574 62.426 27.5 50 27.5ZM40.409 68.672C38.6582 67.769 37.0427 66.6249 35.6097 65.273H64.391C62.9579 66.6247 61.3425 67.7688 59.5918 68.672H40.409ZM32.69 61.8717C31.9531 60.8001 31.3176 59.6622 30.7917 58.4728H69.209C68.6828 59.6621 68.0473 60.7999 67.3108 61.8717H32.69ZM29.6232 55.0737C29.3465 53.9576 29.1623 52.8205 29.0728 51.674H70.928C70.8384 52.8205 70.6543 53.9576 70.3775 55.0737H29.6232ZM32.4058 38.5557H32.6892L32.936 37.7833C32.9833 37.7173 33.0282 37.6498 33.077 37.5845L33.386 38.5557H34.5125L33.6013 39.2772L33.95 40.3948L33.038 39.731L32.126 40.412L32.4748 39.275L32.1223 38.9968C32.2145 38.849 32.3105 38.7027 32.4058 38.5557ZM33.95 49.2448L33.038 48.581L32.126 49.262L32.4748 48.125L31.5627 47.405H32.6892L33.038 46.3115L33.386 47.405H34.5125L33.6013 48.1265L33.95 49.2448ZM47.7875 33.0373L48.1362 34.1307H49.2628L48.3508 34.8523L48.6995 35.9705L47.7875 35.306L46.8755 35.987L47.2242 34.8507L46.3123 34.13H47.4387L47.7875 33.0373ZM47.4387 42.9808L47.7875 41.888L48.1362 42.9808H49.2628L48.3508 43.703L48.6995 44.8205L47.7875 44.156L46.8755 44.837L47.2242 43.7007L46.3123 42.98H47.4387V42.9808ZM45.4003 39.2772L45.749 40.3948L44.8378 39.731L43.9257 40.412L44.2737 39.275L43.3625 38.555H44.489L44.8378 37.4615L45.1857 38.555H46.3123L45.4003 39.2772ZM45.749 49.2448L44.8378 48.581L43.9257 49.262L44.2737 48.125L43.3625 47.405H44.489L44.8378 46.3115L45.1857 47.405H46.3123L45.4003 48.1265L45.749 49.2448ZM42.4512 34.8523L42.8 35.9705L41.888 35.306L40.976 35.987L41.3248 34.8507L40.4127 34.13H41.5392L41.888 33.0365L42.2368 34.13H43.3632L42.4512 34.8523ZM41.5392 42.9808L41.888 41.888L42.2368 42.9808H43.3632L42.4512 43.703L42.8 44.8205L41.888 44.156L40.976 44.837L41.3248 43.7007L40.4127 42.98H41.5392V42.9808ZM39.5007 39.2772L39.8495 40.3948L38.9375 39.731L38.0255 40.412L38.3743 39.275L37.4622 38.555H38.5887L38.9375 37.4615L39.2863 38.555H40.4127L39.5007 39.2772ZM38.5887 47.4058L38.9375 46.3123L39.2863 47.4058H40.4127L39.5007 48.1273L39.8495 49.2448L38.9375 48.581L38.0255 49.262L38.3743 48.125L37.4622 47.405L38.5887 47.4058ZM36.5503 43.703L36.899 44.8205L35.987 44.156L35.075 44.837L35.4237 43.7007L34.5117 42.98H35.6382L35.987 41.8873L36.3358 42.98H37.4622L36.5503 43.703ZM50 44.8738H70.364C70.6415 45.9748 70.8275 47.111 70.9227 48.2728H50V44.8738ZM50 41.474V38.075H67.2717C68.0131 39.1464 68.6533 40.2842 69.1842 41.474H50ZM50 34.6737V31.274H59.486C61.2543 32.1732 62.8867 33.3178 64.3347 34.6737H50ZM45.143 29.573L45.1857 29.7065H46.3123L45.4003 30.428L45.749 31.5455L44.8378 30.881L43.9257 31.5627L44.2737 30.4258L43.6955 29.9682C44.1732 29.8195 44.656 29.6876 45.143 29.573ZM36.3358 34.1307H37.4622L36.5503 34.8523L36.899 35.9705L35.987 35.306L35.075 35.987L35.4012 34.925C35.699 34.6362 36.0065 34.3565 36.3215 34.0858L36.3358 34.1307ZM30.4362 42.9808H31.5627L30.6508 43.703L30.9995 44.8205L30.0875 44.156L29.765 44.3967C29.93 43.8035 30.1168 43.2207 30.3313 42.6492L30.4362 42.9808Z"
                  fill="#B3B3B3"
                />
              </svg>
              <span className="font-opensans text-black font-medium">
                Los Angles, USA
              </span>
            </div>
            <div className="flex flex-col items-center gap-y-4">
              <span className="text-white-shade-10">
                {countriesTime[3].dubai}
              </span>
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="100" height="100" rx="50" fill="#FAFAFA" />
                <path
                  d="M50 27.5C37.574 27.5 27.5 37.574 27.5 50C27.5 62.426 37.574 72.5 50 72.5C62.426 72.5 72.5 62.426 72.5 50C72.5 37.574 62.426 27.5 50 27.5ZM43.25 57.5V69.923C42.7431 69.7554 42.2428 69.5688 41.75 69.3635V30.6365C42.2397 30.4303 42.7415 30.2465 43.25 30.077V42.5H69.6598C70.5238 44.7965 71 47.4058 71 50C71 52.5942 70.5238 55.2035 69.6598 57.5H43.25Z"
                  fill="#B3B3B3"
                />
              </svg>
              <span className="font-opensans text-black font-medium">
                Dubai, UEA
              </span>
            </div>
          </div>
        </div>
      </section>
      <div className="container flex flex-col gap-y-8 lg:flex-row justify-between my-6">
        <ul className="flex gap-x-9 text-white-shade-10 font-opensans font-medium">
          <li>
            <Link href={"#"}>FAQ</Link>
          </li>
          <li>
            <Link href={"#"}>Term & Privacy Policy</Link>
          </li>
          <li>
            <Link href={"#"}>Contact us</Link>
          </li>
        </ul>
        <span className="text-white-shade-10 font-opensans font-medium">
          © All Rights Reserved for USX.PRO
        </span>
      </div>
    </footer>
  );
};

export default Footer;
