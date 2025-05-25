import React from "react";
import BranchesCard from "./BranchesCard";
import IconElement from "../../general/IconElement";
import { Location } from "@/components/Icons/Outline";

const Branches = () => {
  return (
    <section className=" border-b border-white-shade-4 py-16  container">
      <div className=" lg:pl-5 lg:px-0 ">
        <IconElement icon={<Location />}/>
        <h1 className="text-black font-medium text-2xl font-outfit mt-7 lg:text-center lg:text-3xl">
           Branches 
        </h1>
        <section className="grid grid-cols-1 lg:grid-cols-3 items-center gap-10 lg:items-center lg:mt-12">
          <BranchesCard           
            title={"Lorem ipsum dolor sit amet"}
            item={["test" , "test"]}
            class={""}
          />
          <BranchesCard           
            title={"Lorem ipsum dolor sit amet"}
            item={["test" , "test"]}
            class={""}
          />
          <BranchesCard           
            title={"Lorem ipsum dolor sit amet"}
            item={["test" , "test"]}
            class={""}
          />        
        
          
        </section>

        <section className="flex justify-center gap-x-3 mt-9 pb-3   cursor-pointer">
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

export default Branches;
