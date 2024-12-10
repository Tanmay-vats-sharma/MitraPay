import React, { useState, useEffect, useRef } from "react";
import { Message } from "./Message";

export function Chat() {
    const [messages, setMessages] = useState([
        { text: "Hello! How can I help?", sender: "them" },
        { text: "Hi, I need assistance with my order.", sender: "me" },
        { text: "Sure, I can help you with that.", sender: "them" },
        { text: "Great, thank you!", sender: "me" },
        { text: "Hello! How can I help?", sender: "them" },
        { text: "Hi, I need assistance with my order.", sender: "me" },
        { text: "Sure, I can help you with that.", sender: "them" },
        { text: "Great, thank you!", sender: "me" },
        { text: "Hello! How can I help?", sender: "them" },
        { text: "Hi, I need assistance with my order.", sender: "me" },
        { text: "Sure, I can help you with that.", sender: "them" },
        { text: "Great, thank you!", sender: "me" },
        { text: "Hello! How can I help?", sender: "them" },
        { text: "Hi, I need assistance with my order.", sender: "me" },
        { text: "Sure, I can help you with that.", sender: "them" },
        { text: "Great, thank you!", sender: "me" },
        { text: "Hello! How can I help?", sender: "them" },
        { text: "Hi, I need assistance with my order.", sender: "me" },
    ]);

    const chatEndRef = useRef(null);

    // Scroll to the bottom whenever messages change
    useEffect(() => {
        if (chatEndRef.current) {
            chatEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    return (
        <div
            className="w-full h-[75%] overflow-y-auto p-4 flex flex-col-reverse"
            style={{
                maxHeight: "calc(100vh - 240px)", // Adjust based on screen height
            }}
        >
            {/* Render messages */}
            {messages.map((message, index) => (
                <Message key={index} text={message.text} sender={message.sender} />
            ))}
            <div ref={chatEndRef} />
        </div>
    )

}