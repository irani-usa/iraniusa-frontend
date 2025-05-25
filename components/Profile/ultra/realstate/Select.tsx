import React from "react";

export const Select = () => {
  return (
    <div className="border border-white-shade-3 bg-white-shade-3  py-3 px-4 rounded-3xl focus:bg-white ">
      <div className="lg:flex items-center gap-x-2">
        <svg
          className="hidden lg:flex"
          width="16"
          height="18"
          viewBox="0 0 16 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.59961 7.51463C1.59961 3.9167 4.46499 1 7.99961 1C11.5342 1 14.3996 3.9167 14.3996 7.51463C14.3996 11.0844 12.357 15.2499 9.16996 16.7396C8.42702 17.0868 7.5722 17.0868 6.82926 16.7396C3.64227 15.2499 1.59961 11.0844 1.59961 7.51463Z"
            stroke="#8C8C8C"
            strokeWidth="1.5"
          />
          <path
            d="M5.59961 7.39844H10.3996"
            stroke="#8C8C8C"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <span className="text-white-shade-11 font-medium ">Location</span>
      </div>
      <div className="pl-1 flex items-center gap-x-3 mt-2 lg:pl-0">
        <svg
          className="lg:hidden"
          width="16"
          height="18"
          viewBox="0 0 16 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.59961 7.51463C1.59961 3.9167 4.46499 1 7.99961 1C11.5342 1 14.3996 3.9167 14.3996 7.51463C14.3996 11.0844 12.357 15.2499 9.16996 16.7396C8.42702 17.0868 7.5722 17.0868 6.82926 16.7396C3.64227 15.2499 1.59961 11.0844 1.59961 7.51463Z"
            stroke="#8C8C8C"
            strokeWidth="1.5"
          />
          <path
            d="M5.59961 7.39844H10.3996"
            stroke="#8C8C8C"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <select
          className="text-black bg-white-shade-3 border-none outline-hidden focus:outline-hidden focus:border-none appearance-none lg:text-lg lg:font-medium"
          name="selectCity"
          defaultValue={"Los angles"}
        >
          <option value="Los angles">Los angles</option>
        </select>
      </div>
    </div>
  );
};
