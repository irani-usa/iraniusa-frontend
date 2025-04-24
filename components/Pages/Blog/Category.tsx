import Link from "next/link";
import React from "react";

interface CategoryProps {
  classes: string;
  content: string;
}

const Category: React.FC<CategoryProps> = (props) => {
  return (
    <>
      <Link href={"#"}>
        <div className="py-5 border-b-[1.5px] text-white-shade-9  border-white-shade-4 hover:scale-105 hover:text-black hover:font-semibold transition-all duration-500">
          <span className="flex items-center  justify-between font-medium font-inter ">
            {props.content}{" "}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 15.8333L12.5 10L7.5 4.16666" stroke="#A6A6A6" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

          </span>
        </div>
      </Link>
    </>
  );
};

export default Category;
