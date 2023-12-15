
import { Button, Input } from "@/components/Forms/index";

import { Dots, Email, Password } from "@/components/Icons/Outline/";
import { Google, Facebook2, Apple } from "@/components/Icons/Solid/";

import Link from "next/link";
import Logo from "@/components/Logo";

const page = () => {
  return (
    <>
      <section className="container py-12 lg:flex justify-between h-screen">
        <section className="lg:w-[420px]">
          <div className="hidden lg:flex">
            <Logo width={90} height={90} />
          </div>
          <h1 className="text-black text-2xl font-medium font-outfit mt-12">
            Welcome back 👋🏻
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
            <Link
              href="/forget-password"
              className="block text-[#2E81FF] cursor-pointer font-opensans font-semibold text-end text-base py-4  lg:text-black"
            >
              Forgot password
            </Link>
            <Button
              content={"Log in"}
              classes={"bg-blue py-4 my-2 lg:bg-black"}
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
          <section className="flex justify-center gap-x-4">
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
            registrera dig gratis?{" "}
            <Link href="/register" className="text-white-shade-8">
              register for free
            </Link>
          </h1>
        </section>
        <div
          className="w-2/4 h-full p-8 bg-cover rounded-3xl hidden lg:flex items-end"
          style={{
            backgroundImage: `url('/images/auth/login-background.webp')`,
          }}
        >
          <div className="flex flex-col gap-y-4 mb-2">
            <span className="inline-flex justify-center items-center w-72 h-20 font-outfit font-medium text-xl  rounded-full bg-white/10 backdrop-blur-xl">
              Do games pay streamers?
            </span>
            <p className="text-xl text-[#C6C6C6]">
              Successful streamers can make $3,000 to $5,000 per month from
              their subscribers, with the top broadcasters earning substantially
              more.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
