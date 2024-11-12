import React from "react";
import Logo from "../../Assets/Logo2.png";

export function Header() {
  return (
    <>
      <div class="flex items-center justify-start  h-[100%] w-[24%]">
        <img src={Logo} alt="Logo" class="h-12 w-20%" />
        <h1 class="text-3xl font-bold tracking-wide text-[#FDF209]">
          MitraPay
        </h1>
      </div>

      <div className="h-[100%] w-[75%] flex justify-evenly items-center">
        <div className=" w-[65%] h-[85%] flex flex-col justify-center items-start  rounded-md">
          <div className="text-black h-[40%] text-[21px] font-bold   ml-2">
            <h1>Hello! Tanmay Sharma</h1>
          </div>
          <div className="h-[40%] text-gray-600 ml-2">
            <p>Good Morning</p>
          </div>
        </div>
        <div className=" h-[100%] flex items-center justify-center">
          <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
            <span className="sr-only">Notifications</span>
            <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full"></span>
            <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping"></span>
            <svg
              aria-hidden="true"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>
        </div>
        <div className="w-[30%] h-[100%]  flex flex-col justify-center items-center">
          <button className="inline-flex px-5 py-3  text-white bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 rounded-md ">
            <svg
              aria-hidden="true"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            Manage Transactions
          </button>
        </div>
      </div>
    </>
  );
}

