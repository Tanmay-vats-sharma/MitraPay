import React from "react";
import { useStateContext } from "../../../StateProvider/StateProvider";

export function Message({ text, sender, time }) {
  const { user } = useStateContext();
  
  // Compare sender's Phone_no with user's Phone_no to determine if it's from "me" or "them"
  console.log("Sender: ", sender);
  const isSenderMe = sender === user?.Phone_no;
  

  return (
    <div
      className={`flex ${isSenderMe ? "justify-end" : "justify-start"} mb-2`}
    >
      <div
        className={`max-w-xs min-w-20 h-auto overflow-y-auto break-words p-2 rounded-lg relative ${
          isSenderMe ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
        }`}
      >
        <div className="mb-4">{text}</div> {/* Added spacing */}
        <span
          className={`text-xs absolute bottom-1 right-2  ${
            !isSenderMe ? "text-black" : "text-white"
          }`}
          style={{ fontSize: "0.7rem" }}
        >
          {time}
        </span>
      </div>
    </div>
  );
}
