import React from "react";
import { Transaction } from "../../Common/Transaction";
export function Transactions() {
  return (
    <>
      <div className="bg-white shadow-lg justify-evenly overflow-y-hidden border-[1px] flex flex-col items-center rounded-lg py-3 col-span-6 row-span-7">
        
          <div className="w-[95%] h-[8%] flex border-b-2 border-gray-400">
            <div className="w-[90%]  flex justify-start text-xl font-semibold ">
              <p>Transaction History</p>
            </div>
            
          </div>
          {/* <hr className="w-[95%] border-t-2 border-gray-400 items-center mb-[10px]" /> */}
          <div className="w-[95%] h-[420px] hide-scrollbar flex flex-col items-center  overflow-y-scroll justify-start p-1 bg-gray-50 rounded-md">
            <Transaction></Transaction>
            <Transaction></Transaction>
            <Transaction></Transaction>
            
          </div>
        
      </div>
    </>
  );
}
