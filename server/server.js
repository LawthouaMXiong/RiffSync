const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');
const app = express();

//chat///////////////////////////////////
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const chatServer = http.createServer(app);
const io = socketIo(chatServer,{cors:{
  origin: 'http://localhost:4000', 
  methods: 'GET,POST',
  credentials: true,
}});

const CHATPORT =process.env.PORT || 3001;

// app.get('/', (req, res) => {
//   res.send('Server is running.');
// });

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('sendMessage', (message) => {
    console.log('Message received:', message);
    io.emit('newMessage', message); 
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});


///////////////////////////////////////////////////////

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

// const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once('open', () => {
    chatServer.listen(CHATPORT, () => {
      console.log(`API server running on port ${CHATPORT}!`);
      console.log(`Use GraphQL at http://localhost:${CHATPORT}${server.graphqlPath}`);
    })
  })
};

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);
