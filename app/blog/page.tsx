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
        <div className="container py-10 flex flex-col items-center gap-y-5 bg-white-shade-2 " >
          <Separator classes={""} />
          <div className="py-2 w-1/2 bg-white-shade-3 rounded-2xl">
          <section className="flex lg:flex-row flex-col items-center w-full  h-full rounded-3xl justify-between hover:cursor-pointer p-2">
      <div className="w-full flex gap-x-2 items-center  px-6">      
        <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value.toLowerCase())}
              placeholder="Search for Blogs,companies,users,topics"
              className="w-full placeholder:text-white-shade-11 text-lg font-normal font-sans bg-white-shade-3  p-1 rounded-2xl outline-none"
            />
      </div>
      <div className="flex flex-col items-end   font-medium  text-black rounded-3xl w-full">
        <div
          onClick={() => setOpen(!open)}
          className={`bg-white  gap-x-2 font-normal p-1 px-4 flex items-center lg:mx-4 rounded-2xl lg:w-max w-full ${
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
          className={`w-[90%] self-center bg-white mt-2 overflow-y-auto shadow-drop-shadow rounded-2xl z-[1000] transition-opacity duration-500  ${
            open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          } `}
        >
          <div className="flex items-center px-2 sticky top-0 bg-white">
          
          </div>
          <div className="flex flex-col gap-y-3 pt-2 p-3">
            <li
              className={`p-2 text-lg font-light text-white-shade-10 hover:text-black transition-all duration-200`}
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
          <h1 className="text-black text-2xl font-medium font-outfit">
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
        <div className="container py-7 flex flex-col items-center gap-y-12">
          <div className="lg:flex items-center gap-x-5">
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
              <h1 className="text-black text-xl font-semibold font-outfit">
                Categories
              </h1>
              <div className="flex flex-col py-5">
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
              <h1 className="text-black text-xl font-semibold font-outfit py-8">
                Most active bloggers
              </h1>
              <div className="flex flex-col gap-y-6 ">
                <Bloggers
                  classes={""}
                  name={"Darkcafé"}
                  job={"Coffee shop"}
                  avatar={"/images/blog/User.webp"}
                  like={"60k"}
                />
                <Bloggers
                  classes={""}
                  name={"Darkcafé"}
                  job={"Coffee shop"}
                  avatar={"/images/blog/User.webp"}
                  like={"60k"}
                />
                <Bloggers
                  classes={""}
                  name={"Darkcafé"}
                  job={"Coffee shop"}
                  avatar={"/images/blog/User.webp"}
                  like={"60k"}
                />
              </div>
            </div>
            <div>
              <h1 className="text-black text-xl font-semibold font-outfit py-8">
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
                        <h1 className="text-black text-xl font-semibold font-outfit py-8">
                        Plans
                        </h1>
                        <Link href="" className="text-white-shade-11">Check all plans</Link>
                        </div>
                        <div className="flex flex-col gap-y-4 ">
                        <SmallPlan
                                classes={""}
                                title={"Platinum"}
                                description={"Free and "}
                                avatar={"/images/plans/1.png"}
                            />
                            <SmallPlan
                                classes={""}
                                title={"fessional"}
                                description={"Free and "}
                                avatar={"/images/plans/2.png"}
                            />
                            <SmallPlan
                                classes={""}
                                title={" Events"}
                                description={"Free and "}
                                avatar={"/images/plans/1.png"}
                            />
                              <SmallPlan
                                classes={""}
                                title={"Ultra"}
                                description={"Free and "}
                                avatar={"/images/plans/2.png"}
                            />
                        </div>
                    </div>
          </section>
          <section className="lg:pr-5 lg:border-r border-white-shade-4">
            <div className="flex flex-col gap-y-6 py-14">
              <h1 className="text-black text-xl font-semibold font-outfit">
                Lawyars pick
              </h1>
              <div className="flex flex-col gap-y-6 lg:flex-row gap-x-6">
                <LawyarsCard
                  classes={""}
                  title={"Visiting Tomb of Saadi, the Shirazi Poet"}
                  author={"Anna Rosé"}
                  publish={"Posted just now"}
                  avatar={"/images/blog/User.webp"}
                  cover={"/images/blog/Lawyer.webp"}
                />
              </div>
            </div>
            <div>
              <div className="lg:flex items-center gap-x-6">
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

              <div className="flex flex-col gap-y-6 py-14">
                <h1 className="text-black text-xl font-semibold font-outfit">
                  Lawyars pick
                </h1>
                <div className="flex flex-col gap-y-6 lg:flex-row gap-x-6">
                  <LawyarsCard
                    classes={""}
                    title={"Visiting Tomb of Saadi, the Shirazi Poet"}
                    author={"Anna Rosé"}
                    publish={"Posted just now"}
                    avatar={"/images/blog/User.webp"}
                    cover={"/images/blog/Lawyer.webp"}
                  />
                </div>
              </div>
              <div className="lg:flex items-center gap-x-6">
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
                <div className="flex flex-col py-10 px-7 gap-y-7 lg:px-14 lg:gap-y-9">
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
                  <div className="flex items-center gap-x-14">
                    <Link className="w-2/4" href={"/register"}>
                      <h3 className="bg-white  py-4 text-black text-center text-lg font-medium font-opensans rounded-2xl lg:w-44">
                        Sign up
                      </h3>
                    </Link>
                    <Link href={"/login"}>
                      <h3 className="font-opensans  text-center ">Log in</h3>
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
