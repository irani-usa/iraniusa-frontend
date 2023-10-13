import Image from "next/image";
import Link from "next/link";
import React from "react";
import Honor from "../starter/Honor";

interface CompanyProps {
  logo:string,
  title:string,
  desc:string,
  cover:string,
}


const Company: React.FC<CompanyProps> = (props) =>  {
  return (
    <section className="w-full border-b border-white-shade-4 py-8 lg:pt-2">
      <section className="container lg:px-2 w-full">
        <div className="bg-[#1E2C35] p-2 w-full pb-16 rounded-3xl lg:flex lg:pb-2 h-auto">
          <div className="bg-white p-6 flex flex-col gap-y-5 rounded-3xl lg:w-1/2">
            <Image className="w-24" width={100} height={100} src={props.logo} alt={""} />

            <h1 className="text-black font-bold text-2xl font-outfit lg:text-3xl lg:mt-10">
             {props.title}
            </h1>
            <p className=" text-white-shade-9  font-opensans">
              {props.desc}
            </p>
            <div className="mt-5 pb-5">
              <Link
                className="bg-blue text-white py-4 px-8 font-medium rounded-2xl lg:px-12"
                href={"#"}
              >
                About us
              </Link>
              <Link
                className="py-4 px-8 font-medium text-white-shade-10"
                href={"#"}
              >
                Our products
              </Link>
            </div>
            <div className=" grid grid-cols-2 lg:grid-cols-3 items-start w-full lg:mt-10 gap-y-6">
            <Honor title={"200+"} content={"Happy Customers"} />
            <Honor title={"100k+"} content={"Varients"} />
            <Honor title={"92%"} content={"Satisfied Customers"} />
            </div>
          </div>
          <div
            className="w-full lg:w-1/2 h-[220px] bg-cover bg-center lg:h-full"
            style={{
              backgroundImage:`url(${props.cover})`
            }}
          ></div>
        </div>
      </section>
    </section>
  );
};

export default Company;
