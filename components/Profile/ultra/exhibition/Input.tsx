import React from "react";

export const Input = () => {
  return (
    <div className=" relative font-opensans flex justify-center items-center rounded-2xl bg-white-shade-3 text-lg  h-[80px] lg:justify-start lg:pl-14">
      <svg
        className="absolute left-4 lg:left-7"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.63385 1.21719C4.09003 1.21719 1.21719 4.09003 1.21719 7.63385C1.21719 11.1777 4.09003 14.0505 7.63385 14.0505C11.1777 14.0505 14.0505 11.1777 14.0505 7.63385C14.0505 4.09003 11.1777 1.21719 7.63385 1.21719ZM0.117188 7.63385C0.117188 3.48251 3.48251 0.117188 7.63385 0.117188C11.7852 0.117188 15.1505 3.48251 15.1505 7.63385C15.1505 9.51156 14.462 11.2285 13.3237 12.5459L15.7228 14.9449C15.9376 15.1597 15.9376 15.508 15.7228 15.7228C15.508 15.9376 15.1597 15.9376 14.9449 15.7228L12.5459 13.3237C11.2285 14.462 9.51156 15.1505 7.63385 15.1505C3.48251 15.1505 0.117188 11.7852 0.117188 7.63385Z"
          fill="#B3B3B3"
        />
      </svg>

      <input
        type="text"
        placeholder="Search by artist, event or venue"
        className="text-center w-full h-full rounded-2xl text-white-shade-8 text-[16px] bg-white-shade-3 focus:outline-hidden focus:shadow-none lg:text-left "
      />
    </div>
  );
};
