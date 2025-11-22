"use client";

import { useState } from "react";
import { FaPaperclip, FaMicrophone, FaPaperPlane } from 'react-icons/fa';

type Message = {
  id: number;
  text: string;
  sender: "user" | "bot";
  name?: string;
};

export default function LeftSection() {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! How can I help you today?",
      sender: "bot",
      name: "Bot",
    },
  ]);

  const handleSend = () => {
    if (!inputText.trim()) return;

    const newMessage: Message = {
      id: Date.now(),
      text: inputText,
      sender: "user",
      name: "You",
    };

    setMessages([newMessage, ...messages]);
    setInputText("");

    // Simulate bot reply
    setTimeout(() => {
      setMessages((prev) => [
        {
          id: Date.now() + 1,
          text: `Bot reply to: "${newMessage.text}"`,
          sender: "bot",
          name: "Bot",
        },
        ...prev,
      ]);
    }, 500);
  };

  return (
    <div className="h-full flex flex-col p-4 border border-black shadow-inner rounded-xl
                    bg-gradient-to-r from-[#E6F4FF] via-[#CCFFFF] to-[#E6F4FF] animate-gradient-x text-black">

      {/* Chat Box Header */}
      <div className="bg-gray-200 p-2 px-4 rounded-lg mb-4 mx-auto inline-block">
        <h2 className="text-xl font-semibold text-black text-center">Let's Chat</h2>
      </div>

      {/* Messages */}
      <div className="flex-grow overflow-y-auto space-y-2 pr-2 min-h-0 flex flex-col-reverse text-black">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${msg.sender === "user" ? "items-start" : "items-end"}`}
          >
            <span className="text-xs text-black">{msg.name}</span>
            <div
              className={`px-3 py-2 rounded-lg max-w-[80%] border-2 border-gray-500 shadow-inner text-black
              ${
                msg.sender === "user"
                  ? "bg-blue-100 rounded-tl-none"
                  : "bg-green-200 rounded-tr-none"
              }
            `}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input Section */}
      <div className="flex items-center border rounded-full p-2 mt-4 shrink-0 bg-gray-100">
        <button className="text-black hover:text-blue-500">
          <FaPaperclip size={20} />
        </button>

        <input
          type="text"
          placeholder="Start typing to chat with Vaidyaji"
          className="flex-grow p-2 ml-2 bg-gray-100 rounded-full outline-none text-black placeholder-black"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />

        <button className="text-black hover:text-blue-500 ml-2">
          <FaMicrophone size={20} />
        </button>

        <button
          className="text-black hover:text-blue-500 ml-2"
          onClick={handleSend}
        >
          <FaPaperPlane size={20} />
        </button>
      </div>
    </div>
  );
}
