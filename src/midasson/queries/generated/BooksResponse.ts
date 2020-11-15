/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BooksResponse
// ====================================================

export interface BooksResponse_books {
  __typename: "Book";
  title: string | null;
  author: string | null;
}

export interface BooksResponse {
  books: (BooksResponse_books | null)[] | null;
}
