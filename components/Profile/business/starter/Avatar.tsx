import Link from "next/link";
import React from "react";


const Avatar = () => {
    return (
        <>
            <div
                className="w-24 h-24 rounded-full bg-cover absolute top-[55%] left-[4%] lg:w-48 lg:h-48 lg:-top-0 lg:left-[17%]"
                style={{ backgroundImage: `url('/images/profile/business/prof.png')` }}
            ></div>
            <div className="flex items-center gap-x-2 absolute top-[115px] right-[4%]">
               
                <Link href={"#"} className="bg-blue hidden lg:flex font-opensans rounded-2xl px-16 py-4  hover:cursor-pointer" type="button">Contact</Link>
            </div>
        </>
    );
};

export default Avatar;
