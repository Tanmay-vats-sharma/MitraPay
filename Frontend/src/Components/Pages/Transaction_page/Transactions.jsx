import React from "react";
import { Transaction } from "../../Common/Transaction";
import Add_money_button from "../../../Assets/Add_money_button.png"
import { useModal } from "../../../StateProvider/ModalProvider";
export function Transactions() {
  const { openModal } = useModal();
  return (
    <>
      <div className="bg-white shadow-lg justify-evenly overflow-y-hidden border-[1px] flex flex-col items-center rounded-lg py-3 col-span-6 row-span-7">
        <div className="w-[95%] h-[8%] flex justify-between border-b-2 p-1 border-gray-400">
          <div className="w-[auto]  flex  text-xl font-semibold ">
            <p>Transaction History</p>
          </div>
          <div className="w-[45%] h-[100%] flex justify-around">
            <button
              onClick={() => openModal({ type: "addMoneyInWallet", color: "blue" })}
              className="bg-blue-600 w-[40%] flex rounded-md  justify-center px-1 items-center hover:bg-blue-800 "
            >
              <div className="w-[20%] mb-[1px] text-white text-[25px] font-mono ">
                +
              </div>
              <div className="w-[60%]   text-[0.9rem] text-white font-mono">
                Add Money
              </div>
            </button>
            <button
              onClick={() => openModal({ type: "sendMoney", color: "blue" })}
              className="bg-blue-600 w-[40%] flex rounded-md border-[1px] border-gray-400 justify-center p-1 items-center hover:bg-blue-800"
            >
              <div className="w-[20%]  text-white text-[20px] font-mono">
                ↗
              </div>
              <div className="w-[60%]   text-[0.9rem] tracking-tighter text-white font-mono">
                Send Money
              </div>
            </button>
          </div>
        </div>
        <div className="w-[95%] h-[420px] hide-scrollbar flex flex-col items-center  overflow-y-scroll justify-start p-1 bg-gray-50 rounded-md">
          <Transaction></Transaction>
          <Transaction></Transaction>
          <Transaction></Transaction>
        </div>
      </div>
    </>
  );
}
