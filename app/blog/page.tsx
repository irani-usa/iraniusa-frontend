"use client"
import React, { useState } from "react";

import SmallBanner from "@/components/Banners/SmallBanner";
import OverlayMenu from "@/components/Layout/OverlayMenu";
import Separator from "@/components/Separator";

import Link from "next/link";

import {
  BlogCard,
  BlogCardM,
  Bloggers,
  Category,
  LawyarsCard,
  PopularUser,
  Tag,
} from "@/components/Pages/Blog/index";
import { ArrowDown, ArrowUp} from "@/components/Icons/Outline";
import SmallPlan from "@/components/Pages/Plans/SmallPlan";

const page = () => {
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <>
      <OverlayMenu />
      <section>
        <div className="container py-9 flex flex-col items-center gap-y-5 bg-white-shade-2 " >
          <Separator classes={""} isBlog/>
          <div className="w-full bg-white-shade-3 rounded-2xl lg:w-1/2">
          <section className="flex lg:flex-row flex-col items-center w-full  h-full rounded-3xl justify-between hover:cursor-pointer px-1 lg:pt-1">
      <div className="w-full flex gap-x-2 items-center px-5 py-7">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="11.5" cy="11.5" r="9.5" stroke="#8C8C8C" stroke-width="1.5"/>
<path d="M18.5 18.5L22 22" stroke="#8C8C8C" stroke-width="1.5" stroke-linecap="round"/>
</svg>
        <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value.toLowerCase())}
              placeholder="Search for Blogs,companies,users,topics"
              className="w-full placeholder:text-white-shade-11 text-[17px] font-medium font-inter bg-white-shade-3 rounded-2xl outline-hidden"
            />
      </div>
      <div className="flex flex-col gap-1 items-end font-medium text-black rounded-3xl w-full lg:w-1/2">
        <div
          onClick={() => setOpen(!open)}
          className={`text-lg text-center font-medium font-inter bg-white gap-x-2 py-6 px-10 flex justify-center items-center rounded-2xl lg:w-max w-full ${
            !selected && ""
          }`}
        >
          {selected
            ? selected?.length > 25
              ? selected?.substring(0, 25) + "..."
              : selected
            : `All`}

          {selected ? <ArrowDown /> : <ArrowUp />}
        </div>
        <ul
          className={`w-[50%] bg-white overflow-y-auto shadow-drop-shadow rounded-2xl z-1000 transition-opacity duration-500  ${
            open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          } `}
        >
          <div className="flex items-center px-2 sticky top-0">
          
          </div>
          <div className="flex flex-col gap-y-3 p-3">
            <li
              className={`self-center p-2 text-center text-lg font-light text-white-shade-10 hover:text-black transition-all duration-200`}
            >
              Restaurant
            </li>
          </div>
        </ul>
      </div>
    </section>
          </div>
        </div>
        <div className="container flex flex-col gap-y-6 py-14">
          <h1 className="flex items-center gap-x-1.5 text-black text-xl font-semibold font-inter">
          <svg width="21" height="1" viewBox="0 0 21 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.5" x2="21" y2="0.5" stroke="#D9D9D9"/>
          </svg>
            Most popular users/companies
          </h1>
          <div className="no-scroll flex items-center gap-x-5 w-full overflow-x-scroll">
            <PopularUser
              name={"Darkcafé"}
              job={"Coffee shop"}
              avatar={"/images/blog/User.webp"}
            />
             <PopularUser
              name={"Darkcafé"}
              job={"Coffee shop"}
              avatar={"/images/blog/User.webp"}
            />
             <PopularUser
              name={"Darkcafé"}
              job={"Coffee shop"}
              avatar={"/images/blog/User.webp"}
            />
             <PopularUser
              name={"Darkcafé"}
              job={"Coffee shop"}
              avatar={"/images/blog/User.webp"}
            />
          </div>
        </div>
        <div className="container py-7 flex flex-col items-center gap-y-12 w-full">
          <div className="flex no-scroll w-full gap-x-10 overflow-x-auto whitespace-normal lg:flex items-center">
            <BlogCard
              classes={"lg:flex"}
              readingTime={"  3 min read"}
              title={"Exploring Shirez Canyon in the Heart of Zagros Mountains"}
              summery={
                "Go from Figma to code in minimum amount of time using Locofy. Take your design to real world with Locofy's AI powered plugin."
              }
              author={"Anna Rosé"}
              publish={"Posted just now"}
              avatar={""}
              cover={"/images/blog/blogCard.webp"}
              cm={"120"}
              like={"2k"}
            />
            <BlogCard
              classes={"lg:flex"}
              readingTime={"  3 min read"}
              title={"Exploring Shirez Canyon in the Heart of Zagros Mountains"}
              summery={
                "Go from Figma to code in minimum amount of time using Locofy. Take your design to real world with Locofy's AI powered plugin."
              }
              author={"Anna Rosé"}
              publish={"Posted just now"}
              avatar={""}
              cover={"/images/blog/blogCard.webp"}
              cm={"120"}
              like={"2k"}
            />
          </div>
          <div className="w-4/5 h-1 rounded-xl bg-white-shade-3 flex justify-center lg:w-3/12">
            <div className="w-16 bg-black h-full rounded-xl"></div>
          </div>
        </div>
        <div className="w-full lg:flex container lg:items-start gap-x-10">
        <section className="pl-5 lg:w-1/3">
            <div>
              <h1 className="text-black text-xl font-semibold font-inter">
                Categories
              </h1>
              <div className="flex flex-col pb-5 pt-2 px-1">
                <Category classes={""} content={"Art & Culture"} />
                <Category classes={""} content={"Destinations"} />
                <Category classes={""} content={"Must Know"} />
                <Category classes={""} content={"Top Architectural Sites"} />
                <Category classes={""} content={"Top Geology Sites"} />
                <Category classes={""} content={"Top Natural Resorts"} />
                <Category classes={""} content={"Travel Experiences"} />
              </div>
            </div>
            <div className="my-10">
              <h1 className="text-black text-xl font-semibold font-inter py-8">
                Most active bloggers
              </h1>
              <div className="flex flex-col gap-y-6 px-1">
                <Bloggers
                  classes={""}
                  name={"Darkcafé"}
                  job={"Coffee shop"}
                  avatar={"/images/blog/User.webp"}
                  like={"2k"}
                />
                <Bloggers
                  classes={""}
                  name={"Darkcafé"}
                  job={"Coffee shop"}
                  avatar={"/images/blog/User.webp"}
                  like={"2k"}
                />
                <Bloggers
                  classes={""}
                  name={"Darkcafé"}
                  job={"Coffee shop"}
                  avatar={"/images/blog/User.webp"}
                  like={"2k"}
                />
              </div>
            </div>
            <div>
              <h1 className="text-black text-xl font-semibold font-inter py-8">
                Tags
              </h1>
              <div className="flex items-center flex-wrap gap-x-2 gap-y-3">
                <Tag content={"Avaz"} />
                <Tag content={"Classic music of iran"} />
                <Tag content={"Dastgah"} />
                <Tag content={"Folk music"} />
                <Tag content={"Radif"} />
                <Tag content={"setar"} />
                <Tag content={"tar"} />
                <Tag content={"tour"} />
                <Tag content={"traditional music of iran"} />
                <Tag content={"Museum"} />
                <Tag content={"International"} />
              </div>
            </div>
            <div className="my-10">
                        <div className='flex justify-between items-center w-full'>
                        <h1 className="text-black text-xl font-semibold font-inter py-8">
                        Plans
                        </h1>
                        <Link href="" className="font-semibold font-inter text-white-shade-11">Check all plans</Link>
                        </div>
                        <div className="flex flex-col gap-y-3 ">
                        <SmallPlan
                                classes={""}
                                title={"Professional"}
                                description={"Free and pro accounts"}
                                avatar={"/images/plans/1.png"}
                            />
                            <SmallPlan
                                classes={""}
                                title={"Business Platinum"}
                                description={"Free and pro accounts"}
                                avatar={"/images/plans/2.png"}
                            />
                            <SmallPlan
                                classes={""}
                                title={"Business Ultra"}
                                description={"Free and pro accounts"}
                                avatar={"/images/plans/3.png"}
                            />
                              <SmallPlan
                                classes={""}
                                title={"Artists & Events"}
                                description={"Free and pro accounts"}
                                avatar={"/images/plans/4.png"}
                            />
                        </div>
                    </div>
          </section>
          <section className="lg:pr-5 lg:border-r border-white-shade-4">
            <div className="flex flex-col gap-y-6 py-14">
              <h1 className="flex items-center gap-x-1.5 text-black text-xl font-semibold font-inter">
              <svg width="21" height="1" viewBox="0 0 21 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="0.5" x2="21" y2="0.5" stroke="#D9D9D9"/></svg>
                Lawyars pick
              </h1>
              <div className="flex flex-col gap-y-6 lg:flex-row gap-x-6">
                <LawyarsCard
                  classes={""}
                  title={"Visiting Tomb of Saadi, the Shirazi Poet"}
                  author={"Anna Rosé"}
                  publish={"Posted just now"}
                  avatar={"/images/blog/User.webp"}
                  cover={"/images/blog/lawyer.png"}
                />
              </div>
              <div className="flex flex-col gap-y-6 lg:flex-row gap-x-6">
                <LawyarsCard
                  classes={""}
                  title={"Visiting Tomb of Saadi, the Shirazi Poet"}
                  author={"Anna Rosé"}
                  publish={"Posted just now"}
                  avatar={"/images/blog/User.webp"}
                  cover={"/images/blog/lawyer.png"}
                />
              </div>
            </div>
            <div>
              <div className="flex no-scroll overflow-x-auto w-full whitespace-normal lg:flex items-center gap-x-6">
                <BlogCardM
                  classes={""}
                  readingTime={"3 min read"}
                  title={
                    "Exploring Shirez Canyon in the Heart of Zagros Mountains"
                  }
                  summery={
                    "Shirez Canyon: A Natural Wonder in the Heart of Zagros Mountains"
                  }
                  author={"Anna Rosé"}
                  publish={"Posted just now"}
                  avatar={""}
                  cover={"/images/blog/UsaFlag.webp"}
                  info={true}
                  isview={false}
                  view={""}
                  like={""}
                  cm={""}
                />
                <BlogCardM
                  classes={""}
                  readingTime={"3 min read"}
                  title={
                    "Exploring Shirez Canyon in the Heart of Zagros Mountains"
                  }
                  summery={
                    "Shirez Canyon: A Natural Wonder in the Heart of Zagros Mountains"
                  }
                  author={"Anna Rosé"}
                  publish={"Posted just now"}
                  avatar={""}
                  cover={"/images/blog/UsaFlag.webp"}
                  info={true}
                  isview={false}
                  view={""}
                  like={""}
                  cm={""}
                />
              </div>
              <section className="flex justify-center gap-x-3 mt-12 lg:hidden">
                <div className="flex items-center justify-center border-[1px] border-white-shade-4 py-5 px-6 rounded-full">
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.59961 13.0667L1.39961 6.99998L6.59961 0.933317"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex items-center justify-center border-[1px] border-white-shade-4 py-5 px-6 rounded-full">
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.40039 0.93335L6.60039 7.00002L1.40039 13.0667"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </section>
            </div>
            <div>
              <div className="w-full bg-blue my-28 rounded-3xl lg:flex items-center">
                <div className="flex flex-col  px-7 gap-y-3 lg:px-14 lg:gap-y-6">
                  <h1 className="text-white font-outfit text-2xl font-medium  lg:text-3xl">
                    Want to be a blogger? its not that hard 😌
                  </h1>
                  <p
                    className="text-white-shade-8 font-opensans lg:
                                text-lg"
                  >
                    Log in to your account or create one and start posting and
                    get viral
                  </p>
                  <div className="flex items-center gap-5">
                    <Link className="" href={"/register"}>
                      <h3 className="bg-white  py-2 text-black text-center text-lg font-medium font-opensans rounded-2xl lg:w-32">
                        Sign up
                      </h3>
                    </Link>
                    <Link href={"/login"}>
                      <h3 className="font-opensans  text-center text-white font-bold">Log in</h3>
                    </Link>
                  </div>
                </div>
                <img
                  src="images/blog/Girl.webp"
                  className="rounded-b-3xl mt-10 lg:hidden"
                />
                <img
                  src="images/blog/Girl (2).webp"
                  className="rounded-e-3xl w-80  hidden lg:flex"
                />
              </div>
            </div>
            <div>
              <section className="w-full my-40 flex flex-col gap-y-6 lg:grid lg:grid-cols-2 lg:gap-x-14">
                <SmallBanner
                  name={"Supplemental income"}
                  jobTitle={"Dentist"}
                  role=""
                />
                <SmallBanner
                  name={"Supplemental income"}
                  jobTitle={"Dentist"}
                  role=""
                />
                <SmallBanner
                  name={"Supplemental income"}
                  jobTitle={"Dentist"}
                  role=""
                />
                <SmallBanner
                  name={"Supplemental income"}
                  jobTitle={"Dentist"}
                  role=""
                />
              </section>
            </div>
          </section>

       
        </div>
      </section>
    </>
  );
};

export default page;
