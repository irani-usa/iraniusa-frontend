import React from "react";

const Tabs = () => {
  return (
    <ul className="flex items-center gap-x-8 w-full h-20 font-opensans font-semibold text-white-shade-8 text-lg px-10 border-b border-white-shade-3">
      <li className="text-primary-tint-4">General</li>
      <li className="font-medium hover:cursor-pointer hover:text-primary-tint-4 transition-all">
        Experience
      </li>
      <li className="font-medium hover:cursor-pointer hover:text-primary-tint-4 transition-all">
        Education & courses
      </li>
      <li className="font-medium hover:cursor-pointer hover:text-primary-tint-4 transition-all">
        Projects
      </li>
      <li className="font-medium hover:cursor-pointer hover:text-primary-tint-4 transition-all">
        Gallery
      </li>
      <li className="font-medium hover:cursor-pointer hover:text-primary-tint-4 transition-all">
        My blogs
      </li>
      <li className="font-medium hover:cursor-pointer hover:text-primary-tint-4 transition-all">
        Socials & Contact
      </li>
      <li className="font-medium hover:cursor-pointer hover:text-primary-tint-4 transition-all">
        Personalize
      </li>
      <li className="font-medium hover:cursor-pointer hover:text-primary-tint-4 transition-all">
        Security
      </li>
    </ul>
  );
};

export default Tabs;
