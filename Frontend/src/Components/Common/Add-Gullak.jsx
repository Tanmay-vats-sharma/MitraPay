import React from "react";
import Add_piggy from "../../Assets/Add-piggy.png"
import { useModal } from "../../StateProvider/ModalProvider";
import config from "../../Config/config.json";
import { useStateContext } from "../../StateProvider/StateProvider";

export function Add_gullak() {
  const { openModal } = useModal();
  const { gullaks } = useStateContext();
  
  const colors = config.gullaks.colors;
  // Calculate the style index based on the number of existing gullaks
  const styleIndex = (gullaks.length) % colors.length;
  const selectedColor = colors[styleIndex];

  return (
    <div 
    onClick={() => openModal({type: "addGullak", color: selectedColor})}
    className="h-[150px] w-[170px] min-w-[30%] border-[2px] border-blue-300 rounded-md shadow-lg bg-[#FAF9F6] flex flex-col justify-center items-center hover:bg-blue-50">
      <div className="w-[100%] h-[20%] flex  px-1">
        <div className="w-[100%] h-[100%]  text-[1.3em] flex items-center text-blue-500 font-semibold px-1">
          <p>Add Gullak</p>
        </div>
      </div>
      <div className="w-[100%] h-[75%] flex items-center justify-center">
        <div className="h=[35%] w-[35%]">
          <img src={Add_piggy} alt="" />
        </div>
      </div>
    </div>
  );
}
