import React, { useState, useEffect, useRef } from "react";
import { Message } from "./Message";

function groupMessagesByDate(messages) {
  return messages.reduce((groups, message) => {
    const date = message.date;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(message);
    return groups;
  }, {});
}

export function Chat() {
  const [messages, setMessages] = useState([
    {
      text: "Hello! How can I help?",
      sender: "them",
      time: "10:00 AM",
      date: "2024-12-10",
    },
    {
      text: "Hi, I need assistance with my order.",
      sender: "me",
      time: "10:01 AM",
      date: "2024-12-10",
    },
    {
      text: "Sure, I can help you with that.",
      sender: "them",
      time: "10:02 AM",
      date: "2024-12-11",
    },
    {
      text: "Great, thank you!",
      sender: "me",
      time: "10:03 AM",
      date: "2024-12-11",
    },
    {
      text: "Great, thank you!",
      sender: "me",
      time: "10:03 AM",
      date: "2024-14-11",
    },
    {
      text: "Great, thank you!",
      sender: "me",
      time: "10:03 AM",
      date: "2024-12-11",
    },
    {
      text: "Great, thank you!",
      sender: "me",
      time: "10:03 AM",
      date: "2024-12-11",
    },
    {
      text: "Great, thank you!",
      sender: "me",
      time: "10:03 AM",
      date: "2024-14-11",
    },
    {
      text: "Great, thank you!",
      sender: "me",
      time: "10:03 AM",
      date: "2024-14-11",
    },
    {
      text: "Great, thank you!",
      sender: "me",
      time: "10:03 AM",
      date: "2024-14-11",
    },
    {
      text: "Great, thank you!",
      sender: "me",
      time: "10:03 AM",
      date: "2024-14-11",
    },
  ]);

  const chatEndRef = useRef(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const groupedMessages = groupMessagesByDate(messages);

  return (
    <div
      className="w-full h-[75%] overflow-y-auto p-4 flex flex-col hide-scrollbar border-l-[1px] border-r-[1px] border-gray-300"
      style={{
        maxHeight: "calc(100vh - 240px)",
      }}
    >
      {Object.keys(groupedMessages).map((date) => (
        <div key={date} className="mb-4">
          <div className=" flex justify-center items-center text-sm text-gray-500 w-[100%] mb-2">
            <div className="w-[100px] h-[20px] rounded-xl bg-slate-200 text-center">{date}</div>
          </div>
          {groupedMessages[date].map((message, index) => (
            <Message
              key={index}
              text={message.text}
              sender={message.sender}
              time={message.time}
            />
          ))}
        </div>
      ))}
      <div ref={chatEndRef} />
    </div>
  );
}
