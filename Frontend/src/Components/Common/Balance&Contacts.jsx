import React from "react";
import Profile_pic from "../../assets/Profile_pic.jpeg";
import Icon from "./Icon";
import { Contact } from "./Contact";
import { useStateContext } from "../../StateProvider/StateProvider";
import { useModal } from "../../StateProvider/ModalProvider";
import { Link } from "react-router-dom";

export function Balance() {
  const { totalAmount, user, contacts } = useStateContext();
  const { openModal } = useModal();

  const now = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Kolkata",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <>
      <div className=" bg-white shadow-2xl rounded-lg col-span-2 row-span-8 p-4">
        <div className=" h-[43%]">
          <div className=" h-[12%] w-[100%] flex justify-end items-center p-1">
            <Link to="/profile" className=" w-[12%] h-[100%]">
              <Icon
                path="M 43.125 2 C 41.878906 2 40.636719 2.488281 39.6875 3.4375 L 38.875 4.25 L 45.75 11.125 C 45.746094 11.128906 46.5625 10.3125 46.5625 10.3125 C 48.464844 8.410156 48.460938 5.335938 46.5625 3.4375 C 45.609375 2.488281 44.371094 2 43.125 2 Z M 37.34375 6.03125 C 37.117188 6.0625 36.90625 6.175781 36.75 6.34375 L 4.3125 38.8125 C 4.183594 38.929688 4.085938 39.082031 4.03125 39.25 L 2.03125 46.75 C 1.941406 47.09375 2.042969 47.457031 2.292969 47.707031 C 2.542969 47.957031 2.90625 48.058594 3.25 47.96875 L 10.75 45.96875 C 10.917969 45.914063 11.070313 45.816406 11.1875 45.6875 L 43.65625 13.25 C 44.054688 12.863281 44.058594 12.226563 43.671875 11.828125 C 43.285156 11.429688 42.648438 11.425781 42.25 11.8125 L 9.96875 44.09375 L 5.90625 40.03125 L 38.1875 7.75 C 38.488281 7.460938 38.578125 7.011719 38.410156 6.628906 C 38.242188 6.246094 37.855469 6.007813 37.4375 6.03125 C 37.40625 6.03125 37.375 6.03125 37.34375 6.03125 Z"
                message="Edit"
              />
            </Link>
          </div>
          <div className="w-[100%] h-[45%]">
            <div className="h-[100%] w-full flex flex-col items-center justify-evenly p-1  ">
              <div className="h-[72%] w-[32%] overflow-hidden rounded-full ">
                <img src={user.profile_pic} alt="" />
              </div>
              <div className="text-xl tracking-tighter font-semibold ">
                {user.name}
              </div>
            </div>
          </div>
          <div className="w-[100%] h-[39%]  flex flex-col justify-center items-center ">
            <div className="w-[100%] h-[22%]  flex justify-center  text-sm ">
              <p>Total Balance</p>
            </div>
            <div className=" w-[100%] h-[33%] text-2xl text-blue-700 font-semibold  flex justify-center ">
              <p>₹{totalAmount}/-</p>
            </div>
            <div className=" w-[100%] h-[23%] text-gray-500 text-s tracking-wide flex justify-center ">
              <p>{now}</p>
            </div>
          </div>
        </div>
        <div className="h-[292px]  flex items-center flex-col overflow-y-hidden">
          <div className="h-[15%] w-[100%] flex justify-envenly items-center  p-1">
            <div className="font-semibold tracking-tighter text-[18px] w-[75%] h-[100%] flex items-center">
              <p>Your Contacts</p>
            </div>
            <div className="font-semibold tracking-tighter text-sm w-[25%] h-[100%] flex items-center justify-end p-1 text-blue-400 hover:cursor-pointer hover:text-blue-700" onClick={() => {openModal({ type: "addContact", color: "blue"})}}>
              <p>Create</p>
            </div>
          </div>
          <hr className="w-[95%] border-t-1 border-gray-400 items-center mb-2" />
          <div className=" w-[95%] h-[250px] flex flex-col justify-start overflow-y-scroll hide-scrollbar">
            {contacts.map((contact,index) => (
              <Contact key={index} contact={contact} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
