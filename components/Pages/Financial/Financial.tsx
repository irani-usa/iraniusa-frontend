import React from "react";

interface FinancialProps {
  content: string,
  content2: string,
  classes: string,
  frame: string,
  chart: React.ReactNode,
  title: string,
  price: string,
  found: string,
  iconComp: React.ReactNode,
  info: boolean,
}


const Financial: React.FC<FinancialProps> = (props) => {
  return (
    <>
      <section className="relative">
        <section className={`${props.classes} text-white flex flex-col h-auto w-full p-4 my-5 rounded-3xl gap-y-4 `}>
          <div className="flex justify-between gap-x-12 items-center">
            <div className="flex items-center gap-x-3">
              <div className={`${props.frame} bg-white p-3 rounded-full`}>
                {props.iconComp}
              </div>
              <h1 className="font-semibold text-xl font-outfit text-black">{props.title}</h1>
            </div>
            {props.chart}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-start">
              <h1 className="font-opensans text-white-shade-11 font-medium">{props.content}</h1>
              <h1 className="font-opensans text-white-shade-11 font-medium">{props.content2}</h1>
            </div>
            <div className="flex flex-col items-end">
              <h1 className="font-opensans text-white-shade-11 font-medium">{props.price}</h1>
              <h1 className="font-opensans text-green font-medium">{props.found}</h1>
            </div>
          </div>
        </section>
        {props.info && <div className="p-4 bg-white-shade-2 bordered rounded-full absolute top-[142px]  left-[125px] lg:hidden">
          <svg width="14" height="14" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.00014 6.60001C6.47514 6.60001 5.95014 6.39751 5.55264 6.00001L0.662637 1.11001C0.445137 0.892511 0.445137 0.532511 0.662637 0.315011C0.880137 0.097511 1.24014 0.097511 1.45764 0.315011L6.34764 5.20501C6.70764 5.56501 7.29264 5.56501 7.65264 5.20501L12.5426 0.315011C12.7601 0.097511 13.1201 0.097511 13.3376 0.315011C13.5551 0.532511 13.5551 0.892511 13.3376 1.11001L8.44764 6.00001C8.05014 6.39751 7.52514 6.60001 7.00014 6.60001Z" fill="#011223" />
          </svg>
        </div>}

      </section>
    </>
  );
};

export default Financial;
