"use client"
import React, { useState } from "react";
import OverlayMenu from "@/components/Layout/OverlayMenu";
import PlanCard from "@/components/Pages/Plans";
import Separator from "@/components/Separator";
import { Button, Input } from "@/components/Forms/index";
import { Diamonds } from "@/components/Icons/Outline";
import classNames from "classnames";

// تعریف تایپ‌ها برای داده‌ها
type PlanType = {
  title: string;
  subTitle: string;
  type:string;
  isPopular: boolean;
  types: {
    title: string;
    pricing: string;
    basePricing: string; // قیمت اصلی که بدون تخفیف است
    features: string[];
  }[];
};

type SubscriptionPeriod = "1 Year" | "3 Years" | "5 Years";

const Page = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<SubscriptionPeriod>("1 Year");

  // لیست پلن‌ها با قیمت‌ها و ویژگی‌ها
  const [plansList, setPlansList] = useState<PlanType[]>([
    {
      title: "Professional",
      subTitle: "No credit card required",
      type:"simple",
      isPopular: false,
      types: [
        {
          title: "Starter",
          pricing: "Free",
          basePricing: "Free", // قیمت اصلی را برای Starter نگه می‌داریم
          features: [
            "Profile Pic",
            "Who am i + 2 Pic",
            "My Gallery",
            "Experience & Project",
            "Educations ",
            "Contact",
            "Companies i worked with ",
          ],
        },
        {
          title: "Pro",
          pricing: "$18$",
          basePricing: "$18$", // قیمت اصلی Pro
          features: [
            "Profile Pic",
            "Who am i + 2 Pic",
            "My Gallery",
            "Experience & Project",
            "Educations ",
            "Contact",
            "Companies i worked with ",
            "Followers Instagram",
            "What is my job about",
            "My hard Skills",
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
    {
      title: "Professional",
      subTitle: "No credit card required",
      type:"simple",
      isPopular: true,
      types: [
        {
          title: "Starter",
          pricing: "Free",
          basePricing: "Free", // قیمت اصلی را برای Starter نگه می‌داریم
          features: [
            "Profile Pic",
            "Who am i + 2 Pic",
            "My Gallery",
            "Experience & Project",
            "Educations ",
            "Contact",
            "Companies i worked with ",
          ],
        },
        {
          title: "Pro",
          pricing: "$88",
          basePricing: "$88", // قیمت اصلی Pro
          features: [
            "Profile Pic",
            "Who am i + 2 Pic",
            "My Gallery",
            "Experience & Project",
            "Educations ",
            "Contact",
            "Companies i worked with ",
            "Followers Instagram",
            "What is my job about",
            "My hard Skills",
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
    {
      title: "Professional",
      subTitle: "No credit card required",
      type:"simple",
      isPopular: false,
      types: [
        {
          title: "Starter",
          pricing: "Free",
          basePricing: "Free", // قیمت اصلی را برای Starter نگه می‌داریم
          features: [
            "Profile Pic",
            "Who am i + 2 Pic",
            "My Gallery",
            "Experience & Project",
            "Educations ",
            "Contact",
            "Companies i worked with ",
          ],
        },
        {
          title: "Pro",
          pricing: "$300",
          basePricing: "$300", // قیمت اصلی Pro
          features: [
            "Profile Pic",
            "Who am i + 2 Pic",
            "My Gallery",
            "Experience & Project",
            "Educations ",
            "Contact",
            "Companies i worked with ",
            "Followers Instagram",
            "What is my job about",
            "My hard Skills",
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
    {
      title: "Professional",
      subTitle: "No credit card required",
      type:"curve",
      isPopular: false,
      types: [
        {
          title: "Starter",
          pricing: "Free",
          basePricing: "Free", // قیمت اصلی را برای Starter نگه می‌داریم
          features: [
            "Profile Pic",
            "Who am i + 2 Pic",
            "My Gallery",
            "Experience & Project",
            "Educations ",
            "Contact",
            "Companies i worked with ",
          ],
        },
        {
          title: "Pro",
          pricing: "$49",
          basePricing: "$49", // قیمت اصلی Pro
          features: [
            "Profile Pic",
            "Who am i + 2 Pic",
            "My Gallery",
            "Experience & Project",
            "Educations ",
            "Contact",
            "Companies i worked with ",
            "Followers Instagram",
            "What is my job about",
            "My hard Skills",
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

  // تابعی برای محاسبه و به روز رسانی قیمت‌ها بر اساس مدت زمان اشتراک
  const updatePricingBasedOnPeriod = (basePrice: string, period: SubscriptionPeriod): string => {
    if (basePrice === "Free") return "Free"; // اگر قیمت Free باشد، هیچ تغییری نمی‌دهیم.

    const basePriceNumber = parseFloat(basePrice.replace("$", ""));

    let discount = 0;
    switch (period) {
      case "1 Year":
        discount = 0; // هیچ تخفیفی برای 1 سال
        break;
      case "3 Years":
        discount = 0.2; // 20% تخفیف برای 3 سال
        break;
      case "5 Years":
        discount = 0.3; // 30% تخفیف برای 5 سال
        break;
    }

    // محاسبه قیمت نهایی
    const finalPrice = basePriceNumber * (1 - discount);

    // جلوگیری از اینکه قیمت به صفر برسد
    const validPrice = finalPrice > 0 ? finalPrice : basePriceNumber;

    return `$${validPrice.toFixed(2)}`;
  };

  // به روز رسانی قیمت‌ها و ویژگی‌ها با توجه به مدت زمان اشتراک انتخابی
  const updatePlansWithSelectedPeriod = (period: SubscriptionPeriod) => {
    setPlansList((prevPlans) =>
      prevPlans.map((plan) => ({
        ...plan,
        types: plan.types.map((type) => ({
          ...type,
          pricing: updatePricingBasedOnPeriod(type.basePricing, period), // قیمت تخفیف‌خورده از basePricing گرفته می‌شود
        })),
      }))
    );
  };

  // تغییر مدت زمان اشتراک
  const handlePeriodChange = (period: SubscriptionPeriod) => {
    setSelectedPeriod(period);
    updatePlansWithSelectedPeriod(period);
  };

  const FeatureListClasses = classNames(
    "[&>*:nth-child(odd)] relative top-0 left-0 w-96 h-12 flex gap-x-6 p-2 justify-evenly text-center items-center  text-base bg-white-shade-3 rounded-xl before:contents-[''] before:absolute before:top-1/2 before:-translate-y-1/2  before:h-[80%] before:bg-white before:rounded-xl before:z-20 tranitaion-all duration-500 before:tranitaion-all before:duration-500 border border-white-shade-3",
    {
      "before:left-1  before:w-4/12": selectedPeriod === "1 Year",
      "before:left-1/3  before:w-4/12 ": selectedPeriod === "3 Years",
      "before:left-2/3  before:w-4/12 ": selectedPeriod === "5 Years",
    }
  );


  return (
    <section className="container">
      <OverlayMenu />
      <div className="flex flex-col justify-center items-center py-8 gap-y-8">
        <Separator classes="" />
        <h1 className="font-outfit text-2xl text-black font-semibold">
          Ready to get started?
        </h1>

        {/* دکمه برای انتخاب مدت زمان اشتراک */}
        <div className={FeatureListClasses}>
          {/* دکمه 1 سال */}
          <span
            onClick={() => handlePeriodChange("1 Year")}            
            className={`relative z-2000  w-1/3 flex items-center justify-center hover:cursor-pointer h-full rounded-xl ${selectedPeriod === "1 Year" ? "text-black" : "text-white-shade-8"}`}
          >
            1 Year
          </span>

          {/* دکمه 3 سال */}
          <span
            onClick={() => handlePeriodChange("3 Years")}
            className={`relative z-2000  w-1/3 flex items-center justify-center hover:cursor-pointer h-full rounded-xl ${selectedPeriod === "3 Years" ? "text-black" : "text-white-shade-8"}`}
          >
            <span className="absolute -top-8 text-[#7158FF] bg-[#7158FF]/10 px-1.5 py-0.5 rounded-sm text-sm font-bold">Popular</span>
            3 Years
          </span>

          {/* دکمه 5 سال */}
          <span
            onClick={() => handlePeriodChange("5 Years")}
           className={`relative z-2000  w-1/3 flex items-center justify-center hover:cursor-pointer h-full rounded-xl ${selectedPeriod === "5 Years" ? "text-black" : "text-white-shade-8"}`}
          >
            5 Years
          </span>
        </div>
      </div>

      <section className="lg:grid lg:grid-cols-3 flex flex-col gap-4 w-full overflow-x-scroll no-scroll">
        {plansList.map((plan) => (
          <PlanCard key={plan.title} planData={plan} />
        ))}

        <div className="border-[1.5px] border-white-shade-4 rounded-2xl p-5 flex justify-between lg:rounded-3xl flex-col h-min">
          <div className="mb-3 w-min p-5 bg-white rounded-full border border-white-shade-4">
            <Diamonds />
          </div>
          <div className="flex flex-col gap-y-2">
            <h1 className="text-black font-outfit text-2xl font-semibold">Get Coupon</h1>
            <h3 className="text-white-shade-8 font-opensans font-medium">
              Add your email and we will contact you
            </h3>
          </div>
          <div className="flex flex-col gap-y-4 lg:px-1 rounded-2xl">
            <Input
              id={"Email"}
              inputType={"email"}
              placeHolder={"Your email"}
              classes={"lg:h-auto py-1 bg-white-shade-3"}
              label={""}
              iconComp={undefined}
            />
            <Button content={"Submit"} classes={"bg-black py-2 w-full"} />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Page;
