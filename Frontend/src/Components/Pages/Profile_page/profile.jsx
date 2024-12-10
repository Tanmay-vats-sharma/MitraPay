import React from "react";
import { Carousel } from "./Carousel";

export function Profile() {
  return (
    <>
      <div className="bg-white  rounded-lg flex flex-col justify-evenly shadow-lg items-center col-span-6 row-span-7 p-1">
        <div className="w-[100%] h-[40%]">
          <div className="w-[100%] h-[18%] flex justify-between items-center px-2">
            <div className="w-[25%] h-[100%] flex items-center px-2 text-2xl font-semibold tracking-tighter">
              <p>Choose Avatar</p>
            </div>
            <button className="bg-blue-600 w-[15%] h-[80%] flex rounded-md  justify-center px-1 items-center hover:bg-blue-800 ">
              <div className="w-[60%]   text-[0.9rem] text-white font-mono">
                Save
              </div>
            </button>
          </div>
          <div className="w-[100%] h-[75%] flex items-center justify-center ">
            <Carousel></Carousel>
          </div>
        </div>
        <div className="w-[100%] h-[58%] px-2">
          <div className="flex justify-start w-[100%] h-[14%]  text-2xl font-semibold tracking-tighter px-3">
            <p>Personal Information</p>
          </div>
          <div className="flex flex-col justify-evenly w-[100%] h-[86%] border-2 border-red-400  ">
            <div className="h-[20%] border-2 border-red-700 flex ">
              <div className="w-[50%] h-[100%] flex flex-col justify-evenly" >
                <div className="h-[50%] w-[100%] text-lg font-semibold flex justify-start px-2 items-center">
                  <p>First Name</p>
                </div>
                <div className="h-[50%] w-[100%] flex justify-start px-2">
                   <input type="text" placeholder="Tanmay Sharma" className="h-[100%] px-2"/>
                </div>
              </div>
              <div className="w-[50%] h-[100%]">
                <div className=""></div>
                <div className=""></div>
              </div>
            </div>
            <div className="h-[20%] "></div>
            <div className="h-[20%] "></div>
            <div className="h-[20%] "></div>
            <div className="h-[20%] "></div>
          </div>
        </div>
      </div>
    </>
  );
}
