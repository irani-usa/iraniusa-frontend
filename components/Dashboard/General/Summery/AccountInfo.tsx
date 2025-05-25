import React from "react";

const AccountInfo = () => {
  return (
    <div>
      <div className="w-full flex flex-col gap-y-3 py-4 border-y border-white-shade-3">
        <div className="flex justify-between">
          <span className="text-white-shade-8 text-lg font-medium">
            Followers
          </span>
          <span className="text-black text-lg font-medium">11.2 k</span>
        </div>
        <div className="flex justify-between">
          <span className="text-white-shade-8 text-lg font-medium">
            Following
          </span>
          <span className="text-black text-lg font-medium">23</span>
        </div>
      </div>
      <div className="w-full flex flex-col gap-y- py-4">
        <div className="flex justify-between">
          <span className="text-white-shade-8 text-lg font-medium">
            Account Plan
          </span>
          <span className="text-black text-lg font-medium">Professional</span>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
