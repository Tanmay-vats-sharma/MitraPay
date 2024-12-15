import React from "react";
import { Transaction } from "../../Common/Transaction";
import { useModal } from "../../../StateProvider/ModalProvider";
import { useStateContext } from "../../../StateProvider/StateProvider";

export function Transactions() {
  const { openModal } = useModal();
  const { transactions, user } = useStateContext();

  return (
    <>
      <div className="bg-white shadow-lg justify-evenly overflow-y-hidden border-[1px] flex flex-col items-center rounded-lg py-3 col-span-6 row-span-7">
        <div className="w-[95%] h-[8%] flex justify-between border-b-2 p-1 border-gray-400">
          <div className="w-[auto] flex text-xl font-semibold">
            <p>Transaction History</p>
          </div>
          <div className="w-[45%] h-[100%] flex justify-around">
            <button
              onClick={() => openModal({ type: "addMoneyInWallet", color: "blue" })}
              className="bg-blue-600 w-[40%] flex rounded-md justify-center px-1 items-center hover:bg-blue-800">
              <div className="w-[20%] mb-[1px] text-white text-[25px] font-mono">+</div>
              <div className="w-[60%] text-[0.9rem] text-white font-mono">Add Money</div>
            </button>
            <button
              onClick={() => openModal({ type: "sendMoney", color: "blue" })}
              className="bg-blue-600 w-[40%] flex rounded-md border-[1px] border-gray-400 justify-center p-1 items-center hover:bg-blue-800">
              <div className="w-[20%] text-white text-[20px] font-mono">↗</div>
              <div className="w-[60%] text-[0.9rem] tracking-tighter text-white font-mono">Send Money</div>
            </button>
          </div>
        </div>
        <div className="w-[95%] h-[417px] hide-scrollbar flex flex-col items-center overflow-y-scroll justify-start p-1 bg-gray-50 rounded-md">
          {transactions.map((transaction, index) => {
            const { from, to, amount, createdAt } = transaction;

            // Determine if the amount is positive or negative
            const transactionAmount =
              user.Phone_no === from.Phone_no ? -amount : amount;

            // Extract date and time from createdAt
            const date = new Date(createdAt).toLocaleDateString();
            const time = new Date(createdAt).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            });

            return (
              <Transaction
                key={index}
                name={user.Phone_no === from.Phone_no ? to.name : from.name}
                profilePic={
                  user.Phone_no === from.Phone_no
                    ? to.profile_pic
                    : from.profile_pic
                }
                date={date}
                time={time}
                amount={transactionAmount}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
