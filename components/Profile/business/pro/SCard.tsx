import React from "react";

interface SCardProps {
  content: string;
  descreption: string;
  iconComp: React.ReactNode;
  class: string;
}

const SCard: React.FC<SCardProps> = (props) => {
  return (
<div className="flex flex-col items-center relative group max-w-[70%] lg:max-w-[35%]">
<div
      className={`${props.class}  cursor-pointer  p-5 border border-white-shade-4 flex flex-col gap-y-4 justify-between rounded-2xl my-6  lg:gap-y-6`}
    >
      <span className=" flex items-center gap-x-5 text-xl font-semibold pl-3 text-black duration-200">
        <svg
          width="20"
          height="20"
          viewBox="0 0 29 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd" className=":fill-black"
            d="M20.0994 0.514094C22.7754 0.132941 25.1695 2.20325 25.1695 4.8984V7.11524C27.0907 8.12782 28.4 10.1405 28.4 12.458V28.5628C28.4 31.8982 25.6881 34.6021 22.3428 34.6021H6.19044C2.84518 34.6021 0.133301 31.8982 0.133301 28.5628V6.01605C0.133301 6.00107 0.133574 5.98616 0.134116 5.97132C0.133573 5.94815 0.133301 5.9249 0.133301 5.90159C0.133301 4.44209 1.20966 3.20468 2.65877 2.99828L20.0994 0.514094ZM2.55616 8.83439V28.5628C2.55616 30.564 4.18328 32.1864 6.19044 32.1864H22.3428C24.35 32.1864 25.9771 30.564 25.9771 28.5628V12.458C25.9771 10.4567 24.35 8.83439 22.3428 8.83439H2.55616ZM3.07476 6.41867H22.7466V4.8984C22.7466 3.67333 21.6584 2.73228 20.442 2.90554L3.00142 5.38972C2.74593 5.42611 2.55616 5.64427 2.55616 5.90159C2.55616 6.18717 2.78834 6.41867 3.07476 6.41867ZM6.59425 17.2894C6.59425 16.6223 7.13663 16.0816 7.80568 16.0816H20.7276C21.3966 16.0816 21.939 16.6223 21.939 17.2894C21.939 17.9565 21.3966 18.4973 20.7276 18.4973H7.80568C7.13663 18.4973 6.59425 17.9565 6.59425 17.2894ZM6.59425 22.9261C6.59425 22.259 7.13663 21.7182 7.80568 21.7182H16.6895C17.3585 21.7182 17.9009 22.259 17.9009 22.9261C17.9009 23.5932 17.3585 24.134 16.6895 24.134H7.80568C7.13663 24.134 6.59425 23.5932 6.59425 22.9261Z"
            fill="#B3B3B3"
          />
        </svg>
        {props.content}
      </span>
      <p className=" text-black duration-200 ">{props.descreption}</p>
    </div>
  
</div>
  );
};

export default SCard;
