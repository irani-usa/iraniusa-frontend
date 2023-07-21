import React from "react";

import Financial from "@/components/Financial";
import FinancialInfo from "@/components/FinancialInfo";

import { Google, Game, Oil, Dollar, Btc } from "@/components/Icons/Solid";

const page = () => {
  return (
    <>
      <section className="container py-5">
        <div className="flex flex-col gap-y-4">
          <div className="w-full h-auto p-5 bg-white-shade-2 border-2 border-white-shade-4 rounded-xl flex items-center justify-between lg:hidden">
            <span className="text-black font-opensans font-medium">
              Fiat and Spot
            </span>
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.20711 0.792893C8.81658 0.402369 8.18342 0.402369 7.79289 0.792893L5 3.58579L2.20711 0.792893C1.81658 0.402369 1.18342 0.402369 0.792894 0.792893C0.402369 1.18342 0.402369 1.81658 0.792894 2.20711L4.29289 5.70711C4.68342 6.09763 5.31658 6.09763 5.70711 5.70711L9.20711 2.20711C9.59763 1.81658 9.59763 1.18342 9.20711 0.792893Z"
                fill="#011223"
              />
            </svg>
          </div>
          <div className="p-5 rounded-2xl border-[1px] border-white-shade-4 shadow-lg lg:p-8 lg:rounded-3xl lg:mt-12">
            <div className="flex items-center justify-between">
              <h1 className="text-black text-4xl font-outfit font-bold lg:text-3xl">
                Fiat and Spot
              </h1>
              <div className="w-full h-auto p-5 border-2 border-white-shade-4 rounded-2xl  items-center gap-x-5 hidden lg:flex lg:w-48 ">
                <span className="text-white-shade-10 font-opensans font-bold">
                  Fiat and Spot
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.20711 0.792893C8.81658 0.402369 8.18342 0.402369 7.79289 0.792893L5 3.58579L2.20711 0.792893C1.81658 0.402369 1.18342 0.402369 0.792894 0.792893C0.402369 1.18342 0.402369 1.81658 0.792894 2.20711L4.29289 5.70711C4.68342 6.09763 5.31658 6.09763 5.70711 5.70711L9.20711 2.20711C9.59763 1.81658 9.59763 1.18342 9.20711 0.792893Z"
                    fill="#999999"
                  />
                </svg>
              </div>
            </div>
            <div className="flex  items-center flex-wrap pt-5 gap-x-12 gap-y-7 lg:justify-between lg:pt-8">
              <FinancialInfo
                name={"Fiat and Spot balance"}
                number={"0.27894"}
                price={"$10,098.36"}
              />
              <FinancialInfo
                name={"Spot balance"}
                number={"0.13894"}
                price={"$10,098.36"}
              />
              <FinancialInfo
                name={"Fiat balance"}
                number={"0.18564"}
                price={"$10,098.36"}
              />
              <FinancialInfo
                name={"Yesterday's PNL"}
                number={"0.00000"}
                price={"$10,098.36"}
              />
            </div>
          </div>
        </div>
        <div className="flex overflow-x-scroll no-scroll items-center gap-x-5">
          <Financial
            content={"Price"}
            content2={"24h%"}
            classes={"text-black border-[1px] border-white-shade-4 w-2/3"}
            frame={"border-[1.5px] border-white-shade-4"}
            title={"BTC"}
            price={"$36,641.20"}
            found={"+6.04%"}
            iconComp={<Btc />}
            info={true}
          />
          <Financial
            content={"Price"}
            content2={"Total return"}
            classes={"text-black border-[1px] border-white-shade-4 w-2/3"}
            frame={"border-[1.5px] border-white-shade-4"}
            title={"Oil"}
            price={"$310,40"}
            found={"-1,10%"}
            iconComp={<Oil />}
            info={true}
          />
          <Financial
            content={"Price"}
            content2={"Total return"}
            classes={"text-black border-[1px] border-white-shade-4 w-2/3"}
            frame={"border-[1.5px] border-white-shade-4"}
            title={"Dollar"}
            price={"$310,40"}
            found={"-1,10%"}
            iconComp={<Dollar />}
            info={true}
          />
          <Financial
            content={"Price"}
            content2={"Total return"}
            classes={"text-black border-[1px] border-white-shade-4 w-2/3"}
            frame={"border-[1.5px] border-white-shade-4"}
            title={"Google"}
            price={"$36,641.20"}
            found={"+6.04%"}
            iconComp={<Google />}
            info={true}
          />
          <Financial
            content={"Price"}
            content2={"Total return"}
            classes={"text-black border-[1px] border-white-shade-4 w-2/3"}
            frame={"border-[1.5px] border-white-shade-4"}
            title={"Game"}
            price={"$36,641.20"}
            found={"+6.04%"}
            iconComp={<Game />}
            info={true}
          />
        </div>
      </section>
    </>
  );
};

export default page;
