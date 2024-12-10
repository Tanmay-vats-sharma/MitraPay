import React, { useState } from "react";
import { useStateContext } from "../../StateProvider/StateProvider";
import { useModal } from "../../StateProvider/ModalProvider";

export function AddMoney() {
    const { modalContent, closeModal } = useModal();
    const { addMoneyInGullak } = useStateContext();
    const [amount, setAmount] = useState("");

    const currentGullak = modalContent?.data;
    const color = modalContent?.color;

    const colorStyles = {
        blue: { borderColor: "#93C5FD", textColor: "#3B82F6", bgColor: "#3B82F6" },
        green: { borderColor: "#86EFAC", textColor: "#22C55E", bgColor: "#22C55E" },
        pink: { borderColor: "#F9A8D4", textColor: "#EC4899", bgColor: "#EC4899" },
        violet: { borderColor: "#C4B5FD", textColor: "#8B5CF6", bgColor: "#8B5CF6" },
        rose: { borderColor: "#FECACA", textColor: "#F43F5E", bgColor: "#F43F5E" },
        amber: { borderColor: "#FDE68A", textColor: "#F59E0B", bgColor: "#F59E0B" },
    };

    const selectedColor = colorStyles[color] || colorStyles.blue; // Fallback to blue if color not found

    const handleAddMoney = () => {
        if (amount && !isNaN(amount)) {
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
            <div
                style={{ borderColor: selectedColor.borderColor }}
                className="bg-white rounded-lg p-4 w-[90%] max-w-[400px] border-2"
            >
                <div
                    style={{ color: selectedColor.textColor }}
                    className="w-[100%] text-[1.5em] flex items-center justify-center text-center font-semibold px-1"
                >
                    <p>{currentGullak?.name}</p>
                </div>
                {/* Input Box */}
                <label
                    htmlFor="amount"
                    className="block text-lg font-semibold mb-2"
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
