import React, { useState, useEffect, useRef } from "react";
import { Message } from "./Message";
import { useStateContext } from "../../../StateProvider/StateProvider";
import { getMessages } from "../../../Services/ChatService";

// Group messages by date
function groupMessagesByDate(messages) {
  return messages.reduce((groups, message) => {
    const date = message.createdAt.split("T")[0]; // Extract date part from ISO string
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(message);
    return groups;
  }, {});
}

export function Chat() {
  const { selectedContact } = useStateContext();
  // Replace this with the messages from the API
  // const [messages, setMessages] = useState([
  //   {
  //     "sender": {
  //       "name": "Naman Malik",
  //       "Phone_no": "9818084320",
  //       "profile_pic": "https://example.com/profile-pic.jpg"
  //     },
  //     "receiver": {
  //       "name": "John Doe",
  //       "Phone_no": "1234567890",
  //       "profile_pic": "https://example.com/profile-pic.jpg"
  //     },
  //     "content": "Hello Bro",
  //     "createdAt": "2024-12-13T11:06:52.302Z",
  //     "updatedAt": "2024-12-13T11:06:52.302Z"
  //   },
  //   {
  //     "sender": {
  //       "name": "John Doe",
  //       "Phone_no": "1234567890",
  //       "profile_pic": "https://example.com/profile-pic.jpg"
  //     },
  //     "receiver": {
  //       "name": "Naman Malik",
  //       "Phone_no": "9818084320",
  //       "profile_pic": "https://example.com/profile-pic.jpg"
  //     },
  //     "content": "Hi Naman!",
  //     "createdAt": "2024-12-13T11:08:52.302Z",
  //     "updatedAt": "2024-12-13T11:08:52.302Z"
  //   },
  //   {
  //     "sender": {
  //       "name": "Naman Malik",
  //       "Phone_no": "9818084320",
  //       "profile_pic": "https://example.com/profile-pic.jpg"
  //     },
  //     "receiver": {
  //       "name": "John Doe",
  //       "Phone_no": "1234567890",
  //       "profile_pic": "https://example.com/profile-pic.jpg"
  //     },
  //     "content": "How are you?",
  //     "createdAt": "2024-12-13T11:09:52.302Z",
  //     "updatedAt": "2024-12-13T11:09:52.302Z"
  //   },
  //   {
  //     "sender": {
  //       "name": "John Doe",
  //       "Phone_no": "1234567890",
  //       "profile_pic": "https://example.com/profile-pic.jpg"
  //     },
  //     "receiver": {
  //       "name": "Naman Malik",
  //       "Phone_no": "9818084320",
  //       "profile_pic": "https://example.com/profile-pic.jpg"
  //     },
  //     "content": "I'm doing great, thanks for asking!",
  //     "createdAt": "2024-12-13T11:10:52.302Z",
  //     "updatedAt": "2024-12-13T11:10:52.302Z"
  //   },
  //   {
  //     "sender": {
  //       "name": "Naman Malik",
  //       "Phone_no": "9818084320",
  //       "profile_pic": "https://example.com/profile-pic.jpg"
  //     },
  //     "receiver": {
  //       "name": "John Doe",
  //       "Phone_no": "1234567890",
  //       "profile_pic": "https://example.com/profile-pic.jpg"
  //     },
  //     "content": "What can I help you with?",
  //     "createdAt": "2024-12-13T11:11:52.302Z",
  //     "updatedAt": "2024-12-13T11:11:52.302Z"
  //   },
  //   {
  //     "sender": {
  //       "name": "John Doe",
  //       "Phone_no": "1234567890",
  //       "profile_pic": "https://example.com/profile-pic.jpg"
  //     },
  //     "receiver": {
  //       "name": "Naman Malik",
  //       "Phone_no": "9818084320",
  //       "profile_pic": "https://example.com/profile-pic.jpg"
  //     },
  //     "content": "Can you help me with my order?",
  //     "createdAt": "2024-12-14T09:12:35.123Z",
  //     "updatedAt": "2024-12-14T09:12:35.123Z"
  //   },
  //   {
  //     "sender": {
  //       "name": "Naman Malik",
  //       "Phone_no": "9818084320",
  //       "profile_pic": "https://example.com/profile-pic.jpg"
  //     },
  //     "receiver": {
  //       "name": "John Doe",
  //       "Phone_no": "1234567890",
  //       "profile_pic": "https://example.com/profile-pic.jpg"
  //     },
  //     "content": "Sure, what seems to be the problem?",
  //     "createdAt": "2024-12-14T09:15:00.123Z",
  //     "updatedAt": "2024-12-14T09:15:00.123Z"
  //   },
  //   {
  //     "sender": {
  //       "name": "John Doe",
  //       "Phone_no": "1234567890",
  //       "profile_pic": "https://example.com/profile-pic.jpg"
  //     },
  //     "receiver": {
  //       "name": "Naman Malik",
  //       "Phone_no": "9818084320",
  //       "profile_pic": "https://example.com/profile-pic.jpg"
  //     },
  //     "content": "I have an issue with my payment.",
  //     "createdAt": "2024-12-14T09:18:15.456Z",
  //     "updatedAt": "2024-12-14T09:18:15.456Z"
  //   }
  // ]
  // );
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await getMessages(selectedContact);
        setMessages(response);
      } catch (error) {
        console.error(error);
      }
    };

    if (selectedContact) {
      fetchMessages();
    }
  }, [selectedContact]);

  const chatEndRef = useRef(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
    console.log("Messages: ", messages);
  }, [messages]);

  // Group messages by date
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
          <div className="flex justify-center items-center text-sm text-gray-500 w-[100%] mb-2">
            <div className="w-[100px] h-[20px] rounded-xl bg-slate-200 text-center">{date}</div>
          </div>
          {groupedMessages[date].map((message, index) => (
            console.log("Message: ", message),
            <Message
              key={index}
              text={message.content} // Use content from message
              sender={message.sender.Phone_no} // Sender name
              senderProfilePic={message.sender.profile_pic} // Sender profile pic
              time={new Date(message.createdAt).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true, // 12-hour format with AM/PM
              })} // Format time
            />
          ))}
        </div>
      ))}
      <div ref={chatEndRef} />
    </div>
  );
}
