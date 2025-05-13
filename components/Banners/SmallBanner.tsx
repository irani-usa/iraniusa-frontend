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
    <div className="relative w-full lg:flex justify-center">
    {/* آواتارها رو اینجا بیرون از Link قرار می‌دیم */}
    <div
        className="w-14 h-14 rounded-full bg-cover bg-center absolute  z-10 -left-5 top-0 bottom-0 m-auto"
        style={{ backgroundImage: `url('/images/avatars/2.png')` }}
      ></div>
    <Link
      href={'/'}
      className="flex items-center  w-full h-[187px] bg-cover bg-center rounded-2xl hover:cursor-pointer relative box2"
      style={{ backgroundImage: `url('/images/banner/3.png')` }}
    >
      <div className="flex flex-col gap-y-[7px] z-10 items-center w-full px-4">
        <h3 className="flex items-center text-white font-opensans font-medium text-lg">
          {props.name}
          <Verified />
        </h3>
        <h4 className="text-white-shade-8 text-start lg:w-full pl-[70px]">{props.jobTitle}</h4>
        <h4 className="text- text-lg font-opensans font-medium">{props.role}</h4>
      </div>
    </Link>
    </div>
  );
};

export default SmallBanner;
