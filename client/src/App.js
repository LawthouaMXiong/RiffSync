// import Home from './pages/Home';
// import Jammers from './pages/Jammers';
// import Profile from './pages/Profile';
// import Resources from './pages/Resources';
// import Search from './pages/Search';

// import Header from './components/Header'

// import './assets/css/styles.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// //chat////////////////

// import React, { useState } from 'react';
// import './App.css';
// import ChatApp from './ChatApp';

// ///////////////////////


// function App() {
// //chat//////////////////
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
// ///////////////////////////
//   return (       
//     <Router>
    
//       <Header/>
//         <Routes>
//           <Route path='/' element={<Home/>} />
//           <Route path='/jammers' element={<Jammers/>} />

//           <div className="App">
//       <header className="App-header">
//         <h1>Chat</h1>
//       </header>
//       {!loggedIn ? (
//         <div className="login-container">
//           <form onSubmit={handleUsernameSubmit}>
//             <label>
//               Enter your username:
//               <input
//                 type="text"
//                 value={username}
//                 onChange={handleUsernameChange}
//                 onKeyDown={handleKeyPress}
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


//           <Route path='/profile' element={<Profile/>} />
//           <Route path='/resources' element={<Resources/>} />
//           <Route path='/search' element={<Search/>} />
//         </Routes>
        
//     </Router>
//   );
// }

// export default App;

////////////////////////////////////////

import React, { useState } from 'react';
// import './App.css';
import ChatApp from './ChatApp';

import Home from './pages/Home';
import Jammers from './pages/Jammers';
import Profile from './pages/Profile';
import Resources from './pages/Resources';
import Search from './pages/Search';

import Header from './components/Header'

import './assets/css/styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/jammers' element={
          <div className="App">
            <header className="App-header">
              <h1>Chat</h1>
              {/* <button type="submit">Chat</button> */}
            </header>
            {!loggedIn ? (
              <div className="login-container">
                <form onSubmit={handleUsernameSubmit}>
                  <label>
                    {/* Enter your username: */}
                    <input
                      type="text"
                      value={username}
                      onChange={handleUsernameChange}
                      onKeyDown={handleKeyPress}
                      placeholder="Enter your handle..."
                    />
                  </label>
                  {/* <button type="submit">Chat</button> */}
                </form>
              </div>
            ) : (
              <ChatApp username={username} />
            )}
          </div>
        } />
        <Route path='/profile' element={<Profile />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
