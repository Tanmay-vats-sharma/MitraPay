import React from "react";

export function Message({ text, sender, time }) {
  return (
    <div
      className={`flex ${
        sender === "me" ? "justify-end" : "justify-start"
      } mb-2`}
    >
      <div
        className={`max-w-xs h-auto overflow-y-auto break-words p-2 rounded-lg relative ${
          sender === "me" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
        }`}
      >
        <div className="mb-4">{text}</div> {/* Added spacing */}
        <span
          className={`text-xs absolute bottom-1 right-2  ${
            sender === "them" ? "text-black" : "text-white"
          }`}
          style={{ fontSize: "0.7rem" }}
        >
          {time}
        </span>
      </div>
    </div>
  );
}
