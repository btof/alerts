import { gql } from 'apollo-server-express';

export const booksQuery = gql`
  query {
    books {
      title
      author
    }
  }
`;
