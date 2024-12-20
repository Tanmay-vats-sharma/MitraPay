import React, { useState } from "react";
import { useModal } from "../../StateProvider/ModalProvider";
import { useStateContext } from "../../StateProvider/StateProvider";
import { toast } from "react-toastify";
import { addMoneyApi } from "../../Services/TransactionService";

export function AddMoneyInWallet() {
  const key = import.meta.env.VITE_RAZORPAY_KEY_ID;
  const { closeModal } = useModal();
  const { addMoney, user } = useStateContext();

  const [amount, setAmount] = useState("");

  const handleAddMoney = async () => {
    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      toast.error("Please enter a valid amount.");
      return;
    }

    toast.info("Processing Payment, Please Wait...");
    try {
      const response = await addMoneyApi({ amount });
      const { orderId, amount: payableAmount} = response;

      if (!orderId) {
        alert('Failed to create order');
        return;
      }

      // Configure Razorpay checkout options
      const options = {
        key,
        amount: payableAmount, // Amount in paise
        description: 'Add Money to Wallet',
        order_id: orderId, // Razorpay Order ID
        handler: function (response) {
          addMoney(Number(amount));
          setAmount("");
          closeModal();
        },
        prefill: {
          name: user?.name,
          email: user?.email,
          contact: user?.Phone_no,
        },
        theme: {
          color: '#F37254', // Razorpay theme color
        },
      };

      // Open Razorpay checkout
      const rzp = new window.Razorpay(options);
      rzp.open();
    }
    catch (error) {
      toast.error(error.message);
    }

  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="bg-white rounded-lg p-4 w-[90%] max-w-[400px]">
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
