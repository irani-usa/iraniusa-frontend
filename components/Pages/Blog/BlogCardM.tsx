import Link from "next/link";
import React from "react";

interface BlogCardMProps {
  classes: string;
  readingTime: string;
  title: string;
  summery: string;
  author: string;
  publish: string;
  avatar: string;
  cover: string;
  info: Boolean;
  isview: Boolean;
  view: string;
  like: string;
  cm: string;
}

const BlogCardM: React.FC<BlogCardMProps> = (props) => {
  return (
    <>
      <Link className={`${props.classes} w-full lg:w-[50%] lg:pb-11 lg:rounded-full`} href={"#"}>
        <div className="max-w-full w-screen inline-block rounded-2xl border-[1.5px] border-white-shade-3 hover:shadow-card transition-all duration-300 lg:w-full">
          <div
            className="w-full h-60 bg-cover bg-center rounded-t-2xl"
            style={{ backgroundImage: `url(${props.cover})` }}
          ></div>
          <div className="flex flex-col gap-y-4">
            <h1 className="px-6 pt-6  text-black text-xl font-outfit font-semibold lg:max-w-sm">
              {props.title}
            </h1>
            {props.info && (
              <p className="px-6  font-opensans text-white-shade-10 font-medium lg:max-w-sm">
                {props.summery}...
              </p>
            )}
            {props.isview && (
              <div className="flex items-center gap-x-7 font-medium px-6 py-3">
                <span className="text-green flex items-center gap-x-2">
                  <div className="w-4 h-4 rounded-full flex items-center justify-center border border-green">
                    <div className="w-1 h-1 rounded-full border border-green"></div>
                  </div>
                  {props.view} views
                </span>
                <div className="flex items-center gap-x-7">
                  <span className="text-black flex items-center gap-x-4 font-opensans font-semibold">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.18986 4.75393C9.29115 2.51175 11.5978 0.966667 14.2668 0.966667C18.0039 0.966667 21.0335 3.99621 21.0335 7.73333C21.0335 8.73395 20.8158 9.68564 20.4246 10.542C20.3225 10.7656 20.3027 10.9767 20.3481 11.1463L20.4669 11.5906C20.8475 13.0129 19.5463 14.314 18.1241 13.9335L17.6798 13.8146C17.5535 13.7808 17.4043 13.7832 17.2441 13.8287C16.768 17.8856 13.3183 21.0333 9.13346 21.0333C7.87349 21.0333 6.67832 20.7475 5.61097 20.2365C5.39967 20.1354 5.19163 20.1148 5.02049 20.1606L3.87619 20.4668C2.45394 20.8473 1.15279 19.5462 1.53333 18.1239L1.8395 16.9796C1.88529 16.8085 1.86477 16.6005 1.76361 16.3892C1.25262 15.3218 0.966797 14.1266 0.966797 12.8667C0.966797 8.67549 4.12401 5.22171 8.18986 4.75393ZM9.81945 4.72841C13.8559 5.06411 17.0588 8.33544 17.2871 12.4015C17.5321 12.3781 17.7868 12.394 18.0416 12.4622L18.4859 12.581C18.8675 12.6831 19.2166 12.334 19.1145 11.9525L18.9956 11.5082C18.849 10.96 18.9445 10.4128 19.1512 9.96037C19.4607 9.28287 19.6335 8.52923 19.6335 7.73333C19.6335 4.76941 17.2307 2.36667 14.2668 2.36667C12.417 2.36667 10.7847 3.30265 9.81945 4.72841ZM9.13346 6.1C5.39634 6.1 2.3668 9.12954 2.3668 12.8667C2.3668 13.913 2.60379 14.902 3.02636 15.7846C3.24607 16.2436 3.3382 16.7948 3.19193 17.3415L2.88575 18.4858C2.78366 18.8674 3.13275 19.2165 3.51432 19.1144L4.65863 18.8082C5.20531 18.6619 5.75658 18.7541 6.2155 18.9738C7.09816 19.3963 8.08716 19.6333 9.13346 19.6333C12.8706 19.6333 15.9001 16.6038 15.9001 12.8667C15.9001 9.12954 12.8706 6.1 9.13346 6.1Z"
                        fill="black"
                      />
                      <path
                        d="M6.80013 12.8667C6.80013 13.3821 6.38226 13.8 5.8668 13.8C5.35133 13.8 4.93346 13.3821 4.93346 12.8667C4.93346 12.3512 5.35133 11.9333 5.8668 11.9333C6.38226 11.9333 6.80013 12.3512 6.80013 12.8667Z"
                        fill="black"
                      />
                      <path
                        d="M10.0668 12.8667C10.0668 13.3821 9.64893 13.8 9.13346 13.8C8.618 13.8 8.20013 13.3821 8.20013 12.8667C8.20013 12.3512 8.618 11.9333 9.13346 11.9333C9.64893 11.9333 10.0668 12.3512 10.0668 12.8667Z"
                        fill="black"
                      />
                      <path
                        d="M13.3335 12.8667C13.3335 13.3821 12.9156 13.8 12.4001 13.8C11.8847 13.8 11.4668 13.3821 11.4668 12.8667C11.4668 12.3512 11.8847 11.9333 12.4001 11.9333C12.9156 11.9333 13.3335 12.3512 13.3335 12.8667Z"
                        fill="black"
                      />
                    </svg>
                    {props.cm}
                  </span>
                  <span className="text-black flex items-center gap-x-4 font-opensans font-semibold">
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
            )}
            <span className="h-[1.5px] bg-white-shade-4 w-full" ></span>
            <div className="px-6 pb-6 flex items-center justify-between">
              <div className="flex items-center gap-x-3">
                <img className="w-10" src="/images/profile/professional/blog-avatar.svg" alt="" />
                <h1 className="text-black font-semibold font-opensans flex flex-col items-start">
                  {props.author}
                  <span className="font-opensans text-sm text-white-shade-9 font-normal">
                    {props.publish}
                  </span>
                </h1>
              </div>
              <span className="w-[105px] h-8 flex items-center justify-center bg-white-shade-3 text-black font-medium font-opensans text-sm rounded-lg">
                {props.readingTime}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogCardM;
