import React, { useState } from "react";
import { useStateContext } from "../../StateProvider/StateProvider";
import { useModal } from "../../StateProvider/ModalProvider";
import config from "../../Config/config.json";

export function AddMoney() {
    const { modalContent, closeModal } = useModal();
    const { addMoneyInGullak } = useStateContext();
    const [amount, setAmount] = useState("");

    const currentGullak = modalContent?.data;
    const color = modalContent?.color;

    const colorStyles = config.gullaks.colorStyles;

    const selectedColor = colorStyles[color] || colorStyles.blue; // Fallback to blue if color not found

    const handleAddMoney = () => {
        if (amount && !isNaN(amount)) {
            console.log("Adding money to gullak:", currentGullak.name);
            addMoneyInGullak(currentGullak.name, amount);
            setAmount("");
            closeModal();
        } else {
            alert("Please enter a valid amount.");
        }
    };

    return (
        <div
            className="flex flex-col items-center justify-center w-full h-full">
            <div className="bg-white rounded-lg p-4 w-[90%] max-w-[400px]">
                <div
                    style={{ color: selectedColor.textColor }}
                    className="w-[100%] text-[1.9em] flex items-center justify-center text-center font-semibold px-1 py-2"
                >
                    <p>{currentGullak?.name}</p>
                </div>
                {/* Input Box */}
                <label
                    htmlFor="amount"
                    className="block text-2xl font-semibold mb-2"
                    style={{ color: selectedColor.textColor }}
                >
                    Enter Amount
                </label>
                <input
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full border rounded-md p-2 mb-4 focus:outline-none focus:ring-2 transition duration-200"
                    style={{
                        borderColor: selectedColor.borderColor,
                        boxShadow: `0 0 4px ${selectedColor.borderColor}`,
                    }}
                    placeholder="Enter amount here"
                />


                {/* Add Money Button */}
                <button
                    onClick={handleAddMoney}
                    className={`w-full py-2 rounded-md hover:opacity-90 transition duration-200`}
                    style={{
                        backgroundColor: selectedColor.bgColor,
                        color: "#fff",
                    }}
                >
                    Add Money
                </button>
            </div>
        </div>
    );
}
