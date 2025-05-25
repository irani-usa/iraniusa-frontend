import React from "react";
import SCard from "./SCard";
import IconElement from "../../general/IconElement";
import HandHeart from "@/components/Icons/Profile/HandHeart";

const Services = () => {
  return (
    <section className=" border-b border-white-shade-4 py-16 container">
      <div className=" lg:pl-5 ">
          <IconElement icon={<HandHeart />}/>
          <h1 className="text-black font-medium text-2xl font-outfit my-7 lg:text-3xl text-center">
          Services
          </h1>         
        <section className="flex gap-x-5">
          <SCard
            content={"State & local tax"}
            descreption={
              "LWith the support of NKF CPA Firm professionals who monitor laws and regulations that ..."
            }
            iconComp={undefined}
            class={""}
          />
          <SCard
            content={"Audits"}
            descreption={
              "Our auditing services are intended to assist the public by instilling confidence and trust. "
            }
            iconComp={undefined}
            class={"hidden lg:flex"}
          />
          <SCard
            content={"Compilations "}
            descreption={
              "NKF CPA Firm Services produces financial accounts based on financial data provided ..."
            }
            iconComp={undefined}
            class={"hidden lg:flex"}
          />
        </section>
        <section className="lg:flex justify-center gap-x-3 mt-5 pb-3 hidden  cursor-pointer">
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

export default Services;
