import React from "react";
// import { Gullak } from "../../Components/Common/Gullak";
// import { Add_gullak } from "../../Components/Common/Add-Gullak";
import { Gullak } from "../../Common/Gullak"
import {Add_gullak} from "../../Common/Add-Gullak"
export function Gullaks() {
    const gullaks = [
      { name: "Bike", totalAmount: 13000, currentAmount: 5000 },
      { name: "Trip", totalAmount: 20000, currentAmount: 7000 },
      { name: "Savings", totalAmount: 50000, currentAmount: 30000 },
      { name: "Shopping", totalAmount: 10000, currentAmount: 5000 },
      { name: "Party", totalAmount: 5000, currentAmount: 2000 },
      { name: "Gift", totalAmount: 2000, currentAmount: 1000 },
    ];

    const colors = ["blue", "amber", "rose", "green", "pink", "violet"];
  return (
    <>
      <div className="bg-white  rounded-lg flex flex-col justify-evenly shadow-lg items-center col-span-6 row-span-7 overflow-hidden">
        <div className="w-[100%] h-[5%] flex justify-between  items-center px-5">
          <div className="w-[auto] h-[auto] text-xl font-semibold px-3">
            <p>Your Gullaks</p>
          </div>
          <div className="w-[auto] h-[auto] text-lg font-semibold text-blue-400 hover:cursor-pointer hover:text-blue-700 px-3">
            <a href="#">
              <p>View All</p>
            </a>
          </div>
        </div>

        <div className="w-auto h-[400px] flex flex-wrap gap-[25px] overflow-y-scroll pl-5">
        <Add_gullak></Add_gullak>
        {gullaks.map((gullak, index) => (
          <Gullak key={index} gullak={gullak} color={colors[index % colors.length]} />
        ))}
        </div>
      </div>
    </>
  );
}