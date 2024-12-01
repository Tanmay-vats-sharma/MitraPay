import React from "react";

export function Transactions() {
  return (
    <>
      <div className="w-[100%] h-[15%] flex  p-1">
        <div className="w-[90%]  flex justify-start text-xl font-semibold px-4">
          <p>Transaction History</p>
        </div>
        <div className="w-[10%] h-[auto] text-lg font-semibold text-blue-400 hover:cursor-pointer hover:text-blue-700">
          <a href="#">
            <p>Veiw All</p>
          </a>
        </div>
      </div>
      <hr className="w-[95%] border-t-1 border-gray-400 items-center mb-2" />
      <div></div>
    </>
  );
}