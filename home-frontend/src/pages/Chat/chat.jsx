// ./pages/Chat.jsx
import React, { useState, useEffect, useRef } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([
    // Dummy messages for demonstration
    { id: 1, sender: "client", text: "Hello, I need help with a case.", timestamp: "10:30 AM" },
    { id: 2, sender: "lawyer", text: "Hi! I'd be happy to assist. What's your case about?", timestamp: "10:32 AM" },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  // Simulate current user (could be "client" or "lawyer" based on your auth context)
  const currentUser = "client"; // Hardcoded for demo; replace with actual user from context

  // Scroll to the latest message when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const message = {
      id: messages.length + 1,
      sender: currentUser,
      text: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages([...messages, message]);
    setNewMessage(""); // Clear input after sending
  };

  return (
    <div className="max-w-3xl mx-auto h-[80vh] flex flex-col border border-gray-300 rounded-lg overflow-hidden bg-white shadow-lg">
      {/* Header */}
      <header className="p-4 bg-gray-100 border-b border-gray-300 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Chat</h2>
        <span className="text-sm text-gray-600">
          {currentUser === "client" ? "Talking to Lawyer" : "Talking to Client"}
        </span>
      </header>

      {/* Messages Area */}
      <div className="flex-1 p-5 overflow-y-auto bg-gray-50">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex flex-col mb-4 ${
              message.sender === currentUser ? "items-end" : "items-start"
            }`}
          >
            <div
              className={`max-w-[70%] p-3 rounded-lg ${
                message.sender === currentUser
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              <p>{message.text}</p>
              <span className="text-xs mt-1 block opacity-75">{message.timestamp}</span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <form
        onSubmit={handleSendMessage}
        className="flex p-3 border-t border-gray-300 bg-gray-100"
      >
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 transition-colors"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;