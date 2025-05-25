import React from "react";

const UserTitle = () => {
  return (
    <section className="absolute left-5 lg:left-[33%] top-[160px]  lg:top-32 lg:flex lg:gap-x-4">
      <div className=" flex flex-col gap-y-2  lg:gap-y-0 ">
        <h1 className=" text-black font-outfit font-semibold text-xl lg:ml-2">
          Amin gholami
        </h1>
        <div className="w-full flex items-center font-medium gap-x-6 text-white-shade-9 font-opensans lg:text-lg">
          <span>Product designer</span>
          <span className="flex items-center gap-x-2 lg:hidden">
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
                d="M0 7.51503C0 3.59581 3.12401 0.400391 7 0.400391C10.876 0.400391 14 3.59581 14 7.51503C14 9.40711 13.4608 11.4387 12.5076 13.1939C11.5555 14.9469 10.1645 16.4702 8.42441 17.2835C7.52045 17.706 6.47955 17.706 5.57559 17.2835C3.8355 16.4702 2.44449 14.9469 1.49244 13.1939C0.539223 11.4387 0 9.40711 0 7.51503ZM7 1.60039C3.80675 1.60039 1.2 4.23838 1.2 7.51503C1.2 9.19268 1.68211 11.0287 2.54696 12.6212C3.41299 14.2158 4.63682 15.5201 6.08372 16.1964C6.66564 16.4684 7.33436 16.4684 7.91628 16.1964C9.36318 15.5201 10.587 14.2158 11.453 12.6212C12.3179 11.0287 12.8 9.19268 12.8 7.51503C12.8 4.23838 10.1933 1.60039 7 1.60039ZM7 5.60039C6.00589 5.60039 5.2 6.40628 5.2 7.40039C5.2 8.3945 6.00589 9.20039 7 9.20039C7.99411 9.20039 8.8 8.3945 8.8 7.40039C8.8 6.40628 7.99411 5.60039 7 5.60039ZM4 7.40039C4 5.74354 5.34315 4.40039 7 4.40039C8.65685 4.40039 10 5.74354 10 7.40039C10 9.05725 8.65685 10.4004 7 10.4004C5.34315 10.4004 4 9.05725 4 7.40039Z"
                fill="#A6A6A6"
              />
            </svg>
            Los angles
          </span>
        </div>
      </div>
    </section>
  );
};

export default UserTitle;
