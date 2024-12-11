import React, { useState } from "react";
import { useStateContext } from "../../StateProvider/StateProvider";
import { useModal } from "../../StateProvider/ModalProvider";
import config from "../../Config/config.json";

export function AddGullak() {
  const {openModal } = useModal();
  const { gullaks, addGullak } = useStateContext();
  const [gullakName, setGullakName] = useState("");
  const [totalAmount, setTotalAmount] = useState("");

  const colors = config.gullaks.colors;
  const colorStyles = config.gullaks.colorStyles;

  // Calculate the style index based on the number of existing gullaks
  const styleIndex = (gullaks.length) % colors.length;
  const selectedColor = colors[styleIndex];
  const styles = colorStyles[selectedColor] || colorStyles.blue;

  const handleAddGullak = () => {
    if (gullakName && totalAmount && !isNaN(totalAmount)) {
      // Pass data back to the parent component
      addGullak(gullakName,totalAmount);
      setGullakName("");
      setTotalAmount("");
      openModal({ type: "addMoney", data: { name:gullakName, totalAmount }, color: selectedColor });
    } else {
      alert("Please enter valid details.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div
        style={{ borderColor: styles.borderColor }}
        className="bg-white rounded-lg p-4 w-[90%] max-w-[400px]"
      >
        {/* Gullak Name Input */}
        <label
          htmlFor="gullakName"
          style={{ color: styles.textColor }}
          className="block text-lg font-semibold mb-2"
        >
          Gullak Name
        </label>
        <input
          type="text"
          id="gullakName"
          value={gullakName}
          onChange={(e) => setGullakName(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2"
          style={{ borderColor: styles.borderColor, focus: styles.borderColor }}
          placeholder="Enter Gullak name"
        />

        {/* Total Amount Input */}
        <label
          htmlFor="totalAmount"
          style={{ color: styles.textColor }}
          className="block text-lg font-semibold mb-2"
        >
          Total Amount
        </label>
        <input
          type="number"
          id="totalAmount"
          value={totalAmount}
          onChange={(e) => setTotalAmount(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2"
          style={{ borderColor: styles.borderColor, focus: styles.borderColor }}
          placeholder="Enter total amount"
        />

        {/* Add Gullak Button */}
        <button
          onClick={handleAddGullak}
          style={{ backgroundColor: styles.bgColor }}
          className="w-full text-white py-2 rounded-md hover:opacity-90 transition duration-200"
        >
          Add Gullak
        </button>
      </div>
    </div>
  );
}
