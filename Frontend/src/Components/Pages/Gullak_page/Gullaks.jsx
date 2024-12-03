import React from "react";
// import { Gullak } from "../../Components/Common/Gullak";
// import { Add_gullak } from "../../Components/Common/Add-Gullak";
import { Gullak } from "../../Common/Gullak"
import {Add_gullak} from "../../Common/Add-Gullak"
export function Gullaks() {
    const gullaks = [
      { name: "Bike", totalAmount: 13000, currentAmount: 5000 },
      { name: "Trip", totalAmount: 20000, currentAmount: 7000 },
      { name: "Trip", totalAmount: 20000, currentAmount: 7000 },
      { name: "Trip", totalAmount: 20000, currentAmount: 7000 },
      { name: "Savings", totalAmount: 50000, currentAmount: 30000 },
      { name: "Shopping", totalAmount: 10000, currentAmount: 5000 },
      { name: "Shopping", totalAmount: 10000, currentAmount: 5000 },
      { name: "Shopping", totalAmount: 10000, currentAmount: 5000 },
      { name: "Party", totalAmount: 5000, currentAmount: 2000 },
      { name: "Party", totalAmount: 5000, currentAmount: 2000 },
      { name: "Party", totalAmount: 5000, currentAmount: 2000 },
      { name: "Party", totalAmount: 5000, currentAmount: 2000 },
      
    ];

    const colors = ["blue", "amber", "rose", "green", "pink", "violet"];
  return (
    <>
      <div className="bg-white  rounded-lg flex flex-col justify-evenly shadow-lg items-center col-span-6 row-span-7 overflow-hidden">
        <div className="w-[100%] h-[4%] flex justify-start  items-center px-5">
          <div className="w-[auto] h-[auto] tracking-wider text-[1.5em] font-semibold px-3">
            <p>Your Gullaks</p>
          </div>
        </div>

        <div className="w-[95%] h-[440px] hide-scrollbar bg-gray-50 flex flex-wrap gap-[30px] overflow-y-scroll pl-5  rounded-md py-8">
        <Add_gullak></Add_gullak>
        {gullaks.map((gullak, index) => (
          <Gullak key={index} gullak={gullak} color={colors[index % colors.length]} />
        ))}
        </div>
      </div>
    </>
  );
}