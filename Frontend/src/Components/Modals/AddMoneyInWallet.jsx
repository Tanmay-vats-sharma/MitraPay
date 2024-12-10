import React, { useState } from "react";
import { useModal } from "../../StateProvider/ModalProvider"; 
import { useStateContext } from "../../StateProvider/StateProvider";
import { toast } from "react-toastify";

export function AddMoneyInWallet() {
  const { closeModal } = useModal();
  const { addMoney } = useStateContext();

  const [amount, setAmount] = useState("");

  const handleAddMoney = () => {
    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      toast.error("Please enter a valid amount.");
      return;
    }

    // Trigger the function passed from parent to update the wallet balance
    addMoney(Number(amount));
    setAmount("");
    closeModal();
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="bg-white border-2 border-blue-500 rounded-lg shadow-md p-4 w-[90%] max-w-[400px]">
        {/* Header */}
        <h2 className="text-xl font-bold text-gray-700 mb-4 text-center">
          Add Money to Wallet
        </h2>

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
          className="w-full border border-blue-500 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter amount here"
        />

        {/* Add Money Button */}
        <button
          onClick={handleAddMoney}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Add Money
        </button>

        {/* Close Modal Button */}
        <button
          onClick={closeModal}
          className="w-full mt-3 bg-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-400 transition duration-200"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
