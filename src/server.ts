import express from 'express';
import cors from 'cors';
import { ApolloServer, gql } from 'apollo-server-express';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};

const app = express();
app.use(cors());
// Should be removed when apollo-server supports offline playground
app.use(
  '/graphql-playground-react',
  express.static(require.resolve('graphql-playground-react/package.json').slice(0, -12)),
);

const server = new ApolloServer({
  resolvers,
  typeDefs,
  playground: {
    cdnUrl: '.',
    version: '',
  },
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  console.log('Noy');
});
