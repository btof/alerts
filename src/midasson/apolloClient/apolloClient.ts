import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:4000/graphql',
  // @ts-ignore
  fetch: fetch,
});

export const client = new ApolloClient({
  cache,
  link,
  defaultOptions: {
    query: {
      fetchPolicy: 'network-only',
    },
  },
});
