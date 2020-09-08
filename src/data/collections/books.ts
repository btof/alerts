import { Book } from '../interfaces/book';

export let books: Book[] = [];

export const fillBooks = (newBooks: Book[]) => {
  console.log('fill books');
  books = [...newBooks];
};
