import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

{/* <script>
var socket = io();
var el;

socket.on('time', function(timeString) {
  el = document.getElementById('server-time')
  el.innerHTML = 'Server time: ' + timeString;
});
</script> */}