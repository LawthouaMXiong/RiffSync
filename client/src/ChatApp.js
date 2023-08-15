import React, { useState, useEffect } from 'react';
import socket from './socket.js';

function ChatApp({ username }) {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  useEffect(() => {
    const handleMessage = (message) => {
      setMessages((prevMessages) => [...prevMessages, message.text]);
    };

    socket.on('newMessage', handleMessage);

    return () => {
      socket.off('newMessage', handleMessage);
    };
  }, []);

  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      const formattedMessage = { text: `${username}: ${inputMessage}` };
      socket.emit('sendMessage', formattedMessage);
      setInputMessage('');
    }
  };

  return (
    <div className="chat-container">
      <h2>Welcome, {username}!</h2>
      <div className="input-container">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSendMessage();
            }
          }}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
      <div className="message-list">
        {messages.map((message, index) => (
          <div key={index}>
            <span className={message.startsWith(username) ? 'self' : 'other'}>
              {message}
            </span>
          </div>
        )).reverse()}
      </div>
      {/* <div className="input-container">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSendMessage();
            }
          }}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div> */}
    </div>
  );
}

export default ChatApp;
