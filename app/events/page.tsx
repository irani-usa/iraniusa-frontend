import OverlayMenu from "@/components/Layout/OverlayMenu";
import PopularConcert from "@/components/Pages/Events/PopularConcert";
import PopularSeminar from "@/components/Pages/Events/PopularSeminar";
import UpcomingEvent from "@/components/Pages/Events/UpcomingEvent";
import React from "react";

const page = () => {
  return (
    <>
      <OverlayMenu />
      <section className=" py-10 lg:flex items-center container">
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
          <h1 className="text-white-shade-9 py-5 pl-6 font-opensans text-base flex  items-center pr-3 justify-between">
            Concerts
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.99935 18.9583C5.05768 18.9583 1.04102 14.9417 1.04102 9.99999C1.04102 5.05832 5.05768 1.04166 9.99935 1.04166C14.941 1.04166 18.9577 5.05832 18.9577 9.99999C18.9577 14.9417 14.941 18.9583 9.99935 18.9583ZM9.99935 2.29166C5.74935 2.29166 2.29102 5.74999 2.29102 9.99999C2.29102 14.25 5.74935 17.7083 9.99935 17.7083C14.2493 17.7083 17.7077 14.25 17.7077 9.99999C17.7077 5.74999 14.2493 2.29166 9.99935 2.29166Z"
                fill="#A6A6A6"
              />
              <path
                d="M8.94909 13.5667C8.79075 13.5667 8.63242 13.5083 8.50742 13.3833C8.26576 13.1417 8.26576 12.7417 8.50742 12.5L11.0074 10L8.50742 7.50001C8.26576 7.25834 8.26576 6.85834 8.50742 6.61667C8.74909 6.37501 9.14909 6.37501 9.39076 6.61667L12.3324 9.55834C12.5741 9.80001 12.5741 10.2 12.3324 10.4417L9.39076 13.3833C9.26576 13.5083 9.10742 13.5667 8.94909 13.5667Z"
                fill="#A6A6A6"
              />
            </svg>
          </h1>
          <h1 className="text-white-shade-9 py-5 pl-6 flex  items-center justify-between pr-3 font-opensans text-base">
            Conference
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.99935 18.9583C5.05768 18.9583 1.04102 14.9417 1.04102 9.99999C1.04102 5.05832 5.05768 1.04166 9.99935 1.04166C14.941 1.04166 18.9577 5.05832 18.9577 9.99999C18.9577 14.9417 14.941 18.9583 9.99935 18.9583ZM9.99935 2.29166C5.74935 2.29166 2.29102 5.74999 2.29102 9.99999C2.29102 14.25 5.74935 17.7083 9.99935 17.7083C14.2493 17.7083 17.7077 14.25 17.7077 9.99999C17.7077 5.74999 14.2493 2.29166 9.99935 2.29166Z"
                fill="#A6A6A6"
              />
              <path
                d="M8.94909 13.5667C8.79075 13.5667 8.63242 13.5083 8.50742 13.3833C8.26576 13.1417 8.26576 12.7417 8.50742 12.5L11.0074 10L8.50742 7.50001C8.26576 7.25834 8.26576 6.85834 8.50742 6.61667C8.74909 6.37501 9.14909 6.37501 9.39076 6.61667L12.3324 9.55834C12.5741 9.80001 12.5741 10.2 12.3324 10.4417L9.39076 13.3833C9.26576 13.5083 9.10742 13.5667 8.94909 13.5667Z"
                fill="#A6A6A6"
              />
            </svg>
          </h1>
          <h1 className="text-white bg-red  py-5 pl-6   font-opensans text-base">
            seminar
          </h1>
          <h1 className="text-white-shade-9 py-5 pl-6 flex  items-center justify-between font-opensans text-base pr-3">
            exhibition
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.99935 18.9583C5.05768 18.9583 1.04102 14.9417 1.04102 9.99999C1.04102 5.05832 5.05768 1.04166 9.99935 1.04166C14.941 1.04166 18.9577 5.05832 18.9577 9.99999C18.9577 14.9417 14.941 18.9583 9.99935 18.9583ZM9.99935 2.29166C5.74935 2.29166 2.29102 5.74999 2.29102 9.99999C2.29102 14.25 5.74935 17.7083 9.99935 17.7083C14.2493 17.7083 17.7077 14.25 17.7077 9.99999C17.7077 5.74999 14.2493 2.29166 9.99935 2.29166Z"
                fill="#A6A6A6"
              />
              <path
                d="M8.94909 13.5667C8.79075 13.5667 8.63242 13.5083 8.50742 13.3833C8.26576 13.1417 8.26576 12.7417 8.50742 12.5L11.0074 10L8.50742 7.50001C8.26576 7.25834 8.26576 6.85834 8.50742 6.61667C8.74909 6.37501 9.14909 6.37501 9.39076 6.61667L12.3324 9.55834C12.5741 9.80001 12.5741 10.2 12.3324 10.4417L9.39076 13.3833C9.26576 13.5083 9.10742 13.5667 8.94909 13.5667Z"
                fill="#A6A6A6"
              />
            </svg>
          </h1>
        </div>
        <div className="lg:pl-5">
          <div className="flex justify-between items-center">
            <h1 className="text-black text-xl font-semibold">
              Popular seminars
            </h1>
            <div className=" items-center justify-center bg-white-shade-4 py-5 px-6 rounded-full hidden lg:flex">
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
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
                city={"Washington DC"} classes={"w-full  lg:w-2/3"}/>
         
      
              <PopularSeminar
              content={"How to start from scratch"}
              people={"70-100"}
              organizer={"Mohammad ghaem"}
              date={"11/7/16"}
              city={"Washington DC"} classes={"hidden lg:flex w-2/3"}       />
         
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
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </section>
        </div>
    
      </section>
     <section className="container">
     <hr className=" w-full h-[1.5px] bg-white-shade-4 hidden lg:flex" />
     <h1 className="text-black text-xl font-semibold py-4 lg:py-7">
     Upcoming events
            </h1>
            <hr className=" w-full h-[1.5px] bg-white-shade-4 hidden lg:flex" />
           <div className="flex flex-col gap-y-11 py-4">
             <UpcomingEvent buttonn={"Sold Out"} classes={""}  />
             <UpcomingEvent buttonn={"Book now"} classes={"text-black w-full py-4 bg-[#0112231A] rounded-2xl"}  />
             <UpcomingEvent buttonn={"Book now"} classes={"text-black w-full py-4 bg-[#0112231A] rounded-2xl"}  />
           </div>
     </section>
     <section className="container py-7">
     <div className="flex items-center justify-between">
     <h1 className="text-black text-xl font-bold py-7 font-outfit">
     Popular concerts
            </h1>
            <h1 className="text-white-shade-11 font-opensans font-semibold">See all</h1>
     </div>
     <div className="lg:flex gap-x-6">
      <PopularConcert content={"Shadmehr aghili"} concert={"Dumbarton concerts"} date={"11/7/16"} city={"Washington DC"} classes={""} price={"$67"} />
      <PopularConcert content={"Shadmehr aghili"} concert={"Dumbarton concerts"} date={"11/7/16"} city={"Washington DC"} classes={"hidden lg:flex"} price={"$67"} />
      <PopularConcert content={"Shadmehr aghili"} concert={"Dumbarton concerts"} date={"11/7/16"} city={"Washington DC"} classes={"hidden lg:flex"} price={"$67"} />
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
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </section>
     </section>
    </>
  );
};

export default page;
