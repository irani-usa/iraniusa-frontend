import Link from "next/link";
import React from "react";
import Image from "next/image";

interface CompanyProps {
  logo:string,
  title:string,
  desc:string,
  cover:string,
}

const Company: React.FC<CompanyProps> = (props) =>  {
  return (
    <section className="w-full py-8 lg:pt-2">
      <section className="container lg:pl-2 lg:px-0">
        <div className="bg-[#1E2C35] p-2 w-full pb-16 rounded-3xl lg:flex lg:pb-2 h-auto">
          <div className="bg-white p-6 flex flex-col gap-y-5 rounded-3xl lg:w-1/2">
          <Image className="w-24" width={100} height={100} src={props.logo} alt={""} />

            <h1 className="text-black font-bold text-2xl font-outfit lg:text-3xl  lg:mt-10">
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
            <div className="hidden lg:flex items-center w-full gap-x-2 mt-10">
              <div className="flex flex-col items-center gap-x-3 ">
                <h1 className="text-black text-3xl font-bold">200+</h1>
                <span className="text-white-shade-9 ">Happy Customers</span>
              </div>
              <div className="flex flex-col items-center gap-x-3">
                <h1 className="text-black text-3xl font-bold">100k+</h1>
                <span className="text-white-shade-9 ">Varients</span>
              </div>
              <div className="flex flex-col items-center gap-x-3">
                <h1 className="text-black text-3xl font-bold">92%</h1>
                <span className="text-white-shade-9 ">Satisfied Customers</span>
              </div>
            </div>
          </div>
          <div
            className="w-full lg:w-1/2 h-[195px] bg-cover bg-center lg:h-full"
            style={{
              backgroundImage:`url(${props.cover})`,
            }}
          ></div>
        </div>
      </section>
    </section>
  );
};

export default Company;
