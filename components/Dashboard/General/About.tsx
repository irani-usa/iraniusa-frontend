import React from "react";

const About = () => {
  return (
    <div className="flex flex-col gap-y-4 w-full">
      <span className="text-lg font-medium">About me</span>
      <textarea
        value={
          "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
        }
        className="w-full p-6 text-lg rounded-3xl border border-white-shade-3 text-white-shade-9 focus:outline-hidden"
      ></textarea>
    </div>
  );
};

export default About;
