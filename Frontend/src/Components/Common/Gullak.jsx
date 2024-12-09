import React, { useState } from "react";
import Add_money from "../../Assets/Add_money.png";
import piggy_break from "../../Assets/piggy-bank_break.png";
import { useModal } from "../../StateProvider/ModalProvider";
import { useStateContext } from "../../StateProvider/StateProvider";

//Blue, Green, Pink, Violet, Rose, Amber
export function Gullak({ gullak, color }) {
  const  {openModal, closeModal}  = useModal();
  const { gullaks, removeGullak } = useStateContext();
  const [addMoneyHover, setAddMoneyHover] = useState(false);
  const [breakMoneyHover, setBreakMoneyHover] = useState(false);

  const handleMouseEnter = () => {
    setAddMoneyHover(true);
  };

  const handleMouseLeave = () => {
    setAddMoneyHover(false);
  };

  const handleMouseEnterBreak = () => {
    setBreakMoneyHover(true);
  };

  const handleMouseLeaveBreak = () => {
    setBreakMoneyHover(false);
  };

  const percentage = Math.floor((gullak.currentAmount / gullak.totalAmount) * 100);

  // Define static color mappings
  const colorStyles = {
    blue: { borderColor: "#93C5FD", textColor: "#3B82F6", bgColor: "#3B82F6" },
    green: { borderColor: "#86EFAC", textColor: "#22C55E", bgColor: "#22C55E" },
    pink: { borderColor: "#F9A8D4", textColor: "#EC4899", bgColor: "#EC4899" },
    violet: { borderColor: "#C4B5FD", textColor: "#8B5CF6", bgColor: "#8B5CF6" },
    rose: { borderColor: "#FECACA", textColor: "#F43F5E", bgColor: "#F43F5E" },
    amber: { borderColor: "#FDE68A", textColor: "#F59E0B", bgColor: "#F59E0B" },
  };

  const styles = colorStyles[color] || colorStyles.blue; // Default to blue if color is not defined

  return (
    <div
      style={{
        border: `2px solid ${styles.borderColor
          }`,
      }}
      className="h-[150px] w-[170px] min-w-[30%] rounded-md shadow-lg bg-[#FAF9F6]"
    >
      <div className="w-[100%] h-[30%] flex p-1">
        <div
          style={{ color: styles.textColor }}
          className="w-[60%] h-[100%] text-[1.5em] flex items-center font-semibold px-1"
        >
          <p>{gullak?.name}</p>
        </div>
        <div className="w-[40%] h-[100%] flex justify-between">
          {/* Add Money Button */}
          <div
            style={{ backgroundColor: addMoneyHover ? styles.borderColor : "" }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => openModal("addMoney")}
            className=" relative w-[48%] h-[100%] p-1 flex flex-col items-center justify-center rounded-full group">
            <img
              src={Add_money}
              alt="Add Money"
              className="w-[1.7em] h-[1.7em]"
            />
            <div className="w-[75px] absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden rounded-md group-hover:block bg-gray-600 text-white text-[0.7em]  py-1 px-2 z-10">
              <p>Add Money</p>
            </div>
          </div>

          {/* Break Piggy Bank Button */}
          <div
            style={{ backgroundColor: breakMoneyHover ? styles.borderColor : "" }}
            onMouseEnter={handleMouseEnterBreak}
            onMouseLeave={handleMouseLeaveBreak} 
            onClick={() => removeGullak(gullak.name)}
            className="relative w-[48%] h-[100%] p-1 flex flex-col items-center justify-center rounded-full group">
            <img
              src={piggy_break}
              alt="Break Piggy Bank"
              className="w-[1.7em] h-[1.7em]"
            />
            <div className="w-[80px] absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden rounded-md group-hover:block bg-gray-600 text-white text-[0.7em] py-1 px-2 z-10">
              <p>Break Gullak</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[60%] p-1 flex flex-col items-center justify-between">
        <div
          style={{ color: styles.textColor }}
          className="w-auto h-[40%] p-1 text-[1.7em] font-semibold tracking-tight"
        >
          <p>{`₹${gullak?.currentAmount}/${gullak?.totalAmount}/-`}</p>
        </div>
        <div className="w-[95%] h-[27%] border-[1px] bg-gray-200 rounded-full">
          <div
            style={{
              width: `${percentage}%`,
              backgroundColor: styles.bgColor,
              color: "white",
            }}
            className="h-full rounded-full flex flex-col justify-center items-center text-[0.8em] px-1"
          >
            <p>{`${percentage}%`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
