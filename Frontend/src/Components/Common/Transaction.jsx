import React from "react";
import Boy from "../../assets/boy.png";

export function Transaction({ name, date, time, amount, image }) {
  const amountColor = amount < 0 ? "text-[#af4848]" : "text-[#48af48]";
  const formattedAmount = `${amount < 0 ? "-" : "+"} ₹${Math.abs(amount)}`;
  return (
    <>
      <a href="" className="flex justify-evenly items-center w-[730px] h-[40px] border-b-2 bg-gray-100 px-2 pl-5 border-blue-200 hover:bg-blue-100 rounded-md hover:border-b-blue-400 mb-[6px] ">
        <div className="w-[40%] h-[95%]     px-1 flex items-center">
          <div className="w-[14%] h-[98%] flex items-center  ">
            <div className="h-[97%] w-[90%] overflow-hidden rounded-full  ">
              <img src={image} alt="" />
            </div>
          </div>
          <div className="w-[56%] h-[98%] flex items-center text-[1rem] font-semibold tracking-wider px-2">
            <p>{name}</p>
          </div>
        </div>
        <div className="w-[20%] h-[100%]  text-[1rem] flex items-center">
          <p>{date}</p>
        </div>
        <div className="w-[20%] h-[100%] flex items-center text-[1rem] ">
          <p>{time}</p>
        </div>
        <div
          className={`w-[20%] h-[100%] tracking-tight flex items-center justify-evenly text-[1rem] font-bold ${amountColor}`}
        >
          <p>{formattedAmount}</p>
        </div>
      </a>
    </>
  );
}
//green : #5ce05c
//red : #af4848
