import React from "react";
import { Carousel } from "./Carousel";

export  function Profile(){
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
        <div className="w-[100%] h-[58%] ">
          <div className="flex justify-start w-[100%] h-[15%]  text-2xl font-semibold tracking-tighter px-4">
            <p>Personal Information</p>
          </div>
          <div className=""></div>
        </div>
      </div>
    </>
  );
}