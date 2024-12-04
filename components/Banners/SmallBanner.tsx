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
      className="flex items-center  w-[384px] h-[187px] bg-cover bg-center rounded-2xl hover:cursor-pointer relative "
      style={{ backgroundImage: `url('/images/banner/3.png')` }}
    >
      
      <div
        className="w-12 h-12 rounded-full bg-cover bg-center absolute  z-10 -left-5"
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
