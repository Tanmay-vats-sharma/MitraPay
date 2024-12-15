import React, { useState } from "react";
import { useModal } from "../../StateProvider/ModalProvider";
import { useStateContext } from "../../StateProvider/StateProvider";
import { toast } from "react-toastify";
import {getUserDetails} from "../../Services/UserService";
import { createContact } from "../../Services/ChatService";

export function AddContact() {
  const { closeModal } = useModal();
  const { addContact } = useStateContext();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userDetails, setUserDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFetchUser = async () => {
    if (!phoneNumber || phoneNumber.length !== 10) {
      toast.error("Please enter a valid phone number.");
      return;
    }
    setIsLoading(true);
      try{
        const response = await getUserDetails(phoneNumber);
        setIsLoading(false);
        setUserDetails(response);
        toast.success("User details fetched successfully!");
      }
      catch(error){
        toast.error("User not found!");
      }
  };

  const handleAddContact = async () => {
    if (!userDetails) {
      toast.error("Please fetch user details first.");
      return;
    }
    try {
      const response = await createContact(userDetails.Phone_no);
      const contact = response.contact;
      addContact(contact);
    }
    catch(error){
      toast.error(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="bg-white rounded-lg p-4 w-[90%] max-w-[400px]">
        {/* Header */}
        <h2 className="text-xl font-bold text-gray-700 mb-4 text-center">
          Add Contact
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

        {/* Add To Contact List */}
        {userDetails && (
          <>
            <button
              onClick={handleAddContact}
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200 mt-4"
            >
              Add To Contact List
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
