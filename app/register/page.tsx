import React from "react";

import Button from "@/components/Button";
import Input from "@/components/Forms/Input";

import { Dots, Email, Password } from "@/components/Icons/Outline/";
import { Google, Facebook2, Apple } from "@/components/Icons/Solid/";

import Link from "next/link";

const page = () => {
  return (
    <>
      <section className="container py-16 lg:flex justify-between">
        <section className="lg:w-[420px]">
          <h1 className="text-black text-2xl font-semibold font-outfit">
            Welcome to Irani USA 👋🏻{" "}
          </h1>
          <h2 className="text-white-shade-8  text-lg py-2 font-opensans">
            Enter your details
          </h2>
          <form action="#">
            <Input
              id={"email"}
              inputType={"email"}
              placeHolder={"Example@gmail.com"}
              classes={"bg-white-shade-2"}
              label={"Email"}
              iconComp={<Email />}
            />
            <Input
              id={"password"}
              inputType={"password"}
              placeHolder={"* * * * * * * * "}
              classes={"bg-white-shade-2"}
              label={"Password"}
              iconComp={<Password />}
            />
            <h3 className="text-[#DE000D] font-opensans font-semibold text-sm py-2">
              password should be at least 8 characters{" "}
            </h3>
            <Input
              id={"password"}
              inputType={"password"}
              placeHolder={"* * * * * * * * "}
              classes={"bg-white-shade-2"}
              label={"Re-Password"}
              iconComp={<Password />}
            />
            <Button
              content={"Register"}
              classes={"bg-blue py-4 my-2 lg:bg-black mt-10"}
            />
          </form>

          <h2 className="text-white-shade-8 flex items-center justify-between py-4 text-center font-opensans text-lg">
            <svg
              width="148"
              height="1"
              viewBox="0 0 148 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="148" y1="0.5" y2="0.5" stroke="#B3B3B3" />
            </svg>
            Or
            <svg
              width="148"
              height="1"
              viewBox="0 0 148 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="148" y1="0.5" y2="0.5" stroke="#B3B3B3" />
            </svg>
          </h2>
          <section className="flex justify-center gap-x-6">
            <div className="p-5 rounded-full border-[1px] border-white-shade-8">
              <Google />
            </div>
            <div className="p-5 rounded-full border-[1px] border-white-shade-8">
              <Apple />
            </div>
            <div className="p-5 rounded-full border-[1px] border-white-shade-8">
              <Facebook2 />
            </div>
            <div className="p-5 rounded-full border-[1px] border-white-shade-8 flex items-center justify-center">
              <Dots />
            </div>
          </section>
          <h1 className="text-black font-opensans py-8 font-medium text-lg text-center">
            Do you have account?
            <Link href="/login" className="text-white-shade-8"> Login</Link>
          </h1>
        </section>
        <div className="w-2/4 h-[100vh] bg-cover rounded-2xl hidden lg:flex" style={{ backgroundImage: `url('/images/auth/register-background.jpg')` }}>
        </div>
      </section>
    </>
  );
};

export default page;
