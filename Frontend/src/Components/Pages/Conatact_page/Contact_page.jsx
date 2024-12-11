import React, { useState, useEffect, useRef } from "react";
import { Contact } from "./Contact";
import { Message } from "./Message";
import { Chat } from "./Chat";
import send from "../../../assets/send.png"

export function Contact_page() {

  return (
    <>
      <div className="bg-white  rounded-lg flex flex-col justify-evenly shadow-lg items-center col-span-6 row-span-7 ">
        <Contact></Contact>
        <Chat></Chat>
        <div className="w-[100%] h-[12%]  border-[1px] border-gray-300 rounded-b-lg bg-gray-100 flex justify-evenly items-center">
          <div className="w-[90%] h-[85%]  flex justify-center items-center">
            <input
              type="text"
              placeholder="Type your Message here..."
              className="w-[100%] h-[85%] px-4 rounded-2xl  outline-none border-[1px] border-gray-400"
            />
          </div>
          <div className="w-[5%] h-[60%] flex justify-center items-center p-1">
            <button class="  focus:outline-none  flex items-center hover:-rotate-45 delay-150">
              <div className="w-[35px] h-[20px] flex justify-center items-center">
                <img src={send} alt="" className="w-[45px] h-[40px]" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}