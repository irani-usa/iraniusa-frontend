
import { Button, Input } from "@/components/Forms/index";

import { Email, Password } from "@/components/Icons/Outline/";

import Link from "next/link";
import Logo from "@/components/Logo";

const page = () => {
  return (
    <>
      <section className="container py-12 lg:flex justify-around h-screen">
        <div className="flex flex-col items-center lg:items-start">
          <div className="">
            <Logo width={90} height={90} />
          </div>
          <section className="w-full lg:w-[420px]">
            <div className=" w-16 h-16 items-center justify-center bordered flex rounded-xl  mx-auto mb-6">
              <Password />
            </div>
            <h1 className="text-blue text-2xl text-center font-semibold font-outfit">
              Forgot password?
            </h1>
            <h2 className="text-white-shade-10 text-center text-lg py-2 font-medium font-inter">
              No worreis, we will send you reset email
            </h2>
            <form action="#" className="flex flex-col gap-y-5 w-full">
              <Input
                id={"email"}
                inputType={"email"}
                placeHolder={"Example@gmail.com"}
                classes={""}
                label={"Email"}
                iconComp={<Email />}
              />
              <Button
                content={"Reset password"}
                classes={"bg-blue py-3 lg:bg-black"}
              />
            </form>
            <Link
              href="/login"
              className="block py-8 text-white-shade-8 font-opensans font-medium text-lg text-center"
            >
              Back to login page
            </Link>
          </section>
        </div>
        <div
          className="w-2/4 h-[570px] p-4 bg-cover rounded-3xl hidden lg:flex items-end"
          style={{
            backgroundImage: `url('/images/auth/register-background.webp')`,
          }}
        >
          <div className="flex flex-col gap-y-4 mb-2">
            <span className="inline-flex justify-center items-center w-72 h-20 font-outfit font-medium text-xl  rounded-full text-white bg-white-shade-10 backdrop-blur-3xl">Do games pay streamers?</span>
            <p className="text-xl text-white-shade-8">
            Successful streamers can make $3,000 to $5,000 per month from their subscribers, with the top broadcasters earning substantially more.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
