import React, { useState, useEffect, useRef } from "react";
import { Contact } from "./Contact";
import { Chat } from "./Chat";
import send from "../../../assets/send.png"
import { useStateContext } from "../../../StateProvider/StateProvider";
import { sendMessage } from "../../../Services/ChatService";

export function Contact_page() {
  const { selectedContact } = useStateContext();
  const [message, setMessage] = useState("");
  const [triggerRerender, setTriggerRerender] = useState(false);

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    // Send the message to the selected
    // contact using the API
    sendMessage(selectedContact, message);
    setMessage("");
    // Delay the re-render by 150ms
    setTimeout(() => {
      setTriggerRerender((prev) => !prev);
    }, 100);
  };

  return (
    <>
      <div className="bg-white  rounded-lg flex flex-col justify-evenly shadow-lg items-center col-span-6 row-span-7 ">
        <Contact></Contact>
        <Chat key={triggerRerender}></Chat>
        <div className="w-[100%] h-[12%]  border-[1px] border-gray-300 rounded-b-lg bg-gray-100 flex justify-evenly items-center">
          <div className="w-[90%] h-[85%]  flex justify-center items-center">
            <input
              type="text"
              placeholder="Type your Message here..."
              className="w-[100%] h-[85%] px-4 rounded-2xl  outline-none border-[1px] border-gray-400"
              value={message}
              onChange={handleOnChange}
            />
          </div>
          <div className="w-[5%] h-[60%] flex justify-center items-center p-1">
            <button className="  focus:outline-none  flex items-center hover:-rotate-45 delay-150"
            onClick={handleSendMessage}>
              <div className="w-[35px] h-[20px] flex justify-center items-center">
                <img src={send} alt="" className="w-[45px] h-[40px]" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}