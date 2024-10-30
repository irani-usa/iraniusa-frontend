import Like from "@/components/Icons/Profile/Like";
import React from "react";

interface AvatarProps {
  background:string,
  Contact: boolean,
}

const Avatar: React.FC<AvatarProps> = (props) => {
  return (
    <>
      <div
        className="w-24 h-24 rounded-full bg-cover absolute top-[55%] left-[4%] lg:w-48 lg:h-48 lg:-top-0 lg:left-[17%]"
        style={{ backgroundImage: `url(${props.background})` }}
      ></div>
{ props.Contact &&     <div className="flex items-center gap-x-2 absolute top-[130px] right-[6%]">
        <div className="bg-primary-shade-4/10 lg:rounded-xl flex items-center justify-center font-opensans gap-x-3 py-2 rounded-lg px-4 lg:py-3 ">
          <Like />
          <span className="text-[#075DB7] font-medium">3.4k</span>
        </div>
        <button
          className="hover:bg-blue hover:text-white font-opensans py-2 rounded-xl lg:rounded-2xl px-6 lg:py-3 lg:px-10"
          type="button"
        >
          Contact
        </button>
      </div>}
    </>
  );
};

export default Avatar;
