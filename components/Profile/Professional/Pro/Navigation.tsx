import React from "react";

const Navigation = () => {
  return (
    <ul className="flex-col items-start gap-y-5 font-opensans w-[30%] hidden lg:flex mt-9 pr-6 ">
      <li className="text-black font-bold flex items-center gap-x-3 text-lg border-b border-white-shade-4 pb-5 w-full">
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.61685 14.1711C8.30627 13.9409 7.86787 14.006 7.63765 14.3166C7.40744 14.6272 7.47259 15.0656 7.78317 15.2958C8.69076 15.9686 9.8007 16.3668 11 16.3668C12.1993 16.3668 13.3093 15.9686 14.2168 15.2958C14.5274 15.0656 14.5926 14.6272 14.3624 14.3166C14.1322 14.006 13.6938 13.9409 13.3832 14.1711C12.7034 14.675 11.8829 14.9668 11 14.9668C10.1172 14.9668 9.29663 14.675 8.61685 14.1711Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11 0.966797C10.3391 0.966797 9.73864 1.1561 9.08719 1.47289C8.45747 1.77912 7.73 2.23061 6.82134 2.79457L4.89254 3.99164C4.03275 4.52523 3.34429 4.95251 2.81365 5.35888C2.26415 5.77971 1.84209 6.2083 1.53723 6.76525C1.23301 7.32105 1.096 7.91242 1.03032 8.61145C0.966661 9.2889 0.966668 10.1173 0.966675 11.1562V12.6613C0.966662 14.4383 0.966652 15.8409 1.1092 16.9376C1.25542 18.0626 1.56267 18.9709 2.25688 19.6889C2.95429 20.4103 3.84177 20.7326 4.94044 20.8854C6.00526 21.0335 7.3652 21.0335 9.07907 21.0335H12.9209C14.6348 21.0335 15.9948 21.0335 17.0596 20.8854C18.1582 20.7326 19.0457 20.4103 19.7431 19.6889C20.4374 18.9709 20.7446 18.0626 20.8908 16.9376C21.0334 15.8409 21.0334 14.4383 21.0333 12.6613V11.1562C21.0333 10.1173 21.0334 9.28889 20.9697 8.61145C20.904 7.91242 20.767 7.32105 20.4628 6.76525C20.1579 6.2083 19.7359 5.77971 19.1864 5.35888C18.6557 4.95251 17.9673 4.52524 17.1075 3.99165L15.1787 2.79456C14.27 2.23061 13.5425 1.77912 12.9128 1.47289C12.2614 1.1561 11.6609 0.966797 11 0.966797ZM7.52757 4.00397C8.47561 3.41559 9.14221 3.0029 9.69945 2.73191C10.2424 2.4679 10.6268 2.3668 11 2.3668C11.3732 2.3668 11.7577 2.4679 12.3006 2.73191C12.8578 3.00289 13.5244 3.41559 14.4725 4.00397L16.3391 5.16248C17.2359 5.71904 17.8655 6.11072 18.3352 6.47038C18.7921 6.82033 19.055 7.10912 19.2347 7.43746C19.4151 7.76696 19.5204 8.1522 19.5758 8.74243C19.6326 9.34681 19.6333 10.1096 19.6333 11.1905V12.6101C19.6333 14.4497 19.632 15.7612 19.5025 16.7572C19.3754 17.7354 19.1359 18.3029 18.7366 18.7159C18.3405 19.1255 17.8013 19.3688 16.8667 19.4988C15.9095 19.6319 14.647 19.6335 12.8667 19.6335H9.13334C7.35298 19.6335 6.09052 19.6319 5.13328 19.4988C4.19868 19.3688 3.65947 19.1255 3.26341 18.7159C2.86415 18.3029 2.62466 17.7354 2.49752 16.7572C2.36807 15.7612 2.36668 14.4497 2.36668 12.6101V11.1905C2.36668 10.1096 2.36739 9.34681 2.42418 8.74243C2.47964 8.1522 2.58493 7.76696 2.76529 7.43746C2.94502 7.10912 3.20791 6.82033 3.66487 6.47038C4.1345 6.11072 4.76412 5.71905 5.6609 5.16248L7.52757 4.00397Z"
            fill="black"
          />
        </svg>
        Home
      </li>
      <li className="text-white-shade-9 flex items-center gap-x-3 text-lg border-b border-white-shade-4 pb-5 w-full">
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
            d="M7.50001 8.20013C7.50001 6.26713 9.06701 4.70013 11 4.70013C12.933 4.70013 14.5 6.26713 14.5 8.20013C14.5 10.1331 12.933 11.7001 11 11.7001C9.06701 11.7001 7.50001 10.1331 7.50001 8.20013ZM11 6.10013C9.84021 6.10013 8.90001 7.04033 8.90001 8.20013C8.90001 9.35993 9.84021 10.3001 11 10.3001C12.1598 10.3001 13.1 9.35993 13.1 8.20013C13.1 7.04033 12.1598 6.10013 11 6.10013Z"
            fill="#A6A6A6"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.966675 11.0001C0.966675 5.45887 5.45875 0.966797 11 0.966797C16.5413 0.966797 21.0333 5.45887 21.0333 11.0001C21.0333 16.5414 16.5413 21.0335 11 21.0335C5.45875 21.0335 0.966675 16.5414 0.966675 11.0001ZM11 2.3668C6.23195 2.3668 2.36667 6.23207 2.36667 11.0001C2.36667 13.376 3.32639 15.5277 4.8793 17.0888C5.04767 16.1805 5.37849 15.3242 6.04249 14.6356C7.0357 13.6055 8.62389 13.1001 11 13.1001C13.376 13.1001 14.9642 13.6055 15.9574 14.6356C16.6215 15.3242 16.9523 16.1806 17.1206 17.0888C18.6736 15.5278 19.6333 13.376 19.6333 11.0001C19.6333 6.23207 15.7681 2.3668 11 2.3668ZM15.8474 18.1452C15.7524 17.014 15.5067 16.1851 14.9496 15.6073C14.3435 14.9787 13.2203 14.5001 11 14.5001C8.7796 14.5001 7.65645 14.9787 7.05028 15.6073C6.49319 16.1851 6.24758 17.014 6.15248 18.1451C7.53439 19.0845 9.20309 19.6335 11 19.6335C12.7969 19.6335 14.4656 19.0845 15.8474 18.1452Z"
            fill="#A6A6A6"
          />
        </svg>
        About me
      </li>
      <li className="text-white-shade-9 flex items-center gap-x-3 text-lg border-b border-white-shade-4 pb-5 w-full">
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
            d="M9.08069 4.70013H12.9193C14.6346 4.70011 15.9932 4.7001 17.0564 4.84306C18.1507 4.99018 19.0364 5.30015 19.7348 5.99862C20.4333 6.6971 20.7433 7.58278 20.8904 8.67704C21.0334 9.74031 21.0334 11.0989 21.0333 12.8141V12.9194C21.0334 14.6347 21.0334 15.9933 20.8904 17.0566C20.7433 18.1508 20.4333 19.0365 19.7348 19.735C19.0364 20.4334 18.1507 20.7434 17.0564 20.8905C15.9932 21.0335 14.6346 21.0335 12.9193 21.0335H9.08069C7.36545 21.0335 6.00686 21.0335 4.94359 20.8905C3.84933 20.7434 2.96364 20.4334 2.26517 19.735C1.5667 19.0365 1.25672 18.1508 1.1096 17.0566C0.966649 15.9933 0.96666 14.6347 0.966675 12.9195V12.8141C0.96666 11.0989 0.966649 9.74031 1.1096 8.67704C1.25672 7.58278 1.5667 6.6971 2.26517 5.99862C2.96364 5.30015 3.84933 4.99018 4.94359 4.84306C6.00685 4.7001 7.36544 4.70011 9.08069 4.70013ZM5.13013 6.23057C4.19112 6.35682 3.65011 6.59358 3.25512 6.98857C3.07556 7.16813 2.9287 7.37786 2.81006 7.64144C4.51531 8.74851 5.63578 9.4627 6.57925 9.93405C6.64127 9.61093 6.92546 9.3668 7.26668 9.3668C7.65328 9.3668 7.96668 9.6802 7.96668 10.0668V10.4942C9.94482 11.0911 12.0552 11.0911 14.0333 10.4942V10.0668C14.0333 9.6802 14.3467 9.3668 14.7333 9.3668C15.0746 9.3668 15.3588 9.61096 15.4208 9.93412C16.3643 9.46278 17.4847 8.7486 19.19 7.64152C19.0713 7.3779 18.9245 7.16815 18.7449 6.98857C18.3499 6.59358 17.8089 6.35682 16.8699 6.23057C15.9107 6.10162 14.6464 6.10013 12.8667 6.10013H9.13334C7.35364 6.10013 6.08929 6.10162 5.13013 6.23057ZM19.5304 9.0897C17.7691 10.231 16.5613 10.9862 15.4333 11.4711V11.9335C15.4333 12.3201 15.1199 12.6335 14.7333 12.6335C14.3519 12.6335 14.0417 12.3283 14.0335 11.9488C12.0452 12.4729 9.95477 12.4729 7.96651 11.9487C7.95839 12.3283 7.64817 12.6335 7.26668 12.6335C6.88008 12.6335 6.56668 12.3201 6.56668 11.9335V11.471C5.43874 10.9861 4.23088 10.2309 2.46965 9.08961C2.36794 10.0196 2.36668 11.2235 2.36668 12.8668C2.36668 14.6465 2.36816 15.9109 2.49712 16.87C2.62336 17.809 2.86012 18.35 3.25512 18.745C3.65011 19.14 4.19112 19.3768 5.13013 19.503C6.08929 19.632 7.35364 19.6335 9.13334 19.6335H12.8667C14.6464 19.6335 15.9107 19.632 16.8699 19.503C17.8089 19.3768 18.3499 19.14 18.7449 18.745C19.1399 18.35 19.3767 17.809 19.5029 16.87C19.6319 15.9109 19.6333 14.6465 19.6333 12.8668C19.6333 11.2236 19.6321 10.0197 19.5304 9.0897Z"
            fill="#A6A6A6"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11 2.3668C10.0867 2.3668 9.30789 2.95016 9.01927 3.76674C8.89044 4.13124 8.49052 4.32228 8.12601 4.19345C7.76151 4.06462 7.57047 3.66469 7.6993 3.30019C8.17944 1.94174 9.47495 0.966797 11 0.966797C12.525 0.966797 13.8205 1.94174 14.3006 3.30019C14.4295 3.66469 14.2384 4.06462 13.8739 4.19345C13.5094 4.32228 13.1095 4.13124 12.9806 3.76674C12.692 2.95016 11.9132 2.3668 11 2.3668Z"
            fill="#A6A6A6"
          />
        </svg>
        Experiences
      </li>
      <li className="text-white-shade-9 flex items-center gap-x-3 text-lg border-b border-white-shade-4 pb-5 w-full">
        <svg
          width="22"
          height="20"
          viewBox="0 0 22 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.6334 1.43293C10.1479 0.722878 11.852 0.722879 13.3665 1.43293L19.6117 4.36078C20.5938 4.82123 21.0333 5.82113 21.0333 6.73375C21.0333 7.64636 20.5938 8.64626 19.6117 9.10671L18.2333 9.75289V14.3175C18.2333 15.487 17.647 16.6161 16.5795 17.2073C15.8779 17.5958 14.9559 18.0636 13.9856 18.4358C13.0267 18.8037 11.965 19.1004 11 19.1004C10.035 19.1004 8.97328 18.8037 8.01443 18.4358C7.04415 18.0636 6.12214 17.5958 5.42053 17.2073C4.35305 16.6161 3.76667 15.487 3.76667 14.3175V9.75285L2.38836 9.10667L2.36667 9.09637V11.8671C2.36667 12.2537 2.05327 12.5671 1.66667 12.5671C1.28008 12.5671 0.966675 12.2537 0.966675 11.8671V6.73372C0.966675 5.82111 1.40623 4.82119 2.38836 4.36074L8.6334 1.43293ZM5.16668 10.4092V14.3175C5.16668 15.0296 5.52017 15.6621 6.09878 15.9826C6.76765 16.353 7.62767 16.788 8.51589 17.1287C9.41553 17.4739 10.2887 17.7004 11 17.7004C11.7113 17.7004 12.5845 17.4739 13.4841 17.1287C14.3723 16.788 15.2324 16.353 15.9012 15.9826C16.4798 15.6621 16.8333 15.0296 16.8333 14.3175V10.4092L13.3666 12.0345C11.8521 12.7446 10.148 12.7446 8.63349 12.0345L5.16668 10.4092ZM2.98264 7.83906C2.60634 7.66264 2.36667 7.24182 2.36667 6.7337C2.36668 6.22559 2.60635 5.80477 2.98265 5.62835L9.22768 2.70053C10.3657 2.16701 11.6342 2.16701 12.7723 2.70053L19.0174 5.62839C19.3937 5.80481 19.6333 6.22563 19.6333 6.73374C19.6333 7.24186 19.3937 7.66268 19.0174 7.8391L12.7723 10.7669C11.6343 11.3004 10.3658 11.3004 9.22777 10.7669L2.98264 7.83906Z"
            fill="#A6A6A6"
          />
        </svg>
        Education
      </li>
      <li className="text-white-shade-9 flex items-center gap-x-3 text-lg border-b border-white-shade-4 pb-5 w-full">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.0181 3.9668H14.9818C15.8204 3.96677 16.5196 3.96675 17.0748 4.04138C17.6607 4.12016 18.1897 4.29345 18.6148 4.71856C19.0399 5.14366 19.2132 5.67268 19.292 6.25862C19.3666 6.81375 19.3666 7.51302 19.3666 8.3516L19.3666 9.71089C21.0824 11.208 22.1666 13.4108 22.1666 15.8668C22.1666 20.3771 18.5102 24.0335 13.9999 24.0335C9.48959 24.0335 5.83325 20.3771 5.83325 15.8668C5.83325 13.4108 6.91741 11.208 8.63325 9.71089L8.63325 8.3516C8.63322 7.51302 8.6332 6.81375 8.70784 6.25862C8.78661 5.67268 8.95991 5.14366 9.38501 4.71856C9.81012 4.29345 10.3391 4.12016 10.9251 4.04138C11.4802 3.96675 12.1795 3.96677 13.0181 3.9668ZM10.0333 8.72647C11.2077 8.07262 12.5603 7.70013 13.9999 7.70013C15.4395 7.70013 16.7921 8.07262 17.9666 8.72647V8.40013C17.9666 7.50039 17.9651 6.896 17.9045 6.44516C17.8466 6.01447 17.7465 5.83014 17.6249 5.70851C17.5032 5.58688 17.3189 5.4868 16.8882 5.4289C16.4374 5.36829 15.833 5.3668 14.9333 5.3668H13.0666C12.1668 5.3668 11.5625 5.36829 11.1116 5.4289C10.6809 5.4868 10.4966 5.58688 10.375 5.70851C10.2533 5.83014 10.1533 6.01447 10.0954 6.44516C10.0347 6.896 10.0333 7.50039 10.0333 8.40013V8.72647ZM13.9999 9.10013C10.2628 9.10013 7.23325 12.1297 7.23325 15.8668C7.23325 19.6039 10.2628 22.6335 13.9999 22.6335C17.737 22.6335 20.7666 19.6039 20.7666 15.8668C20.7666 12.1297 17.737 9.10013 13.9999 9.10013ZM13.9999 14.0323C13.9457 14.1263 13.8853 14.2344 13.8142 14.362L13.7225 14.5266C13.716 14.5382 13.7091 14.5509 13.7016 14.5645C13.6283 14.6985 13.5069 14.9205 13.3046 15.0741C13.0979 15.231 12.8494 15.2849 12.7041 15.3165C12.6895 15.3197 12.676 15.3226 12.6636 15.3254L12.4855 15.3657C12.322 15.4027 12.1888 15.4329 12.0749 15.4615C12.149 15.5527 12.2452 15.6659 12.3703 15.8122L12.4918 15.9543C12.5004 15.9644 12.5098 15.9751 12.5198 15.9866C12.6205 16.1027 12.7832 16.29 12.8584 16.5319C12.9327 16.7709 12.9071 17.0171 12.8909 17.1724C12.8893 17.1879 12.8878 17.2024 12.8865 17.216L12.8681 17.4055C12.8511 17.5813 12.8378 17.7215 12.829 17.8355C12.9263 17.7927 13.0369 17.7418 13.1683 17.6813L13.3352 17.6045C13.3467 17.5992 13.3592 17.5932 13.3729 17.5868C13.5068 17.5237 13.7398 17.4138 13.9999 17.4138C14.26 17.4138 14.4931 17.5237 14.627 17.5868C14.6406 17.5933 14.6532 17.5992 14.6647 17.6045L14.8315 17.6813C14.9629 17.7418 15.0736 17.7927 15.1708 17.8355C15.162 17.7215 15.1488 17.5813 15.1318 17.4055L15.1134 17.216C15.1121 17.2024 15.1106 17.1879 15.1089 17.1724C15.0928 17.0171 15.0671 16.7709 15.1415 16.5319C15.2167 16.29 15.3793 16.1027 15.4801 15.9866C15.49 15.9751 15.4994 15.9644 15.508 15.9543L15.6295 15.8122C15.7546 15.6659 15.8508 15.5527 15.9249 15.4615C15.811 15.4329 15.6779 15.4027 15.5144 15.3657L15.3362 15.3254C15.3239 15.3226 15.3103 15.3197 15.2958 15.3165C15.1504 15.2849 14.9019 15.231 14.6953 15.0741C14.4929 14.9205 14.3715 14.6985 14.2982 14.5645C14.2908 14.5509 14.2838 14.5382 14.2774 14.5266L14.1856 14.362C14.1145 14.2344 14.0542 14.1263 13.9999 14.0323ZM13.0792 12.8798C13.2399 12.67 13.5317 12.3668 13.9999 12.3668C14.4682 12.3668 14.76 12.67 14.9207 12.8798C15.074 13.0801 15.2285 13.3573 15.3868 13.6415C15.394 13.6544 15.4012 13.6674 15.4085 13.6803L15.5002 13.8449C15.5215 13.8831 15.5382 13.9131 15.5529 13.9388C15.5784 13.9448 15.6081 13.9515 15.6451 13.9599L15.8233 14.0002C15.8379 14.0035 15.8525 14.0068 15.8671 14.0101C16.1731 14.0793 16.4771 14.148 16.7105 14.24C16.9683 14.3415 17.3176 14.5393 17.4523 14.9723C17.5845 15.3976 17.4176 15.7579 17.2719 15.9895C17.1369 16.2038 16.9319 16.4435 16.722 16.6888C16.7125 16.6999 16.703 16.711 16.6935 16.7221L16.572 16.8642C16.5398 16.9018 16.5156 16.9302 16.4951 16.9548C16.4979 16.9887 16.5017 17.0282 16.5069 17.081L16.5252 17.2705C16.5266 17.285 16.528 17.2994 16.5294 17.3138C16.5613 17.6423 16.5922 17.9597 16.5808 18.2136C16.569 18.4799 16.5051 18.8829 16.1437 19.1572C15.7709 19.4402 15.3592 19.3785 15.0982 19.3037C14.8576 19.2348 14.5734 19.1038 14.2871 18.9719C14.2734 18.9656 14.2597 18.9593 14.246 18.953L14.0791 18.8762C14.0479 18.8618 14.0223 18.85 13.9999 18.8399C13.9776 18.85 13.9519 18.8618 13.9207 18.8762L13.7539 18.953C13.7402 18.9593 13.7264 18.9656 13.7127 18.9719C13.4265 19.1038 13.1422 19.2348 12.9017 19.3037C12.6406 19.3785 12.2289 19.4402 11.8561 19.1572C11.4948 18.8829 11.4309 18.4799 11.419 18.2136C11.4077 17.9597 11.4385 17.6423 11.4704 17.3138C11.4718 17.2994 11.4732 17.285 11.4746 17.2705L11.493 17.081C11.4981 17.0282 11.5019 16.9887 11.5047 16.9548C11.4843 16.9302 11.46 16.9018 11.4278 16.8642L11.3063 16.7221C11.2968 16.711 11.2873 16.6999 11.2779 16.6888C11.0679 16.4435 10.8629 16.2038 10.728 15.9895C10.5822 15.7579 10.4153 15.3976 10.5476 14.9723C10.6822 14.5393 11.0316 14.3415 11.2893 14.24C11.5227 14.148 11.8268 14.0793 12.1327 14.0101C12.1473 14.0068 12.1619 14.0035 12.1765 14.0002L12.3547 13.9599C12.3918 13.9515 12.4214 13.9448 12.4469 13.9388C12.4616 13.9131 12.4784 13.8831 12.4996 13.8449L12.5914 13.6803C12.5986 13.6674 12.6058 13.6544 12.613 13.6415C12.7714 13.3573 12.9258 13.0801 13.0792 12.8798Z"
            fill="#A6A6A6"
          />
        </svg>
        Skills
      </li>
      <li className="text-white-shade-9 flex items-center gap-x-3 text-lg border-b border-white-shade-4 pb-5 w-full">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.20189 3.9668C9.22965 3.96681 9.2578 3.96681 9.28633 3.96681L9.32085 3.96681C9.64886 3.96679 9.85992 3.96677 10.0663 3.98607C10.908 4.06478 11.7087 4.38242 12.3746 4.90015H18.1999C18.2182 4.90015 18.2362 4.90014 18.2539 4.90014C18.6353 4.90008 18.8951 4.90003 19.1234 4.93009C20.694 5.13686 21.9299 6.37274 22.1366 7.9433C22.1444 8.0025 22.1502 8.06381 22.1545 8.12882C22.4135 8.24687 22.6532 8.39951 22.8738 8.59785C22.9656 8.68043 23.0529 8.7678 23.1355 8.85962C23.6286 9.40781 23.8393 10.0751 23.938 10.8604C24.0333 11.6182 24.0333 12.5759 24.0332 13.764V15.9195C24.0332 17.6347 24.0333 18.9933 23.8903 20.0566C23.7432 21.1508 23.4332 22.0365 22.7347 22.735C22.0363 23.4335 21.1506 23.7434 20.0563 23.8906C18.9931 24.0335 17.6345 24.0335 15.9192 24.0335H12.0806C10.3653 24.0335 9.00675 24.0335 7.94348 23.8906C6.84922 23.7434 5.96353 23.4335 5.26506 22.735C4.56659 22.0365 4.25661 21.1508 4.10949 20.0566C3.96654 18.9933 3.96655 17.6347 3.96657 15.9195L3.96657 9.28658C3.96657 9.25804 3.96656 9.2299 3.96656 9.20213C3.96646 8.45928 3.96639 7.98653 4.04343 7.57819C4.38179 5.78482 5.78458 4.38204 7.57795 4.04368C7.98628 3.96663 8.45904 3.9667 9.20189 3.9668ZM20.6708 7.77263C20.4301 7.00284 19.7616 6.42619 18.9407 6.31811C18.8157 6.30166 18.6556 6.30015 18.1999 6.30015H13.8238C14.4238 6.89661 14.6961 7.14572 15.0049 7.31751C15.2084 7.43072 15.4242 7.52012 15.6481 7.58395C16.0339 7.69391 16.4568 7.70015 17.5731 7.70015L17.9694 7.70015C19.0542 7.70013 19.9469 7.70012 20.6708 7.77263ZM9.28633 5.36681C8.4308 5.36681 8.10003 5.36987 7.83751 5.4194C6.61047 5.65091 5.65067 6.61071 5.41916 7.83776C5.36963 8.10028 5.36657 8.43104 5.36657 9.28658V15.8668C5.36657 17.6465 5.36805 18.9109 5.49701 19.87C5.62326 20.809 5.86002 21.35 6.25501 21.745C6.65001 22.14 7.19101 22.3768 8.13003 22.503C9.08918 22.632 10.3535 22.6335 12.1332 22.6335H15.8666C17.6463 22.6335 18.9106 22.632 19.8698 22.503C20.8088 22.3768 21.3498 22.14 21.7448 21.745C22.1398 21.35 22.3765 20.809 22.5028 19.87C22.6317 18.9109 22.6332 17.6465 22.6332 15.8668V13.8115C22.6332 12.5647 22.6319 11.6953 22.5489 11.035C22.4681 10.3923 22.3197 10.0461 22.0946 9.79583C22.0451 9.74074 21.9926 9.68832 21.9376 9.63877C21.6873 9.41365 21.3411 9.26526 20.6983 9.18445C20.0381 9.10144 19.1687 9.10015 17.9219 9.10015H17.5731C17.5384 9.10015 17.5041 9.10015 17.4702 9.10016C16.4921 9.10036 15.8613 9.10049 15.2643 8.93032C14.9371 8.83703 14.6216 8.70637 14.3242 8.54091C13.7818 8.23911 13.3358 7.79299 12.6444 7.10124C12.6204 7.07727 12.5962 7.05301 12.5716 7.02845L12.058 6.51488C11.7936 6.25049 11.6925 6.15034 11.5894 6.06487C11.1196 5.67548 10.5434 5.4368 9.93593 5.37999C9.80259 5.36752 9.66024 5.36681 9.28633 5.36681ZM14.2332 12.1335C14.2332 11.7469 14.5466 11.4335 14.9332 11.4335H19.5999C19.9865 11.4335 20.2999 11.7469 20.2999 12.1335C20.2999 12.5201 19.9865 12.8335 19.5999 12.8335H14.9332C14.5466 12.8335 14.2332 12.5201 14.2332 12.1335Z"
            fill="#A6A6A6"
          />
        </svg>
        projects
      </li>
      <li className="text-white-shade-9 flex items-center gap-x-3 text-lg border-b border-white-shade-4 pb-5 w-full">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.7333 6.53516C19.7633 6.54646 20.8627 6.63648 21.5799 7.35364C22.4 8.17374 22.4 9.49367 22.4 12.1335V17.7335C22.4 20.3734 22.4 21.6933 21.5799 22.5134C20.7598 23.3335 19.4398 23.3335 16.8 23.3335H11.2C8.56011 23.3335 7.24018 23.3335 6.42008 22.5134C5.59998 21.6933 5.59998 20.3734 5.59998 17.7335V12.1335C5.59998 9.49367 5.59998 8.17374 6.42008 7.35364C7.13723 6.63648 8.23662 6.54646 10.2666 6.53516"
            stroke="#A6A6A6"
            stroke-width="1.5"
          />
          <path
            d="M9.33337 16.334H16.8"
            stroke="#A6A6A6"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M9.33337 19.5996H14.4667"
            stroke="#A6A6A6"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M10.2667 6.06602C10.2667 5.29282 10.8935 4.66602 11.6667 4.66602H16.3334C17.1066 4.66602 17.7334 5.29282 17.7334 6.06602V6.99935C17.7334 7.77255 17.1066 8.39935 16.3334 8.39935H11.6667C10.8935 8.39935 10.2667 7.77255 10.2667 6.99935V6.06602Z"
            stroke="#A6A6A6"
            stroke-width="1.5"
          />
        </svg>
        Contact me
      </li>
      <li className="text-white-shade-9 flex items-center gap-x-3 text-lg border-b border-white-shade-4 pb-5 w-full">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.1334 11.1408C18.7468 11.1408 18.4334 11.4542 18.4334 11.8408C18.4334 12.2274 18.7468 12.5408 19.1334 12.5408C19.52 12.5408 19.8334 12.2274 19.8334 11.8408C19.8334 11.4542 19.52 11.1408 19.1334 11.1408ZM17.0334 11.8408C17.0334 10.681 17.9736 9.74079 19.1334 9.74079C20.2931 9.74079 21.2334 10.681 21.2334 11.8408C21.2334 13.0006 20.2931 13.9408 19.1334 13.9408C17.9736 13.9408 17.0334 13.0006 17.0334 11.8408Z"
            fill="#A6A6A6"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.3683 4.66602H15.4684C16.8375 4.666 17.9359 4.66598 18.7986 4.78156C19.6919 4.90125 20.4367 5.15626 21.0275 5.74495C21.5459 6.26154 21.8067 6.89657 21.9442 7.6458C22.2306 7.80356 22.4939 7.9983 22.7349 8.23928C23.4333 8.93775 23.7433 9.82344 23.8904 10.9177C24.0334 11.981 24.0334 13.3396 24.0333 15.0548V15.1601C24.0334 16.8753 24.0334 18.2339 23.8904 19.2972C23.7433 20.3915 23.4333 21.2772 22.7349 21.9756C22.0364 22.6741 21.1507 22.9841 20.0564 23.1312C18.9932 23.2741 17.6346 23.2741 15.9193 23.2741H12.0807C10.3655 23.2741 9.00686 23.2741 7.9436 23.1312C6.84934 22.9841 5.96365 22.6741 5.26518 21.9756C4.56671 21.2772 4.25673 20.3915 4.10961 19.2972C3.96666 18.2339 3.96667 16.8754 3.96668 15.1601V15.0548C3.96667 13.3396 3.96666 11.981 4.10961 10.9177C4.25673 9.82344 4.56671 8.93775 5.26518 8.23928C5.4542 8.05026 5.65694 7.88968 5.87381 7.75309C6.00584 6.95703 6.26626 6.28602 6.80923 5.74495C7.39998 5.15626 8.14481 4.90125 9.03815 4.78156C9.90082 4.66598 10.9992 4.666 12.3683 4.66602ZM18.6127 6.16916C19.3516 6.26817 19.7522 6.45055 20.0393 6.73663C20.1482 6.84519 20.2421 6.97 20.3222 7.12344C20.235 7.10901 20.1464 7.09581 20.0564 7.08371C18.9932 6.94076 17.6346 6.94077 15.9193 6.94079H12.0807C10.3655 6.94077 9.00686 6.94076 7.9436 7.08371C7.79114 7.10421 7.64273 7.12787 7.49832 7.1553C7.58181 6.98713 7.68106 6.8526 7.79744 6.73663C8.08453 6.45055 8.48506 6.26817 9.22405 6.16916C9.98293 6.06749 10.9872 6.06602 12.4198 6.06602H15.4169C16.8495 6.06602 17.8538 6.06749 18.6127 6.16916ZM5.49713 19.1107C5.62337 20.0497 5.86013 20.5907 6.25513 20.9857C6.65012 21.3807 7.19113 21.6174 8.13014 21.7437C9.0893 21.8726 10.3537 21.8741 12.1334 21.8741H15.8667C17.6464 21.8741 18.9107 21.8726 19.8699 21.7437C20.5831 21.6478 21.0668 21.4881 21.4312 21.2438L18.9231 18.9866C18.1954 18.3317 17.1118 18.2664 16.3108 18.8293L16.0325 19.0249C15.012 19.7421 13.6237 19.6219 12.7418 18.7399L8.73803 14.7362C8.19949 14.1976 7.33563 14.1689 6.76245 14.6704L5.36725 15.8912C5.37014 17.268 5.38796 18.2987 5.49713 19.1107ZM6.25513 9.22923C6.65012 8.83424 7.19113 8.59748 8.13014 8.47123C9.0893 8.34228 10.3537 8.34079 12.1334 8.34079H15.8667C17.6464 8.34079 18.9107 8.34228 19.8699 8.47123C20.8089 8.59748 21.3499 8.83424 21.7449 9.22923C22.1399 9.62423 22.3767 10.1652 22.5029 11.1042C22.6319 12.0634 22.6334 13.3278 22.6334 15.1075C22.6334 16.8872 22.6319 18.1515 22.5029 19.1107C22.4487 19.5139 22.3741 19.8437 22.2754 20.1201L19.8597 17.9459C18.6469 16.8544 16.8408 16.7457 15.5058 17.6839L15.2275 17.8795C14.7637 18.2055 14.1326 18.1508 13.7317 17.75L9.72798 13.7462C8.66826 12.6865 6.96841 12.6299 5.84055 13.6168L5.36814 14.0301C5.3732 12.7988 5.39586 11.8574 5.49713 11.1042C5.62337 10.1652 5.86013 9.62423 6.25513 9.22923ZM17.0334 11.8408C17.0334 10.681 17.9736 9.74079 19.1334 9.74079C20.2931 9.74079 21.2334 10.681 21.2334 11.8408C21.2334 13.0006 20.2931 13.9408 19.1334 13.9408C17.9736 13.9408 17.0334 13.0006 17.0334 11.8408ZM19.1334 11.1408C18.7468 11.1408 18.4334 11.4542 18.4334 11.8408C18.4334 12.2274 18.7468 12.5408 19.1334 12.5408C19.52 12.5408 19.8334 12.2274 19.8334 11.8408C19.8334 11.4542 19.52 11.1408 19.1334 11.1408Z"
            fill="#A6A6A6"
          />
        </svg>
        Gallery
      </li>
      <li className="text-white-shade-9 flex items-center gap-x-3 text-lg border-b border-white-shade-4 pb-5 w-full">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.69989 16.3335C7.69989 15.9469 8.01329 15.6335 8.39989 15.6335H15.8666C16.2532 15.6335 16.5666 15.9469 16.5666 16.3335C16.5666 16.7201 16.2532 17.0335 15.8666 17.0335H8.39989C8.01329 17.0335 7.69989 16.7201 7.69989 16.3335Z"
            fill="#B3B3B3"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.69989 19.6002C7.69989 19.2136 8.01329 18.9002 8.39989 18.9002H13.5332C13.9198 18.9002 14.2332 19.2136 14.2332 19.6002C14.2332 19.9868 13.9198 20.3002 13.5332 20.3002H8.39989C8.01329 20.3002 7.69989 19.9868 7.69989 19.6002Z"
            fill="#B3B3B3"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.2332 5.4454C13.8035 5.37238 13.2177 5.36684 12.161 5.36684C10.3721 5.36684 9.10058 5.36832 8.13655 5.49734C7.19212 5.62374 6.64945 5.86084 6.255 6.25529C5.86 6.65028 5.62324 7.19129 5.49699 8.1303C5.36804 9.08946 5.36655 10.3538 5.36655 12.1335V15.8668C5.36655 17.6465 5.36804 18.9109 5.49699 19.8701C5.62324 20.8091 5.86 21.3501 6.255 21.7451C6.64999 22.1401 7.191 22.3768 8.13001 22.5031C9.08916 22.632 10.3535 22.6335 12.1332 22.6335H15.8666C17.6463 22.6335 18.9106 22.632 19.8698 22.5031C20.8088 22.3768 21.3498 22.1401 21.7448 21.7451C22.1398 21.3501 22.3765 20.8091 22.5028 19.8701C22.6317 18.9109 22.6332 17.6465 22.6332 15.8668V15.4589C22.6332 14.0253 22.6232 13.3457 22.471 12.8335H19.5498C18.4925 12.8335 17.6285 12.8336 16.9463 12.7418C16.2333 12.646 15.6151 12.4385 15.1217 11.9451C14.6282 11.4516 14.4208 10.8334 14.3249 10.1204C14.2332 9.43828 14.2332 8.57426 14.2332 7.51695V5.4454ZM15.6332 6.169V7.46684C15.6332 8.58658 15.6347 9.35596 15.7124 9.93387C15.7874 10.4916 15.9216 10.7651 16.1116 10.9551C16.3016 11.1451 16.5751 11.2793 17.1329 11.3543C17.7108 11.432 18.4802 11.4335 19.5999 11.4335H21.4847C21.208 11.1651 20.8536 10.8436 20.3932 10.4293L16.6984 7.10389C16.2453 6.69617 15.9082 6.39521 15.6332 6.169ZM12.297 3.96682C13.5893 3.96647 14.4242 3.96625 15.1926 4.26113C15.961 4.556 16.5788 5.11232 17.5347 5.97305C17.5677 6.00276 17.6011 6.03283 17.6349 6.06328L21.3298 9.38865C21.3691 9.42405 21.408 9.459 21.4463 9.49353C22.5511 10.4872 23.2655 11.1297 23.6497 11.9925C24.034 12.8554 24.0337 13.8162 24.0333 15.3021C24.0332 15.3537 24.0332 15.406 24.0332 15.4589V15.9195C24.0332 17.6347 24.0332 18.9933 23.8903 20.0566C23.7432 21.1509 23.4332 22.0365 22.7347 22.735C22.0363 23.4335 21.1506 23.7435 20.0563 23.8906C18.993 24.0335 17.6344 24.0335 15.9192 24.0335H12.0806C10.3653 24.0335 9.00673 24.0335 7.94346 23.8906C6.8492 23.7435 5.96352 23.4335 5.26505 22.735C4.56657 22.0365 4.2566 21.1509 4.10948 20.0566C3.96653 18.9933 3.96654 17.6347 3.96655 15.9195V12.0809C3.96654 10.3656 3.96653 9.00702 4.10948 7.94376C4.2566 6.8495 4.56657 5.96381 5.26505 5.26534C5.96406 4.56632 6.85272 4.25668 7.95083 4.10971C9.01853 3.96682 10.3839 3.96683 12.1085 3.96684L12.161 3.96684C12.2069 3.96684 12.2522 3.96683 12.297 3.96682Z"
            fill="#B3B3B3"
          />
        </svg>
        Blog
      </li>
    </ul>
  );
};

export default Navigation;
