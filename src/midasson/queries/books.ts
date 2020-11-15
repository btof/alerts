import { gql } from 'apollo-server-express';

export const booksQuery = gql`
  query BooksResponse {
    books {
      title
      author
    }
  }
`;
