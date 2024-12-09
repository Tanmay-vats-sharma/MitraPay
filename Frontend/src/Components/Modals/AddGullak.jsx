import React, { useState } from "react";
import { useStateContext } from "../../StateProvider/StateProvider";
import { useModal } from "../../StateProvider/ModalProvider";
import { toast } from 'react-toastify';

export function AddGullak() {
  const {closeModal } = useModal();
  const { addGullak } = useStateContext();
  const [gullakName, setGullakName] = useState("");
  const [totalAmount, setTotalAmount] = useState("");

  const handleAddGullak = () => {
    if (gullakName && totalAmount && !isNaN(totalAmount)) {
      // Pass data back to the parent component
      addGullak(gullakName,totalAmount);
      setGullakName("");
      setTotalAmount("");
      toast.success("Gullak Added");
      closeModal();
    } else {
      alert("Please enter valid details.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="bg-white rounded-lg shadow-md p-4 w-[90%] max-w-[400px]">
        {/* Gullak Name Input */}
        <label
          htmlFor="gullakName"
          className="block text-gray-700 text-lg font-semibold mb-2"
        >
          Gullak Name
        </label>
        <input
          type="text"
          id="gullakName"
          value={gullakName}
          onChange={(e) => setGullakName(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter Gullak name"
        />

        {/* Total Amount Input */}
        <label
          htmlFor="totalAmount"
          className="block text-gray-700 text-lg font-semibold mb-2"
        >
          Total Amount
        </label>
        <input
          type="number"
          id="totalAmount"
          value={totalAmount}
          onChange={(e) => setTotalAmount(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter total amount"
        />

        {/* Add Gullak Button */}
        <button
          onClick={handleAddGullak}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Add Gullak
        </button>
      </div>
    </div>
  );
}
