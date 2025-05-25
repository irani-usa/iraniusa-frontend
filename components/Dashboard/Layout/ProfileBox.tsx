import React from "react";

const ProfileBox = () => {
  return (
    <section className="flex items-center gap-x-4 px-12">
      <div
        className="w-20 h-16 rounded-lg bg-center bg-cover"
        style={{
          backgroundImage: `url('/images/dashboard/sidemenu/user-profile.png')`,
        }}
      ></div>
      <div className="flex flex-col gap-y-3">
        <h4 className="text-black font-semibold font-outfit text-lg">
          Amin gholami
        </h4>
        <span className="text-white-shade-11 font-medium">
          Product designer
        </span>
      </div>
    </section>
  );
};

export default ProfileBox;
