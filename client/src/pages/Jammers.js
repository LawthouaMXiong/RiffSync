
// import React, { useState } from 'react';
// import ChatApp from '../ChatApp'; // Import the ChatApp component

// function Jammers() {

//   const [username, setUsername] = useState('');
//   const [loggedIn, setLoggedIn] = useState(false);

//   const handleUsernameSubmit = (e) => {
//     e.preventDefault();
//     if (username.trim() !== '') {
//       setLoggedIn(true);
//     }
//   };

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       e.preventDefault(); // Prevent form submission
//       handleUsernameSubmit(e);
//     }
//   };

//   return (
//     <div className="jammers-container">
//       <header className="App-header">
//         <h1>RiffSync Jammers</h1>
//       </header>
//       <h3>Chat</h3>
//       <div className="chat-container">
//         {!loggedIn ? (
//           <div className="login-container">
//             <form onSubmit={handleUsernameSubmit}>
//               <label>
           
//                 <input
//                   type="text"
//                   value={username}
//                   onChange={handleUsernameChange}
//                   onKeyDown={handleKeyPress}
//                   placeholder="Enter your handle..."
//                 />
//               </label>
     
//             </form>
//           </div>
//         ) : (
//           <ChatApp username={username} />
//         )}
//       </div>
//       {/* Other content of the Jammers component */}

//     </div>
//   );
// }

// export default Jammers;


import React, { useState, useEffect } from 'react';
import ChatApp from '../ChatApp';

function Jammers() {
  const [username, setUsername] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  // Load username from localStorage on component mount
  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
      setLoggedIn(true); // Set loggedIn to true if username is stored
    }
  }, []);

  const handleUsernameSubmit = (e) => {
    e.preventDefault();
    if (username.trim() !== '') {
      setLoggedIn(true);
      localStorage.setItem('username', username); // Store username in localStorage
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
        <h1>RiffSync Jammers</h1>
      </header>
      <h3>Chat</h3>
      <div className="chat-container">
        {!loggedIn ? (
          <div className="login-container">
            <form onSubmit={handleUsernameSubmit}>
              <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                onKeyDown={handleKeyPress}
                placeholder="Enter your handle..."
              />
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
