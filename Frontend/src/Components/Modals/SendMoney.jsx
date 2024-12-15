import React, { useState } from "react";
import { useModal } from "../../StateProvider/ModalProvider"; // Adjust based on your file structure
import { useStateContext } from "../../StateProvider/StateProvider";
import { toast } from "react-toastify";
import Profile_pic from "../../assets/Profile_pic.jpeg"
import {getUserDetails} from "../../Services/UserService";

// // Dummy user data for demonstration
// const dummyUserData = {
//   "1234567890": { name: "John Doe", phone: "1234567890", profilePic: "https://via.placeholder.com/50" },
//   "9876543210": { name: "Jane Smith", phone: "9876543210", profilePic: "https://via.placeholder.com/50" },
//   "8278279790": { name: "Tanmay Sharma", phone: "8278279790", profilePic: Profile_pic },
// };

export function SendMoney() {
  const { closeModal } = useModal();
  const { sendMoney } = useStateContext(); // Assume this is available in your StateProvider
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [userDetails, setUserDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // // Simulated fetch user details function
  // const fetchUserDetails = (phone) => {
  //   return dummyUserData[phone] || null;
  // };

  const handleFetchUser = async () => {
    if (!phoneNumber || phoneNumber.length !== 10) {
      toast.error("Please enter a valid phone number.");
      return;
    }
    setIsLoading(true);
      try{
        const response = await getUserDetails(phoneNumber);
        console.log(response);
        setIsLoading(false);
        setUserDetails(response);
        toast.success("User details fetched successfully!");
      }
      catch(error){
        toast.error("User not found!");
      }
  };

  const handleSendMoney = () => {
    if (!userDetails) {
      toast.error("Please fetch user details first.");
      return;
    }
    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      toast.error("Please enter a valid amount.");
      return;
    }
    // Simulated money transfer action
    console.log(`Sent ${amount} to ${userDetails.name} (${userDetails.phone})`);
    sendMoney(userDetails, Number(amount));
    setPhoneNumber("");
    setAmount("");
    setUserDetails(null);
    closeModal();
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="bg-white rounded-lg p-4 w-[90%] max-w-[400px]">
        {/* Header */}
        <h2 className="text-xl font-bold text-gray-700 mb-4 text-center">
          Send Money
        </h2>

        {/* Phone Number Input */}
        <label
          htmlFor="phoneNumber"
          className="block text-gray-700 text-lg font-semibold mb-2"
        >
          Phone Number
        </label>
        <input
          type="text"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full border border-blue-500 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter phone number"
        />
        <button
          onClick={handleFetchUser}
          disabled={isLoading}
          className={`w-full ${
            isLoading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
          } text-white py-2 rounded-md transition duration-200`}
        >
          {isLoading ? "Fetching..." : "Fetch User"}
        </button>

        {/* Display User Details */}
        {userDetails && (
          <div className="mt-4 p-3 border rounded-md bg-gray-100 flex items-center">
            <img
              src={userDetails.profile_pic}
              alt={`${userDetails.name}'s profile`}
              className="w-12 h-12 rounded-full mr-3"
            />
            <div>
              <p className="text-gray-700 font-semibold">
                {userDetails.name}
              </p>
              <p className="text-gray-500">{userDetails.Phone_no}</p>
            </div>
          </div>
        )}

        {/* Amount Input */}
        {userDetails && (
          <>
            <label
              htmlFor="amount"
              className="block text-gray-700 text-lg font-semibold mt-4 mb-2"
            >
              Enter Amount
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full border border-blue-500 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter amount to send"
            />
            <button
              onClick={handleSendMoney}
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Send Money
            </button>
          </>
        )}

        {/* Close Modal Button */}
        <button
          onClick={closeModal}
          className="w-full mt-3 bg-gray-100 text-gray-700 py-2 rounded-md hover:bg-gray-300 transition duration-200"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
