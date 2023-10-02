"use client";

import React, { useState } from "react";

import OverlayMenu from "@/components/Layout/OverlayMenu";

import PlanCard from "@/components/Pages/Plans";
import Separator from "@/components/Separator";

import { Button, Input } from "@/components/Forms/index";

const page = () => {
  const [plansList, setPlansList] = useState([
    {
      title: "Professional",
      subTitle: "No credit card required",
      types: [
        {
          title: "Starter",
          pricing: "Free",
          features: [
            "Profile Pic",
            "Who am i + 2 Pic",
            "My Galley",
            "Experience & Project",
            "Educations ",
            "Contact",
            "Companies i worked whit ",
          ],
        },
        {
          title: "Pro",
          pricing: "$100",
          features: [
            "Profile Pic",
            "Who am i + 2 Pic",
            "My Galley",
            "Experience & Project",
            "Educations ",
            "Contact",
            "Companies i worked whit ",
            "Followers Instagram",
            "What is my job about",
            "My hard Skills",
            "What is my job about",
            "Project i have done",
            "My soft skills ",
            "Courses i finished",
            "My blog",
            "Socials",
            "Level Blog",
          ],
        },
      ],
    },
  ]);

  return (
    <section className="container">
      <OverlayMenu />
      <div className="flex flex-col justify-center items-center py-8 gap-y-8">
        <Separator classes={""} />
        <h1 className="font-outfit text-2xl text-black font-semibold">
          Ready to get started?
        </h1>
      </div>
      <section className="lg:flex gap-x-4 items-center w-full overflow-x-scroll no-scroll">
        {plansList.map((plan) => {
          return <PlanCard planData={plan} />;
        })}
      </section>
      <div className="border-[1.5px] border-white-shade-4 rounded-2xl p-5 mt-16 lg:flex justify-between lg:rounded-3xl">
        <div className="flex flex-col gap-y-4">
          <h1 className="text-black font-outfit text-2xl font-semibold">
            Cant afford plans? ☹️
          </h1>
          <h3 className="text-white-shade-8 font-opensans font-medium">
            Add your email and we will contact you
          </h3>
        </div>
        <div
          className="flex  flex-col gap-y-4 lg:flex-row lg:bg-white-shade-3 lg:px-1
   lg:items-center rounded-2xl lg:justify-between lg:w-2/4"
        >
          <Input
            id={"Email"}
            inputType={"email"}
            placeHolder={"Your email"}
            classes={"lg:h-auto lg:pb-3"}
            label={""}
            iconComp={undefined}
          />
          <Button content={"Submit"} classes={"bg-black h-16 lg:w-40"} />
        </div>
      </div>
    </section>
  );
};

export default page;
