import React from "react";


const Avatar = () => {
    return (
        <>
            <div
                className="w-24 h-24 rounded-full bg-cover absolute top-[55%] left-[4%] lg:w-48 lg:h-48 lg:-top-0 lg:left-[17%]"
                style={{ backgroundImage: `url('/images/profile/A&E/profile.png')` }}
            ></div>
            <div className="lg:hidden flex items-center gap-x-2 absolute top-[115px] right-[4%]">
            
                <button className="bg-blue text-white font-opensans py-2 rounded-xl lg:rounded-2xl px-6 lg:py-3 lg:px-10" type="button">Contact</button>
            </div>
        </>
    );
};

export default Avatar;
