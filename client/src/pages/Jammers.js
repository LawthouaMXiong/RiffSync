export default function Home () {
    return (
        <div className='container'>
            <div class="home">
                <h1 className="text-3xl font-bold underline">
                    Chat with Jammers
                </h1>
                <div className='content'>
                here is content
               </div>
            </div>
        </div>
    )
}

import React, { useState } from 'react';
import './Jammers.css'; // You can import the CSS for styling if needed
import ChatApp from '../ChatApp'; // Import the ChatApp component
// ... other imports and code
function Jammers() {
  const [username, setUsername] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleUsernameSubmit = (e) => {
    e.preventDefault();
    if (username.trim() !== '') {
      setLoggedIn(true);
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent form submission
      handleUsernameSubmit(e);
    }
  };

  return (
    <div className="jammers-container">
      <header className="App-header">
        <h1>Jammers</h1>
      </header>
      <div className="chat-container">
        {!loggedIn ? (
          <div className="login-container">
            <form onSubmit={handleUsernameSubmit}>
              <label>
                Enter your username:
                <input
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                  onKeyDown={handleKeyPress}
                  placeholder="Type your username..."
                />
              </label>
              <button type="submit">Login</button>
            </form>
          </div>
        ) : (
          <ChatApp username={username} />
        )}
      </div>
      {/* Other content of the Jammers component */}
    </div>
  );
}

export default Jammers;
