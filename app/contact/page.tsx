import React from "react";

import { Button, Input, Textarea } from "@/components/Forms/index";


import { Call, Email, Location, Message } from "@/components/Icons/Outline/index";

import { User } from "@/components/Icons/Solid";

import OverlayMenu from "@/components/Layout/OverlayMenu";

const page = () => {
  return (
    <>
      <OverlayMenu />
      <section className="container  pt-12 lg:py-20 lg:flex lg:flex-col lg:items-center contact">
        <h1 className="text-black font-semibold text-2xl text-center font-outfit">
          Contact us
        </h1>
        <p className="text-white-shade-9 font-inter font-medium text-sm text-center py-5">
          Ask about our platform, pricing, or something else.<br/>
          We will respond to your injury as soon as <br/> possible.
        </p>
        <div className="flex flex-col gap-y-4 pt-4 lg:flex-row gap-x-7">
          <div className="flex gap-x-4 items-center font-opensans py-2 px-2 rounded-full bordered lg:pr-24">
            <div className="bg-orange/10 py-5 rounded-full px-5">
              <Message />
            </div>
            <div>
              <h5 className="text-white-shade-9 font-semibold text-sm font-inter">E-mail</h5>
              <h2 className="text-black font-semibold text-sm">
                unreal@outlook.com
              </h2>
            </div>
          </div>
          <div className="flex gap-x-4 items-center font-opensans py-2 px-2 rounded-full   bordered lg:pr-28">
            <div className="bg-green/10 py-5 rounded-full px-5">
              <Call />
            </div>
            <div>
              <h5 className="text-white-shade-9 font-semibold text-sm font-inter">Call</h5>
              <h2 className="text-black font-semibold text-sm">
                (603) 555-0123
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-5 bg-white my-12 py-5 px-6 shadow-xl rounded-3xl lg:my-14 ">
          <div className="lg:flex gap-x-12">
            <Input
              id={"lastname"}
              inputType={"text"}
              placeHolder={"Daryl"}
              classes={"w-full"}
              label={"First name"}
              iconComp={<User classes={""} />}
            />
            <Input
              id={"firstname"}
              inputType={"text"}
              placeHolder={"Dixon"}
              classes={"w-full"}
              label={"Last name"}
              iconComp={<User classes={""} />}
            />
          </div>
          <div className="lg:flex gap-x-14">
            <Input
              id={"email"}
              inputType={"text"}
              placeHolder={"unreal@outlook.com"}
              classes={"w-full"}
              label={"E-mail address"}
              iconComp={<Email />}
            />
            <Input
              id={"city"}
              inputType={"text"}
              placeHolder={"Newyork"}
              classes={"w-full"}
              label={"City"}
              iconComp={<Location />}
            />
          </div>
          <Textarea
            id={"message"}
            placeHolder={
              "Hi, unfortunately i cant have access to my acc please check if there is any prob there"
            }
            classes={"w-full"}
            label={"Message"}
          />
          <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
        <input
          className="relative bg-transparent float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-hidden before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-blue checked:bg-blue checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-1 focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-blue dark:checked:bg-blue dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
          type="checkbox"
          value=""
          id="checkboxDefault" />
        <label
          className="inline-block pl-[0.15rem] font-medium font-inter text-blue hover:cursor-pointer"
          htmlFor="checkboxDefault">
         You agree to our friendly privacy policy
        </label>
      </div>
          <Button content={"Send message"} classes={"py-4"} />
        </div>
      </section>
    </>
  );
};

export default page;
