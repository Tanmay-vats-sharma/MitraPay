import React from "react";
import { Transaction } from "../../Common/Transaction"
import { useStateContext } from "../../../StateProvider/StateProvider";
import { Link } from "react-router-dom";

export function Transactions() {
  const { transactions, user } = useStateContext();
  return (
    <>
      <div className="bg-white shadow-lg  border-[1px] flex flex-col items-center rounded-lg  col-span-6 row-span-4">
        <div className="w-[100%] h-[15%] flex p-1">
          <div className="w-[90%]  flex justify-start text-xl font-semibold px-4">
            <p>Transaction History</p>
          </div>
          <div className="w-[10%] h-[auto] text-lg font-semibold text-blue-400 hover:cursor-pointer hover:text-blue-700">
            <Link to="/transactions">
              <p>Veiw All</p>
            </Link>
          </div>
        </div>
        <hr className="w-[95%] border-t-1 border-gray-400 items-center " />
        <div className="w-[100%] h-[95%] flex flex-col items-center  justify-start px-4 gap-[2px]">
          {transactions.slice(0, 5).map((transaction, index) => {
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
                image={user.Phone_no === from.Phone_no ? to.profile_pic : from.profile_pic}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}