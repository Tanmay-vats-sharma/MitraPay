import React, { useState } from "react";

export function AddMoney({ onAdd }) {
  const [amount, setAmount] = useState("");

  const handleAddMoney = () => {
    if (amount && !isNaN(amount)) {
      onAdd(Number(amount));
      setAmount("");
    } else {
      alert("Please enter a valid amount.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="bg-white rounded-lg shadow-md p-4 w-[90%] max-w-[400px]">
        {/* Input Box */}
        <label
          htmlFor="amount"
          className="block text-gray-700 text-lg font-semibold mb-2"
        >
          Enter Amount
        </label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter amount here"
        />

        {/* Add Money Button */}
        <button
          onClick={handleAddMoney}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Add Money
        </button>
      </div>
    </div>
  );
}
