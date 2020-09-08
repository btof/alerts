import gql from 'graphql-tag';

export default gql`
  type Book {
    title: String
  }

  type Query {
    books: [Book]
  }
`;
