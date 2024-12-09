import React from "react";
import { Carousel } from "./Carousel";

export  function Profile(){
  return (
    <>
      <div className="bg-white  rounded-lg flex flex-col justify-evenly shadow-lg items-center col-span-6 row-span-7 ">
        <div className="w-[100%] h-[45%]">
          <div className="w-[100%] h-[18%] flex justify-between items-center px-2">
            <div className="w-[25%] h-[100%] flex items-center px-1 text-2xl font-semibold tracking-tighter">
              <p>Choose Avatar</p>
            </div>
            <button className="bg-blue-600 w-[15%] h-[80%] flex rounded-md  justify-center px-1 items-center hover:bg-blue-800 ">
              <div className="w-[60%]   text-[0.9rem] text-white font-mono">
                Save
              </div>
            </button>
          </div>
          <div className="w-[100%] h-[80%] flex items-center justify-center ">
             <Carousel></Carousel>
          </div>
        </div>
        <div className="w-[100%] h-[53%] border-2 border-red-400"></div>
      </div>
    </>
  );
}