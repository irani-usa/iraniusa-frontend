"use client"
import React, { useState } from 'react'
import { Calendar, Crown, Email, Location } from '@/components/Icons/Outline';
import TicketIcon from '@/components/Icons/Profile/Ticket';
import OverlayMenu from '@/components/Layout/OverlayMenu'
import classNames from 'classnames';
import Button from '@/components/Forms/Button'
import UserIcon from '@/components/Icons/Profile/User'
import Pen from '@/components/Icons/Profile/Pen'
import Input from '@/components/Profile/business/pro/Input';
import { Website } from '@/components/Icons/Profile';
import CartIcon from '@/components/Icons/Outline/Cart';


const page = () => {
  const [sendMethod, setSendmethod] = useState("email")
  const [paymentMethod, setPaymentMethod] = useState("card")


  const FeatureListClasses = classNames(
    "[&>*:nth-child(odd)] relative top-0 left-0 w-full h-14 flex gap-x-4 p-4 my-7 justify-evenly text-center items-center  text-base bg-white-shade-3 rounded-xl before:contents-[''] before:absolute before:top-1/2 before:-translate-y-1/2  before:h-[85%] before:bg-white before:rounded-xl before:z-20 tranitaion-all duration-500 before:tranitaion-all before:duration-500 border border-white-shade-3",
    {
      "before:left-[49%]  before:w-6/12": sendMethod === "email",
      "before:left-1  before:w-6/12": sendMethod === "pdf",
    }
  );
  const PaymentMethodClasses = classNames(
    "[&>*:nth-child(odd)] relative top-0 left-0 w-full h-12 flex gap-x-4 p-2 justify-evenly text-center items-center  text-base bg-white-shade-3 rounded-xl before:contents-[''] before:absolute before:top-1/2 before:-translate-y-1/2  before:h-[80%] before:bg-white before:rounded-xl before:z-20 tranitaion-all duration-500 before:tranitaion-all before:duration-500 border border-white-shade-3 mt-5",
    {
      "before:left-[74%]  before:w-3/12": paymentMethod === "GooglePay",
      "before:left-[49%]  before:w-3/12": paymentMethod === "ApplePay",
      "before:left-[24%]  before:w-3/12": paymentMethod === "PayPal",
      "before:left-2  before:w-3/12": paymentMethod === "card",
    }
  );

  return (
    <section className="container">
      <OverlayMenu />
      <div className="flex flex-col lg:flex-row justify-center py-8 gap-10 w-full container">
        <div className='lg:w-1/2 w-full'>
          <h1 className='text-lg font-semibold'>Preview</h1>
          <div className="w-full h-1 border-t border-white-shade-4 my-4"></div>
          <div className={FeatureListClasses}>
            <span
              onClick={() => setSendmethod("pdf")}
              className={`relative z-2000  w-1/2 flex items-center justify-center hover:cursor-pointer h-full rounded-xl text-sm font-medium text-shadow-white-shade-19 ${sendMethod === "email" && "text-white-shade-8"}`}
            >
              Send invoice as Pdf
            </span>
            <span
              onClick={() => setSendmethod("email")}
              className={`relative z-2000  w-1/2 flex items-center justify-center hover:cursor-pointer h-full rounded-xl text-sm font-medium text-shadow-white-shade-19 ${sendMethod === "pdf" && "text-white-shade-8"}`}
            >
              Send invoice as Email
            </span>
          </div>
          <div className='w-full h-auto border border-white-shade-4 bg-white-shade-2 rounded-2xl my-4 p-4'>
            <span className='text-sm font-semibold mb-4 text-blue'><span className='text-white-shade-11 font-semibold'>Subscribe to</span> Irani USA</span>
            <div className="flex gap-4 py-4">
              <div className='border border-white-shade-4 rounded-xl p-4 h-min'>
                <Crown />
              </div>
              <div className='flex flex-col gap-4 w-full'>
                <div className='flex items-center justify-between w-full font-medium'>
                  <h2 className='text-white-shade-11'>Professional <br /> <span className='text-black text-2xl font '>$49</span> / yearly</h2>
                  <button className='bg-white-shade-1 border border-white-shade-3 rounded-lg px-3 py-1'>Change plan</button>
                </div>
                <div className="w-full h-1 border-t border-white-shade-4 "></div>

                <div className='bg-white-shade-1 drop-shadow-sm flex flex-col gap-1 rounded-lg p-2'>
                  <div className="flex items-center justify-between">
                    <span className='text-white-shade-10'>plan</span>
                    <span className='text-black font-medium'>$49</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className='text-white-shade-10'>plan</span>
                    <span className='text-black font-medium'>$49</span>
                  </div>
                </div>
                <div className="flex gap-x-3">
                  <div className="transition-all bg-white-shade-1 drop-shadow-xs focus-within:border-white-shade-18  focus-within:border-2 flex items-center gap-x focus-within:border-black-2 w-full h-14 rounded-2xl border-2 border-white-shade-4 px-2 py-1">

                    <TicketIcon classes='w-7 pr-0.5 stroke-white-shade-8 ' />

                    <input
                      type="password"
                      className="group w-5/6 ml-3 h-full bg-white/0 rounded-2xl border-none focus:outline-hidden text-black"
                      placeholder="Passcode"
                    />
                    <button
                      type="submit"
                      className="inline-flex items-center gap-x-2 px-4   rounded-xl bg-black/10 text-black hover:bg-white/0 h-full  transition-all duration-300"
                    >
                      {/* <Loading/> */}
                      Confrim
                    </button>
                  </div>
                </div>
                <div className="w-full h-1 border-t border-white-shade-4 "></div>
                <div className="flex items-center justify-between">
                  <span className='text-white-shade-10'>Subtotal</span>
                  <span className='text-black font-medium'>$47,21</span>
                </div>



              </div>
            </div>
          </div>
        </div>
        
        <div className='lg:w-1/2 w-full'>
          <section className='w-full border-b border-white-shade-4  '>
            <div className=''>
              <div className="flex items-center gap-3 ">
                <div className='border border-white-shade-4 h-min p-2 rounded-full  w-min'>
                  <UserIcon />
                </div>
                <div>
                  <h1 className="text-black  font-semibold text-xl font-outfit ">Profile detail</h1>
                  <p className=" text-white-shade-12 text-sm font-medium  font-opensans   ">Please enter your details  </p>
                </div>
              </div>
              <div className={PaymentMethodClasses}>
                <span
                  onClick={() => setPaymentMethod("card")}
                  className={`relative z-2000  w-1/4 flex items-center justify-center gap-2 hover:cursor-pointer h-full rounded-xl text-sm ${paymentMethod === "card" ? "text-black" : "text-white-shade-8"}`}
                >
                  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.12775 2.16663H9.86964C11.0948 2.16662 12.0652 2.16661 12.8247 2.26872C13.6063 2.3738 14.239 2.59521 14.7379 3.09412C15.2368 3.59303 15.4582 4.22566 15.5633 5.00728C15.6236 5.45586 15.6483 5.97803 15.6584 6.58281C15.663 6.61006 15.6654 6.63807 15.6654 6.66663C15.6654 6.69013 15.6637 6.71325 15.6606 6.73589C15.6654 7.11304 15.6654 7.52118 15.6654 7.96235V8.03757C15.6654 9.26274 15.6654 10.2332 15.5633 10.9926C15.4582 11.7743 15.2368 12.4069 14.7379 12.9058C14.239 13.4047 13.6063 13.6261 12.8247 13.7312C12.0652 13.8333 11.0948 13.8333 9.86964 13.8333H7.12776C5.90258 13.8333 4.93216 13.8333 4.17268 13.7312C3.39107 13.6261 2.75844 13.4047 2.25953 12.9058C1.76062 12.4069 1.53921 11.7743 1.43412 10.9926C1.33201 10.2332 1.33202 9.26274 1.33203 8.03757V7.96235C1.33203 7.52117 1.33202 7.11303 1.33679 6.73588C1.33365 6.71324 1.33203 6.69012 1.33203 6.66663C1.33203 6.63807 1.33443 6.61007 1.33902 6.58282C1.34913 5.97803 1.37381 5.45586 1.43412 5.00728C1.53921 4.22566 1.76062 3.59303 2.25953 3.09412C2.75844 2.59521 3.39107 2.3738 4.17268 2.26872C4.93216 2.16661 5.90258 2.16662 7.12775 2.16663ZM2.33336 7.16663C2.33209 7.42556 2.33203 7.70269 2.33203 7.99996C2.33203 9.27117 2.33309 10.1743 2.4252 10.8594C2.51538 11.5301 2.68449 11.9166 2.96663 12.1987C3.24877 12.4808 3.6352 12.6499 4.30593 12.7401C4.99104 12.8322 5.89415 12.8333 7.16536 12.8333H9.83203C11.1032 12.8333 12.0064 12.8322 12.6915 12.7401C13.3622 12.6499 13.7486 12.4808 14.0308 12.1987C14.3129 11.9166 14.482 11.5301 14.5722 10.8594C14.6643 10.1743 14.6654 9.27117 14.6654 7.99996C14.6654 7.70269 14.6653 7.42556 14.664 7.16663H2.33336ZM14.648 6.16663H2.34941C2.36246 5.77548 2.38527 5.43752 2.4252 5.14053C2.51538 4.4698 2.68449 4.08337 2.96663 3.80123C3.24877 3.51909 3.6352 3.34998 4.30593 3.2598C4.99104 3.16769 5.89415 3.16663 7.16537 3.16663H9.83203C11.1032 3.16663 12.0064 3.16769 12.6915 3.2598C13.3622 3.34998 13.7486 3.51909 14.0308 3.80123C14.3129 4.08337 14.482 4.4698 14.5722 5.14053C14.6121 5.43752 14.6349 5.77548 14.648 6.16663ZM3.9987 10.6666C3.9987 10.3905 4.22256 10.1666 4.4987 10.1666H7.16537C7.44151 10.1666 7.66537 10.3905 7.66537 10.6666C7.66537 10.9428 7.44151 11.1666 7.16537 11.1666H4.4987C4.22256 11.1666 3.9987 10.9428 3.9987 10.6666ZM8.33203 10.6666C8.33203 10.3905 8.55589 10.1666 8.83203 10.1666H9.83203C10.1082 10.1666 10.332 10.3905 10.332 10.6666C10.332 10.9428 10.1082 11.1666 9.83203 11.1666H8.83203C8.55589 11.1666 8.33203 10.9428 8.33203 10.6666Z" fill={paymentMethod === "card" ? "black" : "#B3B3B3"} />
                  </svg>

                  Credit card
                </span>
                <span
                  onClick={() => setPaymentMethod("PayPal")}
                  className={`relative z-2000  w-1/4 flex items-center justify-center gap-2 hover:cursor-pointer h-full rounded-xl text-sm ${paymentMethod === "PayPal" ? "text-black" : "text-white-shade-8"}`}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.75173 13.8333H3.45172C3.10505 13.8333 2.78506 13.6867 2.55839 13.42C2.33839 13.16 2.2384 12.8133 2.2984 12.48L3.89172 2.92666C4.09172 1.71332 5.13173 0.833313 6.3584 0.833313H9.33173C11.4451 0.833313 13.1651 2.55331 13.1651 4.66665C13.1651 4.80665 13.1584 4.93997 13.1384 5.0733C13.0517 6.1133 12.5917 7.10665 11.8384 7.85331C10.9984 8.69998 9.86505 9.17332 8.65839 9.17332H6.57171C6.49171 9.17332 6.41838 9.23332 6.40505 9.31999L5.8984 12.84C5.83173 13.2867 5.51839 13.6533 5.09839 13.78C4.96505 13.8267 4.83839 13.8333 4.75173 13.8333ZM6.3584 1.83331C5.6184 1.83331 4.9984 2.35998 4.8784 3.08665L3.28505 12.64C3.27172 12.7066 3.30505 12.7533 3.32505 12.7733C3.34505 12.7933 3.38505 12.8333 3.45172 12.8333H4.75173C4.86506 12.8 4.90506 12.7466 4.91839 12.6866L5.42507 9.17332C5.50507 8.59999 6.00505 8.17332 6.57839 8.17332H8.66506C9.60506 8.17332 10.4784 7.80665 11.1384 7.14665C11.7251 6.56665 12.0784 5.79998 12.1517 4.97998C12.1651 4.86665 12.1717 4.77332 12.1717 4.67332C12.1717 3.11332 10.8984 1.83999 9.3384 1.83999H6.3584V1.83331Z" fill={paymentMethod === "PayPal" ? "black" : "#B3B3B3"} />
                    <path d="M7.43437 15.1667H5.48105C5.13438 15.1667 4.80771 15.0133 4.58104 14.74C4.35438 14.4667 4.26771 14.1133 4.33438 13.7667L4.50772 12.8934L4.80771 12.8134C4.86104 12.8 4.90772 12.7467 4.92105 12.68L5.42772 9.16669C5.50772 8.59335 6.00771 8.16669 6.58104 8.16669H8.66771C9.60771 8.16669 10.481 7.80001 11.141 7.14001C11.7277 6.56001 12.0811 5.79335 12.1544 4.97335L12.221 4.19336L12.901 4.58002C13.8944 5.14668 14.5077 6.20002 14.5077 7.33335C14.5077 8.35335 14.1077 9.31336 13.3877 10.0467C12.6544 10.7734 11.6944 11.1667 10.6744 11.1667H9.24103C9.15437 11.1667 9.0877 11.2267 9.07437 11.3067L8.59439 14.1867C8.49439 14.7534 8.00771 15.1667 7.43437 15.1667ZM5.38105 13.6467L5.31438 13.9667C5.30105 14.0334 5.33438 14.0867 5.35438 14.1067C5.37438 14.1334 5.41438 14.1667 5.48105 14.1667H7.43437C7.52104 14.1667 7.58771 14.1067 7.60104 14.0267L8.08104 11.1467C8.17438 10.58 8.66105 10.1667 9.23438 10.1667H10.6677C11.421 10.1667 12.1344 9.87336 12.6744 9.34003C13.2077 8.80669 13.501 8.08669 13.501 7.33335C13.501 6.81335 13.3144 6.32002 12.981 5.93335C12.7744 6.65335 12.3811 7.32002 11.8411 7.85335C11.0011 8.70002 9.8677 9.17336 8.66104 9.17336H6.57437C6.49437 9.17336 6.42104 9.23336 6.4077 9.32003L5.90105 12.84C5.85438 13.1734 5.66105 13.4667 5.38105 13.6467Z" fill={paymentMethod === "PayPal" ? "black" : "#B3B3B3"} />
                  </svg>

                  PayPal
                </span>
                <span
                  onClick={() => setPaymentMethod("ApplePay")}
                  className={`relative z-2000  w-1/4 flex items-center justify-center gap-2 hover:cursor-pointer h-full rounded-xl text-sm ${paymentMethod === "ApplePay" ? "text-black" : "text-white-shade-8"}`}
                >
                  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.65174 15.1667C6.64507 15.1667 6.63841 15.1667 6.62507 15.1667C5.50507 15.16 4.70507 14.1533 4.13841 13.28C2.69174 11.06 2.3984 8.26667 3.44507 6.64667C4.14507 5.56 5.2784 4.88666 6.3984 4.88666C6.9784 4.88666 7.43174 5.04667 7.83174 5.19334C8.15174 5.30667 8.42507 5.40666 8.71174 5.40666C8.96507 5.40666 9.18507 5.32001 9.46507 5.21334C9.85174 5.06667 10.3251 4.88666 11.0117 4.88666C11.9984 4.88666 13.0117 5.41333 13.7184 6.30666C13.8117 6.42 13.8451 6.57334 13.8184 6.71334C13.7917 6.86001 13.6984 6.97999 13.5717 7.05333C12.8184 7.46666 12.4051 8.21999 12.4651 9.07333C12.5251 9.93999 13.0584 10.6733 13.8584 10.9733C13.9851 11.02 14.0917 11.12 14.1451 11.2467C14.1984 11.3733 14.1984 11.52 14.1384 11.64C13.8451 12.2933 13.6984 12.5933 13.3184 13.18C12.6851 14.1533 11.8851 15.1533 10.7917 15.1667C10.3184 15.1667 9.99841 15.0267 9.71841 14.8933C9.43841 14.7667 9.16507 14.6667 8.73174 14.6533C8.26507 14.6533 8.0184 14.7667 7.73174 14.8933C7.43841 15.0267 7.11841 15.1667 6.65174 15.1667ZM6.3984 5.88666C5.61174 5.88666 4.80507 6.38667 4.28507 7.18667C3.57841 8.28 3.58507 10.5933 4.97841 12.7333C5.41174 13.4 5.99174 14.16 6.63841 14.1667C6.87841 14.16 7.05841 14.0933 7.30507 13.9867C7.63174 13.84 8.03841 13.66 8.71174 13.6533C9.37174 13.64 9.79841 13.8333 10.1251 13.9867C10.3651 14.1 10.5251 14.1733 10.7717 14.1667C11.3984 14.16 12.0051 13.3467 12.4717 12.64C12.7184 12.26 12.8584 12.02 13.0117 11.68C12.1184 11.1533 11.5317 10.2267 11.4584 9.14667C11.3851 8.12667 11.7984 7.17333 12.5584 6.54C12.0917 6.12667 11.5384 5.89333 11.0051 5.89333C10.5051 5.89333 10.1717 6.02001 9.81841 6.15334C9.48507 6.28001 9.1384 6.41333 8.70507 6.41333C8.24507 6.41333 7.86507 6.27334 7.49174 6.14667C7.1384 6.00667 6.7984 5.88666 6.3984 5.88666ZM8.37841 4.75334C8.35841 4.75334 8.33174 4.75334 8.31174 4.75334C8.07841 4.74667 7.87841 4.57334 7.83841 4.34001C7.69841 3.58668 7.96507 2.72 8.54507 2.01333C9.07841 1.36666 9.95841 0.886669 10.7384 0.833336C11.0117 0.820003 11.2317 1.00001 11.2651 1.26001C11.3784 2.04001 11.1317 2.89334 10.5784 3.60667C10.0384 4.30667 9.17841 4.75334 8.37841 4.75334ZM10.2651 1.96668C9.90507 2.11334 9.55174 2.36 9.31841 2.64667C9.09841 2.91334 8.89174 3.28668 8.82507 3.67334C9.18507 3.55334 9.54507 3.31333 9.79174 2.99333C9.92507 2.82666 10.1784 2.44001 10.2651 1.96668Z" fill={paymentMethod === "ApplePay" ? "black" : "#B3B3B3"} />
                  </svg>

                  Apple Pay
                </span>
                <span
                  onClick={() => setPaymentMethod("GooglePay")}
                  className={`relative z-2000  w-1/4 flex items-center justify-center gap-2 hover:cursor-pointer h-full rounded-xl text-sm ${paymentMethod === "GooglePay" ? "text-black" : "text-white-shade-8"}`}
                >
                  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.63427 15.1666C5.94093 15.1666 3.51427 13.68 2.27427 11.2866C2.25427 11.2666 2.24093 11.24 2.2276 11.2133C1.72093 10.2 1.46094 9.11998 1.46094 7.99998C1.46094 6.87998 1.72093 5.79997 2.2276 4.78664C3.45427 2.34664 5.9076 0.833313 8.6276 0.833313C10.4543 0.833313 12.1143 1.47997 13.4276 2.69997C13.5276 2.7933 13.5876 2.91998 13.5876 3.05998C13.5876 3.19998 13.5343 3.32666 13.4343 3.42666L11.5543 5.26664C11.3609 5.45331 11.0609 5.45998 10.8609 5.27332C10.4409 4.87998 9.71427 4.41331 8.6276 4.41331C7.25427 4.41331 5.99427 5.23999 5.4276 6.52665C5.38094 6.63332 5.34093 6.73331 5.30093 6.84664C5.17427 7.23331 5.11427 7.62665 5.11427 8.00665C5.11427 8.38665 5.18093 8.76665 5.30093 9.14665C5.30093 9.15331 5.3076 9.15999 5.3076 9.17332C5.7876 10.6267 7.12094 11.6 8.6276 11.6C9.42094 11.6 10.1009 11.4066 10.6543 11.02C11.1609 10.6666 11.4809 10.1933 11.6543 9.76664H8.63427C8.36093 9.76664 8.13427 9.53998 8.13427 9.26664V6.79331C8.13427 6.51998 8.36093 6.29331 8.63427 6.29331H14.8943C15.1276 6.29331 15.3276 6.45331 15.3809 6.67997C15.4876 7.14664 15.5343 7.58665 15.5343 8.15332C15.5343 10.2733 14.7743 12.1467 13.3876 13.4267C12.1543 14.56 10.5076 15.1666 8.63427 15.1666ZM3.0876 10.7C3.1076 10.7266 3.1276 10.76 3.14094 10.7933C4.1876 12.8666 6.29427 14.1666 8.63427 14.1666C10.2543 14.1666 11.6609 13.6533 12.7076 12.6866C13.8876 11.6 14.5343 9.98665 14.5343 8.14665C14.5343 7.81331 14.5209 7.54664 14.4809 7.28664H9.13427V8.75999H12.3076C12.4476 8.75999 12.5876 8.81999 12.6809 8.92666C12.7743 9.03332 12.8209 9.17999 12.8009 9.31999C12.7143 10.0667 12.2476 11.12 11.2276 11.8333C10.5076 12.3333 9.63427 12.5933 8.6276 12.5933C6.70094 12.5933 4.99427 11.3533 4.3676 9.49998C4.3676 9.49331 4.36094 9.48665 4.36094 9.47998C4.19427 8.99331 4.11427 8.49999 4.11427 8.00665C4.11427 7.51999 4.19427 7.02664 4.35427 6.53331C4.40094 6.38664 4.45427 6.25331 4.51427 6.11998C5.2476 4.47331 6.86094 3.41331 8.6276 3.41331C9.7676 3.41331 10.6076 3.81332 11.1809 4.23332L12.3476 3.09332C11.2943 2.26666 10.0143 1.83331 8.6276 1.83331C6.2876 1.83331 4.17427 3.13332 3.12094 5.23332C2.6876 6.10665 2.46094 7.03998 2.46094 7.99998C2.4676 8.93998 2.67427 9.84664 3.0876 10.7Z" fill={paymentMethod === "GooglePay" ? "black" : "#B3B3B3"} />
                  </svg>

                  Google Pay
                </span>
              </div>
              <div className='grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-6 lg:mt-10 '>
                <Input placeholder={'Example@gmail.com'} class={''} lable='Email address' icon={<Email />}  />
                <Input placeholder={'Jason james'} class={''} lable='Cardholder name' icon={<UserIcon />}  />
                <Input placeholder={'xxx xxx xxx xxx'} class={'lg:col-span-2'} lable='Credit card number' icon={<CartIcon />}  />
                <Input placeholder={'MM'} class={''} lable='Expiry date' icon={<Calendar />} />
                <Input placeholder={'YYY'} class={'self-end'} lable='' icon={<Calendar />} />
                <Input placeholder={'xxxx'} class={''} lable='CVV2' icon={<CartIcon />} />
                <Input placeholder={'123456'} class={''} lable='Zip code' icon={<Website />} />

                <Button content={'Purchase'} classes={'py-4 rounded-xl col-span-2  w-full bg-blue'} />
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>)
}

export default page