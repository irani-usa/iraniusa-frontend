import React from "react";
import { Apple } from "../Icons/Solid";

interface FinancialProps {
    content:string,
    content2:string,
    classes: string,
    frame : string,
    title:string,
    price:string,
    found:string,
    iconComp:React.ReactNode,
}


const Financial: React.FC<FinancialProps> = (props) => {
  return (
    <>
      <section className={`${props.classes}bg-blue flex flex-col h-auto w-full p-4 my-5 rounded-3xl gap-y-4 `}>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-3">
            <div className={`${props.frame} bg-white p-3 rounded-full`}>
              {props.iconComp}
            </div>
            <h1 className="font-bold text-xl font-outfit">{props.title}</h1>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="101"
            height="31"
            viewBox="0 0 101 31"
            fill="none"
          >
            <path
              d="M1 30H3.84393C4.2577 30 4.65191 29.8239 4.92808 29.5158L10.5824 23.2073C10.6393 23.1438 10.6906 23.0754 10.7355 23.0029L14.788 16.4679C15.2132 15.7824 16.1146 15.5732 16.7982 16.0014L25.0896 21.1955C25.6503 21.5468 26.3773 21.4758 26.8595 21.0227L29.8348 18.2269C30.3385 17.7536 31.1055 17.6996 31.6705 18.0978L34.7596 20.2749C35.1365 20.5405 35.6171 20.6119 36.0549 20.4672L41.2188 18.7614L46.0587 16.6672C46.183 16.6135 46.2992 16.5426 46.4039 16.4567L51.5197 12.2603C52.0523 11.8235 52.8181 11.8196 53.355 12.2511L57.4978 15.58C57.7257 15.7631 58.0036 15.8734 58.2951 15.8965L63.6484 16.3194H70.1854C70.6261 16.3194 71.0431 16.1198 71.3194 15.7765L76.7203 9.06804C76.7713 9.00474 76.8274 8.94582 76.8882 8.89189L84.9362 1.75315C85.7227 1.05544 86.9669 1.39602 87.2884 2.39708L90.0705 11.059C90.232 11.5617 90.6529 11.9375 91.1705 12.0413L95.0546 12.8199C95.6927 12.9478 96.1683 13.4836 96.2198 14.1322L96.9818 23.7343C97.0419 24.4913 97.6738 25.075 98.4332 25.075H100"
              stroke="#58BD7D"
              stroke-width="1.45588"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.84391 30.0014H1L98.5388 30.3586C99.3449 30.3616 100 29.7089 100 28.9028V26.5321C100 25.728 99.3482 25.0762 98.5441 25.0762H98.4332C97.6738 25.0762 97.0419 24.4925 96.9818 23.7355L96.2198 14.1328C96.1683 13.4842 95.6927 12.9484 95.0547 12.8205L91.1705 12.0419C90.6529 11.9381 90.232 11.5622 90.0705 11.0596L87.2884 2.39718C86.9669 1.39609 85.7227 1.0555 84.9361 1.75325L76.8882 8.8923C76.8274 8.94623 76.7713 9.00516 76.7203 9.06846L71.3194 15.7773C71.0431 16.1205 70.6261 16.3202 70.1854 16.3202H63.6484L58.2951 15.8972C58.0036 15.8742 57.7257 15.7639 57.4978 15.5807L53.355 12.2516C52.8181 11.8202 52.0522 11.824 51.5197 12.2609L46.4039 16.4575C46.2992 16.5434 46.183 16.6142 46.0587 16.668L41.2188 18.7623L36.055 20.4682C35.6171 20.6129 35.1365 20.5415 34.7596 20.2758L31.6705 18.0987C31.1055 17.7005 30.3385 17.7544 29.8348 18.2277L26.8595 21.0237C26.3773 21.4768 25.6503 21.5478 25.0896 21.1965L16.7983 16.0022C16.1147 15.5739 15.2132 15.7831 14.788 16.4687L10.7355 23.004C10.6906 23.0765 10.6393 23.1449 10.5824 23.2084L4.92808 29.5172C4.65192 29.8254 4.25769 30.0014 3.84391 30.0014Z"
              fill="url(#paint0_linear_771_5606)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_771_5606"
                x1="51.0823"
                y1="-54.1383"
                x2="50.542"
                y2="30.0017"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#45B36B" />
                <stop offset="1" stop-color="#45B36B" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="flex items-center justify-between">
            <div className="flex flex-col items-start">
                <h1 className="font-opensans text-white-shade-11 font-medium">{props.content}</h1>
                <h1 className="font-opensans text-white-shade-11 font-medium">{props.content2}</h1>
            </div>
            <div  className="flex flex-col items-end">
                <h1 className="font-opensans text-white-shade-11 font-medium">{props.price}</h1>
                <h1 className="font-opensans text-green font-medium">{props.found}</h1>
            </div>
        </div>
      </section>
    </>
  );
};

export default Financial;
