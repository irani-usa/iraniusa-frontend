import React from "react";

const ProfileCircle = () => {
  return (
    <div
      className="w-[70px] h-[70px] mb-5 rounded-full bg-center bg-cover"
      style={{
        backgroundImage: `url('/images/dashboard/sidemenu/user-profile.png')`,
      }}
    ></div>
  );
};

export default ProfileCircle;
