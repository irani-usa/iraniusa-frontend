import React from "react";

import OverlayMenu from "@/components/Layout/OverlayMenu";

import {
  PopularSeminar,
  UpcomingEvent,
  PopularConcert,
} from "@/components/Pages/Events/index";

import Link from "next/link";
import EventFilter from "@/components/Pages/Events/EventFilter";
import CircleArrow from "@/components/Icons/Outline/CircleArrow";
import SmallBanner from "@/components/Banners/SmallBanner";
import MediumBanner from "@/components/Banners/MediumBanner";

const page = () => {
  return (
    <>
      <OverlayMenu />
    <div className="flex flex-col my-10">
    <section className="lg:order-2 flex flex-col items-center lg:flex-row gap-x-2 container justify-center ">
        <div className="flex flex-col gap-y-8 items-center relative">
          <h1 className="text-black font-outfit text-5xl font-medium leading-[50px] text-center">
            Find amazing
            
            events in <br /> your area
          </h1>
          <p className="text-white-shade-9 max-w-lg font-opensans text-lg text-center">
            Learn about upcoming events across the US and in your area or post
            your next event!
          </p>
        <div className="mt-10 lg:mt-0 absolute -top-8 -left-20">
          <svg
            width="108"
            height="108"
            viewBox="0 0 108 108"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M54 40L57.703 48.9032L67.3148 49.6738L59.9917 55.9468L62.229 65.3262L54 60.3L45.771 65.3262L48.0083 55.9468L40.6852 49.6738L50.297 48.9032L54 40Z"
              fill="#011223"
            />
            <path
              d="M5.06489 64.0107C4.98731 63.6485 4.99537 63.3218 5.08907 63.0304C5.18277 62.7391 5.35171 62.4944 5.59589 62.2962C5.84007 62.098 6.15302 61.9581 6.53474 61.8763L6.99722 61.7773L7.57828 64.4897C7.97014 64.3956 8.25102 64.2254 8.42093 63.9791C8.5903 63.7304 8.63594 63.4238 8.55784 63.0592C8.50227 62.7998 8.428 62.5726 8.33503 62.3776C8.23909 62.1806 8.11859 61.9825 7.97354 61.7832L8.67459 61.6331C8.81353 61.8157 8.92756 62.0076 9.01669 62.2086C9.10581 62.4096 9.18183 62.6569 9.24473 62.9505C9.33017 63.3494 9.32831 63.717 9.23915 64.0534C9.14702 64.3879 8.96515 64.6738 8.69353 64.9112C8.42138 65.146 8.05651 65.3124 7.59893 65.4104C7.1438 65.5079 6.74067 65.5136 6.38954 65.4276C6.03842 65.3415 5.74978 65.1769 5.52363 64.9335C5.29748 64.6902 5.14456 64.3826 5.06489 64.0107ZM5.71455 63.8715C5.77274 64.1432 5.908 64.3445 6.12035 64.4756C6.33218 64.6043 6.6113 64.6469 6.95772 64.6034L6.56143 62.7535C6.35886 62.7995 6.18635 62.8722 6.04389 62.9719C5.90092 63.069 5.79954 63.1931 5.73975 63.3441C5.67944 63.4926 5.67104 63.6685 5.71455 63.8715Z"
              fill="#011223"
            />
            <path
              d="M12.686 74.3713C12.8632 74.7219 12.9485 75.0601 12.942 75.3858C12.9356 75.7114 12.8266 76.0146 12.6151 76.2952C12.4037 76.5759 12.0813 76.8256 11.6479 77.0445C11.1967 77.2724 10.7898 77.3826 10.4272 77.3751C10.0645 77.3677 9.74734 77.2643 9.47566 77.0651C9.20285 76.8637 8.97842 76.5888 8.80236 76.2404C8.69063 76.0192 8.61196 75.8081 8.56635 75.6068C8.51738 75.4045 8.49256 75.225 8.4919 75.0683L9.2403 74.9847C9.2533 75.1491 9.27693 75.3124 9.31118 75.4745C9.34544 75.6366 9.39586 75.7836 9.46244 75.9154C9.57191 76.132 9.71135 76.2887 9.88076 76.3853C10.049 76.4798 10.2462 76.5148 10.4721 76.4903C10.697 76.4637 10.9501 76.3793 11.2316 76.2371C11.5041 76.0995 11.7161 75.9475 11.8676 75.7813C12.0169 75.6162 12.104 75.439 12.1289 75.2498C12.1517 75.0617 12.1111 74.8649 12.0073 74.6594C11.9046 74.4562 11.788 74.2865 11.6576 74.1506C11.5272 74.0146 11.3868 73.8948 11.2364 73.7914L11.9199 73.4461C12.0714 73.5462 12.2068 73.6671 12.326 73.8087C12.4475 73.9492 12.5675 74.1368 12.686 74.3713Z"
              fill="#011223"
            />
            <path
              d="M15.8414 86.6473C15.5296 86.2984 15.3775 85.9461 15.3851 85.5903C15.3891 85.2344 15.5899 84.8788 15.9874 84.5237L18.0085 82.7181L18.5963 83.3759L16.6984 85.0714C16.4576 85.2865 16.3217 85.4968 16.2907 85.7024C16.2578 85.9096 16.3339 86.1168 16.5189 86.3239C16.7874 86.6243 17.0666 86.7508 17.3564 86.7033C17.6445 86.6539 17.964 86.4725 18.3148 86.1591L19.8544 84.7837L20.4423 85.4414L17.3435 88.2097L16.8857 87.6976L17.2231 87.2301L17.1905 87.1937C17.0223 87.2232 16.8594 87.2194 16.702 87.1822C16.541 87.1448 16.3878 87.0803 16.2423 86.9889C16.0951 86.8955 15.9615 86.7817 15.8414 86.6473Z"
              fill="#011223"
            />
            <path
              d="M26.2227 96.1493C25.9129 95.9464 25.6889 95.7083 25.5507 95.4353C25.4125 95.1623 25.3606 94.8694 25.395 94.5569C25.4293 94.2443 25.5535 93.9248 25.7675 93.5983L26.0267 93.2027L28.347 94.723C28.5595 94.3805 28.6396 94.062 28.5873 93.7675C28.5329 93.4716 28.3498 93.2215 28.0379 93.0171C27.816 92.8717 27.6035 92.7624 27.4002 92.689C27.1935 92.6164 26.9685 92.5602 26.7252 92.5205L27.1183 91.9209C27.3455 91.9531 27.5615 92.0093 27.7662 92.0896C27.9709 92.1699 28.1988 92.2923 28.45 92.4569C28.7912 92.6804 29.0483 92.9432 29.2214 93.2451C29.3911 93.5477 29.4628 93.8789 29.4364 94.2386C29.408 94.5969 29.2655 94.9718 29.009 95.3632C28.7538 95.7525 28.4712 96.0399 28.1609 96.2256C27.8507 96.4113 27.5297 96.4971 27.1978 96.4831C26.8659 96.469 26.5409 96.3578 26.2227 96.1493ZM26.5869 95.5937C26.8193 95.7459 27.057 95.794 27.3002 95.7379C27.5413 95.6805 27.7698 95.5146 27.9856 95.2401L26.4032 94.2033C26.2914 94.3784 26.2199 94.5514 26.1886 94.7224C26.1552 94.892 26.1704 95.0515 26.234 95.2009C26.2955 95.3489 26.4132 95.4798 26.5869 95.5937Z"
              fill="#011223"
            />
            <path
              d="M37.0862 101.078L38.4606 97.157L39.293 97.4487L37.9187 101.37L37.0862 101.078ZM36.9707 102.724C36.8432 102.68 36.7454 102.607 36.6773 102.506C36.6068 102.405 36.601 102.27 36.6597 102.102C36.7177 101.937 36.8063 101.835 36.9256 101.798C37.0417 101.762 37.1635 101.766 37.291 101.81C37.4233 101.857 37.5235 101.93 37.5916 102.031C37.6565 102.133 37.66 102.267 37.602 102.432C37.5433 102.6 37.457 102.702 37.3433 102.74C37.2272 102.776 37.103 102.771 36.9707 102.724Z"
              fill="#011223"
            />
            <path
              d="M47.9412 103.973C47.8715 103.965 47.796 103.954 47.7146 103.938C47.6332 103.922 47.5633 103.904 47.5049 103.886L47.672 103.073C47.7228 103.093 47.7863 103.111 47.8627 103.127C47.9366 103.142 48.0034 103.153 48.0632 103.159C48.22 103.175 48.372 103.164 48.5193 103.127C48.6664 103.092 48.8001 103.027 48.9204 102.934C49.0405 102.843 49.1396 102.724 49.2178 102.576C49.296 102.428 49.3457 102.252 49.3668 102.048L49.5906 99.8864L50.4717 99.9776L50.0439 104.111L49.3569 104.04L49.3128 103.299L49.2717 103.295C49.1744 103.433 49.0584 103.557 48.9238 103.667C48.7892 103.776 48.6398 103.859 48.4755 103.915C48.3085 103.973 48.1304 103.992 47.9412 103.973Z"
              fill="#011223"
            />
            <path
              d="M60.5059 103.672C60.1394 103.725 59.8139 103.695 59.5294 103.582C59.245 103.469 59.012 103.285 58.8304 103.028C58.6489 102.771 58.53 102.449 58.4738 102.063L58.4057 101.595L61.1507 101.196C61.0827 100.798 60.9316 100.507 60.6971 100.321C60.4602 100.135 60.1573 100.069 59.7883 100.123C59.5258 100.161 59.2942 100.22 59.0934 100.3C58.8905 100.383 58.6848 100.49 58.4763 100.621L58.373 99.9118C58.5645 99.7853 58.7635 99.6843 58.97 99.6088C59.1764 99.5332 59.4283 99.4738 59.7254 99.4305C60.1291 99.3718 60.4958 99.3981 60.8256 99.5094C61.1532 99.6236 61.4264 99.8241 61.6452 100.111C61.8615 100.398 62.0033 100.773 62.0708 101.236C62.1378 101.697 62.1168 102.099 62.0076 102.444C61.8985 102.789 61.715 103.066 61.4572 103.275C61.1994 103.485 60.8823 103.617 60.5059 103.672ZM60.4102 103.014C60.6851 102.974 60.895 102.852 61.0399 102.649C61.1823 102.447 61.2433 102.171 61.223 101.822L59.3508 102.095C59.3832 102.3 59.4444 102.477 59.5343 102.626C59.6218 102.775 59.7389 102.884 59.8856 102.954C60.0298 103.024 60.2047 103.044 60.4102 103.014Z"
              fill="#011223"
            />
            <path
              d="M73.2498 100.976C72.7968 101.171 72.3624 101.161 71.9465 100.948C71.5283 100.735 71.1788 100.303 70.8981 99.6497C70.7123 99.2175 70.62 98.8254 70.6213 98.4735C70.6212 98.1249 70.7035 97.8253 70.8682 97.5748C71.0315 97.3275 71.265 97.1387 71.5684 97.0083C71.7616 96.9253 71.9403 96.8784 72.1046 96.8678C72.2689 96.8571 72.4189 96.8702 72.5546 96.9072C72.6914 96.9465 72.815 96.9996 72.9255 97.0665L72.9738 97.0458C72.9227 96.9587 72.8684 96.8609 72.8108 96.7522C72.7518 96.6468 72.7026 96.5481 72.6631 96.4561L71.9944 94.9009L72.8083 94.5511L75.1775 100.062L74.5153 100.346L74.1747 99.8676L74.1367 99.8839C74.1119 100.023 74.0687 100.16 74.0071 100.295C73.9432 100.431 73.8501 100.557 73.728 100.672C73.6046 100.791 73.4452 100.892 73.2498 100.976ZM73.1824 100.221C73.4054 100.125 73.5654 100.003 73.6625 99.8548C73.7583 99.7101 73.7992 99.536 73.7852 99.3323C73.7688 99.1295 73.7057 98.8939 73.5956 98.6252L73.5467 98.5114C73.4251 98.2286 73.2931 98.0007 73.1506 97.8277C73.0068 97.658 72.8449 97.5506 72.6647 97.5054C72.4833 97.4636 72.2753 97.493 72.0408 97.5938C71.8431 97.6788 71.7031 97.8029 71.6208 97.9663C71.5362 98.1307 71.5047 98.3267 71.5263 98.5544C71.5479 98.7821 71.6171 99.0316 71.7337 99.3028C71.9106 99.7143 72.1216 100.002 72.3666 100.167C72.6093 100.332 72.8812 100.35 73.1824 100.221Z"
              fill="#011223"
            />
            <path
              d="M84.5073 91.3331L86.8586 92.0575L86.0713 92.6838L84.4189 92.1324L84.582 93.8685L83.7976 94.4924L83.626 92.0341L81.1545 91.2853L81.9447 90.6567L83.7108 91.2424L83.5398 89.3879L84.3242 88.764L84.5073 91.3331Z"
              fill="#011223"
            />
            <path
              d="M94.3022 84.3207C94.0818 84.6183 93.8313 84.8283 93.5508 84.9506C93.2702 85.073 92.9749 85.1081 92.6647 85.056C92.3546 85.0039 92.0426 84.8617 91.7288 84.6294L91.3487 84.348L92.9995 82.1188C92.6697 81.8871 92.3563 81.789 92.0592 81.8243C91.7606 81.8617 91.5003 82.0302 91.2784 82.3299C91.1206 82.5431 90.9992 82.749 90.9144 82.9477C90.83 83.1499 90.761 83.3713 90.7075 83.6118L90.1312 83.1853C90.1764 82.9603 90.2449 82.7479 90.3368 82.5482C90.4286 82.3484 90.5639 82.1279 90.7426 81.8866C90.9854 81.5588 91.2624 81.3171 91.5738 81.1615C91.8857 81.0094 92.2205 80.9568 92.5782 81.0036C92.9344 81.0525 93.3005 81.2161 93.6766 81.4945C94.0507 81.7714 94.3216 82.07 94.4893 82.3903C94.6569 82.7105 94.7242 83.0359 94.6912 83.3664C94.6582 83.6969 94.5286 84.015 94.3022 84.3207ZM93.7682 83.9254C93.9335 83.7021 93.9951 83.4675 93.9531 83.2216C93.9095 82.9776 93.7569 82.7401 93.4952 82.509L92.3693 84.0294C92.5378 84.151 92.7064 84.2322 92.8754 84.2732C93.0428 84.3162 93.203 84.3102 93.3558 84.2552C93.5071 84.2022 93.6446 84.0923 93.7682 83.9254Z"
              fill="#011223"
            />
            <path
              d="M101.39 60.9225L102.127 61.0451L101.809 62.9557L101.073 62.8331L101.39 60.9225Z"
              fill="#011223"
            />
            <path
              d="M102.625 40.6856C102.645 40.7526 102.664 40.8266 102.681 40.9078C102.699 40.9889 102.71 41.06 102.716 41.1211L101.902 41.2849C101.901 41.2302 101.893 41.1647 101.877 41.0884C101.862 41.0144 101.846 40.9487 101.828 40.8913C101.782 40.7406 101.712 40.6049 101.62 40.484C101.531 40.3623 101.419 40.2644 101.286 40.19C101.156 40.1149 101.007 40.0703 100.841 40.0561C100.674 40.0419 100.493 40.0649 100.296 40.1253L98.2191 40.764L97.9587 39.9173L101.93 38.696L102.133 39.3562L101.469 39.6861L101.481 39.7256C101.647 39.7611 101.806 39.8195 101.959 39.9006C102.113 39.9818 102.247 40.0871 102.363 40.2164C102.482 40.3474 102.569 40.5038 102.625 40.6856Z"
              fill="#011223"
            />
            <path
              d="M98.1365 29.7898L94.5952 31.9637L94.2318 31.3719L94.6456 30.977L94.6201 30.9354C94.4527 30.9354 94.2931 30.9027 94.1414 30.8373C93.9917 30.7706 93.8545 30.6786 93.7297 30.5614C93.6027 30.4456 93.4915 30.3098 93.3959 30.1541C93.2322 29.8876 93.1368 29.6319 93.1099 29.3872C93.0863 29.1432 93.1387 28.9129 93.2669 28.6961C93.3952 28.4794 93.6097 28.2787 93.9104 28.0941L96.2232 26.6743L96.6868 27.4292L94.5147 28.7626C94.2396 28.9315 94.0679 29.1133 93.9995 29.3079C93.9324 29.5047 93.9715 29.7215 94.1169 29.9582C94.257 30.1864 94.4152 30.3388 94.5916 30.4155C94.7679 30.4923 94.9648 30.5021 95.1823 30.4449C95.401 30.3899 95.6437 30.2806 95.9103 30.1169L97.6729 29.0349L98.1365 29.7898Z"
              fill="#011223"
            />
            <path
              d="M88.8271 20.6153C88.5907 20.867 88.348 21.0596 88.099 21.1931C87.85 21.3265 87.5991 21.4017 87.3465 21.4184C87.0955 21.4334 86.8482 21.3933 86.6044 21.2983C86.3624 21.2015 86.1301 21.0485 85.9075 20.8395C85.6995 20.6443 85.5415 20.4306 85.4333 20.1985C85.3268 19.9647 85.2723 19.7212 85.2696 19.4682C85.2706 19.215 85.328 18.9583 85.442 18.698C85.556 18.4378 85.7313 18.1818 85.9677 17.9301C86.2813 17.5964 86.6043 17.3676 86.9368 17.2439C87.2729 17.1201 87.6059 17.0981 87.936 17.1781C88.266 17.258 88.5797 17.4376 88.8771 17.7168C89.1562 17.9789 89.345 18.2713 89.4437 18.5939C89.5423 18.9165 89.5422 19.2511 89.4433 19.5976C89.3443 19.9441 89.139 20.2833 88.8271 20.6153ZM86.6299 18.552C86.4226 18.7726 86.2717 18.9862 86.1772 19.1928C86.0846 19.401 86.0555 19.6002 86.0897 19.7903C86.1257 19.9786 86.2331 20.1567 86.4119 20.3245C86.5907 20.4924 86.7752 20.5884 86.9654 20.6126C87.1573 20.6349 87.3534 20.5924 87.5536 20.4853C87.7539 20.3781 87.9576 20.2141 88.165 19.9935C88.3723 19.7728 88.5214 19.561 88.6125 19.3581C88.7052 19.1534 88.7327 18.9578 88.695 18.7714C88.659 18.5831 88.5507 18.4041 88.3701 18.2345C88.1038 17.9844 87.8255 17.8914 87.5354 17.9553C87.2453 18.0193 86.9434 18.2182 86.6299 18.552Z"
              fill="#011223"
            />
            <path
              d="M75.97 8.82084L76.8188 9.27131L76.459 11.7661C76.4417 11.8787 76.4217 11.9885 76.3989 12.0954C76.3795 12.2012 76.3563 12.3037 76.3293 12.4026C76.3044 12.5028 76.2752 12.6006 76.2415 12.696L76.2614 12.7066C76.3445 12.6034 76.4435 12.4916 76.5584 12.3713C76.6767 12.2499 76.7994 12.1309 76.9265 12.0142L78.7617 10.3025L79.6006 10.7477L75.8096 14.0859C75.5922 14.2765 75.3727 14.4206 75.1509 14.5182C74.9301 14.6191 74.7073 14.6652 74.4825 14.6564C74.2565 14.6498 74.0286 14.5855 73.7987 14.4635C73.6882 14.4048 73.5955 14.3472 73.5208 14.2905C73.4449 14.236 73.3817 14.1869 73.3313 14.1432L73.6622 13.5199C73.7027 13.5556 73.756 13.5966 73.8221 13.643C73.8881 13.6894 73.9587 13.7325 74.0339 13.7724C74.1731 13.8463 74.3082 13.8826 74.4393 13.8813C74.5703 13.88 74.6981 13.8473 74.8229 13.7832C74.9464 13.7212 75.0654 13.6385 75.1799 13.5349L75.4922 13.2588L75.97 8.82084Z"
              fill="#011223"
            />
            <path
              d="M53.625 6.3135L53.6332 5.56657L55.57 5.58775L55.5618 6.33468L53.625 6.3135Z"
              fill="#011223"
            />
            <path
              d="M29.8253 10.0721L30.6837 9.64029L32.5112 11.3765C32.5931 11.4558 32.6711 11.5356 32.7452 11.616C32.8204 11.6931 32.8905 11.7712 32.9556 11.8505C33.023 11.9287 33.0859 12.0091 33.1443 12.0918L33.1644 12.0816C33.1283 11.9542 33.0943 11.8088 33.0626 11.6455C33.0319 11.4788 33.0058 11.3099 32.9841 11.1387L32.6488 8.65188L33.4972 8.22514L34.0285 13.2478C34.0584 13.5354 34.049 13.7978 34.0003 14.0352C33.955 14.2736 33.8638 14.482 33.7266 14.6603C33.5905 14.8408 33.4062 14.9895 33.1737 15.1064C33.0619 15.1627 32.9613 15.2049 32.8718 15.2331C32.7835 15.2635 32.7069 15.2866 32.642 15.3024L32.3248 14.6721C32.3774 14.6596 32.4417 14.6399 32.5177 14.6128C32.5937 14.5858 32.6698 14.5532 32.7458 14.5149C32.8866 14.4441 32.9944 14.3549 33.0691 14.2473C33.1438 14.1396 33.1911 14.0164 33.2109 13.8776C33.2318 13.741 33.2331 13.5961 33.2148 13.4429L33.1701 13.0284L29.8253 10.0721Z"
              fill="#011223"
            />
            <path
              d="M23.6935 16.6645C23.9243 16.9213 24.0958 17.1794 24.2078 17.4387C24.3198 17.6981 24.3735 17.9543 24.3689 18.2074C24.3626 18.4587 24.3018 18.7017 24.1865 18.9366C24.0696 19.1695 23.8975 19.388 23.6705 19.5921C23.4583 19.7828 23.232 19.9222 22.9916 20.0104C22.7495 20.0968 22.5023 20.1306 22.2499 20.1118C21.9977 20.0895 21.7467 20.0106 21.4969 19.875C21.2472 19.7395 21.0069 19.5433 20.776 19.2865C20.4698 18.9459 20.2691 18.6048 20.1739 18.2631C20.0789 17.9178 20.0851 17.5842 20.1926 17.2621C20.3002 16.9401 20.5056 16.6427 20.809 16.3701C21.0938 16.1141 21.4011 15.9507 21.731 15.8796C22.0608 15.8086 22.3942 15.837 22.7312 15.9648C23.0682 16.0926 23.389 16.3258 23.6935 16.6645ZM21.4516 18.6793C21.654 18.9045 21.8542 19.0728 22.0521 19.1843C22.2518 19.2942 22.4478 19.3401 22.6402 19.322C22.8309 19.302 23.0174 19.2101 23.1998 19.0461C23.3822 18.8822 23.4935 18.7065 23.5336 18.5191C23.572 18.3298 23.5463 18.1308 23.4564 17.9223C23.3665 17.7137 23.2203 17.4969 23.0178 17.2717C22.8154 17.0465 22.6169 16.88 22.4224 16.7722C22.2262 16.6626 22.0336 16.6186 21.8446 16.6405C21.6539 16.6604 21.4665 16.7532 21.2822 16.9188C21.0105 17.163 20.8942 17.4324 20.9335 17.7268C20.9727 18.0213 21.1454 18.3387 21.4516 18.6793Z"
              fill="#011223"
            />
            <path
              d="M16.9064 30.1478C16.8339 30.2559 16.7565 30.3532 16.6744 30.4397C16.5943 30.5276 16.5216 30.5979 16.4562 30.6504L15.8701 30.2573C15.9383 30.2006 15.9999 30.1425 16.0549 30.083C16.1099 30.0234 16.166 29.9511 16.2231 29.8659C16.3138 29.7308 16.351 29.5945 16.3347 29.4571C16.3198 29.3176 16.2074 29.1774 15.9975 29.0366L12.1538 26.4586L12.6452 25.7261L16.5545 28.348C16.7644 28.4888 16.9253 28.651 17.0372 28.8345C17.1505 29.0159 17.1992 29.2173 17.1833 29.4387C17.1688 29.6579 17.0765 29.8943 16.9064 30.1478ZM11.2049 25.8854C11.0573 25.7865 10.9799 25.6773 10.9726 25.5579C10.9667 25.4364 11.0028 25.3175 11.0809 25.2012C11.1562 25.0889 11.2511 25.0125 11.3658 24.9719C11.4818 24.9292 11.6136 24.9573 11.7612 25.0563C11.9066 25.1539 11.9827 25.2651 11.9893 25.3901C11.9951 25.5115 11.9604 25.6284 11.8852 25.7406C11.8071 25.857 11.7107 25.9355 11.5961 25.9761C11.4807 26.0132 11.3503 25.983 11.2049 25.8854Z"
              fill="#011223"
            />
            <path
              d="M7.03043 36.3226C7.1879 35.8819 7.42472 35.5799 7.74089 35.4164C8.05554 35.2498 8.46384 35.2562 8.96579 35.4355L11.518 36.3472L11.2211 37.1778L8.82449 36.3217C8.52049 36.2131 8.27076 36.1943 8.07531 36.2653C7.8775 36.3355 7.73186 36.5014 7.63839 36.7629C7.50281 37.1423 7.52514 37.4479 7.70539 37.6797C7.88649 37.9092 8.19855 38.103 8.64159 38.2613L10.5858 38.9558L10.2889 39.7865L6.37582 38.3886L6.60698 37.7418L7.17889 37.8145L7.19531 37.7686C7.08895 37.6349 7.01448 37.4901 6.97192 37.334C6.92784 37.1748 6.91121 37.0094 6.92201 36.8379C6.93366 36.664 6.96979 36.4922 7.03043 36.3226Z"
              fill="#011223"
            />
            <path
              d="M8.24143 49.4646L8.03048 52.5655L2.5553 52.1932L2.76625 49.0923L3.52274 49.1438L3.37293 51.3458L4.8597 51.4469L5.00007 49.3834L5.75282 49.4346L5.61244 51.4981L7.33139 51.615L7.48119 49.4129L8.24143 49.4646Z"
              fill="#011223"
            />
          </svg>
        </div>
        </div>
      </section>

      <section className="flex justify-center container lg:order-3 my-10">
        <EventFilter />
      </section>

    <div className="container lg:order-1">
        <section
          className="w-full h-96 mb-10 rounded-3xl bg-center bg-cover p-14"
          style={{ backgroundImage: `url('/images/events/ebi-concert.jpg')` }}
        >
          <div>
            <h3 className="text-white font-outfit text-3xl mb-8">
              Worldwide Ebi concerts
            </h3>
            <div className="flex flex-col gap-y-3 mt-4 mb-10">
              <div className="flex items-center gap-x-3 font-opensans text-lg text-white">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.5552 0.683335H14.3787C15.1573 0.68331 15.8067 0.683289 16.3221 0.752593C16.8662 0.825743 17.3575 0.986658 17.7522 1.3814C18.1469 1.77614 18.3079 2.26737 18.381 2.81145C18.4503 3.32693 18.4503 3.97626 18.4503 4.75494V18.0167H18.6669C19.0259 18.0167 19.3169 18.3077 19.3169 18.6667C19.3169 19.0257 19.0259 19.3167 18.6669 19.3167H1.33359C0.974609 19.3167 0.683594 19.0257 0.683594 18.6667C0.683594 18.3077 0.974609 18.0167 1.33359 18.0167H1.55026L1.55026 7.35494C1.55023 6.57625 1.55021 5.92693 1.61952 5.41145C1.69267 4.86737 1.85358 4.37614 2.24832 3.9814C2.64306 3.58666 3.13429 3.42574 3.67838 3.35259C4.19385 3.28329 4.84318 3.28331 5.62186 3.28334L8.50785 3.28334C8.55244 2.52572 8.69211 1.87094 9.18166 1.3814C9.5764 0.986658 10.0676 0.825743 10.6117 0.752593C11.1272 0.683289 11.7765 0.68331 12.5552 0.683335ZM9.13952 4.58334C9.1384 4.58334 9.13729 4.58334 9.13617 4.58334C9.13531 4.58334 9.13445 4.58334 9.13359 4.58334H5.66693C4.83145 4.58334 4.27023 4.58472 3.8516 4.641C3.45167 4.69477 3.2805 4.7877 3.16756 4.90064C3.05462 5.01358 2.96169 5.18474 2.90792 5.58468C2.85164 6.00331 2.85026 6.56453 2.85026 7.4V18.0167H6.75026V16.0667C6.75026 15.7077 7.04128 15.4167 7.40026 15.4167C7.75925 15.4167 8.05026 15.7077 8.05026 16.0667V18.0167H11.9503V7.4C11.9503 6.56453 11.9489 6.00331 11.8926 5.58468C11.8388 5.18474 11.7459 5.01358 11.633 4.90064C11.52 4.7877 11.3489 4.69477 10.9489 4.641C10.5313 4.58485 9.97172 4.58334 9.13952 4.58334ZM13.2503 18.0167L13.2503 7.35494C13.2503 6.57626 13.2503 5.92693 13.181 5.41145C13.1079 4.86737 12.9469 4.37614 12.5522 3.9814C12.1575 3.58666 11.6662 3.42574 11.1221 3.35259C10.7535 3.30303 10.3164 3.28892 9.8125 3.28492C9.85598 2.67857 9.95138 2.45015 10.1009 2.30064C10.2138 2.1877 10.385 2.09477 10.7849 2.041C11.2036 1.98472 11.7648 1.98334 12.6003 1.98334H14.3336C15.1691 1.98334 15.7303 1.98472 16.1489 2.041C16.5489 2.09477 16.72 2.1877 16.833 2.30064C16.9459 2.41358 17.0388 2.58474 17.0926 2.98468C17.1489 3.40331 17.1503 3.96453 17.1503 4.8V18.0167H13.2503ZM4.15026 6.53334C4.15026 6.17435 4.44128 5.88334 4.80026 5.88334H10.0003C10.3592 5.88334 10.6503 6.17435 10.6503 6.53334C10.6503 6.89232 10.3592 7.18334 10.0003 7.18334H4.80026C4.44128 7.18334 4.15026 6.89232 4.15026 6.53334ZM4.15026 9.13334C4.15026 8.77435 4.44128 8.48334 4.80026 8.48334H10.0003C10.3592 8.48334 10.6503 8.77435 10.6503 9.13334C10.6503 9.49232 10.3592 9.78334 10.0003 9.78334H4.80026C4.44128 9.78334 4.15026 9.49232 4.15026 9.13334ZM4.15026 11.7333C4.15026 11.3744 4.44128 11.0833 4.80026 11.0833H10.0003C10.3592 11.0833 10.6503 11.3744 10.6503 11.7333C10.6503 12.0923 10.3592 12.3833 10.0003 12.3833H4.80026C4.44128 12.3833 4.15026 12.0923 4.15026 11.7333Z"
                    fill="white"
                  />
                </svg>
                The World In The Concert Hall
              </div>
              <div className="flex items-center gap-x-3 font-opensans text-lg text-white">
                <svg
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.417969 8.39086C0.417969 4.14504 3.80231 0.683334 8.0013 0.683334C12.2003 0.683334 15.5846 4.14504 15.5846 8.39086C15.5846 10.4406 15.0005 12.6415 13.9678 14.5429C12.9364 16.442 11.4295 18.0923 9.54441 18.9734C8.56513 19.4311 7.43748 19.4311 6.45819 18.9734C4.57309 18.0923 3.06617 16.442 2.03478 14.5429C1.00213 12.6415 0.417969 10.4406 0.417969 8.39086ZM8.0013 1.98333C4.54194 1.98333 1.71797 4.84115 1.71797 8.39086C1.71797 10.2083 2.24025 12.1974 3.17718 13.9225C4.11538 15.65 5.44119 17.063 7.00866 17.7957C7.63908 18.0903 8.36352 18.0903 8.99394 17.7957C10.5614 17.063 11.8872 15.65 12.8254 13.9225C13.7624 12.1974 14.2846 10.2083 14.2846 8.39086C14.2846 4.84115 11.4607 1.98333 8.0013 1.98333ZM8.0013 6.31667C6.92435 6.31667 6.0513 7.18971 6.0513 8.26667C6.0513 9.34362 6.92435 10.2167 8.0013 10.2167C9.07826 10.2167 9.9513 9.34362 9.9513 8.26667C9.9513 7.18971 9.07826 6.31667 8.0013 6.31667ZM4.7513 8.26667C4.7513 6.47174 6.20638 5.01667 8.0013 5.01667C9.79623 5.01667 11.2513 6.47174 11.2513 8.26667C11.2513 10.0616 9.79623 11.5167 8.0013 11.5167C6.20638 11.5167 4.7513 10.0616 4.7513 8.26667Z"
                    fill="white"
                  />
                </svg>
                Gothenburg Concert Hall
              </div>
            </div>
            <Link
              href={"/"}
              className="inlien-flex px-12 py-4 rounded-2xl bg-white text-black font-opensans text-lg focus:outline-hidden hover: bg-transparent border border-white transition-all"
            >
              Book now
            </Link>
          </div>
        </section>
      </div>
     
    
    

    
    </div>


     
      <section className="container py-10 lg:flex items-center">
        <div className="border border-white-shade-4 hidden lg:flex flex-col w-60 ">
          <h1 className="text-black py-6 pl-5 pr-28 font-semibold font-opensans">
            Categories
          </h1>
          <svg
            width="238"
            height="1"
            viewBox="0 0 282 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="0.5" x2="300" y2="0.5" stroke="#E6E6E6" />
          </svg>
          <h1 className="text-white-shade-9 hover:cursor-pointer hover:bg-red hover:text-white transition-all duration-300 py-5 pl-6 font-opensans text-base flex  items-center pr-3 justify-between">
            Concerts
            <CircleArrow />
          </h1>
          <h1 className="text-white-shade-9 hover:cursor-pointer hover:bg-red hover:text-white transition-all duration-300 py-5 pl-6 font-opensans text-base flex  items-center pr-3 justify-between">
            Conference
            <CircleArrow />
          </h1>
          <h1 className="text-white bg-red  py-5 pl-6   font-opensans text-base">
            seminar
          </h1>
          <h1 className="text-white-shade-9 hover:cursor-pointer hover:bg-red hover:text-white transition-all duration-300 py-5 pl-6 font-opensans text-base flex  items-center pr-3 justify-between">
            exhibition
            <CircleArrow />
          </h1>
        </div>
        <div className="lg:pl-5 w-full">
          <div className="flex justify-between items-center">
            <h1 className="text-black text-xl font-semibold">
              Popular seminars
            </h1>
            <div className=" items-center justify-center bg-white-shade-4 py-5 px-6 rounded-full hidden lg:flex">
              <svg
                width="8"
                height="15"
                viewBox="0 0 8 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.39961 13.3333L6.59961 7.50001L1.39961 1.66668"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="flex overflow-x-scroll w-full no-scroll gap-x-5 mt-7 lg:mt-3">
            <PopularSeminar
              content={"How to start from scratch"}
              people={"70-100"}
              organizer={"Mohammad ghaem"}
              date={"11/7/16"}
              city={"Washington DC"}
              classes={"w-full  lg:w-2/3"}
              background={"/images/events/seminar.webp"}
            />

            <PopularSeminar
              content={"How to start from scratch"}
              people={"70-100"}
              organizer={"Mohammad ghaem"}
              date={"11/7/16"}
              city={"Washington DC"}
              classes={"hidden lg:flex w-2/3"}
              background={"/images/events/seminar.webp"}
            />
          </div>
          <section className="flex justify-center gap-x-3 mt-12 lg:hidden">
            <div className="flex items-center justify-center border-[1px] border-white-shade-4 py-5 px-6 rounded-full">
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.59961 13.0667L1.39961 6.99998L6.59961 0.933317"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex items-center justify-center border-[1px] border-white-shade-4 py-5 px-6 rounded-full">
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.40039 0.93335L6.60039 7.00002L1.40039 13.0667"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </section>
        </div>
      </section>


      <section className="container">
        <h1 className="text-black text-xl font-semibold py-4 lg:py-12">
          Upcoming events
        </h1>
        <hr className=" w-full h-[1.5px] bg-white-shade-4  hidden lg:flex" />
        <div className="flex flex-col gap-y-11 py-4">
          <UpcomingEvent
            buttonn={"Sold Out"}
            classes={""}
            background={"/images/events/Shadmehr.webp"}
            date={"5 may 2023"}
            artist={"Shadmehr aghili - live in newyork"}
            location={"Newyork"}
            hour={"22:10"}
          />
          <UpcomingEvent
            buttonn={"Book now"}
            classes={"text-black  py-4 bg-[#0112231A] rounded-2xl"}
            background={"/images/events/Shadmehr.webp"}
            date={"5 may 2023"}
            artist={"Shadmehr aghili - live in newyork"}
            location={"Newyork"}
            hour={"22:10"}
          />
          <UpcomingEvent
            buttonn={"Book now"}
            classes={"text-black  py-4 bg-[#0112231A] rounded-2xl"}
            background={"/images/events/Shadmehr.webp"}
            date={"5 may 2023"}
            artist={"Shadmehr aghili - live in newyork"}
            location={"Newyork"}
            hour={"22:10"}
          />
        </div>
      </section>
      <section className="container py-7">
        <div className="flex items-center justify-between">
          <h1 className="text-black text-xl font-bold py-7 font-outfit">
            Popular concerts
          </h1>
          <h1 className="text-white-shade-11 font-opensans font-semibold">
            See all
          </h1>
        </div>
        <div className="lg:flex gap-x-6">
          <PopularConcert
            content={"Shadmehr aghili"}
            concert={"Dumbarton concerts"}
            date={"11/7/16"}
            city={"Washington DC"}
            classes={""}
            price={"$67"}
            background={"/images/events/Shadmehr.webp"}
          />
          <PopularConcert
            content={"Shadmehr aghili"}
            concert={"Dumbarton concerts"}
            date={"11/7/16"}
            city={"Washington DC"}
            classes={"hidden lg:flex"}
            price={"$67"}
            background={"/images/events/Shadmehr.webp"}
          />
          <PopularConcert
            content={"Shadmehr aghili"}
            concert={"Dumbarton concerts"}
            date={"11/7/16"}
            city={"Washington DC"}
            classes={"hidden lg:flex"}
            price={"$67"}
            background={"/images/events/Shadmehr.webp"}
          />
        </div>
        <section className="flex justify-center gap-x-3 mt-12 lg:hidden">
          <div className="flex items-center justify-center border-[1px] border-white-shade-4 py-5 px-6 rounded-full">
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.59961 13.0667L1.39961 6.99998L6.59961 0.933317"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex items-center justify-center border-[1px] border-white-shade-4 py-5 px-6 rounded-full">
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.40039 0.93335L6.60039 7.00002L1.40039 13.0667"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </section>
      </section>
      <section className="container py-7">
        <div className="flex items-center justify-between">
          <h1 className="text-black text-xl font-bold py-7 font-outfit">
            Popular theater and cinemas
          </h1>
          <h1 className="text-white-shade-11 font-opensans font-semibold">
            See all
          </h1>
        </div>
        <div className="lg:flex gap-x-6">
          <PopularConcert
            content={"Shadmehr aghili"}
            concert={"Dumbarton concerts"}
            date={"11/7/16"}
            city={"Washington DC"}
            classes={""}
            price={"$67"}
            background={"/images/events/1.png"}
          />
          <PopularConcert
            content={"Shadmehr aghili"}
            concert={"Dumbarton concerts"}
            date={"11/7/16"}
            city={"Washington DC"}
            classes={"hidden lg:flex"}
            price={"$67"}
            background={"/images/events/1.png"}
          />
          <PopularConcert
            content={"Shadmehr aghili"}
            concert={"Dumbarton concerts"}
            date={"11/7/16"}
            city={"Washington DC"}
            classes={"hidden lg:flex"}
            price={"$67"}
            background={"/images/events/1.png"}
          />
        </div>
        <section className="flex justify-center gap-x-3 mt-12 lg:hidden">
          <div className="flex items-center justify-center border-[1px] border-white-shade-4 py-5 px-6 rounded-full">
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.59961 13.0667L1.39961 6.99998L6.59961 0.933317"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex items-center justify-center border-[1px] border-white-shade-4 py-5 px-6 rounded-full">
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.40039 0.93335L6.60039 7.00002L1.40039 13.0667"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </section>
      </section>
      <section className="container py-7">
        <div className="flex items-center justify-between">
          <h1 className="text-black text-xl font-bold py-7 font-outfit">
            Popular concerts
          </h1>
          <h1 className="text-white-shade-11 font-opensans font-semibold">
            See all
          </h1>
        </div>
        <div className="lg:flex gap-x-6">
          <PopularConcert
            content={"Shadmehr aghili"}
            concert={"Dumbarton concerts"}
            date={"11/7/16"}
            city={"Washington DC"}
            classes={""}
            price={"$67"}
            background={"/images/events/2.png"}
          />
          <PopularConcert
            content={"Shadmehr aghili"}
            concert={"Dumbarton concerts"}
            date={"11/7/16"}
            city={"Washington DC"}
            classes={"hidden lg:flex"}
            price={"$67"}
            background={"/images/events/2.png"}
          />
          <PopularConcert
            content={"Shadmehr aghili"}
            concert={"Dumbarton concerts"}
            date={"11/7/16"}
            city={"Washington DC"}
            classes={"hidden lg:flex"}
            price={"$67"}
            background={"/images/events/2.png"}
          />
        </div>
        <section className="flex justify-center gap-x-3 mt-12 lg:hidden">
          <div className="flex items-center justify-center border-[1px] border-white-shade-4 py-5 px-6 rounded-full">
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.59961 13.0667L1.39961 6.99998L6.59961 0.933317"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex items-center justify-center border-[1px] border-white-shade-4 py-5 px-6 rounded-full">
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.40039 0.93335L6.60039 7.00002L1.40039 13.0667"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </section>
      </section>
      <div className="container flex lg:flex-row flex-col gap-3 my-20">
        <MediumBanner name={'Supplemental income'} />
        <MediumBanner name={'Supplemental income'} />
        <MediumBanner name={'Supplemental income'} />
      </div>
    </>
  );
};

export default page;
