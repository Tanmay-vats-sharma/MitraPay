import React from "react";
import { Contact } from "./Contact";

export function Contact_page() {
  return (
    <>
      <div className="bg-white  rounded-lg flex flex-col justify-evenly shadow-lg items-center col-span-6 row-span-7 ">
        {/* <div className="w-[100%] h-[13%] border-[1px] border-slate-500 bg-gray-50 rounded-t-lg flex justify-between item p-1">
          <div className="w-[70%]  h-[100%]  flex items-center px-2">
            <div className="h-[95%] w-[10%] overflow-hidden rounded-full">
              <img src={Boy} alt="" />
            </div>
            <div className="w-[60%] h-[100%]  flex flex-col justify-evenly items-center p-1">
              <div className="w-[90%]  h-[50%] text-[1.2rem] font-semibold tracking-tighter">
                <p>Tanmay Sharma</p>
              </div>
              <div className=" w-[90%]  h-[50%] text-[0.9rem] text-gray-400 font-semibold flex items-center">
                <p>8076917248</p>
              </div>
            </div>
          </div>
          <div className="w-[20%] border-2 border-red-400 h-[100%] flex justify-end p-4">
            <Dropdown></Dropdown>
          </div>
        </div> */}
        <Contact></Contact>
        <div className="w-[100%] h-[75%] border-2 border-red-500 bg-blue-50"></div>
        <div className="w-[100%] h-[12%] border-2 border-red-500 bg-blue-50"></div>
      </div>
    </>
  );
}