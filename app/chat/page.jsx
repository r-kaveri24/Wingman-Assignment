'use client';

import { useState, useEffect } from 'react';

const users = [
  { id: 1, name: 'John Doe', profilePic: '/Avatar.png' },
  { id: 2, name: 'Jane Smith', profilePic: '/Avatar.png' },
  { id: 3, name: 'Bob Johnson', profilePic: '/Avatar.png' },
  { id: 4, name: 'Alice Brown', profilePic: '/Avatar.png' },
];

const initialChatHistory = {
  1: ['Hi John!', 'How can I help you?'],
  2: ['Hi Jane!', 'I have a question about your products.'],
  3: ['Hey Bob!', 'Can you help me with my order?'],
  4: ['Hello Alice!', 'What are your store timings?'],
};

export default function ChatApp() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [chatHistory, setChatHistory] = useState(initialChatHistory);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (selectedUser) {
      setChatHistory((prev) => ({
        ...prev,
        [selectedUser]: initialChatHistory[selectedUser],
      }));
    }
  }, [selectedUser]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setChatHistory((prev) => ({
        ...prev,
        [selectedUser]: [...prev[selectedUser], message],
      }));
      setMessage('');
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="md:w-1/2 p-6 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Chat Window</h1>
        <ul className="space-y-4">
          {users.map((user) => (
            <li
              key={user.id}
              className="flex items-center p-4 bg-white rounded-lg shadow-sm cursor-pointer"
              onClick={() => setSelectedUser(user.id)}
            >
              <img
                src={user.profilePic}
                alt={`${user.name}'s profile`}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div className="flex-grow">
                <h2 className="text-lg font-medium">{user.name}</h2>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="md:w-1/2 flex flex-col h-full">
        {selectedUser ? (
          <>
            <header className="bg-[#115E56] text-white p-4">
              <h1 className="text-xl font-semibold">
                Chat with {users.find((user) => user.id === selectedUser)?.name}
              </h1>
            </header>

            <div className="flex-grow p-4 overflow-y-auto bg-gray-100">
              {chatHistory[selectedUser]?.map((msg, index) => (
                <p
                  key={index}
                  className={`mb-2 p-2 rounded ${
                    index % 2 === 0 ? 'bg-[#15B79F] text-white' : 'bg-gray-300'
                  }`}
                >
                  {msg}
                </p>
              ))}
            </div>

            <footer className="p-4 border-t flex items-center bg-white">
              <input
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-grow border rounded p-2 mr-2"
              />
              <button
                onClick={handleSendMessage}
                className="bg-[#15B79F] text-white px-4 py-2 rounded"
              >
                Send
              </button>
            </footer>
          </>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">Select a user to start chatting</p>
          </div>
        )}
      </div>
    </div>
  );
}