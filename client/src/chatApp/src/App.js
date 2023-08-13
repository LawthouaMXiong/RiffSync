// import React, { useState } from 'react';
// import './App.css';
// import ChatApp from './ChatApp';

// function App() {
//   const [username, setUsername] = useState('');

//   const handleUsernameSubmit = (e) => {
//     e.preventDefault();
//     if (username.trim() !== '') {
//       setUsername(username.trim());
//     }
//   };

//   // const handleUsernameChange = (e) => {
//   //   setUsername(e.target.value);
//   // };

//   const handleUsernameChange = (e) => {
//     if (e.key === 'Enter') {
//       setUsername(e.target.value);
//     }
//   };
  

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Two User Chat</h1>
//       </header>
//       {!username ? (
//         <div className="login-container">
//           {/* <form> */}
//           <form onSubmit={handleUsernameSubmit}>
//             <label>
//               Enter your username:
//               <input
//                 type="text"
//                 value={username}
//                 onChange={handleUsernameChange}
//                 placeholder="Type your username..."
//               />
//             </label>
//             <button type="submit">Login</button>
//           </form>
//         </div>
//       ) : (
//         <ChatApp username={username} />
//       )}
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import './App.css';
import ChatApp from './ChatApp';

function App() {
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
    <div className="App">
      <header className="App-header">
        <h1>Chat</h1>
      </header>
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
  );
}

export default App;

