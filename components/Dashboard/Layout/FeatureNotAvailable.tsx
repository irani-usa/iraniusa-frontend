import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeatureNotAvailable = () => {
  return (
    <section className="w-full mt-10 h-96 flex flex-col gap-y-4 justify-center items-center">
      <Image
        src={"/images/dashboard/status/emojie.png"}
        width={100}
        height={100}
        alt=""
      />
      <h4 className="font-outfit text-2xl font-semibold">
        This feature is not available for you
      </h4>
      <span className="text-white-shade-10 text-lg font-normal">
        You should subscribe one of our plans to get access to ass features
      </span>
      <Link className="bg-blue text-white px-10 py-4 rounded-2xl" href={'/plans'}>
      See Plans
      </Link>
    </section>
  );
};

export default FeatureNotAvailable;
