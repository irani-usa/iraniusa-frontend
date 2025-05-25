import React from "react";
import LocationSelect from "./LocationSelect";
import DateSelect from "./DateSelect";
import EventTypeSelect from "./EventTypeSelect";

const EventFilter = () => {
  return (
    <section className="w-11/12 flex flex-col gap-y-8 justify-center items-center my-16 rounded-2xl">
      <div className="flex lg:flex-row flex-col items-center gap-x-1 gap-y-3 p-2 w-full h-auto lg:h-40 bg-white-shade-3 rounded-3xl">
        <LocationSelect />
        <DateSelect />
        <EventTypeSelect />
        <button className="w-full lg:w-1/4 h-24 lg:h-full font-opensans text-xl rounded-3xl bg-black text-white flex items-center justify-center border-2 border-black hover:bg-black/0 transition-all duration-300 hover:text-black">
          Search
        </button>
      </div>
    </section>
  );
};

export default EventFilter;
