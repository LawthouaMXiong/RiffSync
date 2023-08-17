export default function Home () {
   

    return <div class="home">
                <h1 className="text-3xl font-bold underline">
                    RiffSync Home
                </h1>
 
           </div>
}


// import React, { useState, useEffect } from 'react';

// export default function Home () {
//     const [userName, setUserName] = useState('');

//       // Load user name from localStorage on component mount
//   useEffect(() => {
//     const storedUserName = localStorage.getItem('userName');
//     if (storedUserName) {
//       setUserName(storedUserName);
//     }
//   }, []);

//   // Update user name and store in localStorage
//   const handleNameChange = (event) => {
//     const newName = event.target.value;
//     setUserName(newName);
//     localStorage.setItem('userName', newName);
//   };

//     return <div class="home">
//                 <h1 className="text-3xl font-bold underline">
//                     RiffSync Home
//                 </h1>
//                 <input
//         type="text"
//         placeholder="Enter your name"
//         value={userName}
//         onChange={handleNameChange}
//       />
//       <p>Hello, {userName}!</p>
//            </div>
// }