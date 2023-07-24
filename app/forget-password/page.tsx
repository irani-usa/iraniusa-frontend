import React from "react";

import Button from "@/components/Forms/Button";
import Input from "@/components/Forms/Input";

import { Email, Password } from "@/components/Icons/Outline/";

import Link from "next/link";
import Logo from "@/components/Logo";

const page = () => {
  return (
    <>
      <section className="container py-12 lg:flex justify-between ">
        <div className="flex flex-col gap-y-20">
          <div className="hidden lg:flex ">
            <Logo width={90} height={90} />
          </div>
          <section className="lg:w-[420px]">

            <div className=" w-20 h-20 items-center justify-center bordered flex rounded-xl  mx-auto mb-6">
              <Password />
            </div>
            <h1 className="text-black text-3xl text-center font-bold font-outfit">
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

        </div>

        <div className="w-2/4 max-h-[100vh] bg-cover rounded-3xl hidden lg:flex" style={{ backgroundImage: `url('/images/auth/forget-background.webp')` }}>
        </div>
      </section>
    </>
  );
};

export default page;
