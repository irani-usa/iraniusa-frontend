import Link from "next/link";
import React from "react";

interface BlogCardProps {
  classes: string;
  readingTime:string,
  title:string,
  summery:string,
  author:string,
  publish:string,
  avatar:string,
  cover:string,
  cm:string,
  like:string,
}

const BlogCard: React.FC<BlogCardProps> = (props) => {
  return (
    <>
      <Link href={"#"}>
        <div
          className={`${props.classes} border-[1.5px] border-white-shade-3 rounded-2xl p-1 hover:shadow-card transition-all duration-300 `}
        >
          <div className="flex flex-col gap-y-5 p-5 lg:w-2/3">
            <span className="w-[105px] h-10 flex items-center justify-center bg-white-shade-3 text-black font-medium font-opensans text-sm rounded-lg">
            {props.readingTime}
            </span>
            <h1 className="text-black text-xl font-outfit font-semibold lg:max-w-sm lg:text-2xl">
             {props.title}
            </h1>
            <p className="font-opensans text-white-shade-11 font-medium  lg:max-w-xs">
           {props.summery}
            </p>
            <div>
              <div className="flex items-center gap-x-5 py-5 lg:py-0 lg:pt-7">
                <div className="flex items-center gap-x-3">
                  <img className="w-10" src="/images/blog/User.webp" alt="" />
                  <h1 className="text-black font-semibold font-opensans flex flex-col items-start">
                    {props.author}
                    <span className="font-opensans text-sm text-white-shade-9 font-normal">
                      {props.publish}
                    </span>
                  </h1>
                </div>
                <div className="flex items-center gap-x-3">
                  <span className=" flex items-center text-green gap-x-2 font-opensans font-semibold">
                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.99984 18.7017C5.28829 18.7017 1.45817 14.8715 1.45817 10.16C1.45817 5.44845 5.28829 1.61833 9.99984 1.61833C14.7114 1.61833 18.5415 5.44845 18.5415 10.16C18.5415 14.8715 14.7114 18.7017 9.99984 18.7017ZM9.99984 2.03499C5.51972 2.03499 1.87484 5.67987 1.87484 10.16C1.87484 14.6401 5.51972 18.285 9.99984 18.285C14.48 18.285 18.1248 14.6401 18.1248 10.16C18.1248 5.67987 14.48 2.03499 9.99984 2.03499Z" fill="black" stroke="#58BD7D" stroke-width="0.833333"/>
<path d="M10.0002 12.035C8.96361 12.035 8.12516 11.1966 8.12516 10.16C8.12516 9.12347 8.96361 8.28501 10.0002 8.28501C11.0367 8.28501 11.8752 9.12347 11.8752 10.16C11.8752 11.1966 11.0367 12.035 10.0002 12.035ZM10.0002 8.70168C9.19504 8.70168 8.54183 9.35489 8.54183 10.16C8.54183 10.9651 9.19504 11.6183 10.0002 11.6183C10.8053 11.6183 11.4585 10.9651 11.4585 10.16C11.4585 9.35489 10.8053 8.70168 10.0002 8.70168Z" fill="black" stroke="#58BD7D" stroke-width="0.833333"/>
</svg>

                   {props.cm}
                  </span>
                  <span className="text-black flex items-center gap-x-2 font-opensans font-semibold">
                    <svg
                      width="20"
                      height="22"
                      viewBox="0 0 20 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.4094 2.39319C10.274 2.3497 10.1259 2.36024 10.0002 2.42084C9.8625 2.48719 9.7715 2.603 9.73881 2.729L9.29481 4.4406C9.13954 5.03918 8.91347 5.61652 8.62231 6.1616C8.17027 7.00784 7.48629 7.65868 6.85176 8.20547L5.50894 9.36261C5.30082 9.54195 5.1913 9.81077 5.21502 10.0851L5.97304 18.8516C6.01134 19.2945 6.38133 19.6333 6.82365 19.6333H11.1624C14.0896 19.6333 16.5559 17.5966 17.0289 14.8613L17.6874 11.0536C17.7781 10.5295 17.3751 10.0519 16.8462 10.0519H12.0105C11.0985 10.0519 10.4058 9.23373 10.5531 8.33507L11.1716 4.56015C11.2563 4.04306 11.2321 3.51396 11.1005 3.00679C11.0338 2.74942 10.8307 2.52853 10.5447 2.43666L10.4094 2.39319L10.6235 1.72674L10.4094 2.39319ZM9.39244 1.15964C9.84286 0.942592 10.3618 0.907449 10.8376 1.06028L10.9729 1.10375L10.7588 1.7702L10.9729 1.10375C11.6981 1.33672 12.2639 1.91605 12.4557 2.65527C12.6362 3.35112 12.6694 4.07707 12.5531 4.78651L11.9346 8.56144C11.9267 8.60975 11.9639 8.65193 12.0105 8.65193H16.8462C18.2455 8.65193 19.3053 9.91408 19.067 11.2921L18.4085 15.0999C17.8132 18.5423 14.7335 21.0333 11.1624 21.0333H6.82365C5.65357 21.0333 4.67901 20.1376 4.57825 18.9722L3.82023 10.2058C3.75778 9.48361 4.04593 8.77523 4.59504 8.30205L5.93786 7.14491C6.54939 6.61794 7.06416 6.10717 7.38745 5.50197C7.62691 5.05367 7.8124 4.57967 7.93967 4.08907L8.38366 2.37747C8.52295 1.84052 8.89592 1.39889 9.39244 1.15964ZM1.57021 8.65258C1.94472 8.63642 2.2655 8.91816 2.29779 9.29163L3.20461 19.779C3.26286 20.4527 2.73223 21.0333 2.05465 21.0333C1.41642 21.0333 0.900391 20.5156 0.900391 19.8786V9.35193C0.900391 8.97707 1.1957 8.66874 1.57021 8.65258Z"
                        fill="black"
                      />
                    </svg>
                  {props.like}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-full  bg-cover bg-center rounded-2xl lg:hidden h-44"
            style={{ backgroundImage:  `url(${props.cover})` }}
          ></div>
          <div
            className="w-64  bg-cover bg-center rounded-2xl"
            style={{ backgroundImage:  `url(${props.cover})` }}
          ></div>
        </div>
      </Link>
    </>
  );
};

export default BlogCard;
