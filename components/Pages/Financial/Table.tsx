import Flash from "@/components/Icons/Outline/Flash";
import React from "react";
import Cardchart from "./Cardchart";
import { Btc } from "@/components/Icons/Solid";
import Eth from "@/components/Icons/Solid/Eth";
import Eos from "@/components/Icons/Solid/Eos";

const Table = () => {
  return (
    <>
      <section className="border-[1.5px] border-white-shade-4 p-3 pb-10 flex flex-col w-full items-center  rounded-[30px] relative">
        <div className="flex items-center w-full pt-5 px-6">
          <span className="w-[20%] flex items-center gap-x-3 text-white-shade-11">
            #<Flash />
          </span>
          <span className="w-[35%] flex items-center gap-x-2 text-white-shade-11 font-medium">
            Name
            <Flash />
          </span>
          <span className=" w-[24%] flex items-center gap-x-2 text-white-shade-11 font-medium">
            Price
            <Flash />
          </span>
          <span className="w-[24%] flex items-center gap-x-1 text-white-shade-11 font-medium">
            24h
            <span>%</span>
          </span>
          <span className="w-[24%] flex items-center gap-x-1 text-white-shade-11 font-medium">
            7d
            <span>%</span>
          </span>
          <span className=" flex items-center gap-x-1 text-white-shade-11 font-medium">
            Marketcap
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.99984 16.6667C13.6817 16.6667 16.6665 13.6819 16.6665 9.99999C16.6665 6.31809 13.6817 3.33332 9.99984 3.33332C6.31794 3.33332 3.33317 6.31809 3.33317 9.99999C3.33317 13.6819 6.31794 16.6667 9.99984 16.6667ZM9.99984 18.3333C14.6022 18.3333 18.3332 14.6024 18.3332 9.99999C18.3332 5.39762 14.6022 1.66666 9.99984 1.66666C5.39746 1.66666 1.6665 5.39762 1.6665 9.99999C1.6665 14.6024 5.39746 18.3333 9.99984 18.3333Z"
                fill="#8C8C8C"
              />
              <path
                d="M9.1665 5.83333C9.1665 5.3731 9.5396 5 9.99984 5C10.4601 5 10.8332 5.3731 10.8332 5.83333C12.2139 5.83333 13.3332 6.95262 13.3332 8.33333C13.3332 8.79357 12.9601 9.16667 12.4998 9.16667C12.0396 9.16667 11.6665 8.79357 11.6665 8.33333C11.6665 7.8731 11.2934 7.5 10.8332 7.5H8.95268C8.61054 7.5 8.33317 7.77737 8.33317 8.11951C8.33317 8.38617 8.5038 8.62291 8.75678 8.70724L11.7699 9.71162C12.7035 10.0228 13.3332 10.8964 13.3332 11.8805C13.3332 13.1431 12.3096 14.1667 11.047 14.1667H10.8332C10.8332 14.6269 10.4601 15 9.99984 15C9.5396 15 9.1665 14.6269 9.1665 14.1667C7.78579 14.1667 6.6665 13.0474 6.6665 11.6667C6.6665 11.2064 7.0396 10.8333 7.49984 10.8333C7.96007 10.8333 8.33317 11.2064 8.33317 11.6667C8.33317 12.1269 8.70627 12.5 9.1665 12.5H11.047C11.3891 12.5 11.6665 12.2226 11.6665 11.8805C11.6665 11.6138 11.4959 11.3771 11.2429 11.2928L8.22973 10.2884C7.29619 9.97719 6.6665 9.10356 6.6665 8.11951C6.6665 6.85689 7.69006 5.83333 8.95268 5.83333H9.1665Z"
                fill="#8C8C8C"
              />
            </svg>
          </span>
        </div>
        <hr className="w-full bg-white-shade-4 mt-10 h-[1.5px]" />
        <Cardchart
          name={"Bitcoin"}
          sfname={"BTC"}
          price={"36,641.20"}
          hours={"+6.04%"}
          day={"-1.71%"}
          found={"$328,564,656,654"}
          number={"1"}
          iconComp={<Btc />}
        />
        <Cardchart
          name={"Etheum"}
          sfname={"Eth"}
          price={"36,641.20"}
          hours={"+6.04%"}
          day={"-1.71%"}
          found={"$328,564,656,654"}
          number={"2"}
          iconComp={<Eth />}
        />
        <Cardchart
          name={"EOS"}
          sfname={"EOS.IO"}
          price={"36,641.20"}
          hours={"+6.04%"}
          day={"-1.71%"}
          found={"$328,564,656,654"}
          number={"3"}
          iconComp={<Eos />}
        />
        <div className="p-4 bg-white-shade-2 bordered rounded-full absolute -bottom-6  left-[50%] ">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.00014 6.60001C6.47514 6.60001 5.95014 6.39751 5.55264 6.00001L0.662637 1.11001C0.445137 0.892511 0.445137 0.532511 0.662637 0.315011C0.880137 0.097511 1.24014 0.097511 1.45764 0.315011L6.34764 5.20501C6.70764 5.56501 7.29264 5.56501 7.65264 5.20501L12.5426 0.315011C12.7601 0.097511 13.1201 0.097511 13.3376 0.315011C13.5551 0.532511 13.5551 0.892511 13.3376 1.11001L8.44764 6.00001C8.05014 6.39751 7.52514 6.60001 7.00014 6.60001Z"
              fill="#011223"
            />
          </svg>
        </div>
      </section>
    </>
  );
};

export default Table;
