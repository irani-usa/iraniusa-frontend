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
          <div className="w-full flex gap-x-2  justify-between items-center">
          <div className='w-8   h-8  rounded-lg bg-contain bg-no-repeat bg-center' style={{ backgroundImage: `url(${props.avatar})` }}>
          </div>
            <div className="flex flex-col items-start gap-y-1">
              <span
                className="text-black text-sm font-opensans font-bold flex items-center
            gap-x-3"
              >
                {props.title}
              
              </span>
              <span className="text-white-shade-7 font-opensans text-xs">
                {props.description}
              </span>
            </div>
            <Link className="bg-black px-2 py-1.5 rounded-xl text-white text-xs " href="">Get Started</Link>
            
          </div>
         
        </div>
      </Link>
    </>
  );
};

export default SmallPlan;
