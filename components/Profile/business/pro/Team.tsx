import React from "react";
import MembersCard from "./MembersCard";

const Team = () => {
  return (
    <section className=" border-b border-white-shade-4 pb-7  ">
      <div className="container lg:pl-5 lg:px-0 ">
        <h1 className="text-black font-bold text-2xl font-outfit mt-7 lg:text-center lg:text-3xl">
          Our team members
        </h1>
        <section className="grid grid-cols-2 items-center gap-x-5 lg:flex lg:items-center lg:py-11">
          <MembersCard
            background={"/images/profile/business/member.png"}
            fullname={"Tom hanks"}
            job={"Front-end developer"}
            class={"hidden lg:flex"}
          />
          <MembersCard
            background={"/images/profile/business/member1.png"}
            fullname={"Tom hanks"}
            job={"Front-end developer"}
            class={""}
          />
          <MembersCard
            background={"/images/profile/business/member2.png"}
            fullname={"Tom hanks"}
            job={"Front-end developer"}
            class={""}
          />
          <MembersCard
            background={"/images/profile/business/member3.png"}
            fullname={"Tom hanks"}
            job={"Front-end developer"}
            class={"hidden lg:flex"}
          />
          <button
            type="button"
            className="hidden lg:flex h-56 bg-white-shade-2 text-white-shade-8 text-2xl font-semibold px-4 rounded-lg items-center justify-center"
          >
            +21
          </button>
        </section>

        <section className="flex justify-center gap-x-3 mt-9 pb-3 lg:hidden  cursor-pointer">
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
    </section>
  );
};

export default Team;
