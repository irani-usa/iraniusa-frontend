import Link from "next/link";
import React from "react";

interface SmallPlanProps {
  classes: string;
  title: string,
  description: string,
  avatar: string,
}

const SmallPlan: React.FC<SmallPlanProps> = (props) => {
  return (
    <>
      <Link href={"#"}>
        <div className="flex items-center justify-between border border-white-shade-4 p-3 rounded-2xl relative">
          <div className="w-full flex gap-x-1 items-center">
          <div className='w-15 h-15 rounded-lg bg-contain bg-no-repeat bg-center' style={{ backgroundImage: `url(${props.avatar})` }}>
          </div>
            <div className="flex flex-col items-start gap-y-1">
              <span className="text-black text-sm font-outfit font-semibold flex items-center gap-x-3">{props.title}</span>
              <span className="text-white-shade-7 font-opensans text-xs">{props.description}</span>
            </div>
          </div>
            <button type="button" className="w-1/3 bg-black py-2 rounded-lg text-white text-xs font-medium">Get Started</button>
        </div>
      </Link>
    </>
  );
};

export default SmallPlan;
