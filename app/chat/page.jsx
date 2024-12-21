'use client'
import React, { useState, useEffect, useRef } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState("");  
  const [time, setTime] = useState(""); 

  const chatEndRef = useRef(null);  

  const formatDate = () => {
    const now = new Date();
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return now.toLocaleString('en-US', options);
  };

  const formatTime = () => {
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    return now.toLocaleString('en-US', options);
  };


  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const generateRandomId = () => {
    return `user-${Math.random().toString(36).substr(2, 9)}`;
  };


  const getUserId = () => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      return storedUserId;
    }
    return null; 
  };


  const setUserId = (userId) => {
    localStorage.setItem('userId', userId);
  };


  const handleSendMessage = async () => {
    if (!inputMessage) return;

    const currentTime = formatTime();
    let userId = getUserId(); 

  
    if (!userId) {
      userId = generateRandomId();
      setUserId(userId);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Hi, I'm Wingman AI Assistant. How can I help you?", sender: "bot", time: currentTime },
      ]);
    }

    setLoading(true);
    setMessages([...messages, { text: inputMessage, sender: "user", time: currentTime }]);

    setInputMessage(""); 

    try {
      const response = await fetch("/api/gemini-chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: inputMessage,
          userId: userId,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: data.reply, sender: "bot", time: formatTime() },
        ]);
      } else {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Error: " + data.error, sender: "bot", time: formatTime() },
        ]);
      }
    } catch (error) {
      console.error("Error communicating with API:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Failed to generate response.", sender: "bot", time: formatTime() },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(); 
    }
  };

  useEffect(() => {
    setDate(formatDate());
  }, []);

  useEffect(() => {
    const userId = getUserId();
    if (!userId) {

      setMessages([{ text: "Hi, I'm Wingman AI Assistant. How can I help you?", sender: "bot", time: formatTime() }]);
    }
  }, []); // Only run once on component mount

  useEffect(() => {

    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex flex-col items-center h-screen min-h-[500px] w-full bg-gray-100 px-4 py-5 md:px-10">
      <div className="bg-white w-full rounded-lg shadow-lg flex flex-col overflow-hidden" style={{ height: "600px" }}>
        <div className="bg-[#115E56] text-white p-4 text-center font-semibold text-lg">Wingman Chatbot</div>
        <div className="text-center text-gray-500 text-sm mt-2">{date}</div> 
        <div className="text-center text-gray-500 text-sm mt-2">{time}</div>
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex flex-col ${message.sender === "user" ? "items-end" : "items-start"}`}>
              <div
                className={`max-w-xs px-4 py-2 rounded-lg text-sm ${message.sender === "user"
                  ? "bg-[#0E9382] text-white"
                  : "bg-gray-200 text-gray-900"
                  }`}
              >
                {message.text}
              </div>
              <div className="text-xs text-gray-500 mt-1">{message.time}</div>
            </div>
          ))}
          {loading && (
            <div className="text-start text-gray-500 text-sm mt-2">Loading...</div>
          )}

          <div ref={chatEndRef} />
        </div>
        <div className="border-t p-4 flex items-center">
          <input
            type="text"
            className="w-[80%] flex-1 border-2 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-2 focus:border-[#15B79F]"
            placeholder="Type your message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={handleKeyDown} 
          />
          <button
            className="text-[10px] ml-2 bg-[#15B79F] text-white px-4 py-2 rounded-lg md:text-sm hover:bg-[#0E9382]"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
