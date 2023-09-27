import React from "react";

import Image from "next/image";

interface PopularSeminarProps {
  content: string;
  people: string;
  organizer: string;
  date: string;
  city: string;
  classes: string;
}

const PopularSeminar: React.FC<PopularSeminarProps> = (props) => {
  return (
    <>
      <div
        className={`${props.classes} border-[1px] pl-5 border-white-shade-4 rounded-3xl flex justify-between  gap-x-4 lg:gap-x-8`}
      >
        <div className="flex flex-col gap-y-4 py-7">
          <h1 className="text-black font-semibold font-opensans text-lg">
            {props.content}
          </h1>
          <h1 className="flex items-center gap-x-3 font-medium text-white-shade-14 pl-1 font-opensans">
            <svg
              width="17"
              height="18"
              viewBox="0 0 17 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.086 0.691296C14.2565 0.407147 14.625 0.315008 14.9092 0.485497L14.6005 0.999993C14.9092 0.485497 14.9089 0.485334 14.9092 0.485497L14.9103 0.486165L14.9116 0.486925L14.9145 0.488728L14.9222 0.493463C14.9281 0.497123 14.9355 0.501794 14.9443 0.507489C14.9619 0.518874 14.9852 0.534373 15.0133 0.554079C15.0696 0.593455 15.1456 0.649856 15.2346 0.72406C15.4123 0.872131 15.6447 1.09333 15.8761 1.39417C16.3424 2.00036 16.8005 2.92587 16.8005 4.19999C16.8005 5.47412 16.3424 6.39963 15.8761 7.00582C15.6447 7.30666 15.4123 7.52786 15.2346 7.67593C15.1456 7.75013 15.0696 7.80653 15.0133 7.84591C14.9852 7.86561 14.9619 7.88111 14.9443 7.8925C14.9355 7.89819 14.9281 7.90286 14.9222 7.90652L14.9145 7.91126L14.9116 7.91306L14.9103 7.91382C14.91 7.91398 14.9092 7.91449 14.6005 7.39999L14.9092 7.91449C14.625 8.08498 14.2565 7.99284 14.086 7.70869C13.9162 7.42574 14.0069 7.05909 14.2882 6.88766L14.2927 6.88483C14.2985 6.88106 14.3096 6.87375 14.3252 6.86283C14.3564 6.84095 14.4054 6.80486 14.4664 6.75406C14.5887 6.65213 14.7563 6.49333 14.9249 6.27417C15.2586 5.84036 15.6005 5.16587 15.6005 4.19999C15.6005 3.23412 15.2586 2.55963 14.9249 2.12582C14.7563 1.90666 14.5887 1.74786 14.4664 1.64593C14.4054 1.59513 14.3564 1.55903 14.3252 1.53716C14.3096 1.52624 14.2985 1.51892 14.2927 1.51515L14.2882 1.51233C14.0069 1.3409 13.9162 0.974249 14.086 0.691296Z"
                fill="#666666"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.4005 0.399993C5.30182 0.399993 3.6005 2.10131 3.6005 4.19999C3.6005 6.29868 5.30182 7.99999 7.4005 7.99999C9.49918 7.99999 11.2005 6.29868 11.2005 4.19999C11.2005 2.10131 9.49918 0.399993 7.4005 0.399993ZM4.8005 4.19999C4.8005 2.76405 5.96456 1.59999 7.4005 1.59999C8.83644 1.59999 10.0005 2.76405 10.0005 4.19999C10.0005 5.63593 8.83644 6.79999 7.4005 6.79999C5.96456 6.79999 4.8005 5.63593 4.8005 4.19999Z"
                fill="#666666"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.4005 9.19999C5.54966 9.19999 3.84444 9.6207 2.58086 10.3315C1.33608 11.0316 0.400498 12.0928 0.400498 13.4L0.400445 13.4816C0.399541 14.411 0.398407 15.5776 1.42163 16.4108C1.9252 16.8209 2.62968 17.1125 3.58147 17.3052C4.53591 17.4984 5.77988 17.6 7.4005 17.6C9.02112 17.6 10.2651 17.4984 11.2195 17.3052C12.1713 17.1125 12.8758 16.8209 13.3794 16.4108C14.4026 15.5776 14.4015 14.411 14.4005 13.4816L14.4005 13.4C14.4005 12.0928 13.4649 11.0316 12.2201 10.3315C10.9566 9.6207 9.25134 9.19999 7.4005 9.19999ZM1.6005 13.4C1.6005 12.7189 2.0976 11.9801 3.16917 11.3774C4.22194 10.7852 5.71672 10.4 7.4005 10.4C9.08428 10.4 10.5791 10.7852 11.6318 11.3774C12.7034 11.9801 13.2005 12.7189 13.2005 13.4C13.2005 14.4462 13.1682 15.0352 12.6216 15.4803C12.3252 15.7217 11.8297 15.9573 10.9815 16.129C10.1359 16.3002 8.97988 16.4 7.4005 16.4C5.82112 16.4 4.66509 16.3002 3.81953 16.129C2.97132 15.9573 2.47579 15.7217 2.17937 15.4803C1.63275 15.0352 1.6005 14.4462 1.6005 13.4Z"
                fill="#666666"
              />
              <path
                d="M13.3092 2.0855C13.025 1.91501 12.6565 2.00715 12.486 2.2913L12.6846 3.11009L12.6908 3.11434C12.7002 3.12091 12.7179 3.13388 12.7414 3.15343C12.7887 3.19286 12.8563 3.25666 12.9249 3.34582C13.0586 3.51963 13.2005 3.79412 13.2005 4.19999C13.2005 4.60587 13.0586 4.88036 12.9249 5.05417C12.8563 5.14333 12.7887 5.20713 12.7414 5.24656C12.7179 5.26611 12.7002 5.27908 12.6908 5.28564L12.6846 5.2899C12.4061 5.46226 12.317 5.82696 12.486 6.10869C12.6565 6.39284 13.025 6.48498 13.3092 6.31449L13.0005 5.79999C13.3092 6.31449 13.3089 6.31465 13.3092 6.31449L13.3103 6.31384L13.3114 6.31315L13.3139 6.31161L13.3199 6.30793L13.3353 6.29816C13.347 6.29057 13.3617 6.28077 13.3789 6.26872C13.4133 6.24466 13.4581 6.21138 13.5096 6.16843C13.6123 6.08286 13.7447 5.95666 13.8761 5.78582C14.1424 5.43963 14.4005 4.91412 14.4005 4.19999C14.4005 3.48587 14.1424 2.96036 13.8761 2.61417C13.7447 2.44333 13.6123 2.31713 13.5096 2.23156C13.4581 2.18861 13.4133 2.15533 13.3789 2.13127C13.3617 2.11922 13.347 2.10942 13.3353 2.10182L13.3199 2.09205L13.3139 2.08838L13.3114 2.08684L13.3103 2.08614C13.31 2.08598 13.3092 2.0855 13.0005 2.59999L13.3092 2.0855Z"
                fill="#666666"
              />
            </svg>

            {props.organizer}
          </h1>
          <div className="flex items-center gap-x-5 pl-1">
            <h1 className="text-white-shade-9 flex items-center gap-x-3 font-opensans">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.60039 0.399994C4.50171 0.399994 2.80039 2.10131 2.80039 4.19999C2.80039 6.29868 4.50171 7.99999 6.60039 7.99999C8.69907 7.99999 10.4004 6.29868 10.4004 4.19999C10.4004 2.10131 8.69907 0.399994 6.60039 0.399994ZM4.00039 4.19999C4.00039 2.76405 5.16445 1.59999 6.60039 1.59999C8.03633 1.59999 9.20039 2.76405 9.20039 4.19999C9.20039 5.63593 8.03633 6.79999 6.60039 6.79999C5.16445 6.79999 4.00039 5.63593 4.00039 4.19999Z"
                  fill="#A6A6A6"
                />
                <path
                  d="M11.4004 1.19999C11.069 1.19999 10.8004 1.46862 10.8004 1.79999C10.8004 2.13136 11.069 2.39999 11.4004 2.39999C12.3945 2.39999 13.2004 3.20588 13.2004 4.19999C13.2004 5.19411 12.3945 5.99999 11.4004 5.99999C11.069 5.99999 10.8004 6.26862 10.8004 6.59999C10.8004 6.93136 11.069 7.19999 11.4004 7.19999C13.0572 7.19999 14.4004 5.85685 14.4004 4.19999C14.4004 2.54314 13.0572 1.19999 11.4004 1.19999Z"
                  fill="#A6A6A6"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.34291 10.2163C3.4624 9.57659 4.96892 9.19999 6.60039 9.19999C8.23186 9.19999 9.73838 9.57659 10.8579 10.2163C11.9604 10.8463 12.8004 11.8081 12.8004 13C12.8004 14.1919 11.9604 15.1537 10.8579 15.7837C9.73838 16.4234 8.23186 16.8 6.60039 16.8C4.96892 16.8 3.4624 16.4234 2.34291 15.7837C1.24039 15.1537 0.400391 14.1919 0.400391 13C0.400391 11.8081 1.24039 10.8463 2.34291 10.2163ZM2.93828 11.2582C2.014 11.7864 1.60039 12.4246 1.60039 13C1.60039 13.5754 2.014 14.2136 2.93828 14.7418C3.84558 15.2603 5.13906 15.6 6.60039 15.6C8.06172 15.6 9.3552 15.2603 10.2625 14.7418C11.1868 14.2136 11.6004 13.5754 11.6004 13C11.6004 12.4246 11.1868 11.7864 10.2625 11.2582C9.3552 10.7397 8.06172 10.4 6.60039 10.4C5.13906 10.4 3.84558 10.7397 2.93828 11.2582Z"
                  fill="#A6A6A6"
                />
                <path
                  d="M13.9289 10.0139C13.6052 9.94294 13.2853 10.1478 13.2143 10.4715C13.1433 10.7951 13.3482 11.1151 13.6719 11.1861C14.3058 11.3251 14.8123 11.5638 15.1467 11.8374C15.4815 12.1114 15.6004 12.379 15.6004 12.6C15.6004 12.8006 15.5039 13.036 15.2379 13.2831C14.97 13.532 14.5584 13.7619 14.0274 13.9218C13.7101 14.0174 13.5303 14.352 13.6259 14.6693C13.7214 14.9866 14.0561 15.1664 14.3734 15.0709C15.0314 14.8727 15.6198 14.5662 16.0546 14.1623C16.4914 13.7566 16.8004 13.2229 16.8004 12.6C16.8004 11.9082 16.421 11.3296 15.9066 10.9087C15.3918 10.4875 14.6984 10.1827 13.9289 10.0139Z"
                  fill="#A6A6A6"
                />
              </svg>

              {props.people}
            </h1>
            <h1 className="text-white-shade-9 flex items-center gap-x-3 font-opensans">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.0004 10.6C13.4422 10.6 13.8004 10.2418 13.8004 9.79999C13.8004 9.35816 13.4422 8.99999 13.0004 8.99999C12.5586 8.99999 12.2004 9.35816 12.2004 9.79999C12.2004 10.2418 12.5586 10.6 13.0004 10.6Z"
                  fill="#A6A6A6"
                />
                <path
                  d="M13.0004 13.8C13.4422 13.8 13.8004 13.4418 13.8004 13C13.8004 12.5582 13.4422 12.2 13.0004 12.2C12.5586 12.2 12.2004 12.5582 12.2004 13C12.2004 13.4418 12.5586 13.8 13.0004 13.8Z"
                  fill="#A6A6A6"
                />
                <path
                  d="M9.80039 9.79999C9.80039 10.2418 9.44222 10.6 9.00039 10.6C8.55856 10.6 8.20039 10.2418 8.20039 9.79999C8.20039 9.35816 8.55856 8.99999 9.00039 8.99999C9.44222 8.99999 9.80039 9.35816 9.80039 9.79999Z"
                  fill="#A6A6A6"
                />
                <path
                  d="M9.80039 13C9.80039 13.4418 9.44222 13.8 9.00039 13.8C8.55856 13.8 8.20039 13.4418 8.20039 13C8.20039 12.5582 8.55856 12.2 9.00039 12.2C9.44222 12.2 9.80039 12.5582 9.80039 13Z"
                  fill="#A6A6A6"
                />
                <path
                  d="M5.00039 10.6C5.44222 10.6 5.80039 10.2418 5.80039 9.79999C5.80039 9.35816 5.44222 8.99999 5.00039 8.99999C4.55856 8.99999 4.20039 9.35816 4.20039 9.79999C4.20039 10.2418 4.55856 10.6 5.00039 10.6Z"
                  fill="#A6A6A6"
                />
                <path
                  d="M5.00039 13.8C5.44222 13.8 5.80039 13.4418 5.80039 13C5.80039 12.5582 5.44222 12.2 5.00039 12.2C4.55856 12.2 4.20039 12.5582 4.20039 13C4.20039 13.4418 4.55856 13.8 5.00039 13.8Z"
                  fill="#A6A6A6"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.00039 0.799988C5.33176 0.799988 5.60039 1.06862 5.60039 1.39999V2.01016C6.12999 1.99998 6.71345 1.99998 7.35516 1.99999H10.6455C11.2872 1.99998 11.8708 1.99998 12.4004 2.01016V1.39999C12.4004 1.06862 12.669 0.799988 13.0004 0.799988C13.3318 0.799988 13.6004 1.06862 13.6004 1.39999V2.06166C13.8083 2.07751 14.0053 2.09744 14.1916 2.1225C15.1295 2.2486 15.8887 2.51429 16.4874 3.11298C17.0861 3.71167 17.3518 4.47083 17.4779 5.40877C17.6004 6.32013 17.6004 7.48463 17.6004 8.95482V10.6451C17.6004 12.1153 17.6004 13.2798 17.4779 14.1912C17.3518 15.1291 17.0861 15.8883 16.4874 16.487C15.8887 17.0857 15.1295 17.3514 14.1916 17.4775C13.2802 17.6 12.1157 17.6 10.6456 17.6H7.35526C5.88507 17.6 4.72054 17.6 3.80917 17.4775C2.87124 17.3514 2.11208 17.0857 1.51339 16.487C0.914695 15.8883 0.649001 15.1291 0.522899 14.1912C0.400368 13.2798 0.400378 12.1153 0.400391 10.6451V8.95485C0.400378 7.48465 0.400368 6.32014 0.522899 5.40877C0.649001 4.47083 0.914695 3.71167 1.51339 3.11298C2.11208 2.51429 2.87124 2.2486 3.80917 2.1225C3.99551 2.09744 4.19244 2.07751 4.40039 2.06166V1.39999C4.40039 1.06862 4.66902 0.799988 5.00039 0.799988ZM3.96907 3.31179C3.1642 3.42001 2.70048 3.62294 2.36191 3.96151C2.02335 4.30008 1.82041 4.7638 1.7122 5.56867C1.69387 5.70498 1.67855 5.84848 1.66574 5.99999H16.335C16.3222 5.84848 16.3069 5.70498 16.2886 5.56867C16.1804 4.7638 15.9774 4.30008 15.6389 3.96151C15.3003 3.62294 14.8366 3.42001 14.0317 3.31179C13.2096 3.20126 12.1258 3.19999 10.6004 3.19999H7.40039C5.87493 3.19999 4.7912 3.20126 3.96907 3.31179ZM1.60039 8.99999C1.60039 8.31678 1.60065 7.72217 1.61086 7.19999H16.3899C16.4001 7.72217 16.4004 8.31678 16.4004 8.99999V10.6C16.4004 12.1254 16.3991 13.2092 16.2886 14.0313C16.1804 14.8362 15.9774 15.2999 15.6389 15.6385C15.3003 15.977 14.8366 16.18 14.0317 16.2882C13.2096 16.3987 12.1258 16.4 10.6004 16.4H7.40039C5.87493 16.4 4.7912 16.3987 3.96907 16.2882C3.1642 16.18 2.70048 15.977 2.36191 15.6385C2.02335 15.2999 1.82041 14.8362 1.7122 14.0313C1.60167 13.2092 1.60039 12.1254 1.60039 10.6V8.99999Z"
                  fill="#A6A6A6"
                />
              </svg>
              {props.date}
            </h1>
          </div>
          <h1 className="text-white-shade-9 flex items-center gap-x-3 pl-1 font-opensans">
            <svg
              width="14"
              height="18"
              viewBox="0 0 14 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 7.5146C0 3.59538 3.12401 0.399963 7 0.399963C10.876 0.399963 14 3.59538 14 7.5146C14 9.40668 13.4608 11.4383 12.5076 13.1935C11.5555 14.9465 10.1645 16.4697 8.42441 17.2831C7.52045 17.7056 6.47955 17.7056 5.57559 17.2831C3.8355 16.4697 2.44449 14.9465 1.49244 13.1935C0.539223 11.4383 0 9.40668 0 7.5146ZM7 1.59996C3.80675 1.59996 1.2 4.23795 1.2 7.5146C1.2 9.19226 1.68211 11.0283 2.54696 12.6207C3.41299 14.2154 4.63682 15.5197 6.08372 16.196C6.66564 16.468 7.33436 16.468 7.91628 16.196C9.36318 15.5197 10.587 14.2154 11.453 12.6207C12.3179 11.0283 12.8 9.19226 12.8 7.5146C12.8 4.23795 10.1933 1.59996 7 1.59996ZM7 5.59996C6.00589 5.59996 5.2 6.40585 5.2 7.39996C5.2 8.39408 6.00589 9.19996 7 9.19996C7.99411 9.19996 8.8 8.39408 8.8 7.39996C8.8 6.40585 7.99411 5.59996 7 5.59996ZM4 7.39996C4 5.74311 5.34315 4.39996 7 4.39996C8.65685 4.39996 10 5.74311 10 7.39996C10 9.05682 8.65685 10.4 7 10.4C5.34315 10.4 4 9.05682 4 7.39996Z"
                fill="#A6A6A6"
              />
            </svg>
            {props.city}
          </h1>
          <button
            type="button"
            className="bg-[#0112231A] text-black rounded-2xl py-3 font-semibold"
          >
            Book now
          </button>
        </div>
        <Image
          className="rounded-tr-3xl rounded-br-3xl"
          src={"/images/events/seminar.webp"}
          alt={""}
          width={100}
          height={100}
        />
      </div>
    </>
  );
};

export default PopularSeminar;
