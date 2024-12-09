import React from "react";
import { Gullak } from "../../Common/Gullak"
import {Add_gullak} from "../../Common/Add-Gullak"
import { useStateContext } from "../../../StateProvider/StateProvider";

export function Gullaks() {
  const { gullaks } = useStateContext();

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