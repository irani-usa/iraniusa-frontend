import React from "react";

interface AvatarProps {
  background:string,
}

const Avatar: React.FC<AvatarProps> = (props) => {
  return (
    <div
      className="w-24 h-24 rounded-full bg-cover absolute top-[55%] left-[4%] lg:w-48 lg:h-48 lg:-top-0 lg:left-[17%]"
      style={{ backgroundImage: `url(${props.background})` }}
    ></div>
  );
};

export default Avatar;
