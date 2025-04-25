import Like from "@/components/Icons/Profile/Like";
import React from "react";

interface AvatarProps {
  background:string,
}

const Avatar: React.FC<AvatarProps> = (props) => {
  return (
    <>
      <div
        className="w-24 h-24 rounded-full bg-cover absolute lg:top-[50%] -top-1 left-0 right-0 m-auto lg:w-36 lg:h-36  lg:left-[13.2%] lg:right-auto 2xl:left-[14%]"
        style={{ backgroundImage: `url(${props.background})` }}
      ></div>

    </>
  );
};

export default Avatar;
