import React from "react";

import Star from "@/components/Pages/About/Star";

import OverlayMenu from "@/components/Layout/OverlayMenu";

import { Stamp, Plan } from "@/components/Pages/About/index";
import Link from "next/link";

const page = () => {
  return (
    <>
      <OverlayMenu />
      <div className="w-full bg-blue">
        <div className="container py-12 lg:flex lg:justify-between lg:items-center lg:py-20">
          <div>
            <h1 className="text-white text-3xl font-outfit font-bold lg:max-w-lg">
              List your business in a platform that is built for Iranians today,
              and for future generations.
            </h1>
            <p className="text-white-shade-9 max-w-md mt-7 lg:max-w-md">
              Find common services and businesses as well as specialized Iranian
              businesses like Persian Markets, Persian tutors, Persian wedding
              planners and much more.
            </p>
          </div>
          <div className="mt-7 flex flex-col items-center lg:-mt-14">
            <Stamp />
            <p className="text-white-shade-9 max-w-md mt-7 lg:max-w-sm">
              Connect to Iranian businesses, professionals, and artist for
              modern services to strengthen our economic well-being and cultural
              unity
            </p>
          </div>
        </div>
      </div>
      <div className="container flex flex-col lg:pt-20 py-12">
        <div className="flex items-center gap-x-3">
          <div className="w-full h-[1px] bg-white-shade-4"></div>
          <Star content={"WSA Company"} />
          <div className="w-full h-[1px] bg-white-shade-4"></div>
        </div>
        <p className="font-opensans text-white-shade-9  text-lg py-3 max-w-6xl">
          Our company is a collection of designers, artists, developers,
          laborers, legal scholars, and business people with the desire to bring
          the Iranian community closer together. Our company has engaged the
          best designers and developers in the industry to create a modern
          platform to connect Iranian consumers with Iranian businesses,
          professionals, and artists.
        </p>
        <p className="font-opensans text-white-shade-9  text-lg py-3">
          Let’s overcome the fear and hesitancy to identify as Iranian
          businesses and professionals not because of discrimination from the
          non-Iranian community, but fearing threats and harassment from the
          regime. Political division, anger, and then fear keeps Iranian people
          apart to the delight of the regime.
        </p>
        <p className="font-opensans text-white-shade-9  text-lg py-3">
          Our solution is a business and culture platform designed by regular
          Iranians where no political, religious, or anti-religious ideology is
          promoted, even though we are deeply conscious of political events and
          history. This platform is designed for the conscious support and
          voluntary investment into our community’s economic and cultural
          well-being and development.
        </p>
        <Link href="" className="bg-[#012231]/10 px-16 py-2 my-4 rounded-2xl block mx-auto font-medium">Visit WSA website</Link>
        <div className="flex flex-col gap-y-5 lg:flex-row lg:gap-x-5 mt-9 lg:mt-16">
          <div
            style={{
              backgroundImage: `url('images/about/conversetaion.webp')`,
            }}
            className="rounded-3xl w-full h-44 lg:w-[65%] lg:h-[220px] bg-center bg-cover"
          ></div>
          <div
            style={{ backgroundImage: `url('images/about/freedom.webp')` }}
            className="rounded-3xl  w-full h-44 lg:w-[35%] lg:h-[220px] bg-cover bg-center"
          ></div>
        </div>
      </div>
      <div className="container flex flex-col  py-10">
        <div className="flex items-center gap-x-3">
          <div className="w-full h-[1px] bg-white-shade-4"></div>
          <Star content={"Platform"} />
          <div className="w-full h-[1px] bg-white-shade-4"></div>
        </div>
        <p className="font-opensans text-white-shade-9  text-lg py-3 max-w-6xl">
          We have invested effort, capital, and experience to create the first
          multi-service platform for the Iranian business, professional, and
          artist community. Use the Irani.World platforms because you require an
          online presence that is advanced, dynamic, affordable, and mindful of
          our cultural heritage. You choose what to share to enable prospective
          clients to reach you.
        </p>
        <p className="font-opensans text-white-shade-9  text-lg py-3 ">
          With history and heritage in mind, we designed our platforms with
          deference to our host nations because Iranian/Persian traditions
          require respect to one’s host. Just as ancient leaders paid tribute to
          Persian Kings of the past. As ex-pats, we pay respect to our hosts
          through our design. <br />
          <br />
          Moreover, we see ourselves as ancient friends of our hosts not as
          adversaries. A robust research study recently published in Science
          magazine concluded that modern European languages such as English,
          Spanish, German and others originated from over 8100 years ago when
          the Indo-Iranic people of North Eastern Fertile Crescent, which today
          encompasses North Western Iran, left Iran for the Eurasian Steppe.{" "}
          <br />
          <br />
          More recently, Cyrus the Great’s benevolent rulership, as memorialized
          by the Greek philosopher Xenophon in his book Cyropedia, became the
          inspiration for Thomas Jefferson and the founding fathers of the
          United States of America to establish freedom <br /> <br /> of speech,
          religion, and political assembly by creating the 1st Amendment to the
          U.S. constitution, a fundamental tenet of American
          freedom.Unfortunately, ancient history is not enough to fill the void
          left in our hearts for the success and prosperity of our people,
          culture, and nation. We hope this platform brings the Iranian people
          closer together, to built a reservoir of power and energy, to fuel an
          Iranian renaissance of economic and cultural success.
        </p>
        <div className="flex my-20 lg:grid grid-cols-4 items-center overflow-x-scroll no-scroll gap-x-3 lg:gap-x-4 ">
          <Plan
           background={'/images/home/plan-backgrounds/platinum.png'} content={'Business Platinum'} info={'Free and pro accounts'} classes={'bg-[#B80042]'} OldPrice={99} NewPrice={89} off={29}
          />
          <Plan
            background={'/images/home/plan-backgrounds/platinum.png'} content={'Business Platinum'} info={'Free and pro accounts'} classes={'bg-[#FFA841]'} OldPrice={99} NewPrice={89} off={29}
          />
          <Plan
           background={'/images/home/plan-backgrounds/platinum.png'} content={'Business Platinum'} info={'Free and pro accounts'} classes={'bg-[#9949FF]'} OldPrice={99} NewPrice={89} off={29}
          />
          <Plan
          background={'/images/home/plan-backgrounds/platinum.png'} content={'Business Platinum'} info={'Free and pro accounts'} classes={'bg-[#1F78FF]'} OldPrice={99} NewPrice={89} off={29}  
          />
        </div>
      </div>
      <div className="container flex flex-col ">
        <div className="flex items-center gap-x-3">
          <div className="w-full h-[1px] bg-white-shade-4"></div>
          <Star content={"Partners"} />
          <div className="w-full h-[1px] bg-white-shade-4"></div>
        </div>
        <div className="flex items-center justify-center gap-x-7 py-8 lg:gap-x-40 lg:py-10 lg:pt-16">
          <img
            src="images/about/white.png"
            className="w-[110px] lg:w-52 "
            alt=""
          />
          <img
            src="images/about/riv.png"
            className="w-[100px]  lg:w-52 "
            alt=""
          />
          <img
            src="images/about/wsa.png"
            className="w-[110px]  lg:w-52"
            alt=""
          />
        </div>
      </div>
      <div className="w-full bg-blue pt-9 my-28 lg:pt-0">
        <div className="container lg:flex gap-x-60 items-center">
          <div>
            <h1 className="text-white font-outfit text-2xl font-medium lg:font-semibold lg:text-3xl">
              Have a question? Our team is happy to assist you
            </h1>
            <p className="text-white-shade-8 font-opensans py-7">
              Ask about our platform, pricing, implementation or anything else.
              Our highly trained reps are standing by. Ready to help
            </p>
            <svg
              width="full"
              height="1"
              viewBox="0 0 514 1"
              fill="#E6E6E6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="4.37114e-08"
                y1="0.5"
                x2="514"
                y2="0.500045"
                stroke="#022040"
              />
            </svg>
            <div className="lg:flex items-center gap-x-3">
              <h3 className="bg-white w-full py-4 text-black text-center text-lg font-medium font-opensans rounded-2xl my-7 lg:w-44">
                Contact Us
              </h3>
              <h3 className="font-opensans  text-center text-white">
                Or email us:unreal@outlook.com
              </h3>
            </div>
          </div>
          <img
            src="images/about/man.webp"
            alt="man"
            className="w-1/2 h-[0] lg:h-[500px]"
          />
        </div>
        <img
          src="images/about/man.webp"
          alt="man"
          className="mt-24 lg:hidden"
        />
      </div>
    </>
  );
};

export default page;
