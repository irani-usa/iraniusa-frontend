import Link from "next/link";
import React from "react";

interface FeaturedBlogProps {
  classes: string;
  title: string,
  publishTime: string,
  avatar: string,
}

const FeaturedBlog: React.FC<FeaturedBlogProps> = (props) => {
  return (
    <>
      <Link href={"#"}>
        <div className="flex items-center justify-between">
          <div className="w-full flex gap-x-4 rounded-3xl ">
            <div className='w-14 h-14 rounded-lg bg-cover bg-center mr-2' style={{ backgroundImage: `url(${props.avatar})` }}>
            </div>
            <div className="flex flex-col items-start gap-y-1">
              <span
                className="text-black text-base font-opensans font-semibold flex items-center
            gap-x-3"
              >
                {props.title}
              
              </span>
              <span className="text-white-shade-7 font-opensans">
                {props.publishTime}
              </span>
            </div>
          </div>
         
        </div>
      </Link>
    </>
  );
};

export default FeaturedBlog;
