import React from "react";
import { useModal } from "../../StateProvider/ModalProvider"; 
import profilePic from "../../assets/Profile_pic.jpeg";

// Dummy user data for demonstration
const dummyUserData = {
  profilePic: profilePic,
  fullName: "Naman Malik",
  email: "naman.mitrapay@namanworks.tech",
  phone: "9818084320",
  address: "1234 Elm Street, Springfield, USA",
};

export function UserProfile() {
  const { closeModal } = useModal();

  const { profilePic, fullName, email, phone, address } = dummyUserData;

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="bg-white rounded-lg p-6 w-[90%] max-w-[800px]">
        {/* Profile Picture */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={profilePic}
            alt={`${fullName}'s profile`}
            className="w-28 h-28 rounded-full border-2 border-blue-500 mb-4"
          />
          <h2 className="text-xl font-bold text-gray-700 text-center">
            {fullName}
          </h2>
        </div>

        {/* User Details in Horizontal Layout */}
        <div className="grid grid-cols-2 gap-6">
          {/* Email */}
          <div className="flex flex-col">
            <p className="text-gray-500 text-sm font-semibold">Email</p>
            <p className="text-gray-800 font-medium break-words">
              {email}
            </p>
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <p className="text-gray-500 text-sm font-semibold">Phone</p>
            <p className="text-gray-800 font-medium">{phone}</p>
          </div>

          {/* Address */}
          <div className="col-span-2">
            <p className="text-gray-500 text-sm font-semibold">Address</p>
            <p className="text-gray-800 font-medium">{address}</p>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={closeModal}
          className="mt-6 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Close
        </button>
      </div>
    </div>
  );
}
