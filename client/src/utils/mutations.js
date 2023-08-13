import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_INSTRUMENT = gql`
  mutation addInstrument($instrumentName: String!) {
    addInstrument(instrumentName: $instrumentName) {
      _id
      instrumentName
      instrumentAuthor
      createdAt
    }
  }
`;

export const UPDATE_INSTRUMENT = gql`
  mutation updateInstrument($instrumentId: ID!, $instrumentName: String!) {
    updateInstrument(instrumentId: $instrumentId, instrumentName: $instrumentName) {
      _id
      instrumentName
      instrumentAuthor
      createdAt
    }
  }
`;