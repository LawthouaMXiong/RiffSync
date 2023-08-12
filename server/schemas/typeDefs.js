const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    instruments: [Instrument]!
    bio: String
  }
  type Instrument {
    _id: ID
    instrumentName: String
    instrumentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    instruments(username: String): [Instrument]
    instrument(instrumentId: ID!): Instrument
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    // You may add mutations related to instruments as needed
  }
`;

module.exports = typeDefs;
