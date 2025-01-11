"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Location } from "@/components/Icons/Outline";
import Crown from "@/components/Icons/Profile/Crown";
import ArrowUp from "@/components/Icons/Solid/ArrowUp";
import ArrowDown from "@/components/Icons/Solid/ArrowDown";
import Platform from "./Platform";


interface ConcertProps {
  artist: string,
  job: string,
  cover: string,
  Musicname:string,
  date:string,
}


const Concert: React.FC<ConcertProps> = (props) => {



  return (
    <section className="border-b border-white-shade-4 py-8 lg:pt-2">
      <div className=" p-2 w-full pb-16 rounded-3xl lg:flex lg:pb-2 h-auto gap-4">
        <div className="bg-white  flex flex-col gap-y-2 rounded-3xl lg:w-1/2">

          <span className="text-white-shade-9">Artist Name</span>
          <h1 className="text-black font-bold text-2xl font-outfit lg:text-3xl ">
            {props.artist}
          </h1>
          <p className=" text-white-shade-9  font-opensans">
            {props.job}
          </p>

          <div className="flex items-center  gap-8 my-5 border-b border-white-shade-4 pb-4">
            <Link href=""><svg width="28" height="28" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 11.0047C22 4.92958 17.0751 0.00471878 11 0.00471878C4.92486 0.00471878 0 4.92958 0 11.0047C0 16.4951 4.02254 21.0459 9.28125 21.8711V14.1844H6.48828V11.0047H9.28125V8.58128C9.28125 5.82441 10.9235 4.3016 13.4361 4.3016C14.6396 4.3016 15.8984 4.51644 15.8984 4.51644V7.22347H14.5114C13.1449 7.22347 12.7188 8.07139 12.7188 8.9413V11.0047H15.7695L15.2818 14.1844H12.7188V21.8711C17.9775 21.0459 22 16.4951 22 11.0047Z" fill="black" />
              <path d="M15.2838 14.1797L15.7715 11H12.7207V8.93658C12.7207 8.06667 13.1468 7.21875 14.5133 7.21875H15.9004V4.51172C15.9004 4.51172 14.6416 4.29688 13.4381 4.29688C10.9254 4.29688 9.2832 5.81969 9.2832 8.57656V11H6.49023V14.1797H9.2832V21.8664C9.84324 21.9542 10.4172 22 11.002 22C11.5867 22 12.1607 21.9542 12.7207 21.8664V14.1797H15.2838Z" fill="white" />
            </svg>
            </Link>
            <Link href=""><svg width="28" height="28" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_6325_18957)">
                <path d="M15.3114 4.20927C14.1993 3.47182 13.3974 2.29137 13.1468 0.916021C13.0929 0.618933 13.0629 0.31289 13.0629 0H9.51437L9.50867 14.4688C9.44913 16.0891 8.13823 17.3896 6.53171 17.3896C6.0321 17.3896 5.562 17.2627 5.14781 17.0409C4.19829 16.5326 3.54854 15.5202 3.54854 14.355C3.54854 12.6815 4.88688 11.3199 6.53119 11.3199C6.83821 11.3199 7.1328 11.3715 7.41134 11.46V7.77432C7.12296 7.73429 6.82992 7.70953 6.53119 7.70953C2.92985 7.70953 0 10.6904 0 14.355C0 16.6032 1.10381 18.5927 2.78851 19.7958C3.84934 20.5538 5.14005 21 6.53171 21C10.1331 21 13.0629 18.0191 13.0629 14.355V7.01791C14.4546 8.03401 16.16 8.63293 18 8.63293V5.02257C17.0091 5.02257 16.0859 4.72285 15.3114 4.20927Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_6325_18957">
                  <rect width="128" height="21" fill="white" />
                </clipPath>
              </defs>
            </svg>
            </Link>
            <Link href=""><svg width="28" height="28" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.9396 2.46349C17.2822 2.74708 16.5668 2.95118 15.8299 3.03067C16.595 2.57614 17.1679 1.85805 17.4412 1.01114C16.7233 1.43823 15.9368 1.73771 15.1166 1.8963C14.7738 1.52983 14.3592 1.23789 13.8987 1.03866C13.4381 0.839428 12.9414 0.737182 12.4396 0.73829C10.4094 0.73829 8.77656 2.38399 8.77656 4.40352C8.77656 4.68712 8.81094 4.97071 8.8668 5.24356C5.82676 5.08458 3.11543 3.63224 1.31289 1.4086C0.984449 1.96959 0.812334 2.60835 0.814453 3.25841C0.814453 4.53028 1.46113 5.65177 2.44727 6.31134C1.86612 6.28845 1.29859 6.12872 0.79082 5.84513V5.89024C0.79082 7.6713 2.0498 9.14727 3.72773 9.48673C3.41268 9.56856 3.08859 9.61043 2.76309 9.61134C2.52461 9.61134 2.29902 9.5877 2.07129 9.55548C2.53535 11.0078 3.88672 12.0627 5.4959 12.0971C4.23691 13.0832 2.65996 13.6633 0.947656 13.6633C0.64043 13.6633 0.356836 13.6525 0.0625 13.6182C1.68672 14.6602 3.61387 15.2617 5.68926 15.2617C12.4268 15.2617 16.1135 9.68009 16.1135 4.83536C16.1135 4.67638 16.1135 4.51739 16.1027 4.35841C16.816 3.83634 17.4412 3.18966 17.9396 2.46349Z" fill="black" />
            </svg>
            </Link>
            <Link href=""><svg width="28" height="28" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.0007 8.02148C10.2105 8.02148 9.45276 8.33536 8.89406 8.89406C8.33536 9.45276 8.02148 10.2105 8.02148 11.0007C8.02148 11.7908 8.33536 12.5485 8.89406 13.1072C9.45276 13.6659 10.2105 13.9798 11.0007 13.9798C11.7908 13.9798 12.5485 13.6659 13.1072 13.1072C13.6659 12.5485 13.9798 11.7908 13.9798 11.0007C13.9798 10.2105 13.6659 9.45276 13.1072 8.89406C12.5485 8.33536 11.7908 8.02148 11.0007 8.02148Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.20624 2.82935C9.39259 2.47616 12.6082 2.47616 15.7946 2.82935C17.5353 3.02368 18.9387 4.3941 19.1432 6.14126C19.521 9.3722 19.521 12.6362 19.1432 15.8671C18.9387 17.6143 17.5353 18.9847 15.7955 19.1799C12.6088 19.5332 9.39289 19.5332 6.20624 19.1799C4.46549 18.9847 3.06207 17.6143 2.85766 15.868C2.47974 12.6368 2.47974 9.3725 2.85766 6.14126C3.06207 4.3941 4.46549 3.02368 6.20624 2.82935ZM15.5837 5.50418C15.3406 5.50418 15.1075 5.60076 14.9356 5.77267C14.7636 5.94457 14.6671 6.17773 14.6671 6.42085C14.6671 6.66396 14.7636 6.89712 14.9356 7.06903C15.1075 7.24094 15.3406 7.33751 15.5837 7.33751C15.8269 7.33751 16.06 7.24094 16.2319 7.06903C16.4038 6.89712 16.5004 6.66396 16.5004 6.42085C16.5004 6.17773 16.4038 5.94457 16.2319 5.77267C16.06 5.60076 15.8269 5.50418 15.5837 5.50418ZM6.64624 11.0042C6.64624 9.84938 7.10498 8.74188 7.92154 7.92532C8.73811 7.10876 9.84561 6.65001 11.0004 6.65001C12.1552 6.65001 13.2627 7.10876 14.0793 7.92532C14.8958 8.74188 15.3546 9.84938 15.3546 11.0042C15.3546 12.159 14.8958 13.2665 14.0793 14.083C13.2627 14.8996 12.1552 15.3583 11.0004 15.3583C9.84561 15.3583 8.73811 14.8996 7.92154 14.083C7.10498 13.2665 6.64624 12.159 6.64624 11.0042Z" fill="black"/>
</svg>

            </Link>
          </div>
          <div className="flex justify-between items-center border-b border-white-shade-4 pb-4">
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-bold">{props.Musicname}</span>
                <span className="text-white-shade-11">{props.date}</span>
              </div>
              <svg width="32" height="32" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 19.5C9 21.1569 7.65685 22.5 6 22.5C4.34315 22.5 3 21.1569 3 19.5C3 17.8431 4.34315 16.5 6 16.5C7.65685 16.5 9 17.8431 9 19.5Z" stroke="black" stroke-width="1.5"/>
<path d="M21 17.5C21 19.1569 19.6569 20.5 18 20.5C16.3431 20.5 15 19.1569 15 17.5C15 15.8431 16.3431 14.5 18 14.5C19.6569 14.5 21 15.8431 21 17.5Z" stroke="black" stroke-width="1.5"/>
<path d="M9 19.5V8.5" stroke="black" stroke-width="1.5"/>
<path d="M21 17.5V6.5" stroke="black" stroke-width="1.5"/>
<path d="M15.7351 4.25564L11.7351 5.58897C10.4151 6.02898 9.75503 6.24899 9.37752 6.77276C9 7.29654 9 7.99226 9 9.3837V12.5007L21 8.50067V8.05037C21 5.51791 21 4.25168 20.1694 3.65303C19.3388 3.05439 18.1376 3.4548 15.7351 4.25564Z" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
</svg>

          </div>

          <Platform />

        </div>
        <div
          className="w-full lg:w-1/2  bg-cover bg-center rounded-xl flex flex-col justify-end items-center p-4 h-96 lg:h-auto"
          style={{ backgroundImage: `url('${props.cover}')` }}
        >
          <div className="flex items-center  gap-3 mt-6">
            <div className="bg-black/5 backdrop-blur-lg  rounded-2xl px-5 py-3">
              <svg
                width="17"
                height="24"
                viewBox="0 0 17 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.0599 2.28676C14.0516 2.30208 14.0429 2.31827 14.0337 2.33544L13.9538 2.48381L14.8581 3.04379L14.9399 2.89197C14.9485 2.876 14.9566 2.86096 14.9642 2.84673C14.9507 2.83832 14.9363 2.82946 14.9211 2.82004L14.1063 2.31546C14.0899 2.30533 14.0745 2.29579 14.0599 2.28676ZM15.1593 2.97415C15.1593 2.97415 15.159 2.97391 15.1584 2.97341L15.1593 2.97415ZM14.4017 4.63992L12.8655 3.68869L10.084 5.09387C9.99519 5.13875 9.95929 5.15692 9.92629 5.17434C8.91676 5.70721 8.13308 6.62707 7.7242 7.74661L7.78646 7.71461C9.04432 7.06812 10.5531 7.23242 11.6512 8.13548C12.1916 8.5798 12.9142 8.71227 13.5706 8.48735L14.6719 8.11001C14.6696 8.07775 14.6663 8.03556 14.6609 7.96707L14.4017 4.63992ZM16.2358 8.92993C16.2819 8.78721 16.2896 8.63017 16.2506 8.47572C16.2505 8.33521 16.2462 8.19426 16.2374 8.0531C16.234 7.99809 16.2296 7.94102 16.2222 7.84653L15.949 4.34128L16.3197 3.65265C16.3794 3.54186 16.4444 3.42114 16.4926 3.31169C16.5474 3.1873 16.6086 3.01781 16.6177 2.81097C16.6298 2.53477 16.5587 2.26146 16.4139 2.02846C16.3054 1.85396 16.1701 1.73856 16.0622 1.65895C15.9672 1.58889 15.8522 1.51772 15.7466 1.4524L15.729 1.4415L14.8956 0.925417C14.7826 0.855401 14.6607 0.779883 14.5502 0.723692C14.4257 0.660362 14.2533 0.587779 14.0408 0.574673C13.7592 0.557311 13.4797 0.634226 13.2442 0.793889C13.0665 0.914414 12.9525 1.06581 12.8754 1.18462C12.807 1.29005 12.7381 1.41807 12.6743 1.53677L12.3376 2.16215L9.38626 3.65317C9.30675 3.69333 9.25785 3.71804 9.21111 3.74271C7.5141 4.63845 6.31845 6.32161 5.9585 8.28423C5.94858 8.33836 5.93917 8.39477 5.92359 8.4881L5.92231 8.49582C5.90568 8.59547 5.89835 8.63937 5.89081 8.68174C5.61296 10.2435 4.89207 11.6688 3.83208 12.7651C3.80336 12.7948 3.77334 12.8252 3.70458 12.8947L2.86498 13.7433C2.3389 14.275 1.91481 14.7036 1.59773 15.0723C1.27407 15.4487 1.01312 15.8168 0.856309 16.24C0.437597 17.3701 0.578505 18.6509 1.23555 19.652C1.48199 20.0275 1.81799 20.3232 2.21587 20.6109C2.60544 20.8926 3.11219 21.2064 3.73999 21.5951L4.48422 22.0559C5.11176 22.4445 5.6186 22.7584 6.04112 22.9795C6.47121 23.2046 6.88321 23.3722 7.32021 23.4144C8.48655 23.5269 9.6153 23.0012 10.3261 22.0369C10.5909 21.6777 10.7568 21.252 10.8978 20.7668C11.0366 20.2893 11.1704 19.6824 11.3369 18.9268L11.6021 17.7239C11.6238 17.6254 11.6334 17.582 11.6431 17.5402C12.0005 15.9979 12.7931 14.6183 13.907 13.5869C13.9372 13.559 13.9687 13.5305 14.0409 13.4651L14.0467 13.4599C14.1141 13.399 14.1553 13.3617 14.1944 13.3251C15.4028 12.1933 16.1256 10.609 16.2358 8.92993ZM14.4971 9.8663L14.0657 10.0141C12.9054 10.4117 11.6282 10.1775 10.6732 9.39217C10.0519 8.88125 9.19829 8.7883 8.48664 9.15406L7.24882 9.79024C6.83239 11.3455 6.04031 12.7643 4.94254 13.8996C4.90673 13.9366 4.87 13.9738 4.80614 14.0383L3.98351 14.8698C3.43173 15.4274 3.0472 15.8167 2.77081 16.1382C2.49684 16.4568 2.37814 16.6544 2.31943 16.8128C2.08091 17.4566 2.16305 18.1876 2.53345 18.752C2.62395 18.8899 2.78105 19.0519 3.11666 19.2946C3.45537 19.5395 3.91413 19.8241 4.57315 20.2322L5.26656 20.6616C5.92572 21.0698 6.38475 21.3534 6.75152 21.5454C7.11644 21.7364 7.32057 21.798 7.46657 21.8121C8.07803 21.8711 8.6853 21.5981 9.0782 21.065C9.17538 20.9332 9.27639 20.7234 9.39772 20.306C9.51954 19.8869 9.64199 19.3334 9.8163 18.5426L10.0762 17.3634C10.0965 17.2713 10.1081 17.2188 10.12 17.1672C10.5493 15.3148 11.504 13.6459 12.8592 12.3911C12.8968 12.3563 12.9353 12.3215 13.002 12.2612L13.0066 12.257C13.0816 12.1892 13.1121 12.1616 13.1399 12.1355C13.789 11.5275 14.2557 10.7379 14.4971 9.8663Z"
                  fill="#fff"
                />
              </svg>
            </div>
            <div className="bg-black/5 backdrop-blur-lg px-5 py-3 rounded-2xl ">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.35067 10.0948C2.22957 10.7115 2.1661 11.3487 2.1661 12.0008C2.1661 12.2416 2.17475 12.4803 2.19175 12.7167C2.2141 12.7348 2.23762 12.7538 2.26224 12.7735C2.49628 12.9607 2.82623 13.2095 3.20995 13.4571C4.01529 13.9766 4.91085 14.3929 5.62125 14.3929C6.08435 14.3929 6.64588 14.2135 7.23503 13.9169C7.59301 13.7366 7.93516 13.5264 8.23726 13.3216C8.09217 12.9082 8.01327 12.4638 8.01327 12.0008C8.01327 9.79904 9.79818 8.01413 12 8.01413C14.2018 8.01413 15.9867 9.79904 15.9867 12.0008C15.9867 12.8205 15.7393 13.5824 15.3151 14.216C15.5519 14.3287 15.7967 14.3929 16.0455 14.3929C16.5377 14.3929 16.7702 14.1598 17.2325 13.6126C17.2437 13.5994 17.2549 13.586 17.2664 13.5724C17.6506 13.1166 18.2117 12.451 19.2077 12.2985C19.0713 12.2569 18.9443 12.178 18.8431 12.0631C18.5521 11.7326 18.584 11.2288 18.9145 10.9377L20.6985 9.3666C20.9051 9.18462 21.1795 9.12893 21.4273 9.19353C21.1816 8.36699 20.8301 7.58597 20.3885 6.86615L20.0057 7.24903C19.6943 7.56041 19.1894 7.56041 18.878 7.24903C18.5667 6.93765 18.5667 6.4328 18.878 6.12142L19.4351 5.56439C17.6319 3.48332 14.9697 2.16695 12 2.16695C10.1182 2.16695 8.35982 2.69552 6.86529 3.61229L7.24817 3.99517C7.55956 4.30655 7.55956 4.8114 7.24817 5.12278C6.93679 5.43416 6.43194 5.43416 6.12056 5.12278L5.56353 4.56575C4.49481 5.49174 3.62776 6.6443 3.0371 7.94872C3.4736 7.92838 3.84581 8.26365 3.87017 8.70086L3.9538 10.202C3.97829 10.6417 3.64172 11.018 3.20204 11.0425C2.76236 11.067 2.38608 10.7304 2.36158 10.2907L2.35067 10.0948ZM21.7322 10.5812L19.9684 12.1345C19.9035 12.1917 19.8318 12.2364 19.7563 12.2689C20.5599 12.2995 21.242 12.6378 21.7794 13.0425C21.8154 12.7002 21.8339 12.3527 21.8339 12.0008C21.8339 11.5187 21.7992 11.0447 21.7322 10.5812ZM21.4093 14.868C20.9401 14.338 20.3129 13.8613 19.6377 13.8613C19.1455 13.8613 18.913 14.0944 18.4507 14.6416C18.4396 14.6548 18.4283 14.6682 18.4169 14.6818C17.9805 15.1994 17.3161 15.9875 16.0455 15.9875C15.2936 15.9875 14.6471 15.7144 14.1299 15.3715C13.5137 15.7617 12.7832 15.9875 12 15.9875C10.8351 15.9875 9.78696 15.488 9.05805 14.6914C8.72789 14.9118 8.35225 15.1398 7.9522 15.3412C7.2705 15.6844 6.44664 15.9875 5.62125 15.9875C4.54476 15.9875 3.44554 15.469 2.62239 14.9703C3.88143 18.9501 7.60383 21.8347 12 21.8347C16.4337 21.8347 20.1821 18.9005 21.4093 14.868ZM0.571411 12.0008C0.571411 5.68901 5.68816 0.572266 12 0.572266C18.3118 0.572266 23.4286 5.68901 23.4286 12.0008C23.4286 18.3127 18.3118 23.4294 12 23.4294C5.68816 23.4294 0.571411 18.3127 0.571411 12.0008ZM10.3731 2.93205C10.6844 2.62067 11.1893 2.62067 11.5007 2.93205L12.5638 3.99517C12.8752 4.30655 12.8752 4.8114 12.5638 5.12278C12.2524 5.43416 11.7476 5.43416 11.4362 5.12278L10.3731 4.05966C10.0617 3.74828 10.0617 3.24343 10.3731 2.93205ZM16.7309 3.9211C17.0832 4.18532 17.1546 4.68509 16.8904 5.03738L15.2957 7.16363C15.0314 7.51592 14.5317 7.58731 14.1794 7.3231C13.8271 7.05888 13.7557 6.55911 14.0199 6.20682L15.6146 4.08057C15.8788 3.72828 16.3786 3.65689 16.7309 3.9211ZM11.1755 6.47886C11.2894 6.90421 11.037 7.34142 10.6117 7.4554L9.15941 7.84453C8.73406 7.9585 8.29685 7.70608 8.18287 7.28072C8.0689 6.85537 8.32132 6.41815 8.74668 6.30418L10.1989 5.91505C10.6243 5.80108 11.0615 6.0535 11.1755 6.47886ZM5.51159 6.86982C5.91248 6.6876 6.38519 6.86485 6.56741 7.26574L7.18958 8.63445C7.37181 9.03534 7.19455 9.50804 6.79367 9.69027C6.39278 9.8725 5.92007 9.69524 5.73784 9.29436L5.11568 7.92565C4.93345 7.52476 5.11071 7.05205 5.51159 6.86982ZM16.9059 7.99003C17.3458 7.96935 17.7191 8.30918 17.7398 8.74906L17.8104 10.2509C17.8311 10.6908 17.4912 11.0641 17.0514 11.0848C16.6115 11.1055 16.2381 10.7656 16.2175 10.3257L16.1469 8.82392C16.1262 8.38405 16.466 8.0107 16.9059 7.99003ZM12 9.60881C10.6789 9.60881 9.60796 10.6798 9.60796 12.0008C9.60796 13.3219 10.6789 14.3929 12 14.3929C13.3211 14.3929 14.392 13.3219 14.392 12.0008C14.392 10.6798 13.3211 9.60881 12 9.60881ZM6.62386 10.826C6.97921 11.0861 7.05645 11.585 6.79637 11.9404L5.90842 13.1536C5.64834 13.509 5.14944 13.5862 4.79408 13.3261C4.43873 13.0661 4.36149 12.5672 4.62156 12.2118L5.50952 10.9985C5.7696 10.6432 6.2685 10.5659 6.62386 10.826Z"
                  fill="#fff"
                />
              </svg>
            </div>
            <div className="bg-black/5 backdrop-blur-lg  rounded-2xl px-5 py-3">
              <svg
                width="17"
                height="24"
                viewBox="0 0 17 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.0599 2.28676C14.0516 2.30208 14.0429 2.31827 14.0337 2.33544L13.9538 2.48381L14.8581 3.04379L14.9399 2.89197C14.9485 2.876 14.9566 2.86096 14.9642 2.84673C14.9507 2.83832 14.9363 2.82946 14.9211 2.82004L14.1063 2.31546C14.0899 2.30533 14.0745 2.29579 14.0599 2.28676ZM15.1593 2.97415C15.1593 2.97415 15.159 2.97391 15.1584 2.97341L15.1593 2.97415ZM14.4017 4.63992L12.8655 3.68869L10.084 5.09387C9.99519 5.13875 9.95929 5.15692 9.92629 5.17434C8.91676 5.70721 8.13308 6.62707 7.7242 7.74661L7.78646 7.71461C9.04432 7.06812 10.5531 7.23242 11.6512 8.13548C12.1916 8.5798 12.9142 8.71227 13.5706 8.48735L14.6719 8.11001C14.6696 8.07775 14.6663 8.03556 14.6609 7.96707L14.4017 4.63992ZM16.2358 8.92993C16.2819 8.78721 16.2896 8.63017 16.2506 8.47572C16.2505 8.33521 16.2462 8.19426 16.2374 8.0531C16.234 7.99809 16.2296 7.94102 16.2222 7.84653L15.949 4.34128L16.3197 3.65265C16.3794 3.54186 16.4444 3.42114 16.4926 3.31169C16.5474 3.1873 16.6086 3.01781 16.6177 2.81097C16.6298 2.53477 16.5587 2.26146 16.4139 2.02846C16.3054 1.85396 16.1701 1.73856 16.0622 1.65895C15.9672 1.58889 15.8522 1.51772 15.7466 1.4524L15.729 1.4415L14.8956 0.925417C14.7826 0.855401 14.6607 0.779883 14.5502 0.723692C14.4257 0.660362 14.2533 0.587779 14.0408 0.574673C13.7592 0.557311 13.4797 0.634226 13.2442 0.793889C13.0665 0.914414 12.9525 1.06581 12.8754 1.18462C12.807 1.29005 12.7381 1.41807 12.6743 1.53677L12.3376 2.16215L9.38626 3.65317C9.30675 3.69333 9.25785 3.71804 9.21111 3.74271C7.5141 4.63845 6.31845 6.32161 5.9585 8.28423C5.94858 8.33836 5.93917 8.39477 5.92359 8.4881L5.92231 8.49582C5.90568 8.59547 5.89835 8.63937 5.89081 8.68174C5.61296 10.2435 4.89207 11.6688 3.83208 12.7651C3.80336 12.7948 3.77334 12.8252 3.70458 12.8947L2.86498 13.7433C2.3389 14.275 1.91481 14.7036 1.59773 15.0723C1.27407 15.4487 1.01312 15.8168 0.856309 16.24C0.437597 17.3701 0.578505 18.6509 1.23555 19.652C1.48199 20.0275 1.81799 20.3232 2.21587 20.6109C2.60544 20.8926 3.11219 21.2064 3.73999 21.5951L4.48422 22.0559C5.11176 22.4445 5.6186 22.7584 6.04112 22.9795C6.47121 23.2046 6.88321 23.3722 7.32021 23.4144C8.48655 23.5269 9.6153 23.0012 10.3261 22.0369C10.5909 21.6777 10.7568 21.252 10.8978 20.7668C11.0366 20.2893 11.1704 19.6824 11.3369 18.9268L11.6021 17.7239C11.6238 17.6254 11.6334 17.582 11.6431 17.5402C12.0005 15.9979 12.7931 14.6183 13.907 13.5869C13.9372 13.559 13.9687 13.5305 14.0409 13.4651L14.0467 13.4599C14.1141 13.399 14.1553 13.3617 14.1944 13.3251C15.4028 12.1933 16.1256 10.609 16.2358 8.92993ZM14.4971 9.8663L14.0657 10.0141C12.9054 10.4117 11.6282 10.1775 10.6732 9.39217C10.0519 8.88125 9.19829 8.7883 8.48664 9.15406L7.24882 9.79024C6.83239 11.3455 6.04031 12.7643 4.94254 13.8996C4.90673 13.9366 4.87 13.9738 4.80614 14.0383L3.98351 14.8698C3.43173 15.4274 3.0472 15.8167 2.77081 16.1382C2.49684 16.4568 2.37814 16.6544 2.31943 16.8128C2.08091 17.4566 2.16305 18.1876 2.53345 18.752C2.62395 18.8899 2.78105 19.0519 3.11666 19.2946C3.45537 19.5395 3.91413 19.8241 4.57315 20.2322L5.26656 20.6616C5.92572 21.0698 6.38475 21.3534 6.75152 21.5454C7.11644 21.7364 7.32057 21.798 7.46657 21.8121C8.07803 21.8711 8.6853 21.5981 9.0782 21.065C9.17538 20.9332 9.27639 20.7234 9.39772 20.306C9.51954 19.8869 9.64199 19.3334 9.8163 18.5426L10.0762 17.3634C10.0965 17.2713 10.1081 17.2188 10.12 17.1672C10.5493 15.3148 11.504 13.6459 12.8592 12.3911C12.8968 12.3563 12.9353 12.3215 13.002 12.2612L13.0066 12.257C13.0816 12.1892 13.1121 12.1616 13.1399 12.1355C13.789 11.5275 14.2557 10.7379 14.4971 9.8663Z"
                  fill="#fff"
                />
              </svg>
            </div>
            <div className="bg-black/5 backdrop-blur-lg  rounded-2xl px-5 py-3">
              <svg
                width="18"
                height="21"
                viewBox="0 0 18 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.619019 3.12405C0.619019 1.58314 1.89951 0.333984 3.47907 0.333984H14.5209C16.1004 0.333984 17.3809 1.58314 17.3809 3.12405V6.39994C17.3809 10.6484 14.0591 14.14 9.81103 14.538V19.323H13.0553C13.5032 19.323 13.8663 19.6772 13.8663 20.1142C13.8663 20.5512 13.5032 20.9054 13.0553 20.9054H4.94467C4.49674 20.9054 4.13361 20.5512 4.13361 20.1142C4.13361 19.6772 4.49674 19.323 4.94467 19.323H8.18891V14.538C3.9408 14.14 0.619019 10.6484 0.619019 6.39994V3.12405ZM3.47907 1.91641C2.79538 1.91641 2.24114 2.45709 2.24114 3.12405V6.39994C2.24114 6.43094 2.24136 6.46189 2.2418 6.49279C2.46042 6.40999 2.72824 6.31265 3.02492 6.21346C3.79095 5.95736 4.8237 5.66315 5.70594 5.61022C7.2942 5.51493 8.44006 6.19578 9.37064 6.74871C9.38772 6.75887 9.40474 6.76898 9.42168 6.77904C10.3933 7.35597 11.1459 7.78303 12.1944 7.72012C12.8465 7.68099 13.7063 7.44772 14.4491 7.19937C14.8106 7.07853 15.1268 6.9602 15.3522 6.87218C15.4648 6.82826 15.5542 6.7921 15.6147 6.76724C15.645 6.75481 15.668 6.74522 15.683 6.73892L15.6995 6.73198L15.703 6.73046C15.7189 6.72368 15.7354 6.71722 15.7514 6.7115C15.7563 6.60825 15.7588 6.50438 15.7588 6.39994V3.12405C15.7588 2.45709 15.2046 1.91641 14.5209 1.91641H3.47907ZM15.3904 8.55245C14.4758 11.137 11.9601 12.9934 8.99997 12.9934C5.87271 12.9934 3.24151 10.9214 2.47013 8.108C2.52001 8.0879 2.57962 8.06417 2.6477 8.0376C2.87319 7.94958 3.18938 7.83125 3.55082 7.71041C4.29368 7.46206 5.15341 7.22879 5.80552 7.18966C6.85403 7.12675 7.60668 7.55381 8.57826 8.13074C8.5952 8.1408 8.61222 8.15091 8.62931 8.16106C9.55988 8.714 10.7057 9.39485 12.294 9.29956C13.1762 9.24662 14.209 8.95242 14.975 8.69632C15.1213 8.64741 15.2606 8.59894 15.3904 8.55245Z"
                  fill="#fff"
                />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Concert;
