import React from 'react';
import { Verified } from '../Icons/Solid';
import Link from 'next/link';

interface SmallBannerProps {
  name: string;
  role: string;
  jobTitle: string;
}

const SmallBanner: React.FC<SmallBannerProps> = (props) => {
  return (
    <Link
      href={'/'}
      className="flex items-center  w-[384px] h-[187px] bg-cover bg-center rounded-2xl hover:cursor-pointer relative overflow-hidden"
      style={{ backgroundImage: `url('/images/banner/3.png')` }}
    >
      <div className="absolute left-0 z-5">
        <svg width="52" height="81" viewBox="0 0 52 81" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 81V0L29.6379 7.80283C42.8158 11.2722 52 23.1873 52 36.8143V40.5V44.1858C52 57.8127 42.8158 69.7278 29.6379 73.1972L0 81Z" fill="#fff" />
        </svg>


      </div>
      <div
        className="w-12 h-12 rounded-full bg-cover bg-center absolute  z-10 left-0"
        style={{ backgroundImage: `url('/images/avatars/2.jpg')` }}
      ></div>


      <div className="flex flex-col gap-y-[7px] z-10 items-center w-full">
        <h3 className="flex items-center text-white font-opensans font-medium text-lg">
          {props.name}
          <Verified />
        </h3>
        <h4 className="text-white-shade-8 ">{props.jobTitle}</h4>
        <h4 className="text-white-shade-8 ">{props.role}</h4>
      </div>
    </Link>
  );
};

export default SmallBanner;
