import React from "react";

import Button from "@/components/Button";
import Input from "@/components/Forms/Input";

import { Email, Password } from "@/components/Icons/Outline/";

import OverlayMenu from "@/components/OverlayMenu";
import Link from "next/link";

const page = () => {
  return (
    <>
      <OverlayMenu />
      <section className="container py-12 lg:flex justify-between">
        <section className="lg:w-[420px]">
          <div className=" w-20 h-20 items-center justify-center bordered flex rounded-xl  mx-auto mb-6">
            <Password />
          </div>
          <h1 className="text-black text-2xl text-center font-semibold font-outfit">
            Forgot password?
          </h1>
          <h2 className="text-white-shade-8 text-center text-lg py-2 font-opensans">
            No worreis, we will send you reset email
          </h2>
          <form action="#" className="flex flex-col gap-y-5 py-10">
            <Input
              id={"email"}
              inputType={"email"}
              placeHolder={"Example@gmail.com"}
              classes={"bg-white-shade-2"}
              label={"Email"}
              iconComp={<Email />}
            />
            <Button
              content={"Reset password"}
              classes={"bg-blue py-4 lg:bg-black"}
            />
          </form>
          <Link href='/login' className="block text-black font-opensans font-medium text-lg text-center">
            Back to login page
          </Link>
        </section>
        <div className="w-2/4 h-[100vh] bg-orange rounded-2xl hidden lg:flex"></div>
      </section>
    </>
  );
};

export default page;
