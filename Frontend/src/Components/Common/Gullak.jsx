import React from "react";
import Add_money from "../../Assets/Add_money.png"
import piggy_break from "../../Assets/piggy-bank_break.png"
//Blue,Green,Pink,Violet,Rose,Amber
export function Gullak() {
  return (
    <div className="h-[100%] w-[30%] border-[0.1px] border-amber-300 rounded-md shadow-lg bg-[#FAF9F6]">
      <div className="w-[100%] h-[30%] flex  p-1">
        <div className="w-[60%] h-[100%]  text-[1.5em] flex items-center text-amber-500 font-semibold px-1">
          <p>Bike</p>
        </div>
        <div className="w-[40%] h-[100%] flex justify-between ">
          <div className="w-[48%] h-[100%]  p-1 flex flex-col items-center justify-center hover:bg-amber-200 hover:rounded-full ">
            <img src={Add_money} alt="" className="w-[1.7em] h-[1.7em]" />
          </div>
          <div className="w-[48%] h-[100%]  p-1 flex flex-col items-center justify-center hover:bg-amber-200 hover:rounded-full ">
            <img src={piggy_break} alt="" className="w-[1.7em] h-[1.7em]" />
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[60%] p-1 flex flex-col items-center justify-between ">
        <div className="w-[auto] h-[40%] p-1 text-[1.7em] font-semibold tracking-tight text-amber-400">
          <p>₹5000/13000/-</p>
        </div>
        <div className="w-[95%] h-[27%] border-[1px] bg-gray-200 rounded-full">
          <div className="w-[35%] h-full rounded-full bg-amber-500 flex flex-col justify-center items-center text-[0.8em] px-1  text-white">
            <p>35%</p>
          </div>
         </div>
        
      </div>
    </div>
  );
}
