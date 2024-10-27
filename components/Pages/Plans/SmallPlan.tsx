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
          <div className="w-full flex gap-x-4  justify-between ">
      
            <div className="flex flex-col items-start gap-y-1">
              <span
                className="text-black text-base font-opensans font-bold flex items-center
            gap-x-3"
              >
                {props.title}
              
              </span>
              <span className="text-white-shade-7 font-opensans">
                {props.description}
              </span>
            </div>
            <div className='w-20 h-20 rounded-lg bg-contain bg-no-repeat bg-center  absolute right-0 -bottom-2' style={{ backgroundImage: `url(${props.avatar})` }}>
            </div>
          </div>
         
        </div>
      </Link>
    </>
  );
};

export default SmallPlan;
