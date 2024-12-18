import React, { useState } from "react";
import { Gullak } from "../../Common/Gullak"
import { Add_gullak } from "../../Common/Add-Gullak"
import { useStateContext } from "../../../StateProvider/StateProvider";
import config from "../../../Config/config.json";
import { Link } from "react-router-dom";

export function Gullaks() {
  const { gullaks } = useStateContext();

  const colors = config.gullaks.colors;
  return (
    <>
      <div className="bg-white  rounded-lg flex flex-col justify-evenly shadow-lg items-center col-span-6 row-span-3 ">
        <div className="w-[100%] h-[20%]  flex justify-between  items-center p-1">
          <div className="w-[auto] h-[auto] text-xl font-semibold px-3">
            <p>Your Gullaks</p>
          </div>
          <div className="w-[auto] h-[auto] text-lg font-semibold text-blue-400 hover:cursor-pointer hover:text-blue-700 px-3">
            <Link to="/gullaks">
              <p>View All</p>
            </Link>
          </div>
        </div>

        <div className="w-[98%] h-[80%]  flex justify-start px-1 gap-6">
          <Add_gullak></Add_gullak>
          {gullaks.slice(0, 2).map((gullak, index) => (
            <Gullak key={index} gullak={gullak} color={index === 0 ? "amber" : "green"} />
          ))}
        </div>
      </div>
    </>
  );
}