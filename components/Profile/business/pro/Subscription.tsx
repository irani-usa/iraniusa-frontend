"use client";

import React, { useState } from "react";



import SubscriptionCard from "./SubscriptionCard";
import IconElement from "../../general/IconElement";
import HandHeart from "@/components/Icons/Profile/HandHeart";

const Subscription = () => {
  const [SubscriptionList, setSubscriptionList] = useState([
    {
      title: "Professional",
      pricing: "$49",
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
    {
      title: "Professional",
      pricing: "$49",
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
    {
      title: "Professional",
      pricing: "$49",
      features: [
        "Profile Pic",
        "Who am i + 2 Pic",
        "My Galley",

      ],
    },

  ]);

  return (
    <section className="border-b border-white-shade-4 py-8 container">
      <div className="flex flex-col justify-center items-center  py-16">
        <IconElement icon={<HandHeart />} />

        <h1 className="text-black font-medium text-2xl font-outfit mt-7 lg:text-3xl text-center">
        Subscription
        </h1>
        <p className="text-white-shade-9  font-opensans  mt-3">Get a clean car monthly with Zwart Gas Station's subscription. Join online now.</p>
      </div>
      <section className="flex flex-col lg:flex-row gap-x-4 gap-y-6 w-full overflow-x-scroll no-scroll">
        {SubscriptionList.map((plan) => {
          return <SubscriptionCard planData={plan} />;
        })}
      </section>
    </section>
  );
};

export default Subscription;
