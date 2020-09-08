import { client } from '../apolloClient/apolloClient';
import { booksQuery } from '../queries/books';
import { fillBooks } from '../../data/collections/books';

export const getBooks = (): Promise<any> =>
  client.query({ query: booksQuery }).then(({ data }: any) => fillBooks(data.books));
