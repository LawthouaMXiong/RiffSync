const { gql } = require('@apollo/client');

export const QUERY_INSTRUMENTS = gql`
  query getInstruments {
    instruments {
      _id
      instrumentName
      // other fields related to instruments
    }
  }
`;

export const QUERY_SINGLE_INSTRUMENT = gql`
  query getSingleInstrument($instrumentId: ID!) {
    instrument(instrumentId: $instrumentId) {
      _id
      instrumentName
      // other fields related to a single instrument
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      instruments {
        _id
        instrumentName
        // other fields related to instruments
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      instruments {
        _id
        instrumentName
        // other fields related to instruments
      }
    }
  }
`;
