import React from "react";

export function Message({ text, sender }){
    return (
      <div
        className={`flex ${
          sender === "me" ? "justify-end" : "justify-start"
        } mb-2`}
      >
        <div
          className={`max-w-xs p-2 rounded-lg ${
            sender === "me"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          {text}
        </div>
      </div>
    );
  };