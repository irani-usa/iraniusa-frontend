import React from "react";
import Star from "../Icons/Solid/Star";

interface TitleWithStarProps {
  title: string;
  summery: string;
}

const TitleWithStar: React.FC<TitleWithStarProps> = (props) => {
  return (
    <div className="w-full flex flex-col items-center">
      <Star />
      <h1 className="text-black font-bold font-outfit text-xl py-3 flex gap-x-5 items-center lg:text-2xl">
        <svg
          width="45%"
          height="2"
          viewBox="0 0 514 1"
          fill="#E6E6E6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="4.37114e-08"
            y1="0.5"
            x2="514"
            y2="0.500045"
            stroke="#E6E6E6"
          />
        </svg>
        {props.title}
        <svg
          width="45%"
          height="2"
          viewBox="0 0 514 1"
          fill="#000000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="4.37114e-08"
            y1="0.5"
            x2="514"
            y2="0.500045"
            stroke="#E6E6E6"
          />
        </svg>
      </h1>
      <p className="font-opensans text-white-shade-9 text-center text-lg py-3">
        {props.summery}
      </p>
    </div>
  );
};

export default TitleWithStar;
