import React from "react";
import { Delete } from "../Icons";

const Cover = () => {
  return (
    <div className="flex flex-col gap-y-4 w-full">
      <span className="text-lg font-medium">Cover image</span>
      <div className="relative top-0 left-0 w-full h-36 rounded-3xl bg-primary">
        <span className="absolute top-5 right-5 inline-flex justify-center items-center w-12 h-12 rounded-full bg-white cursor-pointer">
          <Delete />
        </span>
      </div>
    </div>
  );
};

export default Cover;
