import React from "react";
import { Contact } from "./Contact";

export function Contact_page() {
  return (
    <>
      <div className="bg-blue-50  rounded-lg flex flex-col justify-evenly shadow-lg items-center col-span-6 row-span-7 ">
        <Contact></Contact>
        <div className="w-[100%] h-[75%]  "></div>
        <div className="w-[100%] h-[12%]   flex justify-around items-center">
          <div className="w-[5%] h-[80%]  flex justify-center items-center">
            <button class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 10l4-4m0 0l-4-4m4 4H7m10 4l-4 4m0 0l4 4m-4-4H7"
                ></path>
              </svg>
            </button>
          </div>
          <div className="w-[80%] h-[80%]  flex justify-center items-center">
            <input
              type="text"
              placeholder="Type your Message here..."
              className="w-[100%] h-[100%] p-2 rounded-2xl bg-gray-50 outline-none border-[1px] border-black"
            />
          </div>
          <div className="w-[5%] h-[80%] border-2 flex justify-center items-center">
            <button class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 10l4-4m0 0l-4-4m4 4H7m10 4l-4 4m0 0l4 4m-4-4H7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}