import React from "react";
import Boy from "../../assets/boy.png";

export function Transaction() {
  return (
    <>
      <a href="" className="flex justify-evenly items-center w-[730px] h-[40px] border-b-2 bg-gray-50 px-1 border-blue-200 hover:bg-blue-100 rounded-md hover:border-b-blue-400 mb-[6px] ">
        <div className="w-[40%] h-[95%]     px-1 flex items-center">
          <div className="w-[14%] h-[98%] flex items-center  ">
            <div className="h-[97%] w-[90%] overflow-hidden rounded-full  ">
              <img src={Boy} alt="" />
            </div>
          </div>
          <div className="w-[56%] h-[98%] flex items-center text-[1rem] font-semibold tracking-wider px-2">
            <p>Naman Malik</p>
          </div>
        </div>
        <div className="w-[20%] h-[100%]  text-[1rem] flex items-center">
          <p>Dec 3,2024</p>
        </div>
        <div className="w-[20%] h-[100%] flex items-center text-[1rem] ">
          <p>10:45 am</p>
        </div>
        <div className="w-[20%] h-[100%]  tracking-tight flex items-center justify-evenly text-[1rem] font-bold text-[#af4848]">
          <p>- ₹5987</p>
        </div>
      </a>
    </>
  );
}
//green : #5ce05c
//red : #af4848
